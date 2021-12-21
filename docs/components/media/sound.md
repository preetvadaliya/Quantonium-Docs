<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Sound

A multimedia component that plays sound files and optionally vibrates for the number of milliseconds (thousandths of a second) specified in the Blocks Editor. The name of the sound file to play can be specified either in the Designer or in the Blocks Editor.

For supported sound file formats, see [Android Supported Media Formats](http://developer.android.com/guide/appendix/media-formats.html).

This `Sound` component is best for short sound files, such as sound effects, while the `Player` component is more efficient for longer sounds, such as songs.

You might get an error if you attempt to play a sound immeditely after setting the source.

---

## Designer Properties

---

### MinimumInterval

| Property Name   | Editor Type          | Default Value |
| :-------------- | :------------------- | :------------ |
| MinimumInterval | non_negative_integer | 500           |

### Source

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Source        | asset       |               |

## Events

---

### SoundError

<div block-type = "component_event" component-selector = "Sound" event-selector = "SoundError" id = "sound-sounderror"></div>

The SoundError event is no longer used. Please use the Screen.ErrorOccurred event instead.

| Param Name | IO Type                        | Getter Block                                                                                        | Setter Block                                                                                        |
| :--------- | :----------------------------- | :-------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| message    | <span class="text">text</span> | <div block-type = "getter" variable-name = message id = "param-get-sound-sounderror-message"></div> | <div block-type = "setter" variable-name = message id = "param-set-sound-sounderror-message"></div> |

## Methods

---

### Pause

<div block-type = "component_method" component-selector = "Sound" method-selector = "Pause" id = "sound-pause"></div>

Return Type : <span class="void">Void</span>

Pauses playing the sound if it is being played.

### Play

<div block-type = "component_method" component-selector = "Sound" method-selector = "Play" id = "sound-play"></div>

Return Type : <span class="void">Void</span>

Plays the sound specified by the Source property.

### Resume

<div block-type = "component_method" component-selector = "Sound" method-selector = "Resume" id = "sound-resume"></div>

Return Type : <span class="void">Void</span>

Resumes playing the sound after a pause.

### Stop

<div block-type = "component_method" component-selector = "Sound" method-selector = "Stop" id = "sound-stop"></div>

Return Type : <span class="void">Void</span>

Stops playing the sound if it is being played.

### Vibrate

<div block-type = "component_method" component-selector = "Sound" method-selector = "Vibrate" id = "sound-vibrate"></div>

Return Type : <span class="void">Void</span>

Vibrates for the specified number of milliseconds.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| millisecs  | <span class="number">number</span> |

## Block Properties

---

### MinimumInterval

<div block-type = "component_set_get" component-selector = "Sound" property-selector = "MinimumInterval" property-type = "get" id = "get-sound-minimuminterval"></div>

<div block-type = "component_set_get" component-selector = "Sound" property-selector = "MinimumInterval" property-type = "set" id = "set-sound-minimuminterval"></div>

The minimum interval, in milliseconds, between sounds. If you play a sound, all further Play() calls will be ignored until the interval has elapsed.

| Param Name      | IO Type                            |
| :-------------- | :--------------------------------- |
| MinimumInterval | <span class="number">number</span> |

### Source

<div block-type = "component_set_get" component-selector = "Sound" property-selector = "Source" property-type = "get" id = "get-sound-source"></div>

<div block-type = "component_set_get" component-selector = "Sound" property-selector = "Source" property-type = "set" id = "set-sound-source"></div>

The name of the sound file. Only certain formats are supported. See http://developer.android.com/guide/appendix/media-formats.html.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Source     | <span class="text">text</span> |

## Component

---

### Sound

<div block-type = "component_component_block" component-selector = "Sound" id = "component-sound"></div>

Component Sound.

Return Type : <span class="component">component</span>

