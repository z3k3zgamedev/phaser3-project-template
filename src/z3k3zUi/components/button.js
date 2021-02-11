/*
import { container } from 'webpack';
import EventEmitterMethods from '../../utils/eventemitter/EventEmitterMethods.js';
import GetSceneObject from '../../utils/system/GetSceneObject.js';

const GetValue = Phaser.Utils.Objects.GetValue;

class Button extends Phaser.GameObjects.Container {
    constructor(scene, x, y, label, style) {
        super(scene, x, y);

        this.type = "Button";
        this.style = style || {};
        this.width = style.width != null ? style.width : 200;
        this.height = style.height != null ? style.height : 60;
        this.backgroundColor = style.backgroundColor != null ? style.backgroundColor : "#C60";
        this.rollBackgroundColor = style.rollBackgroundColor != null ? style.rollBackgroundColor : "#F93";
        this.color = style.color != null ? style.color : "white";
        this.rollColor = style.rollColor != null ? style.rollColor : "white";
        this.borderColor = style.borderColor != null ? style.borderColor : null;
        this.borderWidth = style.borderWidth != null ? style.borderWidth : null;

        if (this.borderColor < 0 || this.borderWidth < 0) this.borderColor = this.borderWidth = null;
        else if (this.borderColor != null && this.borderWidth == null) this.borderWidth = 1;

        this.borderRollColor = style.borderRollColor != null ? style.borderRollColor : null;
        this.corner = style.corner != null ? style.corner : 20;
        this.shadowColor = style.shadowColor != null ? style.shadowColor : "rgba(0,0,0,.3)";
        this.shadowBlur = style.shadowBlur != null ? style.shadowBlur : 14;
        this.align = style.align != null ? style.align : "center";
        this.valign = style.valign != null ? style.valign : "center";
        this.indent = style.indent != null ? style.indent : 10;
        this.indentHorizontal = style.indentHorizontal != null ? style.indentHorizontal : this.indent;
        this.gradient = style.gradient != null ? style.gradient : 0;
        this.gloss = style.gloss != null ? style.gloss : 0;

        this.label = this.addLabel(scene, x, y, label, style);
        this.toggleBackgroundColor = style.toggleBackgroundColor != null ? style.toggleBackgroundColor : this.backgroundColor;
        this.rollToggleBackgroundColor = style.rollToggleBackgroundColor != null ? style.rollToggleBackgroundColor : this.rollBackgroundColor;
        this.toggleColor = style.toggleColor != null ? style.toggleColor : '#ffffff';
        this.rollToggleColor = style.rollToggleColor != null ? style.rollToggleColor : '#ffffff';
        this.waitBackgroundColor = style.waitBackgroundColor != null ? style.waitBackgroundColor : this.backgroundColor;
        this.rollWaitBackgroundColor = style.rollWaitBackgroundColor != null ? style.rollWaitBackgroundColor : this.rollBackgroundColor;
        this.waitColor = style.waitColor != null ? style.waitColor : '#ffffff';
        this.rollWaitColor = style.rollWaitColor != null ? style.rollWaitColor : this.rollColor;


    }

    addLabel(scene, x, y, label, style) {
        label = label != null ? label : "PRESS";

        const textStyle = style.textStyle != null ? style.textStyle : {
            fontFamily: "arial",
            fontSize: 36,
            fill: '#ffffff',
            defaultText: '',
            align: 'center'
        };

        return scene.add.text(0, 0, label, textStyle);
    }


//~~~~~~~~~~~~~  BACKINGS
// also see manual setting of backings beneath getter setter methods
if (zot(backing)) backing = DS.backing != null ? DS.backing.clone() : null;
if (zot(backing)) that.backing = new zim.Rectangle(width, height, backgroundColor, null, null, corner, dashed, null, false).centerReg(null, null, false);
else that.backing = backing; // if backing is null - we have no custom backing - this test is used later

that.rollBacking = zot(rollBacking) ? (DS.rollBacking != null ? DS.rollBacking.clone() : null) : rollBacking;
that.waitBacking = zot(waitBacking) ? (DS.waitBacking != null ? DS.waitBacking.clone() : null) : waitBacking;
that.rollWaitBacking = zot(rollWaitBacking) ? (DS.rollWaitBacking != null ? DS.rollWaitBacking.clone() : null) : rollWaitBacking;
that.toggleBacking = zot(toggleBacking) ? (DS.toggleBacking != null ? DS.toggleBacking.clone() : null) : toggleBacking;
that.rollToggleBacking = zot(rollToggleBacking) ? (DS.rollToggleBacking != null ? DS.rollToggleBacking.clone() : null) : rollToggleBacking;

var backingTypes = ["backing", "rollBacking", "toggleBacking", "rollToggleBacking", "waitBacking", "rollWaitBacking"];
var t;
var b;
for (var i = 0; i < backingTypes.length; i++) {
    t = backingTypes[i];
    b = that[t]; // access to object passed to parameter or null
    if (b) {
        if (b.type == "Pattern") {
            b = setPattern(t, b);
        } else if (shadowColor != -1 && shadowBlur > 0) {
            b.shadow = new createjs.Shadow(shadowColor, 3, 3, shadowBlur);
        }
        // assumes center reg
        b.x = width / 2;
        b.y = height / 2;
    }
}
that.addChild(that.backing);
if (borderWidth) {
    that.border = new zim.Rectangle(width, height, "rgba(0,0,0,0)", borderColor, borderWidth, corner, dashed, null, false);
    that.addChild(that.border);
}
function setPattern(type, pattern) {
    that[type] = new zim.Container(width, height, null, null, false).centerReg(null, null, false);
    if (shadowColor != -1 && shadowBlur > 0) {
        var shadowRect = new zim.Rectangle(width - 2, height - 2, "#666", null, null, corner, null, null, false).center(that[type]);
        shadowRect.shadow = new createjs.Shadow(shadowColor, 3, 3, shadowBlur);
    }
    var mask = that[type].mask = new zim.Rectangle(width, height, type.indexOf("roll") >= 0 ? rollBackgroundColor : backgroundColor, null, null, corner, null, null, false).addTo(that[type]);
    pattern.centerReg(mask);
    pattern.setMask(mask.shape);
    that[type].pattern = pattern;
    return that[type];
}

//~~~~~~~~~~~~~  ICONS
that.icon = zot(icon) ? (DS.icon != null ? DS.icon.clone() : null) : icon;
that.rollIcon = zot(rollIcon) ? (DS.rollIcon != null ? DS.rollIcon.clone() : null) : rollIcon;
that.waitIcon = zot(waitIcon) ? (DS.waitIcon != null ? DS.waitIcon.clone() : null) : waitIcon;
that.rollWaitIcon = zot(rollWaitIcon) ? (DS.rollWaitIcon != null ? DS.rollWaitIcon.clone() : null) : rollWaitIcon;
that.toggleIcon = zot(toggleIcon) ? (DS.toggleIcon != null ? DS.toggleIcon.clone() : null) : toggleIcon;
that.rollToggleIcon = zot(rollToggleIcon) ? (DS.rollToggleIcon != null ? DS.rollToggleIcon.clone() : null) : rollToggleIcon;
var iconTypes = ["icon", "rollIcon", "toggleIcon", "rollToggleIcon", "waitIcon", "rollWaitIcon"];
for (var i = 0; i < iconTypes.length; i++) {
    var ty = iconTypes[i];
    var ic = that[ty]; // access to object passed to parameter or null
    if (ic) {
        // assumes center reg
        ic.x = width / 2;
        ic.y = height / 2;
    }
}
if (that.icon) that.addChild(that.icon);

//~~~~~~~~~~~~~  GRADIENT AND GLOSS

if (!Array.isArray(corner)) corner = [corner, corner, corner, corner];
if (gradient > 0) { // add an overlay
    var gr = new createjs.Shape();
    gr.graphics.lf(["rgba(255,255,255," + gradient + ")", "rgba(0,0,0," + gradient + ")"], [0, 1], 0, 0, 0, height - borderWidth);
    gr.graphics.rc(borderWidth / 2, borderWidth / 2, width - borderWidth, height - borderWidth, corner[0], corner[1], corner[2], corner[3]);
    this.addChild(gr);
}
if (gloss > 0) { // add an overlay
    var gl = new createjs.Shape();
    gl.graphics.f("rgba(255,255,255," + gloss + ")");
    gl.graphics.rc(borderWidth / 2, borderWidth / 2, width - borderWidth, (height - borderWidth) / 2, corner[0], corner[1], 0, 0);
    gl.graphics.f("rgba(0,0,0," + gloss + ")");
    gl.graphics.rc(borderWidth / 2, height / 2, width - borderWidth, (height - borderWidth) / 2, 0, 0, corner[2], corner[3]);
    this.addChild(gl);
}

//~~~~~~~~~~~~~  HITAREA AND LABEL

var hitArea;
var rect;
if (hitPadding > 0) makeHitArea();
function makeHitArea() {
    rect = new createjs.Shape();
    rect.graphics.f("#000").r(-hitPadding, -hitPadding, width + hitPadding * 2, height + hitPadding * 2);
    that.hitArea = hitArea = rect;
}

this.addChild(label);
label.center(this);
// label.y+=(typeof zdf!="undefined" && zdf.retina!=true)?1:0;
label.y += 1;
this.label = label;

zim.pos(label, (align == "left" || align == "right") ? indentHorizontal : null, (valign == "top" || valign == "bottom") ? indentVertical : null, align == "right", valign == "bottom");


//~~~~~~~~~~~~~  TOGGLE STATE
this.toggled = false;
if (toggleOkay) {
    var originalText = label.text;
    var originalColor = label.color;
    var originalRollColor = label.rollColor;
    this.on(toggleEvent, function () {
        that.toggled = !that.toggled;
        setToggled();
    });
}

function setToggled() {
    if (that.toggled) {
        if (!zot(toggle)) that.label.text = toggle;
        if (!zot(toggleColor)) that.label.color = toggleColor;
        if (!zot(rollToggleColor)) that.label.rollColor = rollToggleColor;
        // for toggle - may start in rollover or could be manually called
        if (that.rolled) {
            if (that.rollToggleBacking) changeObject("rollToggleBacking", that.rollToggleBacking);
            else if (that.toggleBacking) changeObject("toggleBacking", that.toggleBacking);
            if (that.rollToggleIcon) changeObject("rollToggleIcon", that.rollToggleIcon);
            else if (that.toggleIcon) changeObject("toggleIcon", that.toggleIcon);
            if (zot(backing) && zot(that.rollToggleBacking)) that.backing.color = rollToggleBackgroundColor;
        } else {
            if (that.toggleBacking) changeObject("toggleBacking", that.toggleBacking);
            if (that.toggleIcon) changeObject("toggleIcon", that.toggleIcon);
            if (zot(backing)) that.backing.color = toggleBackgroundColor;
        }
    } else {
        that.label.color = originalColor;
        that.label.rollColor = originalRollColor;
        that.label.text = originalText;
        setOriginalObjects();
    }
    if (that.stage) that.stage.update();
}

function setOriginalObjects() {
    if (that.rolled) {
        if (zot(backing) && !that.rollBacking) that.backing.color = rollBackgroundColor;
        if (that.rollBacking) changeObject("rollBacking", that.rollBacking);
        else if (that.backing) changeObject("backing", that.backing);
        if (that.rollIcon) changeObject("rollIcon", that.rollIcon);
        else if (that.icon) changeObject("icon", that.icon);
        else changeObject("icon", null);
    } else {
        if (zot(backing)) that.backing.color = backgroundColor;
        if (that.backing) changeObject("backing", that.backing);
        if (that.icon) changeObject("icon", that.icon);
        else changeObject("icon", null);
    }
}

this.toggle = function (state) {
    if (!toggleOkay) {
        if (zon) zogy("Button() - can't toggle with wait parameters provided");
        return that;
    }
    if (zot(state)) {
        that.toggled = !that.toggled;
    } else {
        that.toggled = state;
    }
    setToggled();
    return that;
};

//~~~~~~~~~~~~~  WAIT STATE
var pressCheck = false;
that.waiting = false;
var willBeWaiting = false;
var waitTimeout;
var waitStartText;
// var waitStartBackgroundColor;
var waitStartTextBackgroundColor = that.label.color;
var waitStartRollTextBackgroundColor = that.label.rollColor;
var waitStartEnabled;
var waitModalEvent;
var waitEvent = this.on("mousedown", function () {
    pressCheck = true;
    doWait();
});

function doWait() {
    if ((!zot(wait) || !zot(waitBacking) || !zot(rollWaitBacking)) && !that.waiting) {
        willBeWaiting = true;
        if (zot(waitEnabled)) waitEnabled = true;
        if (waitModal) waitModalEvent = that.stage.on("stagemousedown", function (e) {
            if (!that.hitTestPoint(e.stageX / zim.scaX, e.stageY / zim.scaY)) that.clearWait();
        }, null, true); // run only once
        // wait before setting the waiting property so first click is not a waiting
        setTimeout(function () { that.waiting = true; }, 50);
        // set button to waiting state
        waitStartText = label.text;
        if (!zot(waitColor)) that.label.color = waitColor;
        if (!zot(rollWaitColor)) that.label.rollColor = rollWaitColor;
        waitStartEnabled = that.enabled;
        if (!waitEnabled && that.enabled) that.enabled = false;
        if (!zot(wait)) that.label.text = wait;

        if (that.rolled) {
            if (zot(backing) && !that.rollWaitBacking) that.backing.color = rollWaitBackgroundColor;
            if (that.rollWaitBacking) changeObject("rollWaitBacking", that.rollWaitBacking);
            else if (that.waitBacking) changeObject("waitBacking", that.waitBacking);
            if (that.rollWaitIcon) changeObject("rollWaitIcon", that.rollWaitIcon);
            else if (that.waitIcon) changeObject("waitIcon", that.waitIcon);
        } else {
            if (zot(backing) && !that.waitBacking) that.backing.color = waitBackgroundColor;
            if (that.waitBacking) changeObject("waitBacking", that.waitBacking);
            if (that.waitIcon) changeObject("waitIcon", that.waitIcon);
        }

        if (zot(waitTime)) waitTime = timeType == "s" ? 5 : 5000; // 5 seconds
        if (waitTimeout) waitTimeout.clear();
        waitTimeout = zim.timeout(waitTime, function () {
            // set button to proper text, icon, backing, colors, etc.
            if (!that.enabled) that.enabled = waitStartEnabled;
            that.clearWait();
            that.dispatchEvent("waited");
        });
        if (that.stage) that.stage.update();
    }
}
this.wait = function () {
    doWait();
};
this.clearWait = function () {
    if (!waitTimeout) return that;
    if (waitModalEvent) that.stage.off("stagemousedown", waitModalEvent);
    waitTimeout.clear();
    that.label.text = waitStartText;
    setOriginalObjects();
    that.label.color = waitStartTextBackgroundColor;
    that.label.rollColor = waitStartRollTextBackgroundColor;
    setTimeout(function () { that.waiting = false; }, 55); // give time for first click to see not waiting yet
    willBeWaiting = false;
    if (that.stage) that.stage.update();
    return that;
};
this.removeWait = function () {
    that.clearWait();
    wait = null;
    that.waitBacking = null;
    that.rollWaitBacking = null;
    that.off("mousedown", waitEvent);
    return that;
};

//~~~~~~~~~~~~~  INTERACTION

this.on("pressup", function () {
    pressCheck = false;
    if (that.rollPersist && !reallyOn) removeRoll();
});

// visually swap button backing or icon
// on clicks if wait or toggle and on mouseover and mouseout
// note - icon will be removed if newObject is null
// BUT - backing will be ignored if newObject is null
// so these act slightly differently!
function changeObject(type, newObject) {
    if (type.indexOf("con") >= 0) { // icon
        for (var i = 0; i < iconTypes.length; i++) {
            var ty = iconTypes[i];
            var ic = that[ty];
            that.removeChild(ic);
        }
        if (that[type]) that.addChildAt(that[type], 1);
    } else {
        if (!that[type]) return;
        for (var i = 0; i < backingTypes.length; i++) {
            var t = backingTypes[i];
            var b = that[t];
            that.removeChild(b);
        }
        if (that[type]) that.addChildAt(that[type], 0);
    }
}

var reallyOn = false;
this.on("mouseover", buttonOn);
function buttonOn(e) {
    that.rolled = true;
    reallyOn = true;

    // specific to each setting
    // so can have a rollover backing even without a backing
    // also... if no rollWaitBacking or rollToggleBacking
    // then if there is the backing for these, still set the backing
    // all backings get removed and current backing object is placed
    // normal buttons (with no backings) get borders on rectangle
    // backings get overlayed border with borderColor and borderRollColor
    // will have to track each state normal, toggle and wait
    // do not set colors on any custom backings (aside from border colors)

    if (willBeWaiting) {
        if (zot(backing) && zot(that.rollWaitBacking)) that.backing.color = zot(rollWaitBackgroundColor) ? rollBackgroundColor : rollWaitBackgroundColor;
        changeObject("rollWaitBacking", that.rollWaitBacking);
        if (that.rollWaitIcon) changeObject("rollWaitIcon", that.rollWaitIcon);
    } else if (toggleOkay && that.toggled) {
        if (zot(backing) && zot(that.rollToggleBacking)) that.backing.color = rollToggleBackgroundColor;
        changeObject("rollToggleBacking", that.rollToggleBacking);
        if (that.rollToggleIcon) changeObject("rollToggleIcon", that.rollToggleIcon);
    } else {
        if (zot(backing)) that.backing.color = rollBackgroundColor;
        else if (!zot(backing.mask)) that.backing.mask.color = rollBackgroundColor;
        changeObject("rollBacking", that.rollBacking);
        if (that.rollIcon) changeObject("rollIcon", that.rollIcon);
    }
    if (that.border) that.border.borderColor = borderRollColor;

    if (that.label.showRollColor) that.label.showRollColor();
    if (that.stage) that.stage.update();
}

this.on("mouseout", buttonOff); // thanks Maxime Riehl
function buttonOff(e) {
    reallyOn = false;
    that.off("mouseout", buttonOff); // not working and not needed? 2018
    if (that.rollPersist) {
        if (!pressCheck) removeRoll();
    } else {
        removeRoll();
    }
}
function removeRoll() {
    that.rolled = false;
    if (willBeWaiting || that.waiting) {
        if (zot(backing) && zot(that.waitBacking)) that.backing.color = zot(waitBackgroundColor) ? backgroundColor : waitBackgroundColor;
        if (that.waitBacking) changeObject("waitBacking", that.waitBacking);
        else changeObject("backing", that.backing);
        if (that.waitIcon) changeObject("waitIcon", that.waitIcon);
        else if (that.icon) changeObject("icon", that.icon);
        else changeObject("icon", null);
    } else if (that.toggled && toggleOkay) {
        if (zot(backing) && zot(that.toggleBacking)) that.backing.color = toggleBackgroundColor;
        if (that.toggleBacking) changeObject("toggleBacking", that.toggleBacking);
        else changeObject("backing", that.backing);
        if (that.toggleIcon) changeObject("toggleIcon", that.toggleIcon);
        else if (that.icon) changeObject("icon", that.icon);
        else changeObject("icon", null);
    } else {
        if (zot(backing)) that.backing.color = backgroundColor;
        else if (!zot(backing.mask)) that.backing.mask.color = backgroundColor;
        changeObject("backing", that.backing);
        if (that.icon) changeObject("icon", that.icon);
        else changeObject("icon", null);
    }

    if (that.border) that.border.borderColor = borderColor;

    if (that.label.showRollColor) that.label.showRollColor(false);
    if (that.stage) that.stage.update();
}


Object.defineProperty(that, 'text', {
    get: function () {
        var t = (label.text == " ") ? "" : label.text;
        return t;
    },
    set: function (value) {
        label.text = value;
        if (originalText) originalText = value;
        label.center(this);
        label.y += 1;
    }
});

Object.defineProperty(that, 'color', {
    get: function () {
        return color;
    },
    set: function (value) {
        color = value;
        if (originalColor) originalColor = color;
        if (that.label && !zot(that.label.color)) {
            that.label.color = color;
        }
        if ((!zim.OPTIMIZE && (zns || !OPTIMIZE)) && that.stage) that.stage.update();
    }
});

Object.defineProperty(that, 'rollColor', {
    get: function () {
        return rollColor;
    },
    set: function (value) {
        rollColor = value;
        if (originalRollColor) originalRollColor = rollColor;
        if (that.label) {
            that.label.rollColor = rollColor;
        }
    }
});

Object.defineProperty(that, 'backgroundColor', {
    get: function () {
        return backgroundColor;
    },
    set: function (value) {
        backgroundColor = value;
        if (that.backing.color) {
            that.backing.color = backgroundColor;
        } else if (that.backing.mask) {
            that.backing.mask.color = backgroundColor;
        }
        if ((!zim.OPTIMIZE && (zns || !OPTIMIZE)) && that.stage) that.stage.update();
    }
});

Object.defineProperty(that, 'rollBackgroundColor', {
    get: function () {
        return rollBackgroundColor;
    },
    set: function (value) {
        rollBackgroundColor = value;
        if (that.rollBacking && that.rollBacking.color) {
            that.rollBacking.color = rollBackgroundColor;
        } else if (that.rollBacking && that.rollBacking.mask) {
            that.rollBacking.mask.color = rollBackgroundColor;
        }
    }
});

Object.defineProperty(that, 'borderColor', {
    get: function () {
        return borderColor;
    },
    set: function (value) {
        borderColor = value;
        if (!that.rolled) {
            if (that.backing && that.backing.borderColor) that.backing.borderColor = value;
            if (that.border) that.border.borderColor = value;
        }
    }
});

Object.defineProperty(that, 'borderRollColor', {
    get: function () {
        return borderRollColor;
    },
    set: function (value) {
        borderRollColor = value;
        if (that.rolled) {
            if (that.backing && that.backing.borderColor) that.backing.borderColor = value;
            if (that.border) that.border.borderColor = value;
        }
    }
});

Object.defineProperty(that, 'hitPadding', {
    get: function () {
        return hitPadding;
    },
    set: function (value) {
        hitPadding = value;
        if (hitPadding == 0) {
            if (hitArea) {
                this.hitArea = null;
            }
        } else {
            makeHitArea();
        }
    }
});

this._enabled = true;
this.startMouseChildren = this.mouseChildren;
Object.defineProperty(that, 'enabled', {
    get: function () {
        return that._enabled;
    },
    set: function (value) {
        if (that._enabled) that.startMouseChildren = that.mouseChildren;
        if (value) {
            zenable(that, value);
            that.mouseChildren = that.startMouseChildren;
        } else {
            removeRoll();
            zenable(that, value);
        }
        label.color = label.color;
        if ((!zim.OPTIMIZE && (zns || !OPTIMIZE)) && that.stage) that.stage.update();
    }
});

// setBacking or leave backing parameter blank to remove this type of backing
this.setBacking = function (type, newBacking) {
    setObject(type, newBacking);
};
// setIcon or leave icon parameter blank to remove this type of icon
this.setIcon = function (type, newIcon) {
    setObject(type, newIcon);
};
function setObject(type, newObject) {
    if (zot(type)) return that;
    if (that.contains(that[type])) {
        that.removeChild(that[type]);
        if (newObject) that.addChildAt(newObject, type.indexOf("con") >= 0 ? that.numChildren - 1 : 0);
        if (that.stage) that.stage.update();
    }
    if (newObject) {
        if (zot(backing) && type == "backing") backing = newObject;
        if (newObject.type == "Pattern") newObject = setPattern(type, newObject);
        that[type] = newObject;
        that[type].x = width / 2;
        that[type].y = height / 2;
    } else {
        that[type] = null;
    }
    return that;
}
if (style !== false) zim.styleTransforms(this, DS);


this.clone = function (exact) {
    var but = new zim.Button(
        width, height, label.clone(),

        (exact || !zim.isPick(oa[0])) ? backgroundColor : oa[0],
        (exact || !zim.isPick(oa[0])) ? rollBackgroundColor : oa[1],
        (exact || !zim.isPick(oa[0])) ? color : oa[2],
        (exact || !zim.isPick(oa[0])) ? rollColor : oa[3],

        originalBorderColor, borderRollColor, originalBorderWidth, corner, shadowColor, shadowBlur, hitPadding, gradient, gloss, dashed,
        !zot(backing) ? that.backing.clone() : null,
        !zot(rollBacking) ? that.rollBacking.clone() : null,
        rollPersist,
        !zot(icon) ? icon.clone() : null, !zot(rollIcon) ? rollIcon.clone() : null,
        toggle, toggleBackgroundColor, rollToggleBackgroundColor, toggleColor, rollToggleColor,
        !zot(toggleBacking) ? toggleBacking.clone() : null,
        !zot(rollToggleBacking) ? rollToggleBacking.clone() : null,
        !zot(toggleIcon) ? toggleIcon.clone() : null,
        !zot(rollToggleIcon) ? rollToggleIcon.clone() : null,
        toggleEvent,
        wait, waitTime, waitBackgroundColor, rollWaitBackgroundColor, waitColor, rollWaitColor, waitModal, waitEnabled,
        !zot(waitBacking) ? waitBacking.clone() : null,
        !zot(rollWaitBacking) ? rollWaitBacking.clone() : null,
        !zot(waitIcon) ? waitIcon.clone() : null,
        !zot(rollWaitIcon) ? rollWaitIcon.clone() : null,
        align, valign, indent, indentHorizontal, indentVertical,
        style,
        this.group
    );
    return that.cloneProps(but);
};
    
}
export default Button;
//*/