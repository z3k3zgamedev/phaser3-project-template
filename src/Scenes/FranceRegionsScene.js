import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class FranceRegionsScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.FranceRegions);
    }

    init() { }

    preload() { }

    create() {
        this.initGraphics();
        this.initButtons();
    }

    initGraphics() {
        UI.drawRectangle(this, Config.ui.square);

        const regionBackground = this.add.image(0, 0, Config.ui.square.name)
            .setOrigin(0)
            .setTintFill(0xFFFFFF)
            .setDisplaySize(Config.scale.width, Config.scale.height);
    }

    initButtons() {
        this.buttons = [];
        const regionContainer = this.add.container();


        for (let index = 0; index < Config.regions.length; index++) {
            const region = Config.regions[index];
            const button = this.add.image(region.position.x, region.position.y, Resources.image[`region${region.id}`].key)
                .setAlpha(.3)
                .setInteractive({ cursor: 'pointer', pixelPerfect: true })
                .on(Config.pointer.over, function () {
                    this.regionOver(button);
                }.bind(this))
                .on(Config.pointer.out, function () {
                    this.regionOut(button);
                }.bind(this))
                .on(Config.pointer.down, function () {
                    this.selectRegion(region);
                }.bind(this))

            regionContainer.add(button);

            const regionLabel = this.add.text(region.position.x, region.position.y, region.name, Config.fonts.regionName)
                .setOrigin(.5);
        }

        // const regions = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.regions.key);
    }

    regionOver(target) {
        target.setDepth(1);
        this.tweens.add({
            targets: target,
            scale: 1.02,
            alpha: 1,
            duration: 200,
        });
    }

    regionOut(target) {
        this.tweens.add({
            targets: target,
            scale: 1,
            alpha: .3,
            duration: 200,
        });
    }

    selectRegion(region) {
        const id = Config.postcards[Config.game.postCardId].region;

        if (id == region.id) {
            this.showCorrectRegion(region);
        } else {
            this.showWrongRegion(region);
        }

    }

    showCorrectRegion(region) {
        const sender = Config.postcards[Config.game.postCardId].sender;
        const regionName = region.text;
        let dialog = Config.characterDialog.regionsCorrect.replace('[NAME]', sender);
        dialog = dialog.replace('[REGION]', regionName);
        this.scene.get(Config.scenes.UserInterface).showDialog(dialog);

        this.time.delayedCall(3000, this.gotoCulture, [], this);
    }

    showWrongRegion(region) {
        const sender = Config.postcards[Config.game.postCardId].sender;
        const regionName = region.text;
        let dialog = Config.characterDialog.regionsWrong.replace('[NAME]', sender);
        dialog = dialog.replace('[REGION]', regionName);
        this.scene.get(Config.scenes.UserInterface).showDialog(dialog);
    }

    gotoCulture() {
        this.scene.start(Config.scenes.Culture);
    }
};
