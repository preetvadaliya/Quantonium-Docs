<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Camcorder

A component to record a video using the device's camcorder.After the video is recorded, the name of the file on the phone containing the clip is available as an argument to the AfterRecording event. The file name can be used, for example, to set the source property of a VideoPlayer component.

---

## Events

---

### AfterRecording

<div block-type = "component_event" component-selector = "Camcorder" event-selector = "AfterRecording" id = "camcorder-afterrecording"></div>

Indicates that a video was recorded with the camera and provides the path to the stored video.

| Param Name | IO Type                        | Getter Block                                                                                          | Setter Block                                                                                          |
| :--------- | :----------------------------- | :---------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| clip       | <span class="text">text</span> | <div block-type = "getter" variable-name = clip id = "param-get-camcorder-afterrecording-clip"></div> | <div block-type = "setter" variable-name = clip id = "param-set-camcorder-afterrecording-clip"></div> |

## Methods

---

### RecordVideo

<div block-type = "component_method" component-selector = "Camcorder" method-selector = "RecordVideo" id = "camcorder-recordvideo"></div>

Return Type : <span class="void">Void</span>

Records a video, then raises the

## Component

---

### Camcorder

<div block-type = "component_component_block" component-selector = "Camcorder" id = "component-camcorder"></div>

Component Camcorder.

Return Type : <span class="component">component</span>

