<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# MagneticFieldSensor

Non-visible component that measures the ambient geomagnetic field for all three physical axes (x, y, z) in Tesla https://en.wikipedia.org/wiki/Tesla\_(unit).

---

## Designer Properties

---

### Enabled

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Enabled       | boolean     | True          |

## Events

---

### MagneticChanged

<div block-type = "component_event" component-selector = "MagneticFieldSensor" event-selector = "MagneticChanged" id = "magneticfieldsensor-magneticchanged"></div>

Triggers when magnetic field has changed, setting the new values in parameters.

| Param Name       | IO Type                            | Getter Block                                                                                                                             | Setter Block                                                                                                                             |
| :--------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| xStrength        | <span class="number">number</span> | <div block-type = "getter" variable-name = xStrength id = "param-get-magneticfieldsensor-magneticchanged-xstrength"></div>               | <div block-type = "setter" variable-name = xStrength id = "param-set-magneticfieldsensor-magneticchanged-xstrength"></div>               |
| yStrength        | <span class="number">number</span> | <div block-type = "getter" variable-name = yStrength id = "param-get-magneticfieldsensor-magneticchanged-ystrength"></div>               | <div block-type = "setter" variable-name = yStrength id = "param-set-magneticfieldsensor-magneticchanged-ystrength"></div>               |
| zStrength        | <span class="number">number</span> | <div block-type = "getter" variable-name = zStrength id = "param-get-magneticfieldsensor-magneticchanged-zstrength"></div>               | <div block-type = "setter" variable-name = zStrength id = "param-set-magneticfieldsensor-magneticchanged-zstrength"></div>               |
| absoluteStrength | <span class="number">number</span> | <div block-type = "getter" variable-name = absoluteStrength id = "param-get-magneticfieldsensor-magneticchanged-absolutestrength"></div> | <div block-type = "setter" variable-name = absoluteStrength id = "param-set-magneticfieldsensor-magneticchanged-absolutestrength"></div> |

## Block Properties

---

### AbsoluteStrength

<div block-type = "component_set_get" component-selector = "MagneticFieldSensor" property-selector = "AbsoluteStrength" property-type = "get" id = "get-magneticfieldsensor-absolutestrength"></div>

Indicates the absolute strength of the field.

| Param Name       | IO Type                            |
| :--------------- | :--------------------------------- |
| AbsoluteStrength | <span class="number">number</span> |

### Available

<div block-type = "component_set_get" component-selector = "MagneticFieldSensor" property-selector = "Available" property-type = "get" id = "get-magneticfieldsensor-available"></div>

Indicates that there is a magnetic field sensor in the device and it is available.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Available  | <span class="boolean">boolean</span> |

### Enabled

<div block-type = "component_set_get" component-selector = "MagneticFieldSensor" property-selector = "Enabled" property-type = "get" id = "get-magneticfieldsensor-enabled"></div>

<div block-type = "component_set_get" component-selector = "MagneticFieldSensor" property-selector = "Enabled" property-type = "set" id = "set-magneticfieldsensor-enabled"></div>

Indicates whether or not the magnetic field sensor is enabled and working.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Enabled    | <span class="boolean">boolean</span> |

### MaximumRange

<div block-type = "component_set_get" component-selector = "MagneticFieldSensor" property-selector = "MaximumRange" property-type = "get" id = "get-magneticfieldsensor-maximumrange"></div>

Indicates the maximum range the magnetic sensor can reach.

| Param Name   | IO Type                            |
| :----------- | :--------------------------------- |
| MaximumRange | <span class="number">number</span> |

### XStrength

<div block-type = "component_set_get" component-selector = "MagneticFieldSensor" property-selector = "XStrength" property-type = "get" id = "get-magneticfieldsensor-xstrength"></div>

Indicates the field's strength in the X-axis.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| XStrength  | <span class="number">number</span> |

### YStrength

<div block-type = "component_set_get" component-selector = "MagneticFieldSensor" property-selector = "YStrength" property-type = "get" id = "get-magneticfieldsensor-ystrength"></div>

Indicates the field's strength in the Y-axis.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| YStrength  | <span class="number">number</span> |

### ZStrength

<div block-type = "component_set_get" component-selector = "MagneticFieldSensor" property-selector = "ZStrength" property-type = "get" id = "get-magneticfieldsensor-zstrength"></div>

Indicates the field's strength in the Z-axis.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| ZStrength  | <span class="number">number</span> |

## Component

---

### MagneticFieldSensor

<div block-type = "component_component_block" component-selector = "MagneticFieldSensor" id = "component-magneticfieldsensor"></div>

Component MagneticFieldSensor.

Return Type : <span class="component">component</span>

