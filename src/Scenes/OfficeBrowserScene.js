import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class OfficeBrowserScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.OfficeBrowser);
    }

    init() { }

    preload() { }

    create() {
        this.cardIndex = 0;
        this.cards = [];
        this.buttonList = [];
        this.scrollHeight = 0;

        this.initGraphics();
        this.initButtons();
        this.initPopup();

        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.browser1);
    }

    initPopup() {
        this.popupWindow = this.add.container()
            .setVisible(false);

        const windowBackground = this.add.image(0, 0, Config.ui.square.name)
            .setOrigin(0)
            .setAlpha(.8)
            .setTint(0x000000)
            .setDisplaySize(Config.scale.width, Config.scale.height);

        const windowPanel = this.add.image(Config.scale.centerX, Config.scale.centerY - 100, Config.ui.popupBorder.name)

        const border = this.add.image(500, windowPanel.y - 270, Config.ui.logoBorder.name)
            .setOrigin(0)
            .setDisplaySize(150, 150);

        this.popupLogo = this.add.image(border.x, border.y, Resources.image.blankLogo.key)
            .setOrigin(0)
            .setDisplaySize(150, 150);

        this.popupName = this.add.text(border.x, this.popupLogo.y + 165, "", Config.fonts.addressHeader)

        this.popupAddress = this.add.text(this.popupName.x, this.popupName.y + this.popupName.height + 10, "", Config.fonts.addressParagraph)

        this.popupURL = this.add.text(this.popupAddress.x, this.popupAddress.y + this.popupAddress.height + 10, "", Config.fonts.addressParagraph)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                window.open(this.universityURL, "_blank");
            }.bind(this));

        this.popupMap = this.add.image(Config.scale.centerX + 200, windowPanel.y, Resources.image.blankMap.key)

        this.popupClose = this.add.image(Config.scale.centerX + 550, windowPanel.y - 330, Config.ui.circle.name)
            .setTintFill(0xffffff)
            .setDisplaySize(60, 60)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.hideUniversity();
            }.bind(this));

        this.popupCloseLabel = this.add.text(this.popupClose.x, this.popupClose.y, "x", Config.fonts.numberDisplay)
            .setOrigin(.5);

        this.nextButton = this.add.image(Config.scale.centerX + 600, windowPanel.y, Config.ui.triangle.name)
            .setScale(.5)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.nextCard();
            }.bind(this));

        this.prevButton = this.add.image(Config.scale.centerX - 600, windowPanel.y, Config.ui.triangle.name)
            .setScale(.5)
            .setFlipX(true)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.prevCard();
            }.bind(this));

        this.btnUniversity = this.add.image(Config.scale.centerX, windowPanel.y + 350, Config.ui.buttonSmall.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.selectUniversity();
            }.bind(this));

        const labelUniversity = this.add.text(this.btnUniversity.x, this.btnUniversity.y, Config.labels.select, Config.fonts.buttonSmall)
            .setOrigin(.5);

        this.popupWindow.add(windowBackground);
        this.popupWindow.add(windowPanel);
        this.popupWindow.add(border);
        this.popupWindow.add(this.popupLogo);
        this.popupWindow.add(this.popupMap);
        this.popupWindow.add(this.popupName);
        this.popupWindow.add(this.popupAddress);
        this.popupWindow.add(this.popupURL);
        this.popupWindow.add(this.popupClose);
        this.popupWindow.add(this.popupCloseLabel);
        this.popupWindow.add(this.nextButton);
        this.popupWindow.add(this.prevButton);
        this.popupWindow.add(this.btnUniversity);
        this.popupWindow.add(labelUniversity);
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.browserTab.key);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawRectangle(this, Config.ui.logoBorder);
        UI.drawRectangle(this, Config.ui.popupBorder);
        UI.drawRectangle(this, Config.ui.scrollTrack);
        UI.drawRoundedRectangle(this, Config.ui.buttonSmall);
        UI.drawRoundedRectangle(this, Config.ui.scrollButton);
        UI.drawTriangle(this, Config.ui.triangle);
        UI.drawCircle(this, Config.ui.circle);

        const backgroundColor = this.add.image(0, 340, Config.ui.square.name)
            .setOrigin(0)
            .setTintFill(0x006AB3)
            .setDisplaySize(Config.scale.width, Config.scale.height);

        this.urlLabel = this.add.text(350, 50, Config.labels.mfucWebsite, Config.fonts.numberDisplay)

        // const logo = this.add.image(220, this.urlLabel.y + 150, Resources.image.mfucLogo.key);

        this.scrollTrack = this.add.image(1860, 340, Config.ui.scrollTrack.name)
            .setOrigin(0);

        this.scrollButton = this.add.image(this.scrollTrack.x, this.scrollTrack.y, Config.ui.scrollButton.name)
            .setOrigin(0)
            .setInteractive(
                {
                    cursor: 'pointer',
                    pixelPerfect: true,
                    draggable: true
                })
            .on(Config.pointer.dragStart, function (pointer) {
                this.enableButtons(false);
            }.bind(this))
            .on(Config.pointer.dragEnd, function (pointer) {
                this.enableButtons(true);
            }.bind(this))
            .on(Config.pointer.drag, function (pointer, dragX, dragY) {
                const startY = this.scrollTrack.y;
                const maxScroll = startY + this.scrollTrack.height - this.scrollButton.height;

                let y = dragY;
                if (y > maxScroll) y = maxScroll;
                else if (y < startY) y = startY;
                this.scrollButton.y = y;

                const percent = (y - startY) / maxScroll;
                this.scrollview.y = startY - (maxScroll * percent);
            }.bind(this));

        const mask = this.make.graphics();
        mask.beginPath();
        mask.fillStyle(0xffffff);
        mask.fillRect(75, this.scrollTrack.y, 1760, 715);

        this.scrollview = this.add.container()
            .setPosition(80, this.scrollTrack.y)
            .setMask(mask.createGeometryMask());

        this.buttonList.push(this.scrollButton);
    }

    initButtons() {
        const spacingX = 300;
        const spacingY = 310;
        const startY = 10;
        const columns = 6;
        const uni = Config.universities;

        let row = 0;
        let column = 0;

        let counter = 0;

        const website = Config.mfucWebsite;
        for (let index in website) {
            const link = website[index];
            const button = this.add.image(link.position.x, link.position.y, Resources.image.btnInvisible.key)
                .setDisplaySize(link.size.width, link.size.height)
                .setInteractive({ cursor: 'pointer' })
                .on(Config.pointer.down, function () {
                    window.open(link.url, "mfuc");
                }.bind(this));

            this.buttonList.push(button);
        }

        for (let index in uni) {
            const id = counter;

            this.cards.push(uni[index]);

            row = Math.floor(counter / columns);
            column = counter - (row * columns);

            const positionY = startY + (row * spacingY)

            const logoBorder = this.add.image(column * spacingX, positionY, Config.ui.logoBorder.name)
                .setVisible(false)
                .setOrigin(0);

            const logo = this.add.image(column * spacingX, positionY, `${uni[index].id}Logo`)
                .setDisplaySize(Config.ui.logoBorder.width, Config.ui.logoBorder.height)
                .setOrigin(0)
                .setInteractive({ cursor: 'pointer' })
                .on(Config.pointer.down, function () {
                    const university = uni[index];
                    this.cardIndex = id;
                    this.showUniversity(university);
                }.bind(this));


            counter++;

            this.scrollview.add(logoBorder);
            this.scrollview.add(logo);

            this.buttonList.push(logo);
        }

        this.scrollHeight = (row * spacingY) - (spacingY - Config.ui.logoBorder.height);
    }

    showUniversity(university) {
        this.universityURL = university.url;
        this.popupLogo.setTexture(`${university.id}Logo`);
        this.popupMap.setTexture(`${university.id}Map`);
        this.popupName.text = university.name;
        this.popupAddress.text = university.address;
        this.popupAddress.y = this.popupName.y + this.popupName.height + 10;
        this.popupURL.text = university.url;
        this.popupURL.y = this.popupAddress.y + this.popupAddress.height + 10;

        this.popupWindow.setVisible(true);
        this.enableButtons(false);
        this.checkCardPosition();
    }

    hideUniversity() {
        this.popupWindow.setVisible(false);
        this.enableButtons(true);
    }

    enableButtons(enable) {
        for (let index = 0; index < this.buttonList.length; index++) {
            const button = this.buttonList[index];
            enable ? button.setInteractive() : button.disableInteractive();
        }
    }

    nextCard() {
        if (this.cardIndex >= this.cards.length - 1) return;
        this.cardIndex++;
        const uni = this.cards[this.cardIndex];
        this.showUniversity(uni);
    }

    prevCard() {
        if (this.cardIndex <= 0) return;

        this.cardIndex--;
        const uni = this.cards[this.cardIndex];
        this.showUniversity(uni);
    }

    checkCardPosition() {
        this.nextButton.setAlpha(1);
        this.prevButton.setAlpha(1);

        if (this.cardIndex >= this.cards.length - 1) this.nextButton.setAlpha(.5);
        if (this.cardIndex <= 0) this.prevButton.setAlpha(.5);
    }

    selectUniversity() {
        const universityList = Config.characters[Config.game.character].universities;
        const university = this.cards[this.cardIndex];
        
        if (universityList.includes(university.id)) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.universityCorrect);
            Config.game.computerComplete = true;
            Config.game.university = university.id;

            this.nextButton.disableInteractive();
            this.prevButton.disableInteractive();
            this.btnUniversity.disableInteractive();
            this.popupClose.disableInteractive();

            this.timedEvent = this.time.delayedCall(3000, this.gotoOffice, [], this);
        } else {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.universityWrong);
        }
    }

    gotoOffice() {
        this.scene.start(Config.scenes.Office);
    }
};
