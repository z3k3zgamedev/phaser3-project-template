export default class Countdown {
    constructor(scene, seconds, x, y, fontStyle, callback, callbackScope) {
        this.scene = scene;
        this.seconds = seconds;
        this.x = x;
        this.y = y;
        this.fontStyle = fontStyle;
        this.callback = callback;
        this.callbackScope = callbackScope;
    }

    start(defaultTime) {
        let count = defaultTime ? defaultTime : this.seconds;
        const countdownText = this.scene.add.text(this.x, this.y, this.seconds, this.fontStyle).setOrigin(.5, .5);
        countdownText.setScale(10, 10);

        const countDownTween = this.scene.tweens.add({
            targets: countdownText,
            scaleX: 1,
            scaleY: 1,
            duration: 1000,
            loop: 3,
            ease: Phaser.Math.Easing.Bounce.Out,
            onLoop: function () {
                count--;

                if (count > 0) {
                    countdownText.text = String(count);
                } else if (count === 0) {
                    countdownText.text = 'GO!';
                }
            }.bind(this),
            onComplete: function () {
                this.scene.tweens.add({
                    targets: countdownText,
                    scaleX: 10,
                    scaleY: 10,
                    duration: 500,
                    delay: 500,
                    alpha: 0,
                    onComplete: () => {
                        this.callback.call(this.callbackScope);
                    }
                })

            }.bind(this)
        });
    }
}