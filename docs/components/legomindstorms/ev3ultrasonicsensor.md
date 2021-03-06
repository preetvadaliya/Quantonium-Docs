<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Ev3UltrasonicSensor

A component that provides a high-level interface to an ultrasonic sensor on a LEGO MINDSTORMS EV3 robot.

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
| SensorPort    | lego_ev3_sensor_port | 1             |

### TopOfRange

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| TopOfRange    | non_negative_integer | 90            |

### Unit

| Property Name | Editor Type                     | Default Value |
| :------------ | :------------------------------ | :------------ |
| Unit          | lego_ev3_ultrasonic_sensor_mode | cm            |

### WithinRangeEventEnabled

| Property Name           | Editor Type | Default Value |
| :---------------------- | :---------- | :------------ |
| WithinRangeEventEnabled | boolean     | False         |

## Events

---

### AboveRange

<div block-type = "component_event" component-selector = "Ev3UltrasonicSensor" event-selector = "AboveRange" id = "ev3ultrasonicsensor-aboverange"></div>

Called when the detected distance has gone above the range.

### BelowRange

<div block-type = "component_event" component-selector = "Ev3UltrasonicSensor" event-selector = "BelowRange" id = "ev3ultrasonicsensor-belowrange"></div>

Called when the detected distance has gone below the range.

### WithinRange

<div block-type = "component_event" component-selector = "Ev3UltrasonicSensor" event-selector = "WithinRange" id = "ev3ultrasonicsensor-withinrange"></div>

Called when the detected distance has gone within the range.

## Methods

---

### GetDistance

<div block-type = "component_method" component-selector = "Ev3UltrasonicSensor" method-selector = "GetDistance" id = "ev3ultrasonicsensor-getdistance"></div>

Return Type : <span class="number">number</span>

Returns the current distance in centimeters as a value between 0 and 254, or -1 if the distance can not be read.

## Block Properties

---

### AboveRangeEventEnabled

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "AboveRangeEventEnabled" property-type = "get" id = "get-ev3ultrasonicsensor-aboverangeeventenabled"></div>

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "AboveRangeEventEnabled" property-type = "set" id = "set-ev3ultrasonicsensor-aboverangeeventenabled"></div>

Whether the AboveRange event should fire when the distance goes above the TopOfRange.

| Param Name             | IO Type                              |
| :--------------------- | :----------------------------------- |
| AboveRangeEventEnabled | <span class="boolean">boolean</span> |

### BelowRangeEventEnabled

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "BelowRangeEventEnabled" property-type = "get" id = "get-ev3ultrasonicsensor-belowrangeeventenabled"></div>

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "BelowRangeEventEnabled" property-type = "set" id = "set-ev3ultrasonicsensor-belowrangeeventenabled"></div>

Whether the BelowRange event should fire when the distance goes below the BottomOfRange.

| Param Name             | IO Type                              |
| :--------------------- | :----------------------------------- |
| BelowRangeEventEnabled | <span class="boolean">boolean</span> |

### BluetoothClient

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "BluetoothClient" property-type = "get" id = "get-ev3ultrasonicsensor-bluetoothclient"></div>

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "BluetoothClient" property-type = "set" id = "set-ev3ultrasonicsensor-bluetoothclient"></div>

The BluetoothClient component that should be used for communication.

| Param Name      | IO Type                                  |
| :-------------- | :--------------------------------------- |
| BluetoothClient | <span class="component">component</span> |

### BottomOfRange

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "BottomOfRange" property-type = "get" id = "get-ev3ultrasonicsensor-bottomofrange"></div>

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "BottomOfRange" property-type = "set" id = "set-ev3ultrasonicsensor-bottomofrange"></div>

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| BottomOfRange | <span class="number">number</span> |

### TopOfRange

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "TopOfRange" property-type = "get" id = "get-ev3ultrasonicsensor-topofrange"></div>

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "TopOfRange" property-type = "set" id = "set-ev3ultrasonicsensor-topofrange"></div>

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| TopOfRange | <span class="number">number</span> |

### Unit

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "Unit" property-type = "get" id = "get-ev3ultrasonicsensor-unit"></div>

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "Unit" property-type = "set" id = "set-ev3ultrasonicsensor-unit"></div>

Specifies the unit of distance.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Unit       | <span class="text">text</span> |

### Unit Options

| Name        | Description            | Block                                                                                                                                 |
| :---------- | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Centimeters | Option for Centimeters | <div block-type = "helper" helper-name = "UltrasonicSensorUnit Centimeters" id = "helper-ev3ultrasonicsensor-unit-centimeters"></div> |
| Inches      | Option for Inches      | <div block-type = "helper" helper-name = "UltrasonicSensorUnit Inches" id = "helper-ev3ultrasonicsensor-unit-inches"></div>           |

### WithinRangeEventEnabled

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "WithinRangeEventEnabled" property-type = "get" id = "get-ev3ultrasonicsensor-withinrangeeventenabled"></div>

<div block-type = "component_set_get" component-selector = "Ev3UltrasonicSensor" property-selector = "WithinRangeEventEnabled" property-type = "set" id = "set-ev3ultrasonicsensor-withinrangeeventenabled"></div>

Whether the WithinRange event should fire when the distance goes between the BottomOfRange and the TopOfRange.

| Param Name              | IO Type                              |
| :---------------------- | :----------------------------------- |
| WithinRangeEventEnabled | <span class="boolean">boolean</span> |

## Component

---

### Ev3UltrasonicSensor

<div block-type = "component_component_block" component-selector = "Ev3UltrasonicSensor" id = "component-ev3ultrasonicsensor"></div>

Component Ev3UltrasonicSensor.

Return Type : <span class="component">component</span>

