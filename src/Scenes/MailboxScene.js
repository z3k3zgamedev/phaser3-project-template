import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class MailboxScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.Mailbox);
    }

    init() { }

    preload() { }

    create() {
        this.initGraphics();
        this.initButtons();

        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.mailbox);
    }

    initGraphics() {
        const background = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image.mailRoomBackground.key);
        UI.drawRectangle(this, Config.ui.square);
    }

    initButtons() {
        this.buttons = [];
        const characterProfile = Config.characters[Config.game.character].profile;
        const playerName = `${characterProfile.firstName.value} ${characterProfile.lastName.value}`;
        const randomNames = [playerName];
        const firstNames = Phaser.Utils.Array.Shuffle(['Annabelle',
            'Charlotte', 'Claire', 'Josephine', 'Sophie', 'Andre', 'Beau', 'Chase', 'Remy', 'Russell', 'Louise', 'Manon', 'Jules', 'Bastien', 'Capucine', 'Darcy', 'Delphine', 'Elodie', 'Maribel', 'Oceane', 'Ottilie', 'Quincy', 'Romilly', 'Sylvie', 'Dion', 'Emilien', 'Florent', 'Julius', 'Lionel', 'Montague', 'Pom', 'Quincy']);

        const lastNames = Phaser.Utils.Array.Shuffle([
            'Lavigne', 'Monet', 'Blanchet', 'Garnier', 'Moulin', 'Toussaint', 'Laurent', 'Dupont', 'Martin', 'Boucher', 'Allard', 'Chevrolet', 'Moreau', 'Corbin', 'Dubois', 'Leroy', 'Cartier', 'Duplantier', 'Fournier', 'Beaufort', 'Bonnet', 'Rousseau', 'Lyon', 'Granger', 'Fontaine', 'Chastain', 'Beaumont', 'Dufort', 'LaRue', 'Renaud', 'Vernier', 'Allemand', 'Couture', 'Abadie', 'Auclair', 'Bassett', 'Archambeau', 'Adrien', 'Aguillard', 'Aries', 'Abreo', 'Alarie', 'Barbier', 'Baudelaire', 'Cadieux', 'Abbe', 'Acord', 'Acy', 'Agard'
        ]);

        for (let index = 0; index < 19; index++) {
            randomNames.push(`${firstNames[index]} ${lastNames[index]}`);
        }

        const finalNames = Phaser.Utils.Array.Shuffle(randomNames);

        const startX = 175;
        const startY = 135;
        const distanceX = 385;
        const distanceY = 185;
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 5; col++) {
                const x = startX + (distanceX * col);
                const y = startY + (distanceY * row);
                const name = finalNames[col + (row * 5)];
                // const keyIndex = col + (row * 3);
                const numberButton = this.add.image(x, y, Config.ui.square.name)
                    .setAlpha(.6)
                    .setDisplaySize(330, 180)
                    .setInteractive({ cursor: 'pointer' })
                    .on(Config.pointer.down, function () {
                        if (playerName == name) this.selectCorrect();
                        else this.selectWrong();
                    }.bind(this));

                const nameLabel = this.add.text(x, y - 30, name, Config.fonts.dialog)
                    .setOrigin(.5);

                this.buttons.push(numberButton);
            }
        }

    }

    selectCorrect() {
        for (let index = 0; index < this.buttons.length; index++) {
            this.buttons[index].disableInteractive();
        }

        this.initPostcard();
    }

    selectWrong() {
        console.log("NO");

    }

    initPostcard() {
        this.scene.get(Config.scenes.UserInterface).showDialog(Config.characterDialog.postcardFront);

        const windowBackground = this.add.image(0, 0, Config.ui.square.name)
            .setOrigin(0)
            .setAlpha(.8)
            .setTint(0x000000)
            .setDisplaySize(Config.scale.width, Config.scale.height);

        Config.game.postCardId = Phaser.Math.RND.integerInRange(0, 2);
        this.postCardFront = this.add.image(Config.scale.centerX, Config.scale.centerY, Resources.image[`postcard${Config.game.postCardId + 1}`].key)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.flipPostCard();
            }.bind(this));

        this.postCardBack = this.add.container();

        const postCardBlank = this.add.image(0, 0, Resources.image.postcardBack.key)
            .setOrigin(0);

        const randomStamp = Phaser.Math.RND.integerInRange(0, 2);
        const randomAngle = (Math.random() - .5) * Math.PI * 2;

        const stamp = this.add.sprite(1057, 178, Resources.spritesheet.stamps.key, randomStamp)
            .setAngle(randomAngle);

        const university = Config.universities[Config.game.university];
        const firstName = Config.characters[Config.game.character].profile.firstName.value;
        const lastName = Config.characters[Config.game.character].profile.lastName.value;
        const messageText = this.add.text(35, 400, "", Config.fonts.handWriting)
            .setOrigin(0, .5);
        messageText.text = `Cher ${firstName}` + "\n\n";
        messageText.text += Config.postcards[Config.game.postCardId].text;

        const addressText = this.add.text(720, 350, "", Config.fonts.handWritingAddress)
        addressText.text = `${firstName} ${lastName}\n`;
        addressText.text += 'Résidence universitaire\n';
        addressText.text += `Campus de ${university.city}\n`;
        addressText.text += 'FRANCE';

        this.postCardBack.add(postCardBlank);
        this.postCardBack.add(stamp);
        this.postCardBack.add(messageText);
        this.postCardBack.add(addressText);
        this.postCardBack.setVisible(false);

        const rt = this.add.renderTexture(0, 0, 1200, 800);
        rt.draw(this.postCardBack);
        rt.saveTexture("postcard");
        rt.setVisible(false);

        this.postCardMessage = this.add.image(Config.scale.centerX, Config.scale.centerY, "postcard")
            .setScale(0, 1)
            .setInteractive({ cursor: 'pointer' })
            .on(Config.pointer.down, function () {
                this.gotoRegion();
            }.bind(this));

        rt.destroy();
    }

    flipPostCard() {
        this.time.delayedCall(500,
            function () {
                const sender = Config.postcards[Config.game.postCardId].sender;
                const dialog = Config.characterDialog.postcardBack.replace('[NAME]', sender);
                this.scene.get(Config.scenes.UserInterface).showDialog(dialog);
            }, [], this);

        this.tweens.add({
            targets: this.postCardFront,
            scaleX: {
                from: 1,
                to: 0
            },
            scaleY: {
                from: 1,
                to: 1.5
            },
            ease: Phaser.Math.Easing.Cubic.In,
            duration: 200,
            onComplete: function () {
                this.tweens.add({
                    targets: this.postCardMessage,
                    scaleY: {
                        from: 1.5,
                        to: 1,
                    },
                    scaleX: {
                        from: 0,
                        to: 1,
                    },
                    ease: Phaser.Math.Easing.Cubic.Out,
                    duration: 200,
                    onComplete: function () {
                    }.bind(this)
                });
            }.bind(this)
        });
    }

    gotoRegion() {
        this.scene.start(Config.scenes.FranceRegions);
    }

    // gotoComputer() {
    //     this.scene.start(Config.scenes.OfficeComputer);
    // }

    // gotoRolodex() {
    //     this.scene.start(Config.scenes.OfficeRolodex);
    // }

    // gotoKeypad() {
    //     this.scene.start(Config.scenes.OfficeKeypad);
    // }

    // gotoFiles() {
    //     this.scene.start(Config.scenes.OfficeFiles);
    // }
};
