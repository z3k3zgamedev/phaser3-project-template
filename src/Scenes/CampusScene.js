import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class CampusScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.Campus);
    }

    init() { }

    preload() { }

    create() {
        this.initGraphics();
        this.initButtons();
        this.initAvatar();
    }

    update() {
        let pointer = this.input.activePointer;
    }
    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.campus.key);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawRoundedRectangle(this, Config.ui.artistButton);
        UI.drawTriangle(this, Config.ui.triangle);
        UI.drawCircle(this, Config.ui.circle);
    }

    initButtons() {
        this.input.on('pointerdown', function (pointer) {
            console.log(pointer.worldX, pointer.worldY);
        }, this);
    }

    initAvatar() {
        this.randomStartPoint = Phaser.Utils.Array.GetRandom(Config.campus.startPoints);
        const destinationList = this.randomStartPoint.destinations;
        this.destinationIndex = Phaser.Math.RND.integerInRange(0, destinationList.length - 1);

        const direction = destinationList[this.destinationIndex].directions;

        this.scene.get(Config.scenes.UserInterface).showDialog(direction);

        for (let index = 0; index < destinationList.length; index++) {
            const destination = this.randomStartPoint.destinations[index];
            const direction = destination.facing;
            const destinationName = destination.name;
            const finalCoordinates = destination.path[destination.path.length - 1];

            console.log(destinationName);
            const button = this.add.image(finalCoordinates.x, finalCoordinates.y, Config.ui.circle.name)
                .setInteractive({ cursor: 'pointer' })
                .on(Config.pointer.down, function () {
                    const destinationIndex = index;
                    this.selectDestination(destinationIndex);
                }.bind(this));
        }

        // const startDirection = this.add.image(this.randomStartPoint.x, this.randomStartPoint.y, Config.ui.triangle.name)
        //     .setScale(1.5)
        //     .setAngle(Config.campus.directions[this.randomStartPoint.destinations[this.destinationIndex].facing]);

        this.avatar = this.add.image(this.randomStartPoint.x, this.randomStartPoint.y, Resources.image[`${Config.game.character}Icon`].key);
    }

    selectDestination(index) {
        if (this.destinationIndex == index) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.campusCorrect);
            
            const path = this.randomStartPoint.destinations[this.destinationIndex].path;

            let timeline = [];

            for (let index = 0; index < path.length; index++) {
                timeline.push(
                    {
                        targets: this.avatar,
                        x: path[index].x,
                        y: path[index].y,
                        ease: Phaser.Math.Easing.Linear,
                        duration: 1000
                    }
                )
            }
            this.tweens.timeline({
                tweens: timeline,
                onComplete: function () {
                    this.time.delayedCall(3000, this.gotoEnding, [], this);
                }.bind(this)
            });
        }
        else this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.campusWrong);
    }

    gotoEnding() {
        this.scene.start(Config.scenes.Congratulations);
    }
}
