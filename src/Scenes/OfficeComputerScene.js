import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class OfficeComputerScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.OfficeComputer);
    }

    init() { }

    preload() { }

    create() {
        this.initQuestions();
        this.initGraphics();
        this.initButtons();

        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.computer);
    }

    initQuestions() {
        this.answerTries = 0;
        this.questionIndex = 0;
        this.questions = Phaser.Math.RND.shuffle(Config.computerQuestions.concat());
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.officeComputer.key);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawTriangle(this, Config.ui.triangle);
        UI.drawRoundedRectangle(this, Config.ui.buttonSmallLong);

        this.avatar = this.add.image(1000, 230, Resources.image[`${Config.game.character}Avatar`].key)
            .setDisplaySize(Config.ui.characterSelect.width * .95, Config.ui.characterSelect.height * .95);
    }

    initButtons() {
        const centerX = 1000;
        const startY = 500;
        const spacingY = 90;

        this.buttons = [];

        this.questionLabel = this.add.text(centerX, 400, '', Config.fonts.h3)
            .setOrigin(.5);

        for (let index = 0; index < 3; index++) {
            const answer = index;
            const answerButton = this.add.image(centerX, startY + (spacingY * index), Config.ui.buttonSmallLong.name)
                .setInteractive({ cursor: 'pointer' })
                .on(Config.pointer.down, function () {
                    this.selectAnswer(answer);
                }.bind(this));

            const answerLabel = this.add.text(centerX, answerButton.y, `Answer ${index + 1}`, Config.fonts.h3)
                .setOrigin(.5);

            this.buttons.push(
                {
                    button: answerButton,
                    label: answerLabel,
                }
            );
        }

        this.resetQuestion();
    }

    resetQuestion() {
        this.answerTries = 0;
        this.answers = Phaser.Math.RND.shuffle(this.questions[this.questionIndex].answers.concat());
        this.correct = this.questions[this.questionIndex].correct;

        this.questionLabel.text = this.questions[this.questionIndex].question;

        for (let index = 0; index < 3; index++) {
            const button = this.buttons[index].button;
            button.clearTint();
            button.setInteractive();

            const label = this.buttons[index].label;
            label.text = this.answers[index];
        }
    }

    selectAnswer(answer) {
        const buttonGroup = this.buttons[answer];
        buttonGroup.button.disableInteractive();

        if (this.correct == this.answers[answer]) {
            buttonGroup.button.setTintFill(0x6AAF44);
            this.showDesktop();
        } else {
            this.answerTries++;
            buttonGroup.button.setTintFill(0xED5657);
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.error);
        }

        if (this.answerTries >= 2) {
            for (let index = 0; index < this.buttons.length; index++) {
                const button = this.buttons[index].button.disableInteractive();
            }

            this.questionIndex = this.questionIndex < this.questions.length - 1 ? this.questionIndex + 1 : 0;

            this.time.delayedCall(1500, this.resetQuestion, [], this);
        }
    }

    showDesktop() {
        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.computerCorrect);

        this.questionLabel.setVisible(false);
        this.avatar.setVisible(false);

        for (let index = 0; index < 3; index++) {
            this.buttons[index].button.setVisible(false);
            this.buttons[index].label.setVisible(false);
        }

        const iconComputer = this.add.image(200, 200, Resources.image.iconComputer.key);
        const iconBin = this.add.image(200, 500, Resources.image.iconBin.key);
        const iconInternet = this.add.image(200, 350, Resources.image.iconInternet.key)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.gotoBrowser();
            }.bind(this));
    }

    gotoBrowser() {
        this.scene.start(Config.scenes.OfficeBrowser);
    }

    gotoOffice() {
        this.scene.start(Config.scenes.Office);
    }
};
