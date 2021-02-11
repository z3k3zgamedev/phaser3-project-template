import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class OfficeKeypadScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.OfficeKeypad);
    }

    init() { }

    preload() { }

    create() {
        this.initQuestions();
        this.initGraphics();
        this.initButtons();

        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.keypad);
    }

    initQuestions() {
        this.questions = Phaser.Math.RND.shuffle(Config.keypadQuestions.concat());
        this.questionIndex = 0;
        this.correctAnswers = 0;
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.officeKeypad.key);
        UI.drawRoundedRectangle(this, Config.ui.keypadDisplay);
        UI.drawRoundedRectangle(this, Config.ui.keypadAnswer);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawTriangle(this, Config.ui.triangle);
        UI.drawCircle(this, Config.ui.keypadDot);

        this.questionLabel = this.add.text(Config.scale.centerX, 130, this.questions[0].question, Config.fonts.keypadDisplay)
            .setOrigin(.5);

        const dot1 = this.add.image(Config.scale.centerX - (Config.ui.keypadDot.radius * 1.5), 300, Config.ui.keypadDot.name);

        const dot2 = this.add.image(dot1.x + (Config.ui.keypadDot.radius * 3), dot1.y, Config.ui.keypadDot.name);

        this.dots = [dot1, dot2];
    }

    initButtons() {
        this.buttons = [];
        this.answers = Phaser.Math.RND.shuffle(this.questions[0].answers.concat());
        this.correct = this.questions[0].correct;

        for (let index = 0; index < 3; index++) {
            const answer = index;
            const buttonY = 450 + (index * 250);
            const button = this.add.image(Config.scale.centerX, buttonY, Config.ui.keypadAnswer.name)
                .setInteractive({ cursor: 'pointer' })
                .on(Config.pointer.down, function () {
                    this.selectAnswer(answer);
                }.bind(this));

            const answerLabel = this.add.text(button.x, button.y, this.answers[index], Config.fonts.buttonSmall)
                .setTintFill(0xBBE1F5)
                .setOrigin(.5);

            this.buttons.push(
                {
                    button: button,
                    answer: answerLabel
                }
            );
        }

    }

    selectAnswer(answer) {
        for (let index = 0; index < this.answers.length; index++) {
            this.buttons[index].button.disableInteractive();
            if (this.correct == this.answers[index]) {
                this.dots[this.correctAnswers].setTintFill(0x6AAF44);
                this.correctAnswers++;
                this.buttons[index].button.setTintFill(0x6AAF44)
            }
        }

        if (this.correct != this.answers[answer]) {
            this.dots[0].clearTint();
            this.dots[1].clearTint();
            this.correctAnswers = 0;
            this.buttons[answer].button.setTintFill(0xED5657)
        }

        this.time.delayedCall(1500, this.nextQuestion, [], this);
    }

    nextQuestion() {
        if (this.correctAnswers == 2) {
            this.gotoOffice();
            return;
        }

        this.questionIndex = this.questionIndex < this.questions.length - 1 ? this.questionIndex + 1 : 0;

        if (this.questionIndex > this.questions.length - 1) {
            this.questionIndex = 0;
        }

        for (let index = 0; index < this.answers.length; index++) {
            this.buttons[index].button.clearTint();
            this.buttons[index].button.setInteractive();
        }

        console.log(this.questionIndex);

        this.questionLabel.text = this.questions[this.questionIndex].question;
        this.answers = Phaser.Math.RND.shuffle(this.questions[this.questionIndex].answers.concat());
        this.correct = this.questions[this.questionIndex].correct;

        for (let index = 0; index < this.answers.length; index++) {
            this.buttons[index].answer.text = this.answers[index];
        }
    }

    gotoOffice() {
        Config.game.keypadComplete = true;
        this.scene.start(Config.scenes.Office);
    }
};
