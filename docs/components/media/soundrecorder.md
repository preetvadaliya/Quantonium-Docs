<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# SoundRecorder

Multimedia component that records audio.

---

## Designer Properties

---

### SavedRecording

| Property Name  | Editor Type | Default Value |
| :------------- | :---------- | :------------ |
| SavedRecording | string      |               |

## Events

---

### AfterSoundRecorded

<div block-type = "component_event" component-selector = "SoundRecorder" event-selector = "AfterSoundRecorded" id = "soundrecorder-aftersoundrecorded"></div>

Provides the location of the newly created sound.

| Param Name | IO Type                        | Getter Block                                                                                                    | Setter Block                                                                                                    |
| :--------- | :----------------------------- | :-------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| sound      | <span class="text">text</span> | <div block-type = "getter" variable-name = sound id = "param-get-soundrecorder-aftersoundrecorded-sound"></div> | <div block-type = "setter" variable-name = sound id = "param-set-soundrecorder-aftersoundrecorded-sound"></div> |

### StartedRecording

<div block-type = "component_event" component-selector = "SoundRecorder" event-selector = "StartedRecording" id = "soundrecorder-startedrecording"></div>

Indicates that the recorder has started, and can be stopped.

### StoppedRecording

<div block-type = "component_event" component-selector = "SoundRecorder" event-selector = "StoppedRecording" id = "soundrecorder-stoppedrecording"></div>

Indicates that the recorder has stopped, and can be started again.

## Methods

---

### Start

<div block-type = "component_method" component-selector = "SoundRecorder" method-selector = "Start" id = "soundrecorder-start"></div>

Return Type : <span class="void">Void</span>

Starts recording.

### Stop

<div block-type = "component_method" component-selector = "SoundRecorder" method-selector = "Stop" id = "soundrecorder-stop"></div>

Return Type : <span class="void">Void</span>

Stops recording.

## Block Properties

---

### SavedRecording

<div block-type = "component_set_get" component-selector = "SoundRecorder" property-selector = "SavedRecording" property-type = "get" id = "get-soundrecorder-savedrecording"></div>

<div block-type = "component_set_get" component-selector = "SoundRecorder" property-selector = "SavedRecording" property-type = "set" id = "set-soundrecorder-savedrecording"></div>

Specifies the path to the file where the recording should be stored. If this property is the empty string, then starting a recording will create a file in an appropriate location. If the property is not the empty string, it should specify a complete path to a file in an existing directory, including a file name with the extension .3gp.

| Param Name     | IO Type                        |
| :------------- | :----------------------------- |
| SavedRecording | <span class="text">text</span> |

## Component

---

### SoundRecorder

<div block-type = "component_component_block" component-selector = "SoundRecorder" id = "component-soundrecorder"></div>

Component SoundRecorder.

Return Type : <span class="component">component</span>

