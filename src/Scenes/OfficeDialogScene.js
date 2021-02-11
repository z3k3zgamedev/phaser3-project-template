import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class OfficeDialogScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.OfficeDialog);
    }

    init() { }

    preload() { }

    create() {
        this.initDialog();
        this.initGraphics();
        this.initButtons();

        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.dialog);
    }

    initDialog() {
        this.dialog = Config.dialogText.concat();
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.officePhone.key);
        UI.drawRoundedRectangle(this, Config.ui.dialogBox);
        UI.drawRoundedRectangle(this, Config.ui.dialogBoxDropZone);
        UI.drawRoundedRectangle(this, Config.ui.dialogBoxAnswer);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawTriangle(this, Config.ui.triangle);

        this.add.image(Config.scale.centerX, Config.scale.centerY, Config.ui.square.name)
            .setTintFill(0x000000)
            .setAlpha(.8)
            .setDisplaySize(Config.scale.width, Config.scale.height);

        this.numberDisplay = this.add.text(1000, 185, '', Config.fonts.numberDisplay)
    }

    initButtons() {
        this.dialogAnswers = [];
        this.dropZone = null;
        this.dropZones = [];

        // const backButton = this.add.image(1850, 100, Config.ui.triangle.name)
        //     .setFlipX(true)
        //     .setInteractive({ cursor: 'pointer' })
        //     .on(Config.pointer.down, function () {
        //         this.gotoOffice();
        //     }.bind(this));

        this.dialogDragging = null;

        const startY = 100;
        const gapY = 70;
        for (let index = 0; index < this.dialog.length; index++) {
            const dialog = this.dialog[index].text;
            if (dialog.indexOf('[NAME]') > -1) {
                dialog = dialog.substring(0, dialog.indexOf('[NAME]'));
                dialog += Config.characters[Config.game.character].firstName;
            }
            const position = this.dialog[index].position;

            const randomIndex = Phaser.Math.RND.integerInRange(0, this.dialog.length - 1);
            const posLeftX = Config.scale.centerX * .55;
            const posRightX = Config.scale.centerX * 1.5;
            const posY = startY + (gapY * index);

            const randomX = position == -1 ? posRightX + (Math.random() * 100) : posLeftX;
            const randomY = position == -1 ? startY + (gapY * randomIndex) + (Math.random() * 50) : posY;
            const randomAngle = position == -1 ? (Math.random() - .5) * Math.PI * 2 : 0;

            const background = this.add.image(randomX, randomY, position == -1 ? Config.ui.dialogBoxAnswer.name : Config.ui.dialogBox.name)
                .setAngle(randomAngle)
                .setInteractive(
                    {
                        cursor: 'pointer',
                        pixelPerfect: true,
                        draggable: true
                    })
                .on(Config.pointer.drag, function (pointer, dragX, dragY) {
                    background.setDepth(1000);
                    background.setAngle(0);
                    background.x = dragX;
                    background.y = dragY;
                    background.label.setDepth(1001);
                    background.label.setAngle(0);
                    background.label.x = dragX;
                    background.label.y = dragY;
                    background.setScale(1.2);
                    background.label.setScale(1.2);

                    this.dialogDragging = background;

                    this.resetDropZones(background);
                }.bind(this))
                .on(Config.pointer.dragEnd, function (pointer, dragX, dragY) {
                    if (!this.dialogDragging) return;
                    
                    const left = this.dialogDragging.x - (this.dialogDragging.width * .5);
                    if (this.inDropZone(left, this.dialogDragging.y)) {
                        this.dropZone.setTintFill(0x6AAF44);
                        this.snapPiece(this.dialogDragging, this.dropZone);
                    } else {
                        this.resetPiece(this.dialogDragging);
                    }

                    this.dialogDragging = null;
                }.bind(this))

            background.orgX = posRightX;
            background.orgY = startY + (gapY * randomIndex);
            background.index = -1;
            background.correctIndex = index;

            if (position == -1) this.dialogAnswers.push(background);

            const label = this.add.text(randomX, randomY, dialog, Config.fonts.dialog)
                .setAngle(randomAngle)
                .setOrigin(.5);

            if (position == -1) {
                const dropZone = this.add.image(posLeftX, posY, Config.ui.dialogBoxDropZone.name);
                dropZone.dialog = null;
                this.dropZones.push(dropZone);
            } else {
                this.dropZones.push(null);
            }

            background.label = label;
        }
    }

    update() {
        if (this.dropZone) this.dropZone.clearTint();

        if (this.dialogDragging) {
            const pointer = this.input.activePointer;
            const left = this.dialogDragging.x - (this.dialogDragging.width * .5);
            const yPosition = this.dialogDragging.y;

            if (this.inDropZone(left, yPosition)) this.dropZone.setTintFill(0x6AAF44);
        }
    }

    inDropZone(x, y) {
        const top = 65;
        const gapY = 70;

        if (x < 900 && y > top) {
            const index = Math.floor((y - top) / gapY);
            this.dropZone = this.dropZones[index];

            if (this.dropZone) return this.dropZone;
        }
    }

    resetDropZones() {
        for (let index = 0; index < this.dropZones.length; index++) {
            const dropZone = this.dropZones[index];

            if (dropZone) {
                dropZone.clearTint();
            }
        }
    }

    snapPiece(piece, target) {
        if (target.dialog) {
            this.resetPiece(piece);
            return;
        }

        const top = 65;
        const gapY = 70;
        const index = Math.floor((target.y - top) / gapY);
        piece.index = index;

        piece.dropZone = target;
        target.dialog = piece;

        this.tweens.add({
            targets: [piece, piece.label],
            x: target.x,
            y: target.y,
            scaleX: 1,
            scaleY: 1,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 500,
        });

        piece.setDepth(target.y);
        piece.label.setDepth(target.y + 1);

        this.dialogComplete();
    }

    resetDropZones(piece) {
        if (piece.dropZone) {
            piece.dropZone.dialog = null;
            piece.dropZone = null;
        }
    }

    resetPiece(piece) {
        this.resetDropZones(piece);
        piece.index = -1;

        const randomX = piece.orgX + (Math.random() * 150);
        const randomY = piece.orgY + (Math.random() * 50);
        const randomAngle = (Math.random() - .5) * Math.PI * 2;

        this.tweens.add({
            targets: [piece, piece.label],
            x: randomX,
            y: randomY,
            scaleX: 1,
            scaleY: 1,
            angle: randomAngle,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 500,
        });
    }

    dialogComplete() {
        let answers = 0;
        for (let index = 0; index < this.dialogAnswers.length; index++) {
            const dialog = this.dialogAnswers[index];
            if (dialog.index >= 0) answers++;
        }

        if (answers == this.dialogAnswers.length) this.checkAnswers();
    }

    checkAnswers() {
        let answers = 0;
        for (let index = 0; index < this.dialogAnswers.length; index++) {
            const dialog = this.dialogAnswers[index];

            if (dialog.index == dialog.correctIndex) {
                answers++;
            } else {
                this.resetPiece(dialog);
            }
        }

        if (answers == this.dialogAnswers.length) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.dialogCorrect);

            this.timedEvent = this.time.delayedCall(3000, this.gotoOffice, [], this);
        } else {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.dialogWrong);
        }
    }

    gotoOffice() {
        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.dialog);

        this.scene.start(Config.scenes.Office);
    }

    gotoDialog() {
        this.scene.start(Config.scenes.OfficeDialog);
    }
};
