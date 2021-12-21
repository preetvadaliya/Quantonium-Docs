<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# OrientationSensor

Non-visible component providing information about the device's physical orientation in three dimensions:

*   **Roll**: 0 degrees when the device is level, increases to 90 degrees as the device is tilted up on its left side, and decreases to -90 degrees when the device is tilted up on its right side.
*   **Pitch**: 0 degrees when the device is level, up to 90 degrees as the device is tilted so its top is pointing down, up to 180 degrees as it gets turned over. Similarly, as the device is tilted so its bottom points down, pitch decreases to -90 degrees, then further decreases to -180 degrees as it gets turned all the way over.
*   **Azimuth**: 0 degrees when the top of the device is pointing north, 90 degrees when it is pointing east, 180 degrees when it is pointing south, 270 degrees when it is pointing west, etc.

These measurements assume that the device itself is not moving.

---

## Designer Properties

---

### Enabled

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Enabled       | boolean     | True          |

## Events

---

### OrientationChanged

<div block-type = "component_event" component-selector = "OrientationSensor" event-selector = "OrientationChanged" id = "orientationsensor-orientationchanged"></div>

Called when the orientation has changed.

| Param Name | IO Type                            | Getter Block                                                                                                            | Setter Block                                                                                                            |
| :--------- | :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| azimuth    | <span class="number">number</span> | <div block-type = "getter" variable-name = azimuth id = "param-get-orientationsensor-orientationchanged-azimuth"></div> | <div block-type = "setter" variable-name = azimuth id = "param-set-orientationsensor-orientationchanged-azimuth"></div> |
| pitch      | <span class="number">number</span> | <div block-type = "getter" variable-name = pitch id = "param-get-orientationsensor-orientationchanged-pitch"></div>     | <div block-type = "setter" variable-name = pitch id = "param-set-orientationsensor-orientationchanged-pitch"></div>     |
| roll       | <span class="number">number</span> | <div block-type = "getter" variable-name = roll id = "param-get-orientationsensor-orientationchanged-roll"></div>       | <div block-type = "setter" variable-name = roll id = "param-set-orientationsensor-orientationchanged-roll"></div>       |

## Block Properties

---

### Angle

<div block-type = "component_set_get" component-selector = "OrientationSensor" property-selector = "Angle" property-type = "get" id = "get-orientationsensor-angle"></div>

Returns an angle that tells the direction in which the device is tiled. That is, it tells the direction of the force that would be felt by a ball rolling on the surface of the device.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Angle      | <span class="number">number</span> |

### Available

<div block-type = "component_set_get" component-selector = "OrientationSensor" property-selector = "Available" property-type = "get" id = "get-orientationsensor-available"></div>

Indicates whether the orientation sensor is present on the device.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Available  | <span class="boolean">boolean</span> |

### Azimuth

<div block-type = "component_set_get" component-selector = "OrientationSensor" property-selector = "Azimuth" property-type = "get" id = "get-orientationsensor-azimuth"></div>

Returns the azimuth angle of the device. To return meaningful values the sensor must be enabled.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Azimuth    | <span class="number">number</span> |

### Enabled

<div block-type = "component_set_get" component-selector = "OrientationSensor" property-selector = "Enabled" property-type = "get" id = "get-orientationsensor-enabled"></div>

<div block-type = "component_set_get" component-selector = "OrientationSensor" property-selector = "Enabled" property-type = "set" id = "set-orientationsensor-enabled"></div>

Specifies whether the orientation sensor is enabled.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Enabled    | <span class="boolean">boolean</span> |

### Magnitude

<div block-type = "component_set_get" component-selector = "OrientationSensor" property-selector = "Magnitude" property-type = "get" id = "get-orientationsensor-magnitude"></div>

Returns a number between 0 and 1 indicating how much the device is tilted. It gives the magnitude of the force that would be felt by a ball rolling on the surface of the device. For the angle of tilt, use

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Magnitude  | <span class="number">number</span> |

### Pitch

<div block-type = "component_set_get" component-selector = "OrientationSensor" property-selector = "Pitch" property-type = "get" id = "get-orientationsensor-pitch"></div>

Returns the pitch angle of the device. To return meaningful values the sensor must be enabled.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Pitch      | <span class="number">number</span> |

### Roll

<div block-type = "component_set_get" component-selector = "OrientationSensor" property-selector = "Roll" property-type = "get" id = "get-orientationsensor-roll"></div>

Returns the roll angle of the device. To return meaningful values the sensor must be enabled.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Roll       | <span class="number">number</span> |

## Component

---

### OrientationSensor

<div block-type = "component_component_block" component-selector = "OrientationSensor" id = "component-orientationsensor"></div>

Component OrientationSensor.

Return Type : <span class="component">component</span>

