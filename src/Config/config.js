import 'phaser';
import ButtonPlugin from '../z3k3zUi/plugins/button-plugin';

export default {
    type: Phaser.AUTO,
    parent: 'myCanvas',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
        centerX: 960,
        centerY: 540,
        isIOS: false,
        orientation: ''
    },
    // plugins: {
    //     global: [
    //         { key: 'ButtonPlugin', plugin: ButtonPlugin, start: true }
    //     ]
    // },
    scenes: {
        Boot: 'Boot',
        UserInterface: 'UserInterface',
        Preloader: 'Preloader',
        Title: 'Title',
        CharacterSelect: 'CharacterSelect',
        Office: 'Office',
        OfficeKeypad: 'OfficeKeypad',
        OfficeFiles: 'OfficeFiles',
        OfficeComputer: 'OfficeComputer',
        OfficeDialog: 'OfficeDialog',
        OfficeBrowser: 'OfficeBrowser',
        OfficeRolodex: 'OfficeRolodex',
        OfficePhone: 'OfficePhone',
        OfficeForm: 'OfficeForm',
        Shopping: 'Shopping',
        Calculate: 'Calculate',
        Mailbox: 'Mailbox',
        Culture: 'Culture',
        Campus: 'Campus',
        Congratulations: 'Congratulations',
        FranceRegions: 'FranceRegions',
        Form: 'Form',
    },
    backgroundColor: 0x000000,
    pointer: {
        move: 'pointermove',
        down: 'pointerdown',
        up: 'pointerup',
        over: 'pointerover',
        out: 'pointerout',
        drag: 'drag',
        dragEnter: 'dragenter',
        dragLeave: 'dragleave',
        dragStart: 'dragstart',
        dragEnd: 'dragend',
    },
    labels: {
        title: 'Immerse\nIn France',
        characterSelect: 'Character Select',
        hobbies: 'Hobbies',
        interests: 'Interests',
        start: 'Start',
        choose: 'Choose',
        call: 'Call',
        select: 'Select',
        load: 'Load',
        settings: 'Settings',
        mfucWebsite: "http://mfuc.org",
        photo: "Photo",
        fullname: "Nom et prénom",
        description: "Description",
        works: "Exemple de travail",
        doneShopping: "I'm done here."
    },
    fonts: {
        labels: {
            fontFamily: 'Lato',
            fontSize: 26,
            fontStyle: 'bold',
            fill: '#ffffff',
            align: 'center',
            wordWrap: { width: 500 }
        },
        button: {
            fontFamily: 'Lato',
            fontSize: 80,
            fontStyle: 'bold',
            fill: '#ffffff',
            align: 'center',
            wordWrap: { width: 500 }
        },
        keypadDisplay: {
            fontFamily: 'Lato',
            fontSize: 40,
            fontStyle: 'bold',
            fill: '#1D89FF',
            align: 'center',
            wordWrap: { width: 700 }
        },
        dialog: {
            fontFamily: 'Lato',
            fontSize: 22,
            fontStyle: 'bold',
            fill: '#000000',
            align: 'center',
            wordWrap: { width: 800 }
        },
        buttonSmall: {
            fontFamily: 'Lato',
            fontSize: 40,
            fontStyle: 'bold',
            fill: '#ffffff',
            align: 'center',
            wordWrap: { width: 500 }
        },
        h1: {
            fontFamily: 'Lato',
            fontSize: 100,
            // fontStyle: 'bold',
            fill: '#ffffff',
            align: 'center',
        },
        h2: {
            fontFamily: 'Lato',
            fontSize: 70,
            // fontStyle: 'bold',
            fill: '#ffffff',
            align: 'center',
        },
        h3: {
            fontFamily: 'Lato',
            fontSize: 40,
            // fontStyle: 'bold',
            fill: '#ffffff',
            align: 'center',
        },
        h4: {
            fontFamily: 'Lato',
            fontSize: 30,
            // fontStyle: 'bold',
            fill: '#ffffff',
            align: 'center',
        },
        shoppingList: {
            fontFamily: 'Lato',
            fontSize: 32,
            // fontStyle: 'bold',
            fill: '#ffffff',
            align: 'left',
            lineSpacing: 10,
            wordWrap: { width: 280 }
        },
        shoppingTotal: {
            fontFamily: 'Lato',
            fontSize: 32,
            // fontStyle: 'bold',
            fill: '#ffffff',
            align: 'left',
            lineSpacing: 10,
            wordWrap: { width: 400 }
        },
        paragraph: {
            fontFamily: 'Lato',
            fontSize: 24,
            // fontStyle: 'bold',
            fill: '#ffffff',
            align: 'center',
        },
        characterDescriptionLabel: {
            fontFamily: 'Lato',
            fontSize: 24,
            fontStyle: 'bold',
            fill: '#ffffff',
            align: 'right',
            lineSpacing: 10,
            wordWrap: { width: 250 }
        },
        characterDescription: {
            fontFamily: 'Lato',
            fontSize: 24,
            // fontStyle: 'bold',
            fill: '#ffffff',
            align: 'left',
            lineSpacing: 11,
            wordWrap: { width: 400 }
        },
        numberDisplay: {
            fontFamily: 'Lato',
            fontSize: 34,
            // fontStyle: 'bold',
            fill: '#000000',
            align: 'right'
        },
        regionName: {
            fontFamily: 'Lato',
            fontSize: 24,
            // fontStyle: 'bold',
            fill: '#000000',
            align: 'center',
            wordWrap: { width: 150 }
        },
        artistDescription: {
            fontFamily: 'Lato',
            fontSize: 22,
            // fontStyle: 'bold',
            fill: '#000000',
            align: 'center',
            wordWrap: { width: 300 }
        },
        addressHeader: {
            fontFamily: 'Lato',
            fontSize: 30,
            // fontStyle: 'bold',
            fill: '#000000',
            align: 'left',
            wordWrap: { width: 350 }
        },
        addressParagraph: {
            fontFamily: 'Lato',
            fontSize: 24,
            // fontStyle: 'bold',
            fill: '#000000',
            align: 'left',
            lineSpacing: 10,
            wordWrap: { width: 350 }
        },
        handWriting: {
            fontFamily: 'Shadows Into Light',
            fontSize: 24,
            // fontStyle: 'bold',
            fill: '#000000',
            align: 'left',
            // lineSpacing: 10,
            wordWrap: { width: 600 }
        },
        handWritingAddress: {
            fontFamily: 'Shadows Into Light',
            fontSize: 40,
            // fontStyle: 'bold',
            fill: '#000000',
            align: 'left',
            lineSpacing: 20,
            wordWrap: { width: 500 }
        },
        handWritingForm: {
            fontFamily: 'Shadows Into Light',
            fontSize: 40,
            // fontStyle: 'bold',
            fill: '#000000',
            align: 'left',
            lineSpacing: 20,
            // wordWrap: { width: 500 }
        },
        speechBalloon: {
            fontFamily: 'Lato',
            fontSize: 40,
            // fontStyle: 'bold',
            fill: '#004668',
            align: 'left',
            lineSpacing: 10,
            wordWrap: { width: 1630 }
        },
    },
    ui: {
        artistButton: {
            name: 'artistButton',
            width: 320,
            height: 180,
            corner: 15,
            lineAlpha: 0,
            color: [0xffffff]
        },
        scrollButton: {
            name: 'scrollButton',
            width: 40,
            height: 210,
            corner: 10,
            color: [0xB5B5B5]
        },
        scrollTrack: {
            name: 'scrollTrack',
            width: 40,
            height: 700,
            color: [0x919191]
        },
        formAirportBorder: {
            name: 'formAirportBorder',
            width: 1400,
            height: 170,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        formAirportDeparture: {
            name: 'formAirportDeparture',
            width: 800,
            height: 60,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xDDDDDD]
        },
        personalBorder: {
            name: 'personalBorder',
            width: 1400,
            height: 570,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        studiesBorder: {
            name: 'studiesBorder',
            width: 1400,
            height: 400,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        fieldShort: {
            name: 'fieldShort',
            width: 300,
            height: 60,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        fieldMedium: {
            name: 'fieldMedium',
            width: 500,
            height: 60,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        fieldLong: {
            name: 'fieldLong',
            width: 700,
            height: 60,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        fieldXLong: {
            name: 'fieldXLong',
            width: 950,
            height: 60,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        fieldXXLong: {
            name: 'fieldXXLong',
            width: 1120,
            height: 60,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        fieldPhoto: {
            name: 'fieldPhoto',
            width: 200,
            height: 200,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        checkBox: {
            name: 'checkBox',
            width: 30,
            height: 30,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },

        logoBorder: {
            name: 'logoBorder',
            width: 250,
            height: 250,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        popupBorder: {
            name: 'popupBorder',
            width: 1000,
            height: 602,
            lineAlpha: 1,
            lineColor: [0x000000],
            thickness: 2,
            color: [0xFFFFFF]
        },
        square: {
            name: 'square',
            width: 100,
            height: 100,
            color: [0xE472C4]
        },
        circle: {
            name: 'circle',
            radius: 50,
            color: [0xE472C4]
        },
        keypadDot: {
            name: 'keypadDot',
            radius: 20,
            color: [0xED5657]
        },
        triangle: {
            name: 'triangle',
            width: 100,
            height: 100,
            color: [0xE472C4]
        },
        button: {
            name: 'button',
            width: 600,
            height: 150,
            corner: 30,
            color: [0xE472C4]
        },
        buttonLong: {
            name: 'buttonLong',
            width: 600,
            height: 120,
            corner: 30,
            color: [0xE472C4]
        },
        buttonXLong: {
            name: 'buttonXLong',
            width: 1000,
            height: 120,
            corner: 30,
            color: [0xE472C4]
        },
        buttonMedium: {
            name: 'buttonMedium',
            width: 400,
            height: 120,
            corner: 30,
            color: [0xE472C4]
        },
        buttonSmall: {
            name: 'buttonSmall',
            width: 250,
            height: 70,
            corner: 20,
            color: [0xE472C4]
        },
        buttonSmallLong: {
            name: 'buttonSmallLong',
            width: 600,
            height: 70,
            corner: 20,
            color: [0xE472C4]
        },
        characterSelect: {
            name: 'characterSelect',
            width: 200,
            height: 200,
            corner: 20,
            color: [0xE472C4]
        },
        textInputBackground: {
            name: 'textInputBackground',
            width: 420,
            height: 75,
            corner: 15,
            color: [0x33250B]
        },
        scoreInputBackground: {
            name: 'scoreInputBackground',
            width: 450,
            height: 90,
            corner: 15,
            color: [0x33250B]
        },
        dialogBox: {
            name: 'dialogBox',
            width: 850,
            height: 60,
            corner: 15,
            color: [0xBBE1F5]
        },
        dialogBoxDropZone: {
            name: 'dialogBoxDropZone',
            width: 850,
            height: 60,
            corner: 15,
            color: [0x4E4E4E]
        },
        dialogBoxAnswer: {
            name: 'dialogBoxAnswer',
            width: 850,
            height: 60,
            corner: 15,
            color: [0xECAC56]
        },
        keypadDisplay: {
            name: 'keypadDisplay',
            width: 850,
            height: 250,
            corner: 15,
            color: [0xBBE1F5]
        },
        keypadAnswer: {
            name: 'keypadAnswer',
            width: 730,
            height: 190,
            corner: 90,
            lineColor: [0x1D89FF],
            thickness: 5,
            alpha: 0,
            color: [0x000000]
        },
        gameBackground: {
            name: 'gameBackground',
            width: 960,
            height: 1280,
            corner: 15,
            color: [0x333F40, 0x333F40, 0x1B4347, 0x1B4347]
        }
    },
    user: {
        email: '',
        score: 0,
        name: '',
        rank: '-',
    },
    game: {
        CURRENCY: "‎€",
        CHARACTERS: ["azri", "chloe", "sammi"],
        character: "azri",
        adminContact: null,
        university: 'sciencespo',
        postcard: 0,
        cardIndex: 0,
        postCardId: 0,
        card: null,
        computerComplete: false,
        keypadComplete: false,
        filesComplete: false,
        rolodexComplete: false,
        phoneComplete: false,
        marketItems: []
    },
    characters: {
        azri: {
            id: "azri",
            hobbies: ["Photography", "Playing the guitar", "Filmmaking"],
            studies: ["Film Production", "Photography"],
            profile: {
                lastName: {
                    label: "Nom",
                    value: "Bin Ali"
                },
                firstName: {
                    label: "Prénom",
                    value: "Azri"
                },
                gender: {
                    label: "Sexe",
                    value: "Male"
                },
                dob: {
                    label: "Date de naissance",
                    value: "07/08/2003"
                },
                address: {
                    label: "Adresse",
                    value: "28 Jalan Ban Hock"
                },
                postcode: {
                    label: "Code Postal",
                    value: "93100"
                },
                city: {
                    label: "Ville",
                    value: "Kota Kinabulu"
                },
                state: {
                    label: "État",
                    value: "Sabah"
                },
                country: {
                    label: "Pays",
                    value: "Malaysia"
                },
                nationality: {
                    label: "Nationalité",
                    value: "Malaisienne"
                },
                studies: {
                    label: "Domaine d'études",
                    value: "Production de films et de vidéos, arts et photographie"
                },
                level: {
                    label: "Niveau d'études ciblé",
                    value: "Licence"
                },
                french: {
                    label: "Niveau en français",
                    value: "B2"
                },
                hobbies: {
                    label: "Loisirs",
                    value: "Photographie, guitare, réalisation de films"
                },
                email: {
                    label: "Email",
                    value: "azri.bin.ali@gmail.com"
                },
                telephone: {
                    label: "Téléphone",
                    value: "012-72729457"
                },
            },
            universities: [
                "ensad",
                "unicaen",
                "unistra",
                "femis",
                "univ",
                "beauxartsparis",
                "sorbonne",
                "ifmparis",
                "ecoledulouvre",
                "bordeaux",
            ]
        },
        chloe: {
            id: "chloe",
            hobbies: ["Reading", "Socialising", "Arts & Craft"],
            studies: ["Biology", "Pharmacy", "Microbiology"],
            profile: {
                lastName: {
                    label: "Nom",
                    value: "Wang"
                },
                firstName: {
                    label: "Prénom",
                    value: "Chloe"
                },
                gender: {
                    label: "Sexe",
                    value: "Female"
                },
                dob: {
                    label: "Date de naissance",
                    value: "20/03/2002"
                },
                address: {
                    label: "Adresse",
                    value: "Georgetown, Penang"
                },
                postcode: {
                    label: "Code Postal",
                    value: "93100"
                },
                city: {
                    label: "Ville",
                    value: "Kota Kinabulu"
                },
                state: {
                    label: "État",
                    value: "Sabah"
                },
                country: {
                    label: "Pays",
                    value: "Malaysia"
                },
                nationality: {
                    label: "Nationalité",
                    value: "Malaisienne"
                },
                studies: {
                    label: "Domaine d'études",
                    value: "Biologie"
                },
                level: {
                    label: "Niveau d'études ciblé",
                    value: "Ingénieur"
                },
                french: {
                    label: "Niveau en français",
                    value: "C1"
                },
                hobbies: {
                    label: "Loisirs",
                    value: "Lecture, arts créatifs, équitation"
                },
                email: {
                    label: "Email",
                    value: "wang.chloe@gmail.com"
                },
                telephone: {
                    label: "Téléphone",
                    value: "012-35143221"
                },
            },
            universities: [
                "insa",
                "vetagro",
                "unicaen",
                "unistra",
                "umontpellier",
                "polytechnique",
                "sorbonne",
                "agroparistech",
                "bordeaux",
            ]
        },
        sammi: {
            id: "sammi",
            hobbies: ["Programming", "Playing Games", "Puzzle Solving"],
            studies: ["Accounting", "Engineering", "Computer Science"],
            profile: {
                lastName: {
                    label: "Nom",
                    value: "Subramaniam"
                },
                firstName: {
                    label: "Prénom",
                    value: "Sammi"
                },
                gender: {
                    label: "Sexe",
                    value: "Male"
                },
                dob: {
                    label: "Date de naissance",
                    value: "04/11/2000"
                },
                address: {
                    label: "Adresse",
                    value: "Jalan Ampang"
                },
                postcode: {
                    label: "Code Postal",
                    value: "56300"
                },
                city: {
                    label: "Ville",
                    value: "Kuala Lumpur"
                },
                state: {
                    label: "État",
                    value: "Wilayah Persekutuan"
                },
                country: {
                    label: "Pays",
                    value: "Malaysia"
                },
                nationality: {
                    label: "Nationalité",
                    value: "Malaisienne"
                },
                studies: {
                    label: "Domaine d'études",
                    value: "Informatique"
                },
                level: {
                    label: "Niveau d'études ciblé",
                    value: "Master"
                },
                french: {
                    label: "Niveau en français",
                    value: "A2"
                },
                hobbies: {
                    label: "Loisirs",
                    value: "Puzzle, programmation, jeux vidéo"
                },
                email: {
                    label: "Email",
                    value: "supersammi@gmail.com"
                },
                telephone: {
                    label: "Téléphone",
                    value: "011-28479128"
                },
            },
            universities: [
                "insa",
                "marseille",
                "unicaen",
                "artsetmetiers",
                "polytechnique",
                "unistra",
                "femis",
                "umontpellier",
                "univ",
                "sorbonne",
                "hec",
                "centralelille",
                "essec",
                "bordeaux",
            ]
        },
        tiger: {
            id: 'tiger',
            name: "Tiger",
            hobbies: "",
            studies: "",
        },
    },
    universities: {
        sciencespo: {
            id: 'sciencespo',
            name: "Sciences Po Paris",
            city: 'Paris',
            postcode: '75007',
            address: [
                '27, rue Saint Guillaume - ',
                '75007 Paris',
                'France',
                'Tel: +33 (0)1 45 49 50 50',
                'Fax: +33 (0)1 42 22 31 26'
            ],
            url: 'https://www.sciencespo.fr'
        },
        insa: {
            id: 'insa',
            name: "INSA Toulouse",
            city: 'Toulouse',
            postcode: '31000',
            address: [
                '135, Avenue de Rangueil',
                '31000 Toulouse',
                'France',
                'Tel: +33 (0)5 61 55 95 13',
                'Fax: +33 (0)5 61 55 95 00'
            ],
            url: 'https://www.insa-toulouse.fr'
        },
        marseille: {
            id: "marseille",
            name: "École nationale supérieure d'architecture de Marseille",
            city: 'Marseille',
            postcode: '13009',
            address: [
                '184, avenue de Luminy - case 924 ',
                '13009 Marseille',
                'France',
                'Tel: +33 (0)4 91 82 71 00',
                'Fax: +33 (0)4 91 82 71 80'
            ],
            url: 'https://www.marseille.archi.fr'
        },
        ensad: {
            id: "ensad",
            name: "Ensad (École nationale supérieure des arts décoratifs)",
            city: 'Paris',
            postcode: '75005',
            address: [
                '29 Rue des Longs Prés',
                '75005 Paris',
                'France',
                '+33 9 74 75 36 46'
            ],
            url: 'https://www.ensad.fr'
        },
        vetagro: {
            id: "vetagro",
            name: "VetAgro Sup",
            city: "Marcy-l'Etoile",
            postcode: '69280',
            address: [
                "89 Avenue de l'Europe",
                "69280 Marcy-l'Etoile",
                'France',
                '+33 (0)4 73 98 13 13'
            ],
            url: 'http://www.vetagro-sup.fr'
        },
        grenoble: {
            id: "grenoble",
            name: "Grenoble Ecole de management",
            city: 'Grenoble',
            postcode: '38000',
            address: [
                '12 rue Pierre Sémard',
                '38000 Grenoble',
                'France',
                'Tel: +33 4 76 70 60 60'
            ],
            url: 'https://en.grenoble-em.com'
        },
        unicaen: {
            id: "unicaen",
            name: "Université de Caen Normandie",
            city: 'CAEN',
            postcode: '14000',
            address: [
                'Esplanade de la Paix',
                'CS 14032',
                '14000 CAEN',
                'France',
                'Tel: +33 2 31 56 55 00'
            ],
            url: 'http://welcome.unicaen.fr/'
        },
        artsetmetiers: {
            id: "artsetmetiers",
            name: "Arts et Métiers",
            city: 'Paris',
            postcode: '75013',
            address: [
                'Allée Jean Jacques Soulier',
                '75013 Paris',
                'France',
                '+33140516200'
            ],
            url: 'https://artsetmetiers.fr'
        },
        polytechnique: {
            id: "polytechnique",
            name: "Polytechnique",
            city: 'Palaiseau',
            postcode: '91128',
            address: [
                '5 Avenue Le Chatelier 2ème étage',
                '91128 Palaiseau',
                'France',
                '+33140422222'
            ],
            url: 'https://www.polytechnique.edu/fr'
        },
        unistra: {
            id: "unistra",
            name: "Université de Strasbourg",
            city: 'Strasbourg',
            postcode: '67081',
            address: [
                '4 Rue Blaise Pascal',
                '67081 Strasbourg',
                'France',
                '+33368850000'
            ],
            url: 'http://en.unistra.fr/'
        },
        femis: {
            id: "femis",
            name: "Ensmis (École nationale supérieure des métiers de l'image et du son)",
            city: 'Paris',
            postcode: '75018',
            address: [
                '6 Rue Francœur',
                '75018 Paris',
                'France',
                '+33153412100'
            ],
            url: 'https://www.femis.fr'
        },
        institutpaulbocuse: {
            id: "institutpaulbocuse",
            name: "Institut Paul Bocuse",
            city: 'Ecully',
            postcode: '69130',
            address: [
                'Château du Vivier, 1A Chemin de Calabert',
                '69130 Ecully',
                'France',
                '+60362504415'
            ],
            url: 'https://en.institutpaulbocuse.com'
        },
        umontpellier: {
            id: "umontpellier",
            name: "Université de Montpellier",
            city: 'Montpellier',
            postcode: '34090',
            address: [
                '5 Boulevard Henri IV',
                '34090 Montpellier',
                'France',
                '+33467142342'
            ],
            url: 'https://umontpellier.fr/'
        },
        univ: {
            id: "univ",
            name: "EJCAM Marseille (Ecole de journalisme et de communication d'Aix-Marseille)",
            city: 'Marseille',
            postcode: '13392',
            address: [
                '21 Rue Virgile Marron',
                '13392 Marseille',
                'France',
                '+33491243200'
            ],
            url: 'https://ejcam.univ-amu.fr'
        },
        beauxartsparis: {
            id: "beauxartsparis",
            name: "Ensba (École nationale supérieure des beaux-arts) ",
            city: 'Paris',
            postcode: '75006',
            address: [
                '14 Rue Bonaparte',
                '75006 Paris',
                'France',
                '+33147035000'
            ],
            url: 'https://www.beauxartsparis.fr/'
        },
        sorbonne: {
            id: "sorbonne",
            name: "Sorbonne Université",
            city: 'Paris',
            postcode: '75006',
            address: [
                "15-21 Rue de l'École de Médecine",
                '75006 Paris',
                'France',
                '+33144274427'
            ],
            url: 'https://www.sorbonne-universite.fr/'
        },
        hec: {
            id: "hec",
            name: "HEC Paris",
            city: 'Jouy-en-Josas',
            postcode: '78350',
            address: [
                '1 Rue de la Libération',
                '78350 Jouy-en-Josas',
                'France',
                '+33139677000'
            ],
            url: 'https://www.hec.edu/en'
        },
        centralelille: {
            id: "centralelille",
            name: "Centrale Lille",
            city: "Villeneuve d'Ascq",
            postcode: '59651',
            address: [
                'Cité scientifique',
                "CS 20048",
                "59651 Villeneuve d'Ascq",
                "France",
                '+330320335353'
            ],
            url: 'https://centralelille.fr/'
        },
        agroparistech: {
            id: "agroparistech",
            name: "AgroParisTech",
            city: "Paris",
            postcode: '75005',
            address: [
                '16 Rue Claude Bernard',
                "75005 Paris",
                'France',
                '+33144081843'
            ],
            url: 'http://www2.agroparistech.fr/'
        },
        ifmparis: {
            id: "ifmparis",
            name: "Institut français de la mode (IFM)",
            city: "Paris",
            postcode: '75013',
            address: [
                "36 Quai d'Austerlitz",
                "75013 Paris",
                'France',
                '+33170388989'
            ],
            url: 'https://www.ifmparis.fr/en/'
        },
        inalco: {
            id: "inalco",
            name: "INALCO",
            city: "Paris",
            postcode: '75013',
            address: [
                '65 Rue des Grands Moulins, ',
                "75013 Paris",
                'France',
                '+33181701014'
            ],
            url: 'http://www.inalco.fr/'
        },
        ecoleducasse: {
            id: "ecoleducasse",
            name: "L'Ecole Ducasse",
            city: "Paris",
            postcode: '75016',
            address: [
                '64 Rue du Ranelagh',
                "75016 Paris",
                'France',
                '+33144909100'
            ],
            url: 'https://www.ecoleducasse.com'
        },
        ecoledulouvre: {
            id: "ecoledulouvre",
            name: "Ecole du Louvre",
            city: "Paris",
            postcode: '75001',
            address: [
                'Palais du Louvre Place du Carrousel',
                "Porte Jaujard",
                '75001 Paris, France',
                '+33155351800'
            ],
            url: 'http://www.ecoledulouvre.fr/'
        },
        essec: {
            id: "essec",
            name: "ESSEC Business School",
            city: "Cergy",
            postcode: '95000',
            address: [
                '3 Avenue Bernard Hirsch',
                "95000 Cergy",
                'France',
                '+33134433000'
            ],
            url: 'https://www.essec.edu'
        },
        bordeaux: {
            id: "bordeaux",
            name: "Université de Bordeaux",
            city: "Talence",
            postcode: '33400',
            address: [
                '146 Rue Léo Saignat',
                "33400 Talence",
                'France',
                '+33557571010'
            ],
            url: 'https://www.u-bordeaux.fr/'
        },
    },
    businessCards: {
        afpenang: {
            id: 'afpenang',
            name: "Alliance Française de Penang",
            address: [
                '46, Jalan Phuah Hin Leong',
                '10050 Georgetown',
                'Penang',
                'https://www.afpenang.com',
                '+6042276008'
            ]
        },
        alliancefrancaise: {
            id: 'alliancefrancaise',
            name: "Alliance Française de Kuala Lumpur",
            address: [
                '2F, 14 Jalan Telawi 2',
                'Bangsar Baru',
                '59100 Kuala Lumpur',
                'https://www.alliancefrancaise.org.my',
                '+60326947880'
            ]
        },
        ambafrance: {
            id: "ambafrance",
            name: "Ambassade de France en Malaisie",
            phone: "0320535500",
            address: [
                'Level 31, Integra Tower (The Intermark)',
                '348 Jalan Tun Razak',
                '50400 Kuala Lumpur',
                'https://my.ambafrance.org',
                '+60320535500'
            ]
        },
        ameli: {
            id: "ameli",
            name: "Caisse Primaire d’Assurance Maladie",
            address: [
                '29 Rue des Longs Prés',
                '92100 Boulogne-Billancourt',
                'France',
                'https://www.ameli.fr',
                '+33974753646'
            ]
        },
        caf: {
            id: "caf",
            name: "Caisse d’Allocations Familiales",
            address: [
                '67 Boulevard Marius Vivier Merle',
                '69003 Lyon',
                'France',
                'https://www.caf.fr',
                '+330561997700'
            ]
        },
        campusfrance: {
            id: "campusfrance",
            name: "Campus France",
            address: [
                '144-02, 2nd Floor',
                '55100 Kuala Lumpur',
                'Malaysia',
                'www.sncf.com',
                '+60321427475'
            ]
        },
        cpu: {
            id: "cpu",
            name: "Conférence des Présidents d’Université",
            address: [
                '103, boulevard Saint-Michel',
                '75005 Paris',
                'France',
                'https://www.cpu.fr',
                '+33144329000'
            ]
        },
        crous: {
            id: "crous",
            name: "Centre régional des œuvresuniversitaires et scolaires",
            address: [
                'Allée Jean Jacques Soulier',
                '03100 Montluçon',
                'France',
                'https://www.crous-paris.fr',
                '+33140516200'
            ]
        },
        edf: {
            id: "edf",
            name: "Electricité de France",
            address: [
                '22-30 Avenue de Wagram',
                '75008 Paris',
                'France',
                'https://www.edf.fr',
                '+33140422222'
            ]
        },
        educationmalaysia: {
            id: "educationmalaysia",
            name: "Education Malaysia Global Services",
            address: [
                '20th Floor Menara TA One',
                '22 Jalan P Ramlee',
                '50250 Kuala Lumpur',
                'https://educationmalaysia.gov.my',
                '+60327825888'
            ]
        },
        laposte: {
            id: "laposte",
            name: "La Poste",
            address: [
                '16 Rue Étienne Marcel',
                '75002 Paris',
                'France',
                'https://www.laposte.fr',
                '+33810821821'
            ]
        },
        lfkl: {
            id: "lfkl",
            name: "Lycée Français de Kuala Lumpur",
            address: [
                '34, Jalan Dutamas Raya',
                '51200 Kuala Lumpur',
                'Wilayah Persekutuan Kuala Lumpur',
                'https://www.lfkl.edu.my',
                '+60362504415'
            ]
        },
        lmde: {
            id: "lmde",
            name: "La Mutuelle Des Etudiants",
            address: [
                'TSA 9700159779',
                'LILLE Cedex 9',
                'France',
                'https://www.lmde.fr',
                '+33811505633'
            ]
        },
        mfuc: {
            id: "mfuc",
            name: "Malaysia-France University Centre (MFUC)",
            address: [
                '144-02, 2nd Floor, Patent House',
                'Jalan Bukit Bintang',
                '55100 Kuala Lumpur',
                'https://www.mfuc.org',
                '+60321427475'
            ]
        },
        mohe: {
            id: "mohe",
            name: "Ministry of Higher Education",
            address: [
                'No. 2, Menara 2,',
                'Jalan P5/6, Presint 5',
                '62200 Putrajaya, Malaysia',
                'https://www.mohe.gov.my',
                '+60380008000'
            ]
        },
        prefecturedepolice: {
            id: "prefecturedepolice",
            name: "Préfecture de Police",
            address: [
                'Place Louis Lepine1 rue de Lutèce',
                '75004 Paris',
                'France',
                'https://www.prefecturedepolice.interieur.gouv.fr',
                '+33153735373'
            ]
        },
        ratp: {
            id: "ratp",
            name: "Electricité de France",
            address: [
                '18 Boulevard de Picpus',
                '75012 Paris',
                'France',
                'https://www.ratp.fr',
                '+33146281085'
            ]
        },
        sncf: {
            id: "sncf",
            name: "SNCF",
            address: [
                'Centre Commercial Italie 2',
                "30 Avenue d'Italie Paris",
                '75013 Paris, France',
                'https://www.sncf.com',
                '+33184943635'
            ]
        },
    },
    computerQuestions: [
        {
            question: "Faire ses études en France, __________ facile !",
            answers: ['c’est', 'ce sont', 'il est'],
            correct: 'c’est'
        },
        {
            question: "__________ les étudiants arrivent à 9 heures.",
            answers: ['Tous', 'Tout', 'Toutes'],
            correct: 'Tous'
        },
        {
            question: "Pour aller __________ restaurant universitaire, il faut continuer tout droit.",
            answers: ['au', 'à la', 'aux'],
            correct: 'au'
        },
        {
            question: "__________ est - ce que tu vas ? A la bibliothèque.",
            answers: ['Quand', 'Où', 'Qui'],
            correct: 'Où'
        },
        {
            question: "C’est __________ ? C’est mon colocataire, Malo.",
            answers: ['qui', 'quoi', 'comment'],
            correct: 'qui'
        },
        {
            question: "Comment réglez - vous vos achats ? __________.",
            answers: ['En mars', 'En bleu', 'En liquide'],
            correct: 'En liquide'
        }
    ],
    keypadQuestions: [
        {
            question: "Il va chercher un visa __________ consulat. ",
            answers: ['à l’', 'au', 'en'],
            correct: 'au'
        },
        {
            question: "Anthony habite __________ Paris.",
            answers: ['en', 'au', 'à'],
            correct: 'à'
        },
        {
            question: "J’arrive __________ coiffeur.",
            answers: ['de chez le', 'de la', 'des'],
            correct: 'de chez le'
        },
        {
            question: "S’il te plaît, achète un peu __________ jus d’orange.",
            answers: ['du', 'de la', 'de'],
            correct: 'de'
        },
        {
            question: "J’étudie __________ France.",
            answers: ['en', 'dans la', 'à la'],
            correct: 'en'
        },
        {
            question: "__________ université est très agréable.",
            answers: ['Ma', 'Mon', 'Mes'],
            correct: 'Mon'
        },
        {
            question: "__________ chambre est très grande.",
            answers: ['Ce', 'Cet', 'Cette'],
            correct: 'Cette'
        },
        {
            question: "Vous __________ un balcon.",
            answers: ['avez', 'ont', 'a'],
            correct: 'avez'
        },
        {
            question: "Il y __________ beaucoup d’universités dans tout le pays.",
            answers: ['a', 'ont', 'est'],
            correct: 'a'
        }
    ],
    dialogText: [
        {
            text: 'Ambassade de France bonjour !',
            position: 0
        },
        {
            text: 'Bonjour Madame, je voudrais prendre rendez-vous pour un visa.',
            position: -1
        },
        {
            text: 'Oui, pour quel type de visa ?',
            position: -1
        },
        {
            text: 'Un visa étudiant.',
            position: -1
        },
        {
            text: 'D’accord, je vous propose les  11, 12 ou 13 mai à 11h.',
            position: -1
        },
        {
            text: 'Je préfère le 11 mai.',
            position: -1
        },
        {
            text: 'D’accord, c’est noté pour la date. Quel est votre nom ?',
            position: -1
        },
        {
            text: 'Je m’appelle [NAME]',
            position: 7
        },
        {
            text: 'C’est noté. Vous avez donc rendez-vous le 11 mai à 11h. Veuillez apporter votre passeport et votre dossier de demande de visa.',
            position: -1
        },
        {
            text: 'Où est-ce que je peux trouver le dossier de demande de visa ?',
            position: -1
        },
        {
            text: 'Sur le site internet de l’ambassade dans la section « visas ».',
            position: 10
        },
        {
            text: 'Très bien, merci, je vais regarder.',
            position: -1
        },
        {
            text: 'Je vous en prie. Au revoir et bonne journée.',
            position: -1
        },
        {
            text: 'Au revoir Madame.',
            position: 13
        }
    ],
    postcards: [
        {
            id: 1,
            sender: 'Emilie',
            region: 13,
            text: `Je suis en vacances avec ma famille dans une magnifique région de France.
En ce mois de mai, il fait déjà chaud et je profite des nombreuses plages. L’eau est turquoise.
Demain, nous allons commencer une grande randonnée qui s’appelle le GR20, nous allons marcher pendant 9 jours !
Je pense que je vais être très fatiguée !
Je mange très bien. Mes spécialités préférées sont les biscuits à la châtaigne et le fromage de chèvre appelé Brocciu.
Hier j’ai visité la maison où Napoléon Bonaparte est né, c’était très intéressant.

Je pense que tu aimerais cette région.
Viens avec moi la prochaine fois !
    
A bientôt.
Emilie`
        },
        {
            id: 2,
            sender: 'Pierre',
            region: 3,
            text: `Petit coucou d'une magnifique région française où il fait sec et froid en ce mois de novembre. 
Je fais beaucoup de vélo et demain je vais me promener le long du Rhin, le fleuve qui marque la frontière avec l'Allemagne. J'ai vu beaucoup d'oiseaux noirs et blancs avec de grandes pattes, appelés cigognes !
Je mange de la choucroute (un plat avec du chou, des pommes de terre et de la viande) et des biscuits appelés madeleines.
Hier, j'ai visité la Petite France et le château du Haut-Koenigsbourg. Cette après-midi, je visite la ville où Clovis est devenu le premier roi des Francs : c'est aussi là qu'on fabrique le champagne.

Je pense que tu aimerais cette région.
Viens avec moi la prochaine fois !
A très bientôt,

Pierre`
        },
        {
            id: 3,
            sender: "Eloi",
            region: 6,
            text: `Petit coucou d'une magnifique région française où il fait humide et nuageux en ce mois de mai. 
Je fais beaucoup d'équitation et demain je vais faire du canoé sur la Loire. J'ai vu beaucoup d’animaux dans la nature comme des cerfs et des sangliers et le zoo de Beauval est immense.
Je mange des pâtés de pomme de terre et du crottin de Chavignol (c’est un fromage de chèvre).
Les châteaux sont magnifiques. Hier, j'ai visité le château de Chambord, j’ai adoré son architecture. Cette après-midi, je visite la ville où Henri IV est devenu roi et le Clos Lucé où a habité Léonard de Vinci.
    
Je pense que tu aimerais cette région.
Viens avec moi la prochaine fois !
A très bientôt,
    
Eloi`
        },

    ],
    regions: [
        {
            id: 1,
            name: "Normandie",
            text: "Normandie",
            position: {
                x: 824,
                y: 257,
            }
        },
        {
            id: 2,
            name: "Hautes-de-\nFrance",
            text: "Hautes-de-France",
            position: {
                x: 1032,
                y: 163,
            }
        },
        {
            id: 3,
            name: "Grand Est",
            text: "Grand Est",
            position: {
                x: 1244,
                y: 287,
            }
        },
        {
            id: 4,
            name: "Bretagne",
            text: "Bretagne",
            position: {
                x: 602,
                y: 357,
            }
        },
        {
            id: 5,
            name: "Pays de la Loire",
            text: "Pays de la Loire",
            position: {
                x: 762,
                y: 440,
            }
        },
        {
            id: 6,
            name: "\nCentre-Val\nde Loire",
            text: "Centre-Val de Loire",
            position: {
                x: 940,
                y: 420,
            }
        },
        {
            id: 7,
            name: "Ile-de-\nFrance",
            text: "Ile-de-France",
            position: {
                x: 1005,
                y: 307,
            }
        },
        {
            id: 8,
            name: "Bourgogne-\nFranche-Comté",
            text: "Bourgogne-Franche-Comté",
            position: {
                x: 1192,
                y: 460,
            }
        },
        {
            id: 9,
            name: "Nouvelle-\nAquitaine",
            text: "Nouvelle-Aquitaine",
            position: {
                x: 840,
                y: 708,
            }
        },
        {
            id: 10,
            name: "Occitanie",
            text: "Occitanie",
            position: {
                x: 988,
                y: 850,
            }
        },
        {
            id: 11,
            name: "Auvergne-Rhône-Alpes",
            text: "Auvergne-Rhône-Alpes",
            position: {
                x: 1170,
                y: 655,
            }
        },
        {
            id: 12,
            name: "\nProvence-Alpes-\nCôte d'Azur",
            text: "Provence-Alpes-Côte d'Azur",
            position: {
                x: 1280,
                y: 805,
            }
        },
        {
            id: 13,
            name: "Corse\nAjaccio",
            text: "Corse Ajaccio",
            position: {
                x: 1420,
                y: 950,
            }
        }
    ],
    arts: [
        {
            id: 1,
            name: "Laure MANAUDOU",
            description: "Née en 1986. Elle est nageuse.",
            workType: "image",
            workText: "A 17 ans, elle est devenue championne olympique de natation."
        },
        {
            id: 2,
            name: "Camille CLAUDEL",
            description: "Né en 1840 et mort en 1926. Il est peintre. Il a cofondé le mouvement impressionniste.",
            workType: "image",
            workText: "Nymphéas et pont japonais"
        },
        {
            id: 3,
            name: "Camille CLAUDEL",
            description: "Née en 1864 et morte en 1943. Elle est sculptrice et artiste peintre.",
            workType: "image",
            workText: "La petite châtelaine"
        },
        {
            id: 4,
            name: "Victor HUGO",
            description: "Né en 1802 et mort en 1885. Il est poète, dramaturge et écrivain romantique. Il est l’un des auteurs français les plus connus.",
            workType: "image",
            workText: "Il a écrit « les Misérables » et « Notre Dame de Paris »."
        },
        {
            id: 5,
            name: "Simone DE BEAUVOIR",
            description: "Née en 1908 et morte en 1986. Elle est philosophe et romancière.	",
            workType: null,
            workText: "Elle a participé au mouvement de libération des femmes dans les années 1970. Elle a partagé sa vie avec le philosophe Jean-Paul Sartre."
        },
        {
            id: 6,
            name: "René GOSCINNY",
            description: "Né en 1926 et mort en 1977. Il est créateur de bande de dessinée, journaliste et écrivain.",
            workType: "image",
            workText: "Il a inventé Astérix et Obélix."
        },
        {
            id: 7,
            name: "Clovis",
            description: "Né en 466 et mort en 511. Il est le premier roi des Français.",
            workType: "image",
            workText: "Il a unifié la Gaule et a choisi Paris comme capitale."
        },
        {
            id: 8,
            name: "Gustave EIFFEL",
            description: "Né en 1832 et mort en 1923. Il est ingénieur.",
            workType: "image",
            workText: "Il a construit la Tour Eiffel."
        },
        {
            id: 9,
            name: "Jean NOUVEL",
            description: "Né en 1945. Il est un grand architecte contemporain.",
            workType: "image",
            workText: "Il a réalisé la façade de l’Institut du monde arabe à Paris."
        },
        {
            id: 10,
            name: "Le Corbusier",
            description: "Né en 1887 et mort en 1965. Il est architecte, sculpteur, décorateur, peintre et auteur. Il travaille sur le logement collectif pour apporter aux immeubles des lieux de vie et des lieux utiles comme une garderie, une laverie, une piscine, une école, des commerces et une bibliothèque.",
            workType: "image",
            workText: "Il a réalisé la Cité radieuse à Marseille."
        },
        {
            id: 11,
            name: "Pierre CURIE",
            description: "Né en 1859 et mort en 1906. Il est physicien. Il était marié à Marie Curie, elle aussi physicienne.",
            workType: "image",
            workText: "En 1903, il a reçu avec sa femme, le prix Nobel de physique pour leur travail sur la radioactivité."
        },
        {
            id: 12,
            name: "Louis PASTEUR",
            description: "Né en 1822 et mort en 1895. Il est scientifique, spécialisé dans la chimie et l’étude des microbes.",
            workType: "image",
            workText: "Il a découvert le vaccin contre la rage."
        },
        {
            id: 13,
            name: "Thomas PESQUET",
            description: "Né en 1978, il est spationaute.",
            workType: "image",
            workText: "Il est le dixième Français à partir dans l’espace. En 2016, il a participé à la mission Proxima, à bord du Soyouz MS-03. Pendant sa mission, il a pris plus de 85000 photos de la Terre."
        },
        {
            id: 14,
            name: "Blaise PASCAL",
            description: "Il est né en 1623 et mort en 1662. Il est mathématicien, physicien, inventeur et philosophe.",
            workType: "image",
            workText: "Il a démontré l’existence du vide. Ses travaux ont permis de fonder la méthode scientifique moderne."
        },
        {
            id: 15,
            name: "Denis DIDEROT",
            description: "Il est né en 1713 et mort en 1784. Il est écrivain, philosophe et encyclopédiste.",
            workType: "image",
            workText: "En 1772, après 20 ans de travail, il a publié la première encyclopédie."
        },
        {
            id: 16,
            name: "Matthieu CHEDID",
            description: "Il est né en 1971. Il est chanteur, auteur, compositeur et guitariste.",
            workType: "image",
            workText: "Il est l’artiste français le plus récompensé aux victoires de la musique. Son nom de scène est -M-"
        },
        {
            id: 17,
            name: "Edith PIAF",
            description: "Elle est née en 1915 et morte en 1963. Elle est chanteuse.",
            workType: null,
            workText: "Son plus grand succès est « La vie en rose »"
        },
        {
            id: 18,
            name: "Serge GAINSBOURG",
            description: "Il est né en 1957 et mort en 1991. Il est chanteur.",
            workType: null,
            workText: "ADD song « La javanaise »"
        },
        {
            id: 19,
            name: "Pierre SOULAGES",
            description: "Il est né en 1919. Il est peintre et graveur de l’art abstrait. Il est surtout connu pour son travail sur la couleur noire.",
            workType: "image",
            workText: ""
        },
        {
            id: 20,
            name: "Jean-Luc GODARD",
            description: "Il est né en 1930. Il est producteur, réalisateur et scénariste. Il a fait de nombreux films et est à l’origine de la Nouvelle Vague.",
            workType: "image",
            workText: ""
        },
        {
            id: 21,
            name: "Auguste et Louis LUMIERE",
            description: "Ils sont nés en 1862 et 1864. Ils sont morts en 1954 et 1948. Ils sont ingénieurs et industriels.",
            workType: "image",
            workText: "Ils ont inventé le cinématographe."
        },
        {
            id: 22,
            name: "Marion COTILLARD",
            description: "Elle est née en 1975. Elle est actrice. Elle a joué dans de nombreux films, y compris à Hollywood.",
            workType: "image",
            workText: "Elle reçoit l’oscar de la meilleure actrice pour « La Môme » dans lequel elle joue le rôle d’Edith Piaf."
        },
        {
            id: 23,
            name: "Brigitte BARDOT",
            description: "Elle est née en 1934. Elle est actrice des années 50-60, mannequin et chanteuse. Elle est l’emblème de l’émancipation de la femme.",
            workType: "image",
            workText: "Ce film la propulse au rang de star internationale."
        },
        {
            id: 24,
            name: "Luc BESSON",
            description: "Il est né en 1959. Il est réalisateur, producteur et scénariste. Il réalise des films comme « Le Grand Bleu », « Taxi », « Subway », « Nikita » et « Jeanne d’Arc ».",
            workType: "image",
            workText: "En 1998, il reçoit le césar du meilleur réalisateur pour ce film."
        },
        {
            id: 25,
            name: "Georges BIZET",
            description: "Il est né en 1838 et mort en 1875. Il est compositeur de musique et notamment d’opéras. Il fait partir de la période romantique.",
            workType: "image",
            workText: "Il a composé Carmen, l'un des opéras les plus connus et les plus joués au monde."
        },
        {
            id: 26,
            name: "Daft Punk",
            description: "C’est un groupe de musique électronique né en 1993. Les membres du groupe sont connus pour toujours porter des casques et des costumes.",
            workType: "image",
            workText: "En 2013, il remporte 5 Grammy Awards avec cet album. ADD music « around the world »"
        },
        {
            id: 27,
            name: "Vanessa PARADIS",
            description: "Elle est née en 1972. Elle est chanteuse, actrice et mannequin. Elle a été en couple pendant 14 ans avec l’acteur Johnny Depp.",
            workType: null,
            workText: "Add music Divine Idylle"
        },
        {
            id: 28,
            name: "Yann TIERSEN",
            description: "Il est né en 1970. Il est auteur-compositeur et musicien. Il joue du piano, de la guitare, de l’accordéon et du violon. Il a composé la bande originale de plusieurs films.",
            workType: null,
            workText: "En 2002, il obtient le césar de la meilleure musique de film pour « Le Fabuleux Destin d’Amélie Poulain »."
        },
        {
            id: 29,
            name: "Simone Veil",
            description: "Elle est née en 1927 et morte en 2017. Elle est femme politique. Elle a été ministre de la santé et présidente du parlement européen. Elle était membre de l’Académie Française.",
            workType: null,
            workText: "Elle a lutté contre les discriminations envers les femmes et s’est battu pour le droit des femmes."
        },
        {
            id: 30,
            name: "Charles DE GAULLE",
            description: "Il est né en 1890 et mort en 1970. Il est militaire (général) et homme politique. En 1958, il fonde la Ve République et en devient le Président de la France.",
            workType: "image",
            workText: "Le 18 Juin 1940, il appelle les Français à résister à l’invasion allemande. Il devient ainsi le chef de la France Libre durant la 2nd guerre mondiale."
        },
        {
            id: 31,
            name: "Napoléon BONAPARTE",
            description: "Il est né en 1769 et mort en 1821. Il est militaire et homme politique. Il devient le premier empereur des français en 1804 sous le nom de Napoléon 1er.",
            workType: "image",
            workText: "Il commande la construction de l’Arc de Triomphe, place de l’Etoile à Paris."
        },
        {
            id: 32,
            name: "Jules FERRY",
            description: "Il est né en 1832 et mort en 1893. Il est homme politique. Il a été ministre de l’instruction et des beaux-arts. Il est considéré comme un des pères fondateurs de l’identité républicaine.",
            workType: "image",
            workText: "Il a rendu l’école publique laïque, gratuite et obligatoire."
        },
        {
            id: 33,
            name: "Sébastien CHABAL",
            description: "Il est né en 1977. Il est joueur de rugby. Il joue au poste de 3e ligne.",
            workType: "image",
            workText: "En 2010, il remporte avec l’équipe de France un Grand Chelem du Tournoi des six Nations."
        },
        {
            id: 34,
            name: "Kylian MBAPPE",
            description: "Il est né en 1998. Il est joueur de football. Il joue au poste d’attaquant au Paris-Saint-Germain.",
            workType: "image",
            workText: "En 2018, il remporte avec l’équipe de France la coupe du monde de football en Russie."
        },
        {
            id: 35,
            name: "Mary PIERCE",
            description: "Elle est née en 1975. Elle est joueuse de tennis professionnelle.",
            workType: "image",
            workText: "Elle a gagné la finale du tournoi de Roland Garros en 2000."
        }
    ],
    characterDialog: {
        CHARACTER_SPEED: 15,
        DIALOG_HIDE_DURATION: 10,
        office: "Which college or university should I choose? Let's do a quick online search and find out.",
        computer: "Help me log in to my computer.",
        computerCorrect: "Let's look at the MFUC website.",
        error: "Hmm... that's not the right answer.",
        browser1: "Okay, let's see... I'm interested in [studies]",
        universityCorrect: "Yes, they offer studies I'm interested in.",
        universityWrong: "No, I think I need to choose another university.",
        universityComplete: "I have already chosen where to study. Now I need to open my file drawer.",
        keypad: "I need to get two answers correct to open my file drawer.",
        files: "Now to apply for a scholarship. I will need to fill in the application form.",
        filesComplete: "I have filled in my application form. Who should I contact to submit my application?",
        rolodex: "If I'm not mistaken, I need to contact the Embassy of France.",
        rolodexWrong: "No, this is not the Embassy of France.",
        rolodexCorrect: "Yes, this is the Embassy of France!",
        rolodexComplete: "The last step is to book an appointment with the Embassy of France",
        phone: "I need to listen carefully and dial the correct number.",
        phoneWrong: "Oops! Looks like I dialed wrongly. Let me try again.",
        phoneCorrect: "Great, the phone is ringing!",
        dialog: "Help me arrange what I'm supposed to say.",
        dialogWrong: "That's not quite right.",
        dialogCorrect: "Alright, we did it! Now to start preparing for my studies in France.",
        form: "I need to fill in my personal details to apply for a visa.",
        formWrong: "I think I need to write something else here.",
        formCorrect: "Let’s see what else I need to fill in.",
        formComplete: "Thanks, I'm done! Now to submit my application.",
        inFrance: "Wow, I can’t believe it, I made it to France!",
        market: "Here’s are some things I need to buy:",
        shop: "How much does this [ITEM] cost?",
        shopComplete: "Okay, I have bought everything I need.",
        itemWrong: "No, I don't need this right now.",
        itemCorrect: "Yes, let's see how much it costs.",
        priceWrong: "That doesn’t seem like the correct price.",
        priceCorrect: "Good, let’s see if I need anything else.",
        calculator: "Let’s see how much I spent today.",
        calculatorWrong: "Oops, I miscalculated.",
        calculatorCorrect: "Looks like I spent a reasonable amount today.",
        calculatorComplete: "I'm done here, now to check my mailbox.",
        mailbox: "Which mailbox has my name on it?",
        mailboxWrong: "No, that’s [NAME]’s mailbox.",
        mailboxCorrect: "Yes, it looks like I have some mail.",
        postcardFront: "It’s a postcard! I wonder who it’s from?",
        postcardBack: "Oh, it’s [NAME]! I wonder where he is writing from?",
        regions: "Let’s see, where did [NAME] say he was writing from again?",
        regionsWrong: "No, [NAME] is not writing from [REGION].",
        regionsCorrect: "Yes, [NAME] was writing from [REGION]. Maybe I can visit it someday.",
        arts: "Wow, I think I know these people. Help me sort out their correct information.",
        artsWrong: "No, that's not right.",
        artsCorrect: "Yes, that's correct!",
        artsComplete: "Wow, looks like I know who these people well enough.",
        campus: "I need to go to the [BUILDING] now.I am here on the map, which way do I go?",
        campusWrong: "No, that's not where I want to go.",
        campusCorrect: "Thanks, now I know how to get there!",
        ending: "You helped me begin my studies in France, thank you!",
    },
    mfucWebsite: {
        website: {
            url: "https://mfuc.org/",
            position: {
                x: 330,
                y: 190
            },
            size: {
                width: 500,
                height: 80
            }
        },
        about: {
            url: "https://mfuc.org/about-mfuc/",
            position: {
                x: 310,
                y: 280
            },
            size: {
                width: 140,
                height: 60
            }
        },
        studyInFrance: {
            url: "https://mfuc.org/studying-in-france/why-study-in-france/",
            position: {
                x: 500,
                y: 280
            },
            size: {
                width: 140,
                height: 60
            }
        },
        studyInMalaysia: {
            url: "https://mfuc.org/studying-in-malaysia/why-study-in-malaysia/",
            position: {
                x: 700,
                y: 280
            },
            size: {
                width: 140,
                height: 60
            }
        },
        cooperation: {
            url: "https://mfuc.org/cooperation-between-universities/",
            position: {
                x: 940,
                y: 280
            },
            size: {
                width: 220,
                height: 60
            }
        },
        research: {
            url: "https://mfuc.org/cooperation-in-research/",
            position: {
                x: 1180,
                y: 280
            },
            size: {
                width: 140,
                height: 60
            }
        },
        news: {
            url: "https://mfuc.org/news-event/",
            position: {
                x: 1400,
                y: 280
            },
            size: {
                width: 160,
                height: 60
            }
        },
        alumni: {
            url: "https://mfuc.org/alumni/testimonial/",
            position: {
                x: 1600,
                y: 280
            },
            size: {
                width: 140,
                height: 60
            }
        },
        contact: {
            url: "https://mfuc.org/contact/",
            position: {
                x: 1755,
                y: 280
            },
            size: {
                width: 140,
                height: 60
            }
        },
        facebook: {
            url: "https://www.facebook.com/MalaysiaFranceUniversityCentre/",
            position: {
                x: 1677,
                y: 175
            },
            size: {
                width: 30,
                height: 30
            }
        },
        instagram: {
            url: "https://www.instagram.com/malaysia_france_uni_centre/",
            position: {
                x: 1721,
                y: 175
            },
            size: {
                width: 30,
                height: 30
            }
        },
        youtube: {
            url: "https://www.youtube.com/channel/UC-GPpmvizXaSjTTz1DhjkuQ",
            position: {
                x: 1771,
                y: 175
            },
            size: {
                width: 30,
                height: 30
            }
        },
        twitter: {
            url: "https://twitter.com/mfucmalaysia?lang=en",
            position: {
                x: 1815,
                y: 175
            },
            size: {
                width: 30,
                height: 30
            }
        },
        linkedIn: {
            url: "https://www.linkedin.com/company/malaysia-france-university-centre",
            position: {
                x: 1860,
                y: 175
            },
            size: {
                width: 30,
                height: 30
            }
        },
    },
    form: {
        ANSWERS: 5,
        title: "DOSSIER DE BOURSE D’ETUDES",

        airportTitle: "AEROPORT DE DEPART",
        airportFrom: "KUALA LUMPUR",

        personalTitle: "RENSEIGNEMENTS CONCERNANT LE BOURSIER",
        lastName: "Nom",
        firstName: "Prénom",
        gender: "Sexe",
        female: "F",
        male: "M",
        nationality: "Nationalité",
        state: "Né(e) le",
        birthCity: "Ville",
        country: "Pays",
        address: "Adresse",
        postcode: "Code postal",
        city: "Ville",
        email: "Email",
        telephone: "Tel",

        studiesTitle: "RENSEIGNEMENTS CONCERNANT LES ETUDES",
        specialty: "Spécialité de formation",
        education: "Niveau de formation",
        establishment: "Etablissement souhaité",
        establishmentCity: "Ville de l’établissement",

        footer: "Dossier à renvoyer à Campus France",
    },
    shopping: {
        dairy: {
            name: "The cheese factory",
            products: [
                {
                    name: "Une plaquette de beurre",
                    price: 1.8,
                    icon: "butter"
                },
                {
                    name: "250 grammes de fromage",
                    price: 4.75,
                    icon: "cheese"
                },
                {
                    name: "1 litre lait",
                    price: 2.5,
                    icon: "milkCarton"
                },
                {
                    name: "Crème fouettée",
                    price: 2.5,
                    icon: "cream"
                },
                {
                    name: "Lait frais",
                    price: 2.5,
                    icon: "milkBottle"
                },
            ]
        },
        meat: {
            name: "The butcher",
            products: [
                {
                    name: "500 grammes ham",
                    price: 7,
                    icon: "ham"
                },
                {
                    name: "500 grammes poulet",
                    price: 6,
                    icon: "chicken"
                },
                {
                    name: "10 des œufs",
                    price: 5,
                    icon: "eggs"
                },
                {
                    name: "500 grammes saumon",
                    price: 5,
                    icon: "salmon"
                },
                {
                    name: "500 grammes bacon",
                    price: 5,
                    icon: "bacon"
                },
            ]
        },
        produce: {
            name: "The fruit and vegetable seller",
            products: [
                {
                    name: "500 grammes brocoli",
                    price: 2.1,
                    icon: "brocolli"
                },
                {
                    name: "Aubergine",
                    price: 1,
                    icon: "eggplant"
                },
                {
                    name: "500 grammes de pommes",
                    price: .9,
                    icon: "apple"
                },
                {
                    name: "Trois tomates",
                    price: 2.10,
                    icon: "tomato"
                },
                {
                    name: "Un kilo des oranges",
                    price: 1.80,
                    icon: "orange"
                },
                {
                    name: "Pastèque",
                    price: 12,
                    icon: "watermelon"
                },
            ]
        },
        caterer: {
            name: "The Italian caterer",
            products: [
                {
                    name: "Une baguette",
                    price: 3.5,
                    icon: "baguette"
                },
                {
                    name: "Miche de pain",
                    price: 12,
                    icon: "bread"
                },
                {
                    name: "Croissant",
                    price: .9,
                    icon: "croissant"
                },
                {
                    name: "Une sandwich",
                    price: 3.50,
                    icon: "sandwich"
                },
                {
                    name: "Une pizza",
                    price: 1.30,
                    icon: "pizza"
                },
            ]
        }
    },
    numbers: [
        "zéro",
        "un",
        "deux",
        "trois",
        "quatre",
        "cinq",
        "six",
        "sept",
        "huit",
        "neuf",
        "dix",
        "onze",
        "douze",
        "treize",
        "quatorze",
        "quinze",
        "seize",
        "dix-sept",
        "dix-huit",
        "dix-neuf",
        "vingt",
        "vingt et un",
        "vingt-deux",
        "vingt-trois",
        "vingt-quatre",
        "vingt-cinq",
        "vingt-six",
        "vingt-sept",
        "vingt-huit",
        "vingt-neuf",
        "trente",
        "Trente et un",
        "Trente-deux",
        "Trente-trois",
        "Trente-quatre",
        "Trente-cinq",
        "Trente-six",
        "Trente-sept",
        "Trente-huit",
        "Trente-neuf",
        "quarante",
        "quarante et un",
        "quarante-deux",
        "quarante-trois",
        "quarante-quatre",
        "quarante-cinq",
        "quarante-six",
        "quarante-sept",
        "quarante-huit",
        "quarante-neuf",
        "cinquante",
        "cinquante et un",
        "cinquante-deux",
        "cinquante-trois",
        "cinquante-quatre",
        "cinquante-cinq",
        "cinquante-six",
        "cinquante-sept",
        "cinquante-huit",
        "cinquante-neuf",
        "soixante",
        "soixante et un",
        "soixante-deux",
        "soixante-trois",
        "soixante-quatre",
        "soixante-cinq",
        "soixante-six",
        "soixante-sept",
        "soixante-huit",
        "soixante-neuf",
        "soixante-dix",
        "soixante-et-onze",
        "soixante-douze",
        "soixante-treize",
        "soixante-quatorze",
        "soixante-quinze",
        "soixante-seize",
        "soixante-dix-sept",
        "soixante-dix-huit",
        "soixante-dix-neuf",
        "quatre-vingts",
        "quatre-vingt-un",
        "quatre-vingt-deux",
        "quatre-vingt-trois",
        "quatre-vingt-quatre",
        "quatre-vingt-cinq",
        "quatre-vingt-six",
        "quatre-vingt-sept",
        "quatre-vingt-huit",
        "quatre-vingt-neuf",
        "quatre-vingt-dix",
        "quatre-vingt-onze",
        "quatre-vingt-douze",
        "quatre-vingt-treize",
        "quatre-vingt-quatorze",
        "quatre-vingt-quinze",
        "quatre-vingt-seize",
        "quatre-vingt-dix-sept",
        "quatre-vingt-dix-huit",
        "quatre-vingt-dix-neuf",
    ],
    campus: {
        directions: {
            north: -20,
            east: 30,
            south: 160,
            west: 210,
        },
        startPoints: [
            {
                name: "B Wing",
                x: 360,
                y: 475,
                destinations: [
                    {
                        name: "Science Centre",
                        facing: "north",
                        directions: "Go straight and turn right. At the roundabout, turn left at the second exit. Turn right. Turn left.",
                        path: [
                            {
                                x: 590,
                                y: 383,
                            },
                            {
                                x: 690,
                                y: 470,
                            },
                            {
                                x: 830,
                                y: 410,
                            },
                            {
                                x: 935,
                                y: 470,
                            },
                            {
                                x: 1180,
                                y: 375,
                            },
                            {
                                x: 1330,
                                y: 490,
                            },
                            {
                                x: 1430,
                                y: 445,
                            },
                        ]
                    },
                    {
                        name: "Athletic Complex",
                        facing: "south",
                        directions: "Go straight and turn left. Turn right. Keep walking. Turn right after the cafeteria. Take the next left and you reach the Athletic Complex.",
                        path: [
                            {
                                x: 510,
                                y: 625,
                            },
                            {
                                x: 595,
                                y: 610,
                            },
                            {
                                x: 750,
                                y: 750,
                            },
                            {
                                x: 895,
                                y: 840,
                            },
                            {
                                x: 1120,
                                y: 760,
                            },
                            {
                                x: 1265,
                                y: 880,
                            },
                            {
                                x: 1370,
                                y: 830,
                            },
                        ]
                    },
                ]
            },
            {
                name: "Dorms",
                x: 1490,
                y: 250,
                destinations: [
                    {
                        name: "C Wing",
                        facing: "south",
                        directions: "Go straight until you reach the roundabout. Turn left and take the second exit. Walk past the cateria and turn right. C Wing is on your left.",
                        path: [
                            {
                                x: 590,
                                y: 383,
                            },
                            {
                                x: 690,
                                y: 470,
                            },
                            {
                                x: 830,
                                y: 410,
                            },
                            {
                                x: 935,
                                y: 470,
                            },
                            {
                                x: 1180,
                                y: 375,
                            },
                            {
                                x: 1330,
                                y: 490,
                            },
                            {
                                x: 1430,
                                y: 445,
                            },
                        ]
                    },
                    {
                        name: "Athletic Complex",
                        facing: "south",
                        directions: "Go straight and turn left. Turn right. Keep walking. Turn right after the cafeteria. Take the next left and you reach the Athletic Complex.",
                        path: [
                            {
                                x: 510,
                                y: 625,
                            },
                            {
                                x: 595,
                                y: 610,
                            },
                            {
                                x: 750,
                                y: 750,
                            },
                            {
                                x: 895,
                                y: 840,
                            },
                            {
                                x: 1120,
                                y: 760,
                            },
                            {
                                x: 1265,
                                y: 880,
                            },
                            {
                                x: 1370,
                                y: 830,
                            },
                        ]
                    },
                ]
            },
            {
                name: "Park",
                x: 1270,
                y: 880,
                destinations: [
                    {
                        name: "Art Centre",
                        facing: "west",
                        directions: "Go straight until you reach the roundabout. Turn right and take the second exit. After the management office, turn left. Art Centre is on your right.",
                        path: [
                            {
                                x: 900,
                                y: 560,
                            },
                            {
                                x: 945,
                                y: 515,
                            },
                            {
                                x: 930,
                                y: 465,
                            },
                            {
                                x: 1180,
                                y: 375,
                            },
                            {
                                x: 1050,
                                y: 270,
                            },
                        ]
                    },
                    {
                        name: "Sports Field",
                        facing: "south",
                        directions: "Go straight until you reach the roundabout. Turn left and take the second exit. Pass the college hall on your right then turn right. The Sports Field is on your left.",
                        path: [
                            {
                                x: 900,
                                y: 560,
                            },
                            {
                                x: 800,
                                y: 585,
                            },
                            {
                                x: 715,
                                y: 560,
                            },
                            {
                                x: 690,
                                y: 465,
                            },
                            {
                                x: 525,
                                y: 325,
                            },
                            {
                                x: 640,
                                y: 275,
                            },
                        ]
                    },
                ]
            },
        ]
    }
};