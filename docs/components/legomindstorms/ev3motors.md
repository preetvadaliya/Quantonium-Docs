<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Ev3Motors

A component that provides both high- and low-level interfaces to a LEGO MINDSTORMS EV3 robot, with functions that can control the motors.

---

## Designer Properties

---

### BluetoothClient

| Property Name   | Editor Type     | Default Value |
| :-------------- | :-------------- | :------------ |
| BluetoothClient | BluetoothClient |               |

### EnableSpeedRegulation

| Property Name         | Editor Type | Default Value |
| :-------------------- | :---------- | :------------ |
| EnableSpeedRegulation | boolean     | True          |

### MotorPorts

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| MotorPorts    | string      | ABC           |

### ReverseDirection

| Property Name    | Editor Type | Default Value |
| :--------------- | :---------- | :------------ |
| ReverseDirection | boolean     | False         |

### StopBeforeDisconnect

| Property Name        | Editor Type | Default Value |
| :------------------- | :---------- | :------------ |
| StopBeforeDisconnect | boolean     | True          |

### TachoCountChangedEventEnabled

| Property Name                 | Editor Type | Default Value |
| :---------------------------- | :---------- | :------------ |
| TachoCountChangedEventEnabled | boolean     | False         |

### WheelDiameter

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| WheelDiameter | float       | 4.32          |

## Events

---

### TachoCountChanged

<div block-type = "component_event" component-selector = "Ev3Motors" event-selector = "TachoCountChanged" id = "ev3motors-tachocountchanged"></div>

Called when the tacho count has changed.

| Param Name | IO Type                            | Getter Block                                                                                                         | Setter Block                                                                                                         |
| :--------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| tachoCount | <span class="number">number</span> | <div block-type = "getter" variable-name = tachoCount id = "param-get-ev3motors-tachocountchanged-tachocount"></div> | <div block-type = "setter" variable-name = tachoCount id = "param-set-ev3motors-tachocountchanged-tachocount"></div> |

## Methods

---

### GetTachoCount

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "GetTachoCount" id = "ev3motors-gettachocount"></div>

Return Type : <span class="number">number</span>

Get the current tacho count.

### ResetTachoCount

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "ResetTachoCount" id = "ev3motors-resettachocount"></div>

Return Type : <span class="void">Void</span>

Set the current tacho count to zero.

### RotateInDistance

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "RotateInDistance" id = "ev3motors-rotateindistance"></div>

Return Type : <span class="void">Void</span>

Rotate the motors in a distance.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| power      | <span class="number">number</span>   |
| distance   | <span class="number">number</span>   |
| useBrake   | <span class="boolean">boolean</span> |

### RotateInDuration

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "RotateInDuration" id = "ev3motors-rotateinduration"></div>

Return Type : <span class="void">Void</span>

Rotate the motors in a period of time.

| Param Name   | Input Type                           |
| :----------- | :----------------------------------- |
| power        | <span class="number">number</span>   |
| milliseconds | <span class="number">number</span>   |
| useBrake     | <span class="boolean">boolean</span> |

### RotateInTachoCounts

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "RotateInTachoCounts" id = "ev3motors-rotateintachocounts"></div>

Return Type : <span class="void">Void</span>

Rotate the motors in a number of tacho counts.

| Param Name  | Input Type                           |
| :---------- | :----------------------------------- |
| power       | <span class="number">number</span>   |
| tachoCounts | <span class="number">number</span>   |
| useBrake    | <span class="boolean">boolean</span> |

### RotateIndefinitely

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "RotateIndefinitely" id = "ev3motors-rotateindefinitely"></div>

Return Type : <span class="void">Void</span>

Start to rotate the motors.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| power      | <span class="number">number</span> |

### RotateSyncInDistance

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "RotateSyncInDistance" id = "ev3motors-rotatesyncindistance"></div>

Return Type : <span class="void">Void</span>

Rotate the motors at the same speed for a distance in cm.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| power      | <span class="number">number</span>   |
| distance   | <span class="number">number</span>   |
| turnRatio  | <span class="number">number</span>   |
| useBrake   | <span class="boolean">boolean</span> |

### RotateSyncInDuration

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "RotateSyncInDuration" id = "ev3motors-rotatesyncinduration"></div>

Return Type : <span class="void">Void</span>

Rotate the motors at the same speed in a period of time.

| Param Name   | Input Type                           |
| :----------- | :----------------------------------- |
| power        | <span class="number">number</span>   |
| milliseconds | <span class="number">number</span>   |
| turnRatio    | <span class="number">number</span>   |
| useBrake     | <span class="boolean">boolean</span> |

### RotateSyncInTachoCounts

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "RotateSyncInTachoCounts" id = "ev3motors-rotatesyncintachocounts"></div>

Return Type : <span class="void">Void</span>

Rotate the motors at the same speed in a number of tacho counts.

| Param Name  | Input Type                           |
| :---------- | :----------------------------------- |
| power       | <span class="number">number</span>   |
| tachoCounts | <span class="number">number</span>   |
| turnRatio   | <span class="number">number</span>   |
| useBrake    | <span class="boolean">boolean</span> |

### RotateSyncIndefinitely

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "RotateSyncIndefinitely" id = "ev3motors-rotatesyncindefinitely"></div>

Return Type : <span class="void">Void</span>

Start to rotate the motors at the same speed.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| power      | <span class="number">number</span> |
| turnRatio  | <span class="number">number</span> |

### Stop

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "Stop" id = "ev3motors-stop"></div>

Return Type : <span class="void">Void</span>

Stop the motors of the robot.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| useBrake   | <span class="boolean">boolean</span> |

### ToggleDirection

<div block-type = "component_method" component-selector = "Ev3Motors" method-selector = "ToggleDirection" id = "ev3motors-toggledirection"></div>

Return Type : <span class="void">Void</span>

Toggle the direction of motors.

## Block Properties

---

### BluetoothClient

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "BluetoothClient" property-type = "get" id = "get-ev3motors-bluetoothclient"></div>

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "BluetoothClient" property-type = "set" id = "set-ev3motors-bluetoothclient"></div>

The BluetoothClient component that should be used for communication.

| Param Name      | IO Type                                  |
| :-------------- | :--------------------------------------- |
| BluetoothClient | <span class="component">component</span> |

### EnableSpeedRegulation

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "EnableSpeedRegulation" property-type = "get" id = "get-ev3motors-enablespeedregulation"></div>

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "EnableSpeedRegulation" property-type = "set" id = "set-ev3motors-enablespeedregulation"></div>

Specifies whether to keep motor rotation at constant speed.

| Param Name            | IO Type                              |
| :-------------------- | :----------------------------------- |
| EnableSpeedRegulation | <span class="boolean">boolean</span> |

### ReverseDirection

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "ReverseDirection" property-type = "get" id = "get-ev3motors-reversedirection"></div>

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "ReverseDirection" property-type = "set" id = "set-ev3motors-reversedirection"></div>

Set whether the direction of motors is reversed or not.

| Param Name       | IO Type                              |
| :--------------- | :----------------------------------- |
| ReverseDirection | <span class="boolean">boolean</span> |

### StopBeforeDisconnect

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "StopBeforeDisconnect" property-type = "get" id = "get-ev3motors-stopbeforedisconnect"></div>

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "StopBeforeDisconnect" property-type = "set" id = "set-ev3motors-stopbeforedisconnect"></div>

Whether to stop the motor before disconnecting.

| Param Name           | IO Type                              |
| :------------------- | :----------------------------------- |
| StopBeforeDisconnect | <span class="boolean">boolean</span> |

### TachoCountChangedEventEnabled

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "TachoCountChangedEventEnabled" property-type = "get" id = "get-ev3motors-tachocountchangedeventenabled"></div>

<div block-type = "component_set_get" component-selector = "Ev3Motors" property-selector = "TachoCountChangedEventEnabled" property-type = "set" id = "set-ev3motors-tachocountchangedeventenabled"></div>

Whether the TachoCountChanged event should fire when the angle is changed.

| Param Name                    | IO Type                              |
| :---------------------------- | :----------------------------------- |
| TachoCountChangedEventEnabled | <span class="boolean">boolean</span> |

## Component

---

### Ev3Motors

<div block-type = "component_component_block" component-selector = "Ev3Motors" id = "component-ev3motors"></div>

Component Ev3Motors.

Return Type : <span class="component">component</span>

