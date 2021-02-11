import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class CongratulationsScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.Congratulations);
    }

    init() { }

    preload() { }

    create() {
        this.congratulationsLabel = this.add.text(Config.scale.centerX, Config.scale.centerY, Config.characterDialog.ending, Config.fonts.speechBalloon)
            .setTintFill(0xFFFFFF)
            .setOrigin(.5);
    }
};
