<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# ProximitySensor

Non-visible component that can measures the proximity of an object in cm relative to the view screen of a device. This sensor is typically used to determine whether a handset is being held up to a persons ear; i.e. lets you determine how far away an object is from a device. Many devices return the absolute distance, in cm, but some return only near and far values. In this case, the sensor usually reports its maximum range value in the far state and a lesser value in the near state.

---

## Designer Properties

---

### Enabled

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Enabled       | boolean     | True          |

### KeepRunningWhenOnPause

| Property Name          | Editor Type | Default Value |
| :--------------------- | :---------- | :------------ |
| KeepRunningWhenOnPause | boolean     | False         |

## Events

---

### ProximityChanged

<div block-type = "component_event" component-selector = "ProximitySensor" event-selector = "ProximityChanged" id = "proximitysensor-proximitychanged"></div>

Triggered when distance (in cm) of the object to the device changes.

| Param Name | IO Type                            | Getter Block                                                                                                          | Setter Block                                                                                                          |
| :--------- | :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| distance   | <span class="number">number</span> | <div block-type = "getter" variable-name = distance id = "param-get-proximitysensor-proximitychanged-distance"></div> | <div block-type = "setter" variable-name = distance id = "param-set-proximitysensor-proximitychanged-distance"></div> |

## Block Properties

---

### Available

<div block-type = "component_set_get" component-selector = "ProximitySensor" property-selector = "Available" property-type = "get" id = "get-proximitysensor-available"></div>

Reports whether or not the device has a proximity sensor.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Available  | <span class="boolean">boolean</span> |

### Distance

<div block-type = "component_set_get" component-selector = "ProximitySensor" property-selector = "Distance" property-type = "get" id = "get-proximitysensor-distance"></div>

Returns the distance from the object to the device

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Distance   | <span class="number">number</span> |

### Enabled

<div block-type = "component_set_get" component-selector = "ProximitySensor" property-selector = "Enabled" property-type = "get" id = "get-proximitysensor-enabled"></div>

<div block-type = "component_set_get" component-selector = "ProximitySensor" property-selector = "Enabled" property-type = "set" id = "set-proximitysensor-enabled"></div>

If true, the sensor will generate events. Otherwise, no events are generated.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Enabled    | <span class="boolean">boolean</span> |

### KeepRunningWhenOnPause

<div block-type = "component_set_get" component-selector = "ProximitySensor" property-selector = "KeepRunningWhenOnPause" property-type = "get" id = "get-proximitysensor-keeprunningwhenonpause"></div>

<div block-type = "component_set_get" component-selector = "ProximitySensor" property-selector = "KeepRunningWhenOnPause" property-type = "set" id = "set-proximitysensor-keeprunningwhenonpause"></div>

Returns value of keepRunningWhenOnPause

| Param Name             | IO Type                              |
| :--------------------- | :----------------------------------- |
| KeepRunningWhenOnPause | <span class="boolean">boolean</span> |

### MaximumRange

<div block-type = "component_set_get" component-selector = "ProximitySensor" property-selector = "MaximumRange" property-type = "get" id = "get-proximitysensor-maximumrange"></div>

Reports the Maximum Range of the device's ProximitySensor

| Param Name   | IO Type                            |
| :----------- | :--------------------------------- |
| MaximumRange | <span class="number">number</span> |

## Component

---

### ProximitySensor

<div block-type = "component_component_block" component-selector = "ProximitySensor" id = "component-proximitysensor"></div>

Component ProximitySensor.

Return Type : <span class="component">component</span>

