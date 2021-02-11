import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class OfficeScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.Office);
    }

    init() { }

    preload() { }

    create() {
        this.initGraphics();
        this.initButtons();
    }

    update(time, delta) {
        if (!Config.game.phoneComplete && this.exclamation) {
            this.timer += delta;
            if (this.timer > 10000) {
                this.timer -= 15000;
                UI.flashObjectAfterTime(this.tweens, this.exclamation, 5, true);
            }
        }
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.office.key);
        UI.drawRectangle(this, Config.ui.square);
    }

    initButtons() {
        const officeDrawer = this.add.image(1717, 842, Resources.image.officeDrawer.key)
            .setVisible(false);

        this.timer = 0;
        this.exclamation = this.add.image(0, 0, Resources.image.iconExclamation.key)
            .setAlpha(0);

        const computerButton = this.add.image(1125, 365, Resources.image.btnInvisible.key)
            .setDisplaySize(360, 220)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.gotoComputer();
            }.bind(this));

        this.exclamation.setPosition(computerButton.x, computerButton.y);

        if (!Config.game.computerComplete) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.office);
            return;
        }

        const keypadButton = this.add.image(1535, 705, Resources.image.btnInvisible.key)
            .setAlpha(.6)
            .setDisplaySize(60, 70)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.gotoKeypad();
            }.bind(this));

        this.exclamation.setPosition(keypadButton.x, keypadButton.y);

        if (!Config.game.keypadComplete) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.universityComplete);
            return;
        }

        const filesButton = this.add.image(1720, 824, Resources.image.btnInvisible.key)
            .setAlpha(.6)
            .setDisplaySize(230, 220)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.gotoFiles();
            }.bind(this));

        officeDrawer.setVisible(true);

        this.exclamation.setPosition(filesButton.x, filesButton.y);

        if (!Config.game.filesComplete) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.files);
            return;
        }

        const rolodexButton = this.add.image(1340, 470, Resources.image.btnInvisible.key)
            .setAlpha(.6)
            .setDisplaySize(80, 100)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.gotoRolodex();
            }.bind(this));

        this.exclamation.setPosition(rolodexButton.x, rolodexButton.y);

        if (!Config.game.rolodexComplete) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.filesComplete);
            return;
        }

        const phoneButton = this.add.image(260, 345, Resources.image.btnInvisible.key)
            .setAlpha(.6)
            .setDisplaySize(120, 160)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.gotoPhone();
            }.bind(this));

        this.exclamation.setPosition(phoneButton.x, phoneButton.y);

        if (!Config.game.phoneComplete) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.rolodexComplete);
            return;
        } else {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.phoneComplete);
            this.exclamation.destroy();
        }
    }

    gotoPhone() {
        if (Config.game.phoneComplete) {
            return;
        }
        this.scene.start(Config.scenes.OfficePhone);
    }

    gotoComputer() {
        if (Config.game.computerComplete) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.universityComplete);
            return;
        }
        this.scene.start(Config.scenes.OfficeComputer);
    }

    gotoRolodex() {
        if (Config.game.rolodexComplete) {
            return;
        }
        this.scene.start(Config.scenes.OfficeRolodex);
    }

    gotoKeypad() {
        if (Config.game.keypadComplete) {
            return;
        }
        this.scene.start(Config.scenes.OfficeKeypad);
    }

    gotoFiles() {
        if (Config.game.filesComplete) {
            return;
        }
        this.scene.start(Config.scenes.OfficeFiles);
    }
};
