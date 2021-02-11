import 'phaser';
import Config from '../Config/config';
import Resources from '../Config/resources';
import UI from '../Ui/UiElements.js';

export default class TitleScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.Title);
    }

    preload() { }

    init() {
        document.getElementById("loader").style.display = "none";
    }

    create() {
        this.initGraphics();
    }

    initGraphics() {
        UI.drawRoundedRectangle(this, Config.ui.button);

        const gap = 20;

        const title = this.add.text(Config.scale.centerX, 150, Config.labels.title, Config.fonts.h1)
            .setOrigin(.5);

        const btnStart = this.add.image(Config.scale.centerX, title.y + title.height, Config.ui.button.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.gotoCharacterSelect();
            }.bind(this));

        const labelStart = this.add.text(btnStart.x, btnStart.y, Config.labels.start, Config.fonts.button)
            .setOrigin(.5);

        const btnLoad = this.add.image(Config.scale.centerX, btnStart.y + btnStart.height + gap, Config.ui.button.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                //UI.tap();
                // UI.bounceButton(this.btnLanguageGeo, this.tweens)
                // this.switchLanguage(Config.game.LANGUAGE_GEO);
            }.bind(this));

        const labelLoad = this.add.text(Config.scale.centerX, btnLoad.y, Config.labels.load, Config.fonts.button)
            .setOrigin(.5);

        const btnSettings = this.add.image(Config.scale.centerX, btnLoad.y + btnLoad.height + gap, Config.ui.button.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                //UI.tap();
                // UI.bounceButton(this.btnLanguageGeo, this.tweens)
                // this.switchLanguage(Config.game.LANGUAGE_GEO);
            }.bind(this));

        const labelSettings = this.add.text(Config.scale.centerX, btnSettings.y, Config.labels.settings, Config.fonts.button)
            .setOrigin(.5);
    }

    gotoCharacterSelect() {
        this.scene.start(Config.scenes.CharacterSelect);
    }
};
