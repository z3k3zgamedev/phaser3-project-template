import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class OfficePhoneScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.OfficePhone);
    }

    init() { }

    preload() { }

    update(time, delta) {
        this.timer += delta;
        if (this.timer > 10000) {
            this.timer -= 15000;
            UI.flashObjectAfterTime(this.tweens, this.speakButton, 5);
        }
    }

    create() {
        this.timer = 0;

        this.initGraphics();
        this.initButtons();

        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.phone);
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.officePhone.key);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawTriangle(this, Config.ui.triangle);

        this.numberDisplay = this.add.text(1000, 185, '', Config.fonts.numberDisplay)
        this.phoneNumber = Config.businessCards.ambafrance.phone;
    }

    initButtons() {
        this.numberIndex = 0;

        this.speakButton = this.add.image(110, 870, Resources.image.iconSpeak.key)
            .setOrigin(0, 1)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.speak();
            }.bind(this));

        const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 3; col++) {
                const x = 1002 + (95 * col);
                const y = 377 + (93 * row);
                const keyIndex = col + (row * 3);
                const numberButton = this.add.image(x, y, Resources.image.btnInvisible.key)
                    .setAlpha(.6)
                    .setDisplaySize(90, 80)
                    .setInteractive({ cursor: 'pointer' })
                    .on(Config.pointer.down, function () {
                        const number = keys[keyIndex];
                        this.pressKey(number);
                    }.bind(this));
            }
        }
    }

    pressKey(number) {
        this.numberIndex = Math.round(this.numberDisplay.text.length * .5);
        this.numberDisplay.text += number;

        if (this.numberDisplay.text.length >= 10) this.checkAnswer();
    }

    speak() {
        if (this.numberIndex >= 5) return;

        // const index = this.numberIndex * 2;
        // const number1 = this.phoneNumber.charAt(index);
        // const number2 = this.phoneNumber.charAt(index + 1);

        const audio1 = this.sound.add(`phone${this.numberIndex + 1}`);
        audio1.play();
    }

    checkAnswer() {
        if (this.numberDisplay.text == Config.businessCards.ambafrance.phone) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.phoneCorrect);

            this.speakButton.setVisible(false);

            this.timedEvent = this.time.delayedCall(3000, this.gotoDialog, [], this);
        } else {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.phoneWrong);

            this.timedEvent = this.time.delayedCall(3000, this.reset, [], this);
        }
    }

    reset() {
        this.numberDisplay.text = "";
        this.numberIndex = 0;
    }

    gotoDialog() {
        this.scene.start(Config.scenes.OfficeDialog);
    }
};
