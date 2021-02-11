import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class OfficeFilesScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.OfficeFiles);
    }

    init() { }

    preload() { }

    create() {
        this.initVariables();
        this.initCharacterAnswers();
        this.initGraphics();
        this.initButtons();
        this.initPopup();
    }

    initVariables() {
        this.formComplete = false;
        this.correctAnswer = '';
        this.formfields = [];
        this.answeredfields = [];
        this.fieldsComplete = 0;
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.officeFiles.key);
        UI.drawRectangle(this, Config.ui.square);
        UI.drawRectangle(this, Config.ui.formAirportBorder);
        UI.drawRectangle(this, Config.ui.formAirportDeparture);
        UI.drawRectangle(this, Config.ui.personalBorder);
        UI.drawRectangle(this, Config.ui.studiesBorder);
        UI.drawRectangle(this, Config.ui.fieldShort);
        UI.drawRectangle(this, Config.ui.fieldMedium);
        UI.drawRectangle(this, Config.ui.fieldLong);
        UI.drawRectangle(this, Config.ui.fieldXLong);
        UI.drawRectangle(this, Config.ui.fieldXXLong);
        UI.drawRectangle(this, Config.ui.fieldPhoto);
        UI.drawRectangle(this, Config.ui.checkBox);
        UI.drawTriangle(this, Config.ui.triangle);
        UI.drawRoundedRectangle(this, Config.ui.buttonXLong);
        UI.drawRoundedRectangle(this, Config.ui.buttonLong);
        UI.drawRoundedRectangle(this, Config.ui.buttonSmall);

        this.initCharacterAnswers();
        this.initFolder();
        this.initPage1();
        this.initPage2();
    }

    initCharacterAnswers() {
        const profile = Config.characters[Config.game.character].profile;
        this.characterProfile = [
            profile.firstName.value,
            profile.lastName.value,
            profile.dob.value,
            profile.address.value,
            profile.city.value,
            profile.state.value,
            profile.nationality.value,
            profile.studies.value,
            profile.level.value,
            Config.universities[Config.game.university].name,
            Config.universities[Config.game.university].city,
        ]
    }

    initButtons() {
        // this.nextButton = this.add.image(1750, Config.scale.height - 100, Config.ui.triangle.name)
        //     .setRotation(Phaser.Math.DegToRad(90))
        //     .setInteractive({ cursor: 'pointer' })
        //     .on(Config.pointer.down, function () {
        //         this.nextPage();
        //     }.bind(this));
    }

    initFolder() {
        this.folderContainer = this.add.container()
            .setPosition(Config.scale.centerX - 300, Config.scale.centerY);

        this.folderBack = this.add.image(0, 0, Resources.image.folderBack.key)
            .setOrigin(0, .5);

        this.folderFront1 = this.add.image(0, 0, Resources.image.folderFront1.key)
            .setOrigin(0, .5)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.openFolder();
            }.bind(this));

        this.folderFront2 = this.add.image(0, 0, Resources.image.folderFront2.key)
            .setScale(0, 1)
            .setOrigin(1, .5);

        this.folderContainer.add(this.folderBack);
        this.folderContainer.add(this.folderFront2);
        this.folderContainer.add(this.folderFront1);

        this.tweens.add({
            targets: this.folderContainer,
            y: {
                from: Config.scale.height * 1.5,
                to: this.folderContainer.y
            },
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 1000,
            delay: 1000
        });

        this.folderContainer.setPosition(this.folderContainer.x, Config.scale.height * 1.5);
        // this.folderContainer.setVisible(false);
    }

    initPage1() {
        const character = Config.characters[Config.game.character].profile;
        const spacingX = 23;
        const spacingY = 70;

        this.paperBackground = this.add.image(0, 0, Resources.image.folderPaper.key)
            .setOrigin(0)
            .setPosition(0, Config.scale.height);

        this.pageContainer1 = this.add.container();
        this.pageContainer1.setPosition(0, Config.scale.height);

        const titleLabel = this.add.text(Config.scale.centerX, 230, Config.form.title, Config.fonts.h2)
            .setOrigin(.5)
            .setTintFill(0x000000);
        this.pageContainer1.add(titleLabel);
        // departure details

        const airportBorder = this.add.image(titleLabel.x, titleLabel.y + 150, Config.ui.formAirportBorder.name);
        this.pageContainer1.add(airportBorder);

        const airportTitle = this.add.text(airportBorder.x, airportBorder.y - 50, Config.form.airportTitle, Config.fonts.h3)
            .setOrigin(.5)
            .setTintFill(0x000000);
        this.pageContainer1.add(airportTitle);

        const airportFromLabelBorder = this.add.image(airportTitle.x, airportTitle.y + spacingY, Config.ui.formAirportDeparture.name);
        this.pageContainer1.add(airportFromLabelBorder);

        const airportFromLabel = this.add.text(airportFromLabelBorder.x, airportFromLabelBorder.y, Config.form.airportFrom, Config.fonts.handWritingForm)
            .setOrigin(.5)
            .setTintFill(0x000000);
        this.pageContainer1.add(airportFromLabel);

        // personal details
        const personalBorder = this.add.image(airportBorder.x, airportBorder.y + 400, Config.ui.personalBorder.name);
        this.pageContainer1.add(personalBorder);

        const personalTitle = this.add.text(airportFromLabel.x, airportFromLabel.y + 130, Config.form.personalTitle, Config.fonts.h3)
            .setOrigin(.5)
            .setTintFill(0x000000);
        this.pageContainer1.add(personalTitle);

        const firstnameLabel = this.add.text(300, personalTitle.y + 70, Config.form.firstName, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(firstnameLabel);

        const firstnameBorder = this.add.image(firstnameLabel.x + 180, firstnameLabel.y, Config.ui.fieldMedium.name)
            .setOrigin(0, .5)
        this.pageContainer1.add(firstnameBorder);

        const firstnameField = this.add.text(firstnameBorder.x + spacingX, firstnameBorder.y, "", Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(firstnameField);

        this.addFormField(firstnameBorder, firstnameLabel.text, firstnameField, character.firstName.value);

        const photoBorder = this.add.image(firstnameLabel.x + 1100, firstnameBorder.y - 30, Config.ui.fieldPhoto.name)
            .setOrigin(0);
        this.pageContainer1.add(photoBorder);

        const avatar = this.add.image(photoBorder.x + (photoBorder.width * .5), photoBorder.y + photoBorder.height - 3, Resources.image[`${Config.game.character}Avatar`].key)
            .setOrigin(.5, 1)
            .setDisplaySize(Config.ui.characterSelect.width * .8, Config.ui.characterSelect.height * .8);
        this.pageContainer1.add(avatar);

        const genderLabel = this.add.text(firstnameBorder.x + firstnameBorder.width + spacingX, firstnameLabel.y, Config.form.gender, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(genderLabel);

        const femaleLabel = this.add.text(genderLabel.x + 100, firstnameLabel.y, Config.form.female, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(femaleLabel);

        const femaleCheckbox = this.add.sprite(femaleLabel.x + 60, femaleLabel.y, Resources.spritesheet.checkBox.key, 0)
            .setOrigin(.5)
            .setInteractive({ cursor: 'pointer' })
        this.pageContainer1.add(femaleCheckbox);

        const maleLabel = this.add.text(femaleCheckbox.x + 50, firstnameLabel.y, Config.form.male, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(maleLabel);

        const maleCheckbox = this.add.sprite(maleLabel.x + 60, maleLabel.y, Resources.spritesheet.checkBox.key, 0)
            .setOrigin(.5)
            .setInteractive({ cursor: 'pointer' })

        this.pageContainer1.add(maleCheckbox);

        femaleCheckbox.on(Config.pointer.down, function () {
            if (this.selectGender("Female")) {
                femaleCheckbox.setFrame(1);
                maleCheckbox.disableInteractive();
                femaleCheckbox.disableInteractive();
            }
        }.bind(this));

        maleCheckbox.on(Config.pointer.down, function () {
            if (this.selectGender("Male")) {
                maleCheckbox.setFrame(1);
                maleCheckbox.disableInteractive();
                femaleCheckbox.disableInteractive();
            }
        }.bind(this));

        const lastnameLabel = this.add.text(firstnameLabel.x, firstnameLabel.y + spacingY, Config.form.lastName, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(lastnameLabel);

        const lastnameBorder = this.add.image(firstnameBorder.x, lastnameLabel.y, Config.ui.fieldMedium.name)
            .setOrigin(0, .5)
        this.pageContainer1.add(lastnameBorder);

        const lastnameField = this.add.text(lastnameBorder.x + spacingX, lastnameBorder.y, "", Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(lastnameField);

        this.addFormField(lastnameBorder, lastnameLabel.text, lastnameField, character.lastName.value);

        const nationalityLabel = this.add.text(firstnameLabel.x, lastnameLabel.y + spacingY, Config.form.nationality, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(nationalityLabel);

        const nationalityBorder = this.add.image(firstnameBorder.x, nationalityLabel.y, Config.ui.fieldMedium.name)
            .setOrigin(0, .5)
        this.pageContainer1.add(nationalityBorder);

        const nationalityField = this.add.text(nationalityBorder.x + spacingX, nationalityBorder.y, "", Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(nationalityField);

        this.addFormField(nationalityBorder, nationalityLabel.text, nationalityField, character.nationality.value);

        const stateLabel = this.add.text(firstnameLabel.x, nationalityLabel.y + spacingY, Config.form.state, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(stateLabel);

        const stateBorder = this.add.image(firstnameBorder.x, stateLabel.y, Config.ui.fieldShort.name)
            .setOrigin(0, .5)
        this.pageContainer1.add(stateBorder);

        const stateField = this.add.text(stateBorder.x + spacingX, stateBorder.y, "", Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(stateField);

        this.addFormField(stateBorder, stateLabel.text, stateField, character.state.value);

        const birthCityLabel = this.add.text(stateBorder.x + stateBorder.width + spacingX, stateLabel.y, Config.form.birthCity, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(birthCityLabel);

        const birthCityBorder = this.add.image(birthCityLabel.x + birthCityLabel.width + spacingX, birthCityLabel.y, Config.ui.fieldShort.name)
            .setOrigin(0, .5)
            .setTint(0xDDDDDD);
        this.pageContainer1.add(birthCityBorder);

        const birthCityField = this.add.text(birthCityBorder.x + spacingX, birthCityBorder.y, character.city.value, Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(birthCityField);

        const countryLabel = this.add.text(birthCityBorder.x + birthCityBorder.width + spacingX, stateLabel.y, Config.form.country, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(countryLabel);

        const countryBorder = this.add.image(countryLabel.x + countryLabel.width + spacingX, birthCityLabel.y, Config.ui.fieldShort.name)
            .setOrigin(0, .5)
            .setTint(0xDDDDDD);
        this.pageContainer1.add(countryBorder);

        const countryField = this.add.text(countryBorder.x + spacingX, countryBorder.y, character.country.value, Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(countryField);

        const addressLabel = this.add.text(firstnameLabel.x, stateLabel.y + spacingY, Config.form.address, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(addressLabel);

        const addressBorder = this.add.image(firstnameBorder.x, addressLabel.y, Config.ui.fieldXXLong.name)
            .setOrigin(0, .5)
        this.pageContainer1.add(addressBorder);

        const addressField = this.add.text(addressBorder.x + spacingX, addressBorder.y, "", Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(addressField);

        this.addFormField(addressBorder, addressLabel.text, addressField, character.address.value);

        const postcodeLabel = this.add.text(firstnameLabel.x, addressLabel.y + spacingY, Config.form.postcode, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(postcodeLabel);

        const postcodeBorder = this.add.image(firstnameBorder.x, postcodeLabel.y, Config.ui.fieldShort.name)
            .setOrigin(0, .5)
            .setTint(0xDDDDDD);
        this.pageContainer1.add(postcodeBorder);

        const postcodeField = this.add.text(postcodeBorder.x + spacingX, postcodeLabel.y, character.postcode.value, Config.fonts.handWritingForm)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(postcodeField);

        const cityLabel = this.add.text(postcodeBorder.x + postcodeBorder.width + spacingX + 10, postcodeLabel.y, Config.form.city, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(cityLabel);

        const cityBorder = this.add.image(cityLabel.x + cityLabel.width + spacingX, postcodeLabel.y, Config.ui.fieldLong.name)
            .setOrigin(0, .5)
        this.pageContainer1.add(cityBorder);

        const cityField = this.add.text(cityBorder.x + spacingX, cityBorder.y, "", Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(cityField);

        this.addFormField(cityBorder, cityLabel.text, cityField, character.city.value);

        const emailLabel = this.add.text(firstnameLabel.x, postcodeLabel.y + spacingY, Config.form.email, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(emailLabel);

        const emailBorder = this.add.image(firstnameBorder.x, emailLabel.y, Config.ui.fieldLong.name)
            .setOrigin(0, .5)
            .setTint(0xDDDDDD);
        this.pageContainer1.add(emailBorder);

        const emailField = this.add.text(emailBorder.x + spacingX, emailBorder.y, character.email.value, Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(emailField);

        const telephoneLabel = this.add.text(emailBorder.x + emailBorder.width + spacingX + 32, emailLabel.y, Config.form.telephone, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer1.add(telephoneLabel);

        const telephoneBorder = this.add.image(telephoneLabel.x + telephoneLabel.width + spacingX, telephoneLabel.y, Config.ui.fieldShort.name)
            .setOrigin(0, .5)
            .setTint(0xDDDDDD);
        this.pageContainer1.add(telephoneBorder);

        const telephoneField = this.add.text(telephoneBorder.x + spacingX, telephoneBorder.y, character.telephone.value, Config.fonts.handWritingForm)
            .setOrigin(0, .5)
        this.pageContainer1.add(telephoneField);
    }

    initPage2() {
        const character = Config.characters[Config.game.character].profile;
        const university = Config.universities[Config.game.university];
        const spacingX = 23;
        const spacingY = 70;

        this.pageContainer2 = this.add.container();

        const studiesBorder = this.add.image(Config.scale.centerX, 400, Config.ui.studiesBorder.name);
        this.pageContainer2.add(studiesBorder);

        const studiesTitle = this.add.text(studiesBorder.x, studiesBorder.y - 150, Config.form.studiesTitle, Config.fonts.h3)
            .setOrigin(.5)
            .setTintFill(0x000000);
        this.pageContainer2.add(studiesTitle);

        const specialityLabel = this.add.text(300, studiesTitle.y + spacingY, Config.form.specialty, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer2.add(specialityLabel);

        const specialityBorder = this.add.image(specialityLabel.x + specialityLabel.width + spacingX, specialityLabel.y, Config.ui.fieldXLong.name)
            .setOrigin(0, .5)
        this.pageContainer2.add(specialityBorder);

        const specialityField = this.add.text(specialityBorder.x + spacingX, specialityLabel.y, '', Config.fonts.handWritingForm)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer2.add(specialityField);

        this.addFormField(specialityBorder, specialityLabel.text, specialityField, character.studies.value);

        const educationLabel = this.add.text(specialityLabel.x, specialityLabel.y + spacingY, Config.form.education, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer2.add(educationLabel);

        const educationBorder = this.add.image(specialityBorder.x, educationLabel.y, Config.ui.fieldXLong.name)
            .setOrigin(0, .5)
        this.pageContainer2.add(educationBorder);

        const educationField = this.add.text(specialityField.x, educationLabel.y, '', Config.fonts.handWritingForm)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer2.add(educationField);

        this.addFormField(educationBorder, educationLabel.text, educationField, character.level.value);

        const establishmentLabel = this.add.text(specialityLabel.x, educationLabel.y + spacingY, Config.form.establishment, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer2.add(establishmentLabel);

        const establishmentBorder = this.add.image(specialityBorder.x, establishmentLabel.y, Config.ui.fieldXLong.name)
            .setOrigin(0, .5)
        this.pageContainer2.add(establishmentBorder);

        const establishmentField = this.add.text(specialityField.x, establishmentBorder.y, '', Config.fonts.handWritingForm)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer2.add(establishmentField);

        this.addFormField(establishmentBorder, establishmentLabel.text, establishmentField, university.name);

        const cityLabel = this.add.text(specialityLabel.x, establishmentLabel.y + spacingY, Config.form.establishmentCity, Config.fonts.h4)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer2.add(cityLabel);

        const cityBorder = this.add.image(specialityBorder.x, cityLabel.y, Config.ui.fieldXLong.name)
            .setOrigin(0, .5)
        this.pageContainer2.add(cityBorder);

        const cityField = this.add.text(specialityField.x, cityBorder.y, '', Config.fonts.handWritingForm)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer2.add(cityField);

        this.addFormField(cityBorder, cityLabel.text, cityField, university.city);

        const footerLabel = this.add.text(specialityLabel.x, cityLabel.y + 100, Config.form.footer, Config.fonts.h4)
            .setScale(.8)
            .setOrigin(0, .5)
            .setTintFill(0x000000);
        this.pageContainer2.add(footerLabel);

        this.pageContainer2.setPosition(0, Config.scale.height);
    }

    prevPage() {

    }

    nextPage() {
        if (this.formComplete) {
            this.gotoShopping();
            return;
        }
        this.formComplete = true;

        const positionY = Config.scale.height - this.paperBackground.height;
        this.tweens.add({
            targets: this.paperBackground,
            y: positionY,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 300
        });

        this.tweens.add({
            targets: this.pageContainer1,
            y: -800,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 1000
        });

        this.tweens.add({
            targets: this.pageContainer2,
            y: 150,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 1000
        });
    }

    openFolder() {
        this.tweens.add({
            targets: this.folderFront1,
            scaleY: {
                from: 1,
                to: 1.5
            },
            scaleX: {
                from: 1,
                to: 0
            },
            ease: Phaser.Math.Easing.Cubic.In,
            duration: 500,
            onComplete: function () {
                this.tweens.add({
                    targets: this.folderFront2,
                    scaleY: {
                        from: 1.5,
                        to: 1,
                    },
                    scaleX: {
                        from: 0,
                        to: 1,
                    },
                    ease: Phaser.Math.Easing.Cubic.Out,
                    duration: 500,
                    onComplete: function () {
                        this.hideFolder();
                    }.bind(this)
                });
            }.bind(this)
        });
    }

    hideFolder() {
        this.tweens.add({
            targets: this.folderContainer,
            y: Config.scale.height * 1.5,
            ease: Phaser.Math.Easing.Cubic.In,
            duration: 200,
            onComplete: function () {
                this.showPapers();
            }.bind(this)
        });
    }

    showPapers() {
        this.tweens.add({
            targets: [this.pageContainer1, this.paperBackground],
            y: 0,
            ease: Phaser.Math.Easing.Cubic.Out,
            duration: 1000
        });
    }

    initPopup() {
        this.popupWindow = this.add.container()
            .setVisible(false);

        const windowBackground = this.add.image(0, 0, Config.ui.square.name)
            .setOrigin(0)
            .setAlpha(.8)
            .setTint(0x000000)
            .setDisplaySize(Config.scale.width, Config.scale.height);

        this.fieldLabel = this.add.text(Config.scale.centerX, Config.scale.centerY - 400, "QUESTION", Config.fonts.h3)
            .setOrigin(.5);

        this.popupWindow.add(windowBackground);
        this.popupWindow.add(this.fieldLabel);

        this.buttons = [];

        const startY = this.fieldLabel.y + 100;
        const gapY = 150;

        for (let index = 0; index < Config.form.ANSWERS; index++) {
            const button = this.add.image(Config.scale.centerX, startY + (gapY * index), Config.ui.buttonXLong.name)
                .setInteractive({ cursor: 'pointer' })
                .on(Config.pointer.down, function () {
                    this.selectAnswer(button.answer);
                }.bind(this));

            const label = this.add.text(button.x, button.y, index, Config.fonts.h3)
                .setOrigin(.5);

            this.popupWindow.add(button);
            this.popupWindow.add(label);
            this.buttons.push({
                button: button,
                label: label
            })
        }
    }

    showPopup(data) {
        this.fieldLabel.text = data.label;

        const answers = Phaser.Utils.Array.Shuffle(data.answers);

        for (let index = 0; index < this.buttons.length; index++) {
            const button = this.buttons[index].button;
            button.answer = answers[index];
            const label = this.buttons[index].label;
            label.text = answers[index];
        }

        this.correctAnswer = {
            answer: data.correct,
            button: data.button,
            field: data.field,
        }
        this.popupWindow.setVisible(true);
        this.enableFields(false);
    }

    selectAnswer(answer) {
        if (answer == this.correctAnswer.answer) {
            this.correctAnswer.field.text = answer;
            this.answeredfields.push(this.correctAnswer.button);
            this.completeField();
            this.hidePopup();
        } else {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.formWrong);
        }
    }

    selectGender(gender) {
        const character = Config.characters[Config.game.character].profile;

        if (character.gender.value == gender) {
            this.completeField();
            return true;
        } else {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.formWrong);
        }

        return false;
    }

    getRandomAnswer(correctAnswer) {
        const randomAnswers = Phaser.Utils.Array.Shuffle(this.characterProfile.concat());
        randomAnswers.length = Config.form.ANSWERS;

        if (!randomAnswers.includes(correctAnswer)) {
            randomAnswers.pop();
            randomAnswers.push(correctAnswer);
        }

        return randomAnswers;
    }

    enableFields(enable) {
        for (let index = 0; index < this.formfields.length; index++) {
            enable ? this.formfields[index].setInteractive() : this.formfields[index].disableInteractive();
        }
        for (let index = 0; index < this.answeredfields.length; index++) {
            this.answeredfields[index].disableInteractive();
        }
    }

    hidePopup() {
        this.popupWindow.setVisible(false);
        this.enableFields(true);
        this.enableFields(true);
    }

    addFormField(button, label, field, answer) {
        button.setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                const data = {
                    label: label,
                    field: field,
                    button: button,
                    answers: this.getRandomAnswer(answer),
                    correct: answer
                }
                this.showPopup(data);
            }.bind(this));
        this.formfields.push(button);
    }

    gotoShopping() {
        Config.game.filesComplete = true;
        this.scene.start(Config.scenes.Office);
    }

    completeField() {
        this.fieldsComplete++;

        if (this.fieldsComplete == 7) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.formCorrect);
            this.time.delayedCall(2000, this.nextPage, [], this);
        }
        if (this.fieldsComplete == 11) {
            this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.formComplete);
            this.time.delayedCall(3000, this.gotoShopping, [], this);
        }
    }
};
