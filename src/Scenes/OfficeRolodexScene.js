import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class OfficeRolodexScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.OfficeRolodex);
    }

    init() { }

    preload() { }

    create() {
        this.initGraphics();
        this.initCards();
        this.initButtons();

        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.rolodex);
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.officeRolodex.key);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawTriangle(this, Config.ui.triangle);
        UI.drawRoundedRectangle(this, Config.ui.buttonSmall);

        this.numberDisplay = this.add.text(700, 140, '', Config.fonts.numberDisplay)
    }

    initButtons() {
        // const backButton = this.add.image(100, 100, Config.ui.triangle.name)
        //     .setFlipX(true)
        //     .setInteractive({ cursor: 'pointer' })
        //     .on(Config.pointer.down, function () {
        //         this.gotoOffice();
        //     }.bind(this));

        this.nextButton = this.add.image(1750, Config.scale.centerY - 40, Config.ui.triangle.name)
            .setDepth(-1)
            .setAlpha(Config.game.cardIndex == this.cards.length - 1 ? .5 : 1)
            .setRotation(Phaser.Math.DegToRad(90))
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.nextCard();
            }.bind(this));

        this.prevButton = this.add.image(this.nextButton.x, this.nextButton.y - 200, Config.ui.triangle.name)
            .setDepth(-1)
            .setAlpha(Config.game.cardIndex == 0 ? .5 : 1)
            .setRotation(Phaser.Math.DegToRad(-90))
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.prevCard();
            }.bind(this));

        const btnStart = this.add.image(1300, 900, Config.ui.buttonSmall.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.selectCard();
            }.bind(this));

        const labelStart = this.add.text(btnStart.x, btnStart.y, Config.labels.call, Config.fonts.buttonSmall)
            .setOrigin(.5);
    }

    initCards() {
        this.isFlipping = false;
        this.cards = [];

        const businessCards = Config.businessCards;
        const cardY = 450;

        const blank = this.add.image(1300, cardY, Resources.image.blankCard.key)
            .setOrigin(.5, 0);

        this.blankCard = this.add.image(1300, cardY, Resources.image.blankCard.key)
            .setOrigin(.5, 0);

        for (let index in businessCards) {
            const cardObject = businessCards[index];
            const graphic = `${cardObject.id}Card`;
            cardObject.card = this.add.image(1300, cardY, Resources.image[graphic].key)
                .setDepth(100 - this.cards.length)
                .setOrigin(.5, 1);

            if (this.cards.length < Config.game.cardIndex) cardObject.card.setScale(1, 0)

            this.cards.push(cardObject);
        }
    }

    nextCard() {
        if (this.isFlipping) return;
        if (Config.game.cardIndex >= this.cards.length - 1) return;
        this.isFlipping = true;
        this.flipCard("next");
        Config.game.cardIndex++;
        this.flipCardUpdate();
    }

    prevCard() {
        if (this.isFlipping) return;
        if (Config.game.cardIndex <= 0) return;
        this.isFlipping = true;
        this.flipCard("prev");
        Config.game.cardIndex--;
        this.flipCardUpdate();
    }

    flipCard(direction) {
        const index = direction == "next" ? 0 : -1;
        const card = this.cards[Config.game.cardIndex + index].card;

        this.tweens.add({
            targets: direction == "next" ? card : this.blankCard,
            scaleX: {
                from: 1,
                to: 1.5
            },
            scaleY: {
                from: 1,
                to: 0
            },
            ease: Phaser.Math.Easing.Cubic.In,
            duration: 200,
            onComplete: function () {
                this.tweens.add({
                    targets: direction == "next" ? this.blankCard : card,
                    scaleX: {
                        from: 1.5,
                        to: 1,
                    },
                    scaleY: {
                        from: 0,
                        to: 1,
                    },
                    ease: Phaser.Math.Easing.Cubic.Out,
                    duration: 200,
                    onComplete: function () {
                        this.flipCardComplete();
                    }.bind(this)
                });
            }.bind(this)
        });
    }

    flipCardUpdate() {
        this.nextButton.setInteractive();
        this.nextButton.setAlpha(1);
        this.prevButton.setInteractive();
        this.prevButton.setAlpha(1);

        if (Config.game.cardIndex >= this.cards.length - 1) {
            this.nextButton.disableInteractive();
            this.nextButton.setAlpha(.5);
        }
        if (Config.game.cardIndex <= 0) {
            this.prevButton.disableInteractive();
            this.prevButton.setAlpha(.5);
        }
    }

    flipCardComplete() {
        this.isFlipping = false;
    }

    selectCard() {
        const card = this.cards[Config.game.cardIndex];
        if (card.id == Config.businessCards.ambafrance.id) {
            Config.game.rolodexComplete = true;
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.rolodexCorrect);
            this.timedEvent = this.time.delayedCall(3000, this.gotoOffice, [], this);
        } else {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.rolodexWrong);
        }

    }

    gotoOffice() {

        this.scene.start(Config.scenes.Office);
    }
};
