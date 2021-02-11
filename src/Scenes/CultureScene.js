import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class CultureScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.Culture);
    }

    init() { }

    preload() { }

    create() {
        this.initGraphics();
        this.initButtons();
        this.initDropZones();
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.artsBackground.key);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawRoundedRectangle(this, Config.ui.artistButton);

        const windowBackground = this.add.image(0, 0, Config.ui.square.name)
            .setOrigin(0)
            .setAlpha(.8)
            .setTintFill(0xFFFFFF)
            .setDisplaySize(Config.scale.width, Config.scale.height);
    }

    initButtons() {
        this.correctAnswers = 0;
        this.answerZone = null;
        this.dragContainers = [];
        this.dropZones = [];
        this.artists = Phaser.Utils.Array.Shuffle(Config.arts.concat());
        this.artists.length = 5;

        const gapX = 350;

        const photoHeader = this.add.text(300, 40, Config.labels.photo, Config.fonts.addressHeader)
            .setOrigin(.5);
        const fullnameHeader = this.add.text(photoHeader.x + gapX, photoHeader.y, Config.labels.fullname, Config.fonts.addressHeader)
            .setOrigin(.5);
        const descriptionHeader = this.add.text(fullnameHeader.x + gapX, photoHeader.y, Config.labels.description, Config.fonts.addressHeader)
            .setOrigin(.5);
        const worksHeader = this.add.text(descriptionHeader.x + gapX, photoHeader.y, Config.labels.works, Config.fonts.addressHeader)
            .setOrigin(.5);

        const startY = 150;
        const gapY = 190;

        for (let index = 0; index < this.artists.length; index++) {
            const artist = this.artists[index];
            const id = artist.id;
            const name = artist.name;
            const description = artist.description;
            const photoKey = Resources.image[`arts${id}`].key;
            const artworkKey = Resources.image[`artworks${id}`].key;

            const rightX = 1700;
            const posY = startY + (gapY * index);

            const photo = this.add.image(photoHeader.x, posY, photoKey);
            const artistDetails = [];

            const nameLabel = this.add.text(fullnameHeader.x, posY, name, Config.fonts.artistDescription)
                .setOrigin(.5);

            artistDetails.push(nameLabel);

            const descriptionLabel = this.add.text(descriptionHeader.x, posY, description, Config.fonts.artistDescription)
                .setOrigin(.5);

            artistDetails.push(descriptionLabel);

            if (artist.workType != null) {
                const artwork = this.add.image(worksHeader.x, posY, artworkKey)
                artistDetails.push(artwork);
            };

            const randomDetails = Phaser.Utils.Array.Shuffle(artistDetails);
            const filledDetails = Phaser.Math.RND.integerInRange(1, randomDetails.length - 1);

            for (let detailsIndex = 0; detailsIndex < filledDetails; detailsIndex++) {
                const detail = randomDetails[detailsIndex];
                const dropBackground = this.add.image(detail.x, detail.y, Config.ui.artistButton.name)
                    .setInteractive()
                    .on(Config.pointer.dragEnter, function (pointer, dragX, dragY) {
                        console.log("HIT");
                        dropBackground.setAlpha(.5);
                    }.bind(this))
                    .on(Config.pointer.dragLeave, function (pointer, dragX, dragY) {
                        dropBackground.setAlpha(1);
                    }.bind(this))
                    .setTintFill(0x6AAF44);
                dropBackground.input.dropZone = true;
                dropBackground.artistId = id;
                dropBackground.detailsId = detailsIndex;

                const dragBackground = this.add.image(0, 0, Config.ui.artistButton.name)
                    .setOrigin(.5);
                detail.setPosition(0, 0);

                const posX = rightX;
                const posY = startY + (Phaser.Math.RND.integerInRange(2, 38) * 20);
                const randomAngle = (Math.random() - .5) * 50;

                const dragContainer = this.add.container(posX, posY, [dragBackground, detail])
                    .setAngle(randomAngle)
                    .setAlpha(.5)
                    .setSize(dragBackground.width, dragBackground.height)
                    .setInteractive({ draggable: true })
                    .on(Config.pointer.over, function () {
                        dragContainer.setAlpha(1);
                        this.resetDepth(dragContainer);
                    }.bind(this))
                    .on(Config.pointer.out, function () {
                        if (!dragContainer.matched) dragContainer.setAlpha(.5);
                    }.bind(this))
                    .on(Config.pointer.dragEnd, function () {
                        if (this.checkDropzones(dragContainer, this.answerZone))
                            this.setDropZone(dragContainer, this.answerZone)
                        else
                            this.resetPosition(dragContainer);
                    }.bind(this))
                    .on(Config.pointer.drag, function (pointer, dragX, dragY) {
                        dragContainer.setAngle(0);
                        dragContainer.setPosition(dragX, dragY);
                    }.bind(this))

                dragContainer.artistId = id;
                dragContainer.detailsId = detailsIndex;
                dragContainer.matched = false;

                this.dropZones.push(dragBackground);
                this.dragContainers.push(dragContainer);
            }
        }
    }

    initDropZones() {
        this.input.on('dragenter', function (pointer, gameObject, dropZone) {
            this.answerZone = dropZone;
            dropZone.setAlpha(.5);
        }.bind(this));

        this.input.on('dragleave', function (pointer, gameObject, dropZone) {
            dropZone.setAlpha(1);
        }.bind(this));
    }

    checkDropzones(draggedObject, targetObject) {
        let matchFound = draggedObject.artistId == targetObject.artistId && draggedObject.detailsId == targetObject.detailsId;

        if (matchFound)
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.artsCorrect);
        else
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.artsWrong);

        return matchFound;
    }

    resetDropzones() {
        for (let index = 0; index < this.dropZones.length; index++) {
            this.dropZones[index].setAlpha(1);
        }
    }

    setDropZone(draggedObject, targetObject) {
        draggedObject.matched = true;
        draggedObject.disableInteractive();
        draggedObject.setAlpha(1);
        targetObject.disableInteractive();
        targetObject.setVisible(false);

        this.tweens.add({
            targets: draggedObject,
            x: targetObject.x,
            y: targetObject.y,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 500,
        });

        this.correctAnswers++;

        if (this.correctAnswers == this.dropZones.length) this.time.delayedCall(3000, this.complete, [], this);
    }

    resetPosition(container) {
        const posX = 1700;
        const posY = 150 + (Phaser.Math.RND.integerInRange(2, 38) * 20);
        const randomAngle = (Math.random() - .5) * 50;

        this.tweens.add({
            targets: container,
            x: posX,
            y: posY,
            angle: randomAngle,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 500,
        });
    }

    resetDepth(container) {
        for (let index = 0; index < this.dragContainers.length; index++) {
            const dragContainer = this.dragContainers[index];
            if (dragContainer == container) {
                dragContainer.setDepth(100);
            } else {
                dragContainer.setDepth();
            }
        }
    }

    isEmpty() {
        return Math.random() > .4 ? true : false;
    }

    complete() {
        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.artsComplete);
        this.time.delayedCall(3000, this.gotoCampus, [], this);
    }

    gotoCampus() {
        this.scene.start(Config.scenes.Campus);
    }
};
