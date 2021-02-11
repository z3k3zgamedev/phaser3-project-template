import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';
import UiElements from '../Ui/UiElements.js';

export default class CharacterSelectScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.CharacterSelect);
    }

    init() {

    }

    preload() { }

    create() {
        this.characters = {};

        this.titleLabel = this.add.text(Config.scale.centerX, 150, Config.labels.characterSelect, Config.fonts.h1)
            .setOrigin(.5);

        this.initGraphics();
        this.initButtons();
    }

    initGraphics() {
        UI.drawRoundedRectangle(this, Config.ui.characterSelect);
        UI.drawRoundedRectangle(this, Config.ui.buttonMedium);
        UI.drawRoundedRectangle(this, Config.ui.buttonSmall);
    }

    initButtons() {
        const gap = 350;
        const left = Config.scale.centerX - gap;
        const bottomY = 950;
        const characterButtons = [];

        for (let index = 0; index < Config.game.CHARACTERS.length; index++) {
            const characterId = Config.game.CHARACTERS[index];
            const character = Config.characters[characterId];
            const posX = left + (gap * index);
            const button = this.add.image(posX, bottomY, Config.ui.characterSelect.name)
                .setInteractive({ cursor: 'pointer' })
                .on(Config.pointer.down, function () {
                    this.selectCharacter(characterId);
                }.bind(this));

            const avatar = this.add.image(posX, bottomY, Resources.image[`${characterId}Avatar`].key)
                .setDisplaySize(Config.ui.characterSelect.width * .95, Config.ui.characterSelect.height * .95);

            characterButtons.push(button);

            const fullCharacter = this.add.image(left, bottomY - 165, character.id)
                .setOrigin(.5, 1)
                .setScale(.5);

            // const nameLabel = this.add.text(Config.scale.centerX - 190, this.titleLabel.y + this.titleLabel.height, character.profile.firstName.value, Config.fonts.h2)

            const profileLabel = this.add.text(Config.scale.centerX - 190, this.titleLabel.y + 120, '', Config.fonts.characterDescriptionLabel)
            const profileValue = this.add.text(profileLabel.x + 250, profileLabel.y, '', Config.fonts.characterDescription)

            for (let profileIndex in character.profile) {
                profileLabel.text += character.profile[profileIndex].label + ":\n";
                profileValue.text += character.profile[profileIndex].value + "\n";

                if (profileValue.height > profileLabel.height) profileLabel.text += "\n";
            }

            const group = this.add.group();
            group.add(fullCharacter);
            // group.add(nameLabel);
            group.add(profileLabel);
            group.add(profileValue);
            this.characters[characterId] = group;
        }

        const btnStart = this.add.image(Config.scale.centerX + 50, bottomY - 220, Config.ui.buttonMedium.name)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.gotoOffice();
            }.bind(this));
        // UiElements.alignTo(btnStart, characterButtons[2], UiElements.RIGHT);

        this.labelStart = this.add.text(btnStart.x, btnStart.y, `${Config.labels.choose} ${Config.characters[Config.game.character].profile.firstName.value}`, Config.fonts.buttonSmall)
            .setOrigin(.5);

        this.selectCharacter("azri");
    }

    selectCharacter(character) {
        this.scene.get(Config.scenes.UserInterface).changeCharacter(character);
        for (let index in this.characters) this.characters[index].setVisible(false);
        Config.game.character = character;
        this.characters[character].setVisible(true);
        this.labelStart.text = `${Config.labels.choose} ${Config.characters[character].profile.firstName.value}`
    }

    gotoOffice() {
        this.scene.start(Config.scenes.Office);
    }
};
