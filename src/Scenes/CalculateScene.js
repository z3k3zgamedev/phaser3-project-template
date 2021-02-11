import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class CalculateScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.Calculate);
    }

    init() { }

    preload() { }

    create() {
        this.initGraphics();
        this.initButtons();
        this.initDialog();
        this.initMenu();
        this.initToolTip();

        this.formComplete = false;
    }

    initGraphics() {
        this.background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.market.key);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawTriangle(this, Config.ui.triangle);
        UI.drawRoundedRectangle(this, Config.ui.buttonSmall);
        UI.drawRoundedRectangle(this, Config.ui.button);
        UI.drawRoundedRectangle(this, Config.ui.buttonLong);

        // this.clipBoard = this.add.image(110, 860, Resources.image.clipboard.key)
    }

    initButtons() {
        this.stallButtons = [];

        this.checkListButton = this.add.image(110, 860, Resources.image.clipboard.key)
            .setOrigin(0, 1)
            .setScale(.1)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.showCheckList();
            }.bind(this));

        const stall1 = this.add.image(150, 100, Config.ui.square.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                const stall = Config.shopping.dairy;
                this.showStall(stall);
            }.bind(this));

        const stall2 = this.add.image(450, 100, Config.ui.square.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                const stall = Config.shopping.meat;
                this.showStall(stall);
            }.bind(this));

        const stall3 = this.add.image(650, 100, Config.ui.square.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                const stall = Config.shopping.produce;
                this.showStall(stall);
            }.bind(this));

        const stall4 = this.add.image(850, 100, Config.ui.square.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                const stall = Config.shopping.caterer;
                this.showStall(stall);
            }.bind(this));

        this.stallButtons.push(stall1);
        this.stallButtons.push(stall2);
        this.stallButtons.push(stall3);
        this.stallButtons.push(stall4);

        this.pricingButtons = [];
        this.pricingContainer = this.add.container();
        this.pricingContainer.setVisible(false);

        for (let index = 0; index < 3; index++) {
            const button = this.add.image(Config.scale.centerX, 800, Config.ui.buttonSmall.name)
            const label = this.add.text(button.x, button.y, "", Config.fonts.h3)
                .setOrigin(.5)

            this.pricingContainer.add(button);
            this.pricingContainer.add(label);

            this.pricingButtons.push({
                button: button,
                label: label,
            })
        }
    }

    initDialog() {
        let allItems = [];

        for (let index in Config.shopping) {
            const stall = Config.shopping[index];
            const products = stall.products.concat();
            allItems = allItems.concat(products);
        }

        this.items = Phaser.Utils.Array.Shuffle(allItems);
        this.items.length = 3;
        this.itemContainer = this.add.container();
        this.itemCheckBox = [];
        this.itemsListText = this.add.text(230, 400, '', Config.fonts.shoppingList)
            .setTintFill(0x000000);
        this.itemContainer.setAlpha(0);
        this.itemContainer.add(this.itemsListText);
        this.checkListCounter = 3;
        this.checkListCounterLabel = this.add.text(132, 832, this.checkListCounter, Config.fonts.shoppingList)
            .setOrigin(.5)
            .setTintFill(0x000000);

        for (let index = 0; index < this.items.length; index++) {
            Config.game.marketItems.push({
                name: this.items[index].name,
                purchased: false,
                price: this.items[index].price,
            })
            const itemName = this.items[index].name;
            const checkBox = this.add.sprite(190, this.itemsListText.y + this.itemsListText.height - 20, Resources.spritesheet.checkBox.key, 0);
            checkBox.item = itemName;

            this.itemsListText.text += itemName + "\n";

            this.itemCheckBox.push(checkBox);
            this.itemContainer.add(checkBox);
        }

        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.market);

        this.time.delayedCall(1500, this.showCheckList, [], this);
    }

    initMenu() {
        this.menuWindow = this.add.container()
            .setVisible(false);

        // const windowBackground = this.add.image(0, 0, Config.ui.square.name)
        //     .setOrigin(0)
        //     .setAlpha(.8)
        //     .setTint(0x000000)
        //     .setDisplaySize(Config.scale.width, Config.scale.height);

        this.stallLabel = this.add.text(Config.scale.centerX, 100, "Stall", Config.fonts.h3)
            .setOrigin(.5);

        // this.menuWindow.add(windowBackground);
        this.menuWindow.add(this.stallLabel);

        this.buttons = [];

        this.exitButton = this.add.image(Config.scale.centerX, 800, Config.ui.buttonLong.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.hideStall();
            }.bind(this));

        this.exitLabel = this.add.text(this.exitButton.x, this.exitButton.y, Config.labels.doneShopping, Config.fonts.h3)
            .setOrigin(.5);

        this.menuWindow.add(this.exitButton);
        this.menuWindow.add(this.exitLabel);
    }

    initPrices() {

    }

    showCheckList() {
        this.tweens.add({
            targets: this.checkListButton,
            scale: 1,
            ease: Phaser.Math.Easing.Quadratic.Out,
            duration: 500,
        });

        this.tweens.add({
            targets: this.itemContainer,
            alpha: 1,
            ease: Phaser.Math.Easing.Cubic.Out,
            delay: 300,
            duration: 500
        });

        this.tweens.add({
            targets: this.checkListCounterLabel,
            alpha: 0,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 300
        });

        this.time.delayedCall(5000, this.hideCheckList, [], this);
    }

    hideCheckList() {
        this.tweens.add({
            targets: this.checkListButton,
            scale: .1,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 500,
        });
        this.tweens.add({
            targets: this.itemContainer,
            alpha: 0,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 300
        });

        this.tweens.add({
            targets: this.checkListCounterLabel,
            alpha: 1,
            ease: Phaser.Math.Easing.Cubic.Out,
            delay: 300,
            duration: 300
        });
    }

    showStall(stall) {
        this.stallLabel.text = stall.name;

        const products = stall.products;
        const startY = this.stallLabel.y + 200;
        const gapY = 200;
        const gapX = [-200, 0, 200];
        const columns = 3;

        for (let index = 0; index < products.length; index++) {
            const row = Math.floor(index / columns);
            const column = index - (row * columns);
            const positionX = Config.scale.centerX + gapX[column];
            const positionY = startY + (gapY * row);
            const itemIndex = 0;

            const icon = this.add.sprite(positionX, positionY, products[index].icon)
            const check = this.add.image(positionX, positionY, Resources.image.check.key);
            icon.purchased = false;
            const product = products[index];
            product.check = check;
            product.icon = icon;
            
            if (!this.itemPurchased(product.name)) {
                check.setVisible(false);
                icon.setInteractive({ cursor: 'pointer' })
                    .on(Config.pointer.down, function () {
                        this.selectAnswer(product);
                    }.bind(this))
                    .on(Config.pointer.over, function () {
                        this.showToolTip(positionX, positionY, product.name);
                    }.bind(this))
                    .on(Config.pointer.out, function () {
                        this.hideToolTip();
                    }.bind(this));
            }

            this.buttons.push({
                icon: icon,
                check: check,
            });
        }

        this.background.setAlpha(.2);
        this.menuWindow.setVisible(true);
        this.showStallButtons(false);
    }

    itemPurchased(name) {
        const marketItems = Config.game.marketItems;
        for (let index = 0; index < marketItems.length; index++) {
            if (marketItems[index].name == name && marketItems[index].purchased) return true;
        }

        return false;
    }

    enableItemButtons(enable) {
        for (let index = 0; index < this.buttons.length; index++) {
            const button = this.buttons[index];
            if (button.icon.purchased) button.icon.disableInteractive();
            else enable? button.icon.setInteractive() : button.icon.disableInteractive();
        }
    }

    hideStall() {
        for (let index = 0; index < this.buttons.length; index++) {
            const button = this.buttons[index];
            button.icon.destroy();
            button.check.destroy();
        }
        this.background.setAlpha(1);
        this.menuWindow.setVisible(false);
        this.showStallButtons(true);
        this.hideToolTip();
    }

    showStallButtons(enable) {
        for (let index = 0; index < this.stallButtons.length; index++) {
            const button = this.stallButtons[index];
            button.setVisible(enable);
        }
    }

    selectAnswer(product) {
        let correct = 0;
        let isCorrect = false;

        for (let index = 0; index < this.itemCheckBox.length; index++) {
            const checkbox = this.itemCheckBox[index];
            const item = checkbox.item;

            if (item == product.name) {
                Config.game.marketItems[index].purchased = true;
                product.icon.purchased = true;
                product.icon.disableInteractive();
                product.check.setVisible(true);
                checkbox.setFrame(1);
                isCorrect = true;
            }

            if (Config.game.marketItems[index].purchased) correct++;
        }

        this.checkListCounter = 3 - correct;
        this.checkListCounterLabel.text = this.checkListCounter;

        if (isCorrect) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.itemCorrect);

            this.enableItemButtons(false);
            this.showPricing(product);
        } else {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.itemWrong);
        }
    }

    initToolTip() {
        this.toolTipBackground = this.add.image(0, 0, Config.ui.square.name);
        this.toolTipLabel = this.add.text(0, 0, '', Config.fonts.shoppingList)
            .setOrigin(.5);

        this.toolTipContainer = this.add.container();
        this.toolTipContainer.add(this.toolTipBackground);
        this.toolTipContainer.add(this.toolTipLabel);
    }

    showToolTip(x, y, label) {
        this.toolTipContainer.setDepth(100);
        this.toolTipContainer.setPosition(x, y);
        this.toolTipLabel.text = label;
        this.toolTipBackground.setDisplaySize(this.toolTipLabel.width + 30, this.toolTipLabel.height + 30);

        this.tweens.add({
            targets: this.toolTipContainer,
            scale: {
                from: 0,
                to: 1,
            },
            ease: Phaser.Math.Easing.Quadratic.Out,
            duration: 300,
        });
    }

    hideToolTip() {
        this.tweens.add({
            targets: this.toolTipContainer,
            scale: 0,
            ease: Phaser.Math.Easing.Quadratic.Out,
            duration: 200,
        });
    }

    showPricing(product) {
        this.exitButton.setVisible(false);
        this.exitLabel.setVisible(false);
        const price = product.price;
        const lowerPrice = .3 + (Math.random() * .3);
        const higherPrice = 2 + (Math.random() * 2);
        const randomPricing = Phaser.Utils.Array.Shuffle([price, price * lowerPrice, price * higherPrice]);

        const positionsX = [-300, 0, 300];

        for (let index = 0; index < randomPricing.length; index++) {
            const buttonX = Config.scale.centerX + positionsX[index];
            const button = this.pricingButtons[index].button;
            const label = this.pricingButtons[index].label;
            const randomPrice = randomPricing[index].toFixed(2);

            button.price = randomPricing[index];
            button.setInteractive({ cursor: 'pointer' })
                .on(Config.pointer.down, function () {
                    const correctPrice = price;
                    const randomPrice = randomPricing[index];
                    this.selectPrice(correctPrice, randomPrice);
                }.bind(this));

            button.setX(buttonX);
            label.setX(buttonX);
            label.text = `${Config.game.CURRENCY}${randomPrice}`;
        }

        this.pricingContainer.setVisible(true);
    }

    hidePricing() {
        this.exitButton.setVisible(true);
        this.exitLabel.setVisible(true);
        this.pricingContainer.setVisible(false);
    }

    selectPrice(correctPrice, randomPrice) {
        if (correctPrice == randomPrice) {
            
            this.hidePricing();
            
            if (this.checkListCounter == 0) {
                this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.shopComplete);
                this.hideStall();
                this.time.delayedCall(1500, this.showCheckList, [], this);
            } else {
                this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.priceCorrect);
                this.enableItemButtons(true);
            }
        } else {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.priceWrong);
        }
    }

    gotoMailbox() {
        this.scene.start(Config.scenes.Mailbox);
    }
};
