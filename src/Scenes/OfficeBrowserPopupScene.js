import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class OfficeBrowserPopupScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.OfficeBrowserPopup);
    }

    init() { }

    preload() { }

    create() {
        // this.initGraphics();
        // this.initButtons();
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.browserTab.key);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawRectangle(this, Config.ui.logoBorder);
        UI.drawRectangle(this, Config.ui.popupBorder);
        UI.drawRectangle(this, Config.ui.scrollTrack);
        UI.drawRoundedRectangle(this, Config.ui.scrollButton);
        UI.drawCircle(this, Config.ui.circle);

        const windowBackground = this.add.image(0, 0, Config.ui.square.name)
            .setOrigin(0)
            .setAlpha(.8)
            .setTint(0x000000)
            .setDisplaySize(Config.scale.width, Config.scale.height);

        // const windowPanel = this.add.image(Config.scale.centerX, Config.scale.centerY, Config.ui.popupBorder.name)

        // const border = this.add.image(500, 270, Config.ui.logoBorder.name)
        //     .setOrigin(0)
        //     .setDisplaySize(150, 150);

        // this.popupLogo = this.add.image(border.x, border.y, Resources.image.umLogo.key)
        //     .setOrigin(0)
        //     .setDisplaySize(150, 150);

        // this.popupName = this.add.text(this.popupLogo.x + this.popupLogo.width + 15, this.popupLogo.y, "University Name", Config.fonts.addressHeader)

        // this.popupAddress = this.add.text(this.popupLogo.x, this.popupLogo.y, "Address Here....", Config.fonts.addressParagraph)

        // this.popupMap = this.add.image(Config.scale.centerX + 300, Config.scale.centerY, Resources.image.umMap.key)

        
    }

    initButtons() {
        this.popupClose = this.add.image(Config.scale.centerX + 630, Config.scale.centerY - 330, Config.ui.circle.name)
            .setTintFill(0xffffff)
            .setDisplaySize(60, 60)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.popupWindow.setVisible(false);
            }.bind(this));

        this.popupCloseLabel = this.add.text(this.popupClose.x, this.popupClose.y, "x", Config.fonts.numberDisplay)
            .setOrigin(.5);
    }

    updateUniversity(university) {
        this.popupWindow.setVisible(true);
    }

    gotoBrowser() {
        this.scene.start(Config.scenes.office);
    }
};
