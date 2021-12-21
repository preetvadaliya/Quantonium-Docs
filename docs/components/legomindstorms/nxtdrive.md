<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# NxtDrive

A component that provides a high-level interface to a LEGO MINDSTORMS NXT robot, with functions that can move and turn the robot.

---

## Designer Properties

---

### BluetoothClient

| Property Name   | Editor Type     | Default Value |
| :-------------- | :-------------- | :------------ |
| BluetoothClient | BluetoothClient |               |

### DriveMotors

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| DriveMotors   | string      | CB            |

### StopBeforeDisconnect

| Property Name        | Editor Type | Default Value |
| :------------------- | :---------- | :------------ |
| StopBeforeDisconnect | boolean     | True          |

### WheelDiameter

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| WheelDiameter | float       | 4.32          |

## Methods

---

### MoveBackward

<div block-type = "component_method" component-selector = "NxtDrive" method-selector = "MoveBackward" id = "nxtdrive-movebackward"></div>

Return Type : <span class="void">Void</span>

Move the robot backward the given distance, with the specified percentage of maximum power, by powering both drive motors backward.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| power      | <span class="number">number</span> |
| distance   | <span class="number">number</span> |

### MoveBackwardIndefinitely

<div block-type = "component_method" component-selector = "NxtDrive" method-selector = "MoveBackwardIndefinitely" id = "nxtdrive-movebackwardindefinitely"></div>

Return Type : <span class="void">Void</span>

Move the robot backward indefinitely, with the specified percentage of maximum power, by powering both drive motors backward.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| power      | <span class="number">number</span> |

### MoveForward

<div block-type = "component_method" component-selector = "NxtDrive" method-selector = "MoveForward" id = "nxtdrive-moveforward"></div>

Return Type : <span class="void">Void</span>

Move the robot forward the given distance, with the specified percentage of maximum power, by powering both drive motors forward.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| power      | <span class="number">number</span> |
| distance   | <span class="number">number</span> |

### MoveForwardIndefinitely

<div block-type = "component_method" component-selector = "NxtDrive" method-selector = "MoveForwardIndefinitely" id = "nxtdrive-moveforwardindefinitely"></div>

Return Type : <span class="void">Void</span>

Move the robot forward indefinitely, with the specified percentage of maximum power, by powering both drive motors forward.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| power      | <span class="number">number</span> |

### Stop

<div block-type = "component_method" component-selector = "NxtDrive" method-selector = "Stop" id = "nxtdrive-stop"></div>

Return Type : <span class="void">Void</span>

Stop the drive motors of the robot.

### TurnClockwiseIndefinitely

<div block-type = "component_method" component-selector = "NxtDrive" method-selector = "TurnClockwiseIndefinitely" id = "nxtdrive-turnclockwiseindefinitely"></div>

Return Type : <span class="void">Void</span>

Turn the robot clockwise indefinitely, with the specified percentage of maximum power, by powering the left drive motor forward and the right drive motor backward.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| power      | <span class="number">number</span> |

### TurnCounterClockwiseIndefinitely

<div block-type = "component_method" component-selector = "NxtDrive" method-selector = "TurnCounterClockwiseIndefinitely" id = "nxtdrive-turncounterclockwiseindefinitely"></div>

Return Type : <span class="void">Void</span>

Turn the robot counterclockwise indefinitely, with the specified percentage of maximum power, by powering the right drive motor forward and the left drive motor backward.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| power      | <span class="number">number</span> |

## Block Properties

---

### StopBeforeDisconnect

<div block-type = "component_set_get" component-selector = "NxtDrive" property-selector = "StopBeforeDisconnect" property-type = "get" id = "get-nxtdrive-stopbeforedisconnect"></div>

<div block-type = "component_set_get" component-selector = "NxtDrive" property-selector = "StopBeforeDisconnect" property-type = "set" id = "set-nxtdrive-stopbeforedisconnect"></div>

Whether to stop the drive motors before disconnecting.

| Param Name           | IO Type                              |
| :------------------- | :----------------------------------- |
| StopBeforeDisconnect | <span class="boolean">boolean</span> |

## Component

---

### NxtDrive

<div block-type = "component_component_block" component-selector = "NxtDrive" id = "component-nxtdrive"></div>

Component NxtDrive.

Return Type : <span class="component">component</span>

