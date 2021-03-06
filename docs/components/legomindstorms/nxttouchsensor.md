<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# NxtTouchSensor

A component that provides a high-level interface to a touch sensor on a LEGO MINDSTORMS NXT robot.

---

## Designer Properties

---

### BluetoothClient

| Property Name   | Editor Type     | Default Value |
| :-------------- | :-------------- | :------------ |
| BluetoothClient | BluetoothClient |               |

### PressedEventEnabled

| Property Name       | Editor Type | Default Value |
| :------------------ | :---------- | :------------ |
| PressedEventEnabled | boolean     | False         |

### ReleasedEventEnabled

| Property Name        | Editor Type | Default Value |
| :------------------- | :---------- | :------------ |
| ReleasedEventEnabled | boolean     | False         |

### SensorPort

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| SensorPort    | lego_nxt_sensor_port | 1             |

## Events

---

### Pressed

<div block-type = "component_event" component-selector = "NxtTouchSensor" event-selector = "Pressed" id = "nxttouchsensor-pressed"></div>

Touch sensor has been pressed.

### Released

<div block-type = "component_event" component-selector = "NxtTouchSensor" event-selector = "Released" id = "nxttouchsensor-released"></div>

Touch sensor has been released.

## Methods

---

### IsPressed

<div block-type = "component_method" component-selector = "NxtTouchSensor" method-selector = "IsPressed" id = "nxttouchsensor-ispressed"></div>

Return Type : <span class="boolean">boolean</span>

Returns true if the touch sensor is pressed.

## Block Properties

---

### PressedEventEnabled

<div block-type = "component_set_get" component-selector = "NxtTouchSensor" property-selector = "PressedEventEnabled" property-type = "get" id = "get-nxttouchsensor-pressedeventenabled"></div>

<div block-type = "component_set_get" component-selector = "NxtTouchSensor" property-selector = "PressedEventEnabled" property-type = "set" id = "set-nxttouchsensor-pressedeventenabled"></div>

Whether the Pressed event should fire when the touch sensor is pressed.

| Param Name          | IO Type                              |
| :------------------ | :----------------------------------- |
| PressedEventEnabled | <span class="boolean">boolean</span> |

### ReleasedEventEnabled

<div block-type = "component_set_get" component-selector = "NxtTouchSensor" property-selector = "ReleasedEventEnabled" property-type = "get" id = "get-nxttouchsensor-releasedeventenabled"></div>

<div block-type = "component_set_get" component-selector = "NxtTouchSensor" property-selector = "ReleasedEventEnabled" property-type = "set" id = "set-nxttouchsensor-releasedeventenabled"></div>

Whether the Released event should fire when the touch sensor is released.

| Param Name           | IO Type                              |
| :------------------- | :----------------------------------- |
| ReleasedEventEnabled | <span class="boolean">boolean</span> |

## Component

---

### NxtTouchSensor

<div block-type = "component_component_block" component-selector = "NxtTouchSensor" id = "component-nxttouchsensor"></div>

Component NxtTouchSensor.

Return Type : <span class="component">component</span>

