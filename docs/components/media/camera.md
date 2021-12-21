<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Camera

A component to take a picture using the device's camera. After the picture is taken, the name of the file on the phone containing the picture is available as an argument to the AfterPicture event. The file name can be used, for example, to set the Picture property of an Image component.

---

## Events

---

### AfterPicture

<div block-type = "component_event" component-selector = "Camera" event-selector = "AfterPicture" id = "camera-afterpicture"></div>

Called after the picture is taken. The text argument \`image\` is the path that can be used to locate the image on the phone.

| Param Name | IO Type                        | Getter Block                                                                                       | Setter Block                                                                                       |
| :--------- | :----------------------------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| image      | <span class="text">text</span> | <div block-type = "getter" variable-name = image id = "param-get-camera-afterpicture-image"></div> | <div block-type = "setter" variable-name = image id = "param-set-camera-afterpicture-image"></div> |

## Methods

---

### TakePicture

<div block-type = "component_method" component-selector = "Camera" method-selector = "TakePicture" id = "camera-takepicture"></div>

Return Type : <span class="void">Void</span>

Takes a picture, then raises the

## Block Properties

---

## Component

---

### Camera

<div block-type = "component_component_block" component-selector = "Camera" id = "component-camera"></div>

Component Camera.

Return Type : <span class="component">component</span>

