import Config from '../Config/config';

export default {
    drawRoundedRectangle: function (scene, config) {
        const name = config.name || "noname";
        const width = isNaN(config.width) ? 20 : config.width;
        const height = isNaN(config.height) ? 20 : config.height;
        const corner = isNaN(config.corner) ? 20 : config.corner;
        const color = isNaN(config.color) ? 0x000000 : config.color;
        const alpha = isNaN(config.alpha) ? 1 : config.alpha;
        const thickness = isNaN(config.thickness) ? 0 : config.thickness;
        const lineColor = isNaN(config.lineColor) ? 0x000000 : config.lineColor;
        const lineAlpha = isNaN(config.lineAlpha) ? 1 : config.lineAlpha;

        const graphic = scene.add.graphics();
        graphic.lineStyle(thickness, lineColor, lineAlpha);
        graphic.fillStyle(color, alpha);
        graphic.fillRoundedRect(thickness, thickness, width, height, corner);
        graphic.strokeRoundedRect(thickness, thickness, width, height, corner);
        graphic.generateTexture(name, width + (thickness*2), height + (thickness*2));
        graphic.destroy();
    },

    drawRectangle: function (scene, config) {
        const name = config.name || "noname";
        const width = isNaN(config.width) ? 20 : config.width;
        const height = isNaN(config.height) ? 20 : config.height;
        const color = isNaN(config.color) ? 0x000000 : config.color;
        const alpha = isNaN(config.alpha) ? 1 : config.alpha;
        const thickness = isNaN(config.thickness) ? 0 : config.thickness;
        const lineColor = isNaN(config.lineColor) ? 0x000000 : config.lineColor;
        const lineAlpha = isNaN(config.lineAlpha) ? 1 : config.lineAlpha;

        const graphic = scene.add.graphics();
        graphic.lineStyle(thickness, lineColor, lineAlpha);
        graphic.fillStyle(color, alpha);
        graphic.fillRect(thickness, thickness, width, height);
        graphic.strokeRect(thickness, thickness, width, height);
        graphic.generateTexture(name, width + (thickness*2), height + (thickness*2));
        graphic.destroy();
    },

    drawCircle: function (scene, config) {
        const name = config.name || "noname";
        const radius = isNaN(config.radius) ? 20 : config.radius;
        const color = isNaN(config.color) ? 0x000000 : config.color;
        const alpha = isNaN(config.alpha) ? 1 : config.alpha;
        const thickness = isNaN(config.thickness) ? 0 : config.thickness;
        const lineColor = isNaN(config.lineColor) ? 0x000000 : config.lineColor;
        const lineAlpha = isNaN(config.lineAlpha) ? 1 : config.lineAlpha;
        const actualRadius = radius + thickness;

        const graphic = scene.add.graphics();
        graphic.lineStyle(thickness, lineColor, lineAlpha);
        graphic.fillStyle(color, alpha);
        graphic.fillCircle(radius, radius, radius);
        graphic.strokeCircle(actualRadius, actualRadius, radius);
        graphic.generateTexture(name, (actualRadius) * 2, (actualRadius) * 2);
        graphic.destroy();
    },

    drawTriangle: function (scene, config) {
        const name = config.name || "noname";
        const color = config.color || 0x000000;
        const alpha = config.alpha || 1;
        const width = config.width || 20;
        const height = config.height || 20;
        const thickness = config.thickness || 0;
        const lineColor = config.lineColor || 0x000000;
        const lineAlpha = config.lineAlpha || 0;

        const triangle = new Phaser.Geom.Triangle(0, 0, width, height * .5, 0, height);
        const graphic = scene.add.graphics();
        graphic.lineStyle(thickness, lineColor, lineAlpha);
        graphic.fillStyle(color, alpha);
        graphic.fillTriangleShape(triangle);
        graphic.strokeTriangle(triangle);
        graphic.generateTexture(name, width, height);
        graphic.destroy();
    },

    getFontStyle: function (fontObject) {
        return Object.assign({}, fontObject);
    },

    setOrientation: function (scaleManager, orientation) {
        if (Config.orientation.current == Config.orientation[orientation]) return;

        const mode = Config.orientation[orientation];
        for (let i in mode) {
            Config.scale[i] = mode[i];
        }

        scaleManager.setGameSize(mode.width, mode.height);
    },

    setFullscreen(context, fullscreen) {
        if (fullscreen && !context.scale.isFullscreen) context.scale.startFullscreen();
        else if (!fullscreen) context.scale.stopFullscreen();
    },

    bounceButton: function (button, tweenManager) {
        tweenManager.add({
            targets: button,
            scaleX:
            {
                from: 1.2,
                to: 1
            },
            scaleY:
            {
                from: 1.2,
                to: 1
            },
            duration: 200,
            ease: Phaser.Math.Easing.Expo.In
        })
    },

    flashObjectAfterTime(tweenManager, object, repeat, hide) {
        tweenManager.add({
            targets: object,
            alpha:
            {
                from: hide ? 0 : 1,
                to: 1
            },
            scale:
            {
                from: 1,
                to: 1.3
            },
            duration: 500,
            yoyo: true,
            repeat: repeat,
            ease: Phaser.Math.Easing.Expo.Out
        })
    },

    alignTo: function (source, target, horizontal, vertical) {
        const targetLeft = target.x - (target.displayWidth * target.originX);
        const targetRight = target.x + (target.displayWidth * (1 - target.originX));
        const targetTop = target.y - (target.displayWidth * target.originX);
        const targetBottom = target.y + (target.displayWidth * (1 - target.originX));
        const targetCenterX = (targetRight - targetLeft) * .5;
        const targetCenterY = (targetBottom - targetTop) * .5;

        if (horizontal == "left") {
            source.x = targetLeft + (source.originX * source.width);
        } else if (horizontal == "right") {
            // console.log(targetRight, source.originX, source.width);
            source.x = targetRight - (source.originX * source.width);
        } else if (horizontal == "center") {
            source.x = targetCenterX + (source.originX * source.width);
        }

        if (vertical == "top") {
            source.x = targetTop + (source.originX * source.width);
        } else if (vertical == "bottom") {
            source.x = targetBottom - (source.originX * source.width);
        } else if (vertical == "center") {
            source.x = targetCenterY + (source.originX * source.width);
        }
    },

    LEFT: "left",
    RIGHT: "right",
    TOP: "top",
    BOTTOM: "bottom",
    CENTER: "center"
}