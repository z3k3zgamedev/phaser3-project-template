import 'phaser';
import Config from '../Config/config';
import Resources from '../Config/resources';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.Boot);
    }

    preload() {
        // this.load.image(Resources.image.logo.key, Resources.image.logo.args);
    }

    create() {
        // this.scene.start(Config.scenes.Title);
        this.scene.start(Config.scenes.Preloader);
    }
};
