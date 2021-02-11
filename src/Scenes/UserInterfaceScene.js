import 'phaser';
import Config from '../Config/config';
import Resources from '../Config/resources';
import UI from '../Ui/UiElements.js';

export default class UserInterfaceScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.UserInterface);
    }

    create() {
        this.top = Config.scale.height - 100;
        this.bottom = Config.scale.height + 100;
        this.initGraphics();

        this.scene.bringToTop();

        // this.input.on(Config.pointer.down, function (pointer) {
        //     this.completeDialog();
        // }, this);
    }

    update(time, delta) {
        if (this.dialogState) this.dialogState(delta);
        if (this.hideDialogState) this.hideDialogState(delta);
    }

    initGraphics() {
        UI.drawRectangle(this, Config.ui.square);

        this.speechBalloon = this.add.image(200, Config.scale.height - 180, Resources.image.speechBalloon.key)
            .setScale(0)
            .setOrigin(0)
            .on(Config.pointer.down, function () {
                this.closeDialogPanel();
            }.bind(this));

        this.avatar = this.add.image(120, this.bottom, Resources.image.azriAvatar.key)
            .setDisplaySize(Config.ui.characterSelect.width, Config.ui.characterSelect.height)
            .on(Config.pointer.down, function () {
                this.showDialog();
            }.bind(this));

        this.dialogText = this.add.text(this.speechBalloon.x + 60, this.speechBalloon.y + (this.speechBalloon.height * .5), "", Config.fonts.speechBalloon)
            .setOrigin(0, .5);
    }

    initDialog() {
        this.dialogBoxIsShown = false;
        this.dialogState = null;
        this.hideDialogState = null;
        this.dialogDelta = 0;
        this.dialogText.text = "";
        this.characterIndex = 0;
        this.characterDelta = 0;
    }

    showDialog(dialog) {
        this.showAvatar();
        this.avatar.disableInteractive();
        this.initDialog();

        if (dialog) {
            this.characterLength = dialog.length;
            this.characterDialog = dialog;

            if (dialog.indexOf('[studies]') > -1) {
                const studies = Config.characters[Config.game.character].studies;
                let studyString = "";

                if (studies.length > 1) {
                    for (let index = 0; index < studies.length; index++) {
                        studyString += studies[index];

                        if (index < studies.length - 2) {
                            studyString += ", ";
                        } else if (index < studies.length - 1) {
                            studyString += " and ";
                        }
                    }
                } else {
                    studyString = studies.toString();
                }

                dialog = dialog.replace('[studies]', studyString);
            }
        }

        if (this.dialogBoxIsShown) this.startDialog();
        else {
            this.tweens.add({
                targets: this.speechBalloon,
                scale: 1,
                ease: Phaser.Math.Easing.Bounce.Out,
                duration: 500,
                onComplete: function () {
                    this.startDialog();
                }.bind(this)
            });
        }
    }

    startDialog() {
        this.dialogBoxIsShown = true;
        this.dialogText.text = '';
        this.characterIndex = 0;
        this.dialogState = this.playDialog;
        this.speechBalloon.setInteractive({ cursor: 'pointer' })
        this.avatar.disableInteractive();
    }

    playDialog(delta) {
        this.characterDelta += delta;
        if (this.characterDelta > Config.characterDialog.CHARACTER_SPEED) {
            this.characterDelta -= Config.characterDialog.CHARACTER_SPEED;
            this.nextCharacter();
        }
    }

    completeDialog() {
        this.initDialog();
        this.dialogText.text = this.characterDialog;
    }

    closeDialogPanel() {
        this.dialogText.text = "";
        this.resetDialog();

        this.tweens.add({
            targets: this.speechBalloon,
            scale: 0,
            ease: Phaser.Math.Easing.Bounce.Out,
            duration: 500,
        });

        this.avatar.setInteractive({ cursor: 'pointer' })
        this.speechBalloon.disableInteractive();
    }

    hideDialog(delta) {
        if (delta) {
            this.dialogDelta += delta;
            if (this.dialogDelta > Config.characterDialog.DIALOG_HIDE_DURATION * 1000) {
                this.hideDialogState = null;
                this.closeDialogPanel();
            }
        } else {
            this.closeDialogPanel();
        }
    }

    resetDialog() {
        this.dialogDelta = 0;
        this.dialogState = null;
    }

    nextCharacter() {
        if (this.characterIndex >= this.characterLength) {
            this.resetDialog();
            this.hideDialogState = this.hideDialog;
            return;
        }
        
        this.dialogText.text += this.characterDialog.charAt(this.characterIndex);
        this.characterIndex++;
    }

    showAvatar() {
        if (this.avatar.y < Config.scale.height) return;

        this.tweens.add({
            targets: this.avatar,
            y: this.top,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 500,
        });
    }

    hideAvatar() {
        this.tweens.add({
            targets: this.avatar,
            y: this.bottom,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 500,
        });
    }

    changeCharacter(character) {
        this.avatar.setTexture(Resources.image[`${character}Avatar`].key)

    }

    stopMusic() {
        // this.music.stop();
    }

    startMusic() {
        // this.music.play();
    }
};
