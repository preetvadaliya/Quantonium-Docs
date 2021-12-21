<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# NxtUltrasonicSensor

A component that provides a high-level interface to an ultrasonic sensor on a LEGO MINDSTORMS NXT robot.

---

## Designer Properties

---

### AboveRangeEventEnabled

| Property Name          | Editor Type | Default Value |
| :--------------------- | :---------- | :------------ |
| AboveRangeEventEnabled | boolean     | False         |

### BelowRangeEventEnabled

| Property Name          | Editor Type | Default Value |
| :--------------------- | :---------- | :------------ |
| BelowRangeEventEnabled | boolean     | False         |

### BluetoothClient

| Property Name   | Editor Type     | Default Value |
| :-------------- | :-------------- | :------------ |
| BluetoothClient | BluetoothClient |               |

### BottomOfRange

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| BottomOfRange | non_negative_integer | 30            |

### SensorPort

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| SensorPort    | lego_nxt_sensor_port | 4             |

### TopOfRange

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| TopOfRange    | non_negative_integer | 90            |

### WithinRangeEventEnabled

| Property Name           | Editor Type | Default Value |
| :---------------------- | :---------- | :------------ |
| WithinRangeEventEnabled | boolean     | False         |

## Events

---

### AboveRange

<div block-type = "component_event" component-selector = "NxtUltrasonicSensor" event-selector = "AboveRange" id = "nxtultrasonicsensor-aboverange"></div>

Distance has gone above the range.

### BelowRange

<div block-type = "component_event" component-selector = "NxtUltrasonicSensor" event-selector = "BelowRange" id = "nxtultrasonicsensor-belowrange"></div>

Distance has gone below the range.

### WithinRange

<div block-type = "component_event" component-selector = "NxtUltrasonicSensor" event-selector = "WithinRange" id = "nxtultrasonicsensor-withinrange"></div>

Distance has gone within the range.

## Methods

---

### GetDistance

<div block-type = "component_method" component-selector = "NxtUltrasonicSensor" method-selector = "GetDistance" id = "nxtultrasonicsensor-getdistance"></div>

Return Type : <span class="number">number</span>

Returns the current distance in centimeters as a value between 0 and 254, or -1 if the distance can not be read.

## Block Properties

---

### AboveRangeEventEnabled

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "AboveRangeEventEnabled" property-type = "get" id = "get-nxtultrasonicsensor-aboverangeeventenabled"></div>

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "AboveRangeEventEnabled" property-type = "set" id = "set-nxtultrasonicsensor-aboverangeeventenabled"></div>

Whether the AboveRange event should fire when the distance goes above the TopOfRange.

| Param Name             | IO Type                              |
| :--------------------- | :----------------------------------- |
| AboveRangeEventEnabled | <span class="boolean">boolean</span> |

### BelowRangeEventEnabled

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "BelowRangeEventEnabled" property-type = "get" id = "get-nxtultrasonicsensor-belowrangeeventenabled"></div>

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "BelowRangeEventEnabled" property-type = "set" id = "set-nxtultrasonicsensor-belowrangeeventenabled"></div>

Whether the BelowRange event should fire when the distance goes below the BottomOfRange.

| Param Name             | IO Type                              |
| :--------------------- | :----------------------------------- |
| BelowRangeEventEnabled | <span class="boolean">boolean</span> |

### BottomOfRange

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "BottomOfRange" property-type = "get" id = "get-nxtultrasonicsensor-bottomofrange"></div>

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "BottomOfRange" property-type = "set" id = "set-nxtultrasonicsensor-bottomofrange"></div>

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| BottomOfRange | <span class="number">number</span> |

### TopOfRange

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "TopOfRange" property-type = "get" id = "get-nxtultrasonicsensor-topofrange"></div>

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "TopOfRange" property-type = "set" id = "set-nxtultrasonicsensor-topofrange"></div>

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| TopOfRange | <span class="number">number</span> |

### WithinRangeEventEnabled

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "WithinRangeEventEnabled" property-type = "get" id = "get-nxtultrasonicsensor-withinrangeeventenabled"></div>

<div block-type = "component_set_get" component-selector = "NxtUltrasonicSensor" property-selector = "WithinRangeEventEnabled" property-type = "set" id = "set-nxtultrasonicsensor-withinrangeeventenabled"></div>

Whether the WithinRange event should fire when the distance goes between the BottomOfRange and the TopOfRange.

| Param Name              | IO Type                              |
| :---------------------- | :----------------------------------- |
| WithinRangeEventEnabled | <span class="boolean">boolean</span> |

## Component

---

### NxtUltrasonicSensor

<div block-type = "component_component_block" component-selector = "NxtUltrasonicSensor" id = "component-nxtultrasonicsensor"></div>

Component NxtUltrasonicSensor.

Return Type : <span class="component">component</span>

