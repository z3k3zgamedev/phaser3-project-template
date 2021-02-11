import 'phaser';
import Resources from '../Config/resources';
import Config from '../Config/config';
import UI from '../Ui/UiElements.js';

export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super(Config.scenes.Preloader);
    }

    init() {
        this.readyCount = 0;
    }

    preload() {
        document.getElementById("loader").style.display = "none";

        // display progress bar
        const progressBox = this.add.graphics();
        const progressBar = this.add.graphics();
        progressBox.fillStyle(0xFFFFFF, 0.8);
        progressBox.fillRect(0, Config.scale.centerY, Config.scale.width, 40);

        const percentText = this.make.text({
            x: Config.scale.centerX,
            y: Config.scale.centerY + 20,
            text: '0%',
            style: Config.fonts.instructions
        });
        percentText.setOrigin(0.5, 0.5);

        // update progress bar
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xFE0000, 1);
            progressBar.fillRect(0, Config.scale.centerY, Config.scale.width * value, 40);
        });

        // update file progress text
        this.load.on('fileprogress', function (file) {
            // assetText.setText('Loading asset: ' + file.key);
        });

        // remove progress bar when complete
        this.load.on('complete', function () {
            this.ready();

            if (this.readyCount == 2) {
                progressBar.destroy();
                progressBox.destroy();
                percentText.destroy();
            }
        }.bind(this));

        this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

        for (let method in Resources) {
            for (let key in Resources[method]) {
                let args = Resources[method][key].args.slice();
                args.unshift(Resources[method][key].key);
                this.load[method].apply(this.load, args);
            }
        }
    }

    ready() {
        this.readyCount++;
        if (this.readyCount === 2) {
            this.scene.launch(Config.scenes.UserInterface);
            // this.scene.start(Config.scenes.Title);
            this.scene.start(Config.scenes.Shopping);
        }
    }
};
