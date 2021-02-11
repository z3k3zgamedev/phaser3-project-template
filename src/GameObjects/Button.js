class Button extends window.Phaser.Image {
    constructor(scene, x, y, texture, upFrame, downFrame, overFrame, outFrame, callback) {
        super(scene, x, y, texture, upFrame);

        outFrame = outFrame || upFrame;

        this.upFrame = upFrame;
        this.downFrame = downFrame;
        this.overFrame = overFrame;
        this.callback = callback;
        this.scene = scene;

        this.setInteractive({ cursor: 'pointer' });

        this.onOverSound = null;
        this.onOutSound = null;
        this.onDownSound = null;
        this.onUpSound = null;

        this.on('pointerup', this.pointerUp, this);
        this.on('pointerdown', this.pointerDown, this);
        this.on('pointerover', this.pointerOver, this);
        this.on('pointerout', this.pointerOut, this);

        this.scene.add.existing(this);
    }

    pointerUp(pointer, x, y) {
        this.setFrame(this.upFrame);
        this.callback.call(this.scene, 'up');
    }

    pointerDown(pointer, x, y) {
        this.setFrame(this.downFrame);
        this.callback.call(this.scene, 'down');
    }

    pointerOver(pointer, x, y) {
        this.setFrame(this.overFrame);
    }

    pointerOut(pointer) {
        this.setFrame(this.upFrame);
    }
}

this.forceOut = false;

this.inputEnabled = true;

this.input.start(0, true);

this.input.useHandCursor = true;

this.setFrames(overFrame, outFrame, downFrame, upFrame);

if (callback !== null) {
    this.onInputUp.add(callback, callbackContext);
}

//  Redirect the input events to here so we can handle animation updates, etc
this.events.onInputOver.add(this.onInputOverHandler, this);
this.events.onInputOut.add(this.onInputOutHandler, this);
this.events.onInputDown.add(this.onInputDownHandler, this);
this.events.onInputUp.add(this.onInputUpHandler, this);

};

Phaser.Button.prototype = Object.create(Phaser.Image.prototype);
Phaser.Button.prototype.constructor = Phaser.Button;

//  State constants; local only. These are tied to property names in Phaser.Button.
var STATE_OVER = 'Over';
var STATE_OUT = 'Out';
var STATE_DOWN = 'Down';
var STATE_UP = 'Up';

/**
 * Clears all of the frames set on this Button.
 *
 * @method Phaser.Button#clearFrames
 */
Phaser.Button.prototype.clearFrames = function () {

    this.setFrames(null, null, null, null);

};

/**
 * Set the frame name/ID for the given state.
 *
 * @method Phaser.Button#setStateFrame
 * @private
 * @param {object} state - See `STATE_*`
 * @param {number|string} frame - The number or string representing the frame.
 * @param {boolean} switchImmediately - Immediately switch to the frame if it was set - and this is true.
 */
Phaser.Button.prototype.setStateFrame = function (state, frame, switchImmediately) {
    var frameKey = '_on' + state + 'Frame';

    if (frame !== null) // not null or undefined
    {
        this[frameKey] = frame;

        if (switchImmediately) {
            this.changeStateFrame(state);
        }
    } else {
        this[frameKey] = null;
    }

};

/**
 * Change the frame to that of the given state, _if_ the state has a frame assigned _and_ if the frames are not currently "frozen".
 *
 * @method Phaser.Button#changeStateFrame
 * @private
 * @param {object} state - See `STATE_*`
 * @return {boolean} True only if the frame was assigned a value, possibly the same one it already had.
 */
Phaser.Button.prototype.changeStateFrame = function (state) {

    if (this.freezeFrames) {
        return false;
    }

    var frameKey = '_on' + state + 'Frame';
    var frame = this[frameKey];

    if (typeof frame === 'string') {
        this.frameName = frame;
        return true;
    } else if (typeof frame === 'number') {
        this.frame = frame;
        return true;
    } else {
        return false;
    }

};

/**
 * Used to manually set the frames that will be used for the different states of the Button.
 *
 * Frames can be specified as either an integer (the frame ID) or a string (the frame name); these are the same values that can be used with a Sprite constructor.
 *
 * @method Phaser.Button#setFrames
 * @public
 * @param {string|integer} [overFrame] - The frame / frameName when the button is in the Over state.
 * @param {string|integer} [outFrame] - The frame / frameName when the button is in the Out state.
 * @param {string|integer} [downFrame] - The frame / frameName when the button is in the Down state.
 * @param {string|integer} [upFrame] - The frame / frameName when the button is in the Up state.
 */
Phaser.Button.prototype.setFrames = function (overFrame, outFrame, downFrame, upFrame) {

    this.setStateFrame(STATE_OVER, overFrame, this.input.pointerOver());
    this.setStateFrame(STATE_OUT, outFrame, !this.input.pointerOver());
    this.setStateFrame(STATE_DOWN, downFrame, this.input.pointerDown());
    this.setStateFrame(STATE_UP, upFrame, this.input.pointerUp());
};

/**
 * Set the sound/marker for the given state.
 *
 * @method Phaser.Button#setStateSound
 * @private
 * @param {object} state - See `STATE_*`
 * @param {Phaser.Sound|Phaser.AudioSprite} [sound] - Sound.
 * @param {string} [marker=''] - Sound marker.
 */
Phaser.Button.prototype.setStateSound = function (state, sound, marker) {

    var soundKey = 'on' + state + 'Sound';
    var markerKey = 'on' + state + 'SoundMarker';

    if (sound instanceof Phaser.Sound || sound instanceof Phaser.AudioSprite) {
        this[soundKey] = sound;
        this[markerKey] = typeof marker === 'string' ? marker : '';
    } else {
        this[soundKey] = null;
        this[markerKey] = '';
    }

};

/**
 * Play the sound for the given state, _if_ the state has a sound assigned.
 *
 * @method Phaser.Button#playStateSound
 * @private
 * @param {object} state - See `STATE_*`
 * @return {boolean} True only if a sound was played.
 */
Phaser.Button.prototype.playStateSound = function (state) {

    var soundKey = 'on' + state + 'Sound';
    var sound = this[soundKey];

    if (sound) {
        var markerKey = 'on' + state + 'SoundMarker';
        var marker = this[markerKey];

        sound.play(marker);
        return true;
    } else {
        return false;
    }

};

/**
 * Sets the sounds to be played whenever this Button is interacted with. Sounds can be either full Sound objects, or markers pointing to a section of a Sound object.
 * The most common forms of sounds are 'hover' effects and 'click' effects, which is why the order of the parameters is overSound then downSound.
 *
 * Call this function with no parameters to reset all sounds on this Button.
 *
 * @method Phaser.Button#setSounds
 * @public
 * @param {Phaser.Sound|Phaser.AudioSprite} [overSound] - Over Button Sound.
 * @param {string} [overMarker] - Over Button Sound Marker.
 * @param {Phaser.Sound|Phaser.AudioSprite} [downSound] - Down Button Sound.
 * @param {string} [downMarker] - Down Button Sound Marker.
 * @param {Phaser.Sound|Phaser.AudioSprite} [outSound] - Out Button Sound.
 * @param {string} [outMarker] - Out Button Sound Marker.
 * @param {Phaser.Sound|Phaser.AudioSprite} [upSound] - Up Button Sound.
 * @param {string} [upMarker] - Up Button Sound Marker.
 */
Phaser.Button.prototype.setSounds = function (overSound, overMarker, downSound, downMarker, outSound, outMarker, upSound, upMarker) {

    this.setStateSound(STATE_OVER, overSound, overMarker);
    this.setStateSound(STATE_OUT, outSound, outMarker);
    this.setStateSound(STATE_DOWN, downSound, downMarker);
    this.setStateSound(STATE_UP, upSound, upMarker);

};

/**
 * The Sound to be played when a Pointer moves over this Button.
 *
 * @method Phaser.Button#setOverSound
 * @public
 * @param {Phaser.Sound|Phaser.AudioSprite} sound - The Sound that will be played.
 * @param {string} [marker] - A Sound Marker that will be used in the playback.
 */
Phaser.Button.prototype.setOverSound = function (sound, marker) {

    this.setStateSound(STATE_OVER, sound, marker);

};

/**
 * The Sound to be played when a Pointer moves out of this Button.
 *
 * @method Phaser.Button#setOutSound
 * @public
 * @param {Phaser.Sound|Phaser.AudioSprite} sound - The Sound that will be played.
 * @param {string} [marker] - A Sound Marker that will be used in the playback.
 */
Phaser.Button.prototype.setOutSound = function (sound, marker) {

    this.setStateSound(STATE_OUT, sound, marker);

};

/**
 * The Sound to be played when a Pointer presses down on this Button.
 *
 * @method Phaser.Button#setDownSound
 * @public
 * @param {Phaser.Sound|Phaser.AudioSprite} sound - The Sound that will be played.
 * @param {string} [marker] - A Sound Marker that will be used in the playback.
 */
Phaser.Button.prototype.setDownSound = function (sound, marker) {

    this.setStateSound(STATE_DOWN, sound, marker);

};

/**
 * The Sound to be played when a Pointer has pressed down and is released from this Button.
 *
 * @method Phaser.Button#setUpSound
 * @public
 * @param {Phaser.Sound|Phaser.AudioSprite} sound - The Sound that will be played.
 * @param {string} [marker] - A Sound Marker that will be used in the playback.
 */
Phaser.Button.prototype.setUpSound = function (sound, marker) {

    this.setStateSound(STATE_UP, sound, marker);

};

/**
 * Internal function that handles input events.
 *
 * @method Phaser.Button#onInputOverHandler
 * @protected
 * @param {Phaser.Button} sprite - The Button that the event occurred on.
 * @param {Phaser.Pointer} pointer - The Pointer that activated the Button.
 */
Phaser.Button.prototype.onInputOverHandler = function (sprite, pointer) {

    if (pointer.justReleased() &&
        (this.justReleasedPreventsOver & pointer.pointerMode) === pointer.pointerMode) {
        //  If the Pointer was only just released then we don't fire an over event
        return;
    }

    this.changeStateFrame(STATE_OVER);

    if (this.onOverMouseOnly && !pointer.isMouse) {
        return;
    }

    this.playStateSound(STATE_OVER);

    if (this.onInputOver) {
        this.onInputOver.dispatch(this, pointer);
    }

};

/**
 * Internal function that handles input events.
 *
 * @method Phaser.Button#onInputOutHandler
 * @protected
 * @param {Phaser.Button} sprite - The Button that the event occurred on.
 * @param {Phaser.Pointer} pointer - The Pointer that activated the Button.
 */
Phaser.Button.prototype.onInputOutHandler = function (sprite, pointer) {

    this.changeStateFrame(STATE_OUT);

    this.playStateSound(STATE_OUT);

    if (this.onInputOut) {
        this.onInputOut.dispatch(this, pointer);
    }
};

/**
 * Internal function that handles input events.
 *
 * @method Phaser.Button#onInputDownHandler
 * @protected
 * @param {Phaser.Button} sprite - The Button that the event occurred on.
 * @param {Phaser.Pointer} pointer - The Pointer that activated the Button.
 */
Phaser.Button.prototype.onInputDownHandler = function (sprite, pointer) {

    this.changeStateFrame(STATE_DOWN);

    this.playStateSound(STATE_DOWN);

    if (this.onInputDown) {
        this.onInputDown.dispatch(this, pointer);
    }
};

/**
 * Internal function that handles input events.
 *
 * @method Phaser.Button#onInputUpHandler
 * @protected
 * @param {Phaser.Button} sprite - The Button that the event occurred on.
 * @param {Phaser.Pointer} pointer - The Pointer that activated the Button.
 * @param {boolean} isOver - Is the Pointer still over the Game Object?
 */
Phaser.Button.prototype.onInputUpHandler = function (sprite, pointer, isOver) {

    this.playStateSound(STATE_UP);

    //  Input dispatched early, before state change (but after sound)
    if (this.onInputUp) {
        this.onInputUp.dispatch(this, pointer, isOver);
    }

    if (this.freezeFrames) {
        return;
    }

    if (this.forceOut === true || (this.forceOut & pointer.pointerMode) === pointer.pointerMode) {
        this.changeStateFrame(STATE_OUT);
    } else {
        var changedUp = this.changeStateFrame(STATE_UP);
        if (!changedUp) {
            //  No Up frame to show..
            if (isOver) {
                this.changeStateFrame(STATE_OVER);
            } else {
                this.changeStateFrame(STATE_OUT);
            }
        }
    }

};


export default Button;
