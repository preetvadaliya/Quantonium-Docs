<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# NxtDirectCommands

A component that provides a low-level interface to a LEGO MINDSTORMS NXT robot, with functions to send NXT Direct Commands.

---

## Designer Properties

---

### BluetoothClient

| Property Name   | Editor Type     | Default Value |
| :-------------- | :-------------- | :------------ |
| BluetoothClient | BluetoothClient |               |

## Methods

---

### DeleteFile

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "DeleteFile" id = "nxtdirectcommands-deletefile"></div>

Return Type : <span class="void">Void</span>

Delete a file on the robot.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| fileName   | <span class="text">text</span> |

### DownloadFile

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "DownloadFile" id = "nxtdirectcommands-downloadfile"></div>

Return Type : <span class="void">Void</span>

Download a file to the robot.

| Param Name  | Input Type                     |
| :---------- | :----------------------------- |
| source      | <span class="text">text</span> |
| destination | <span class="text">text</span> |

### GetBatteryLevel

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "GetBatteryLevel" id = "nxtdirectcommands-getbatterylevel"></div>

Return Type : <span class="number">number</span>

Get the battery level for the robot. Returns the voltage in millivolts.

### GetBrickName

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "GetBrickName" id = "nxtdirectcommands-getbrickname"></div>

Return Type : <span class="text">text</span>

Get the brick name of the robot.

### GetCurrentProgramName

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "GetCurrentProgramName" id = "nxtdirectcommands-getcurrentprogramname"></div>

Return Type : <span class="text">text</span>

Get the name of currently running program on the robot.

### GetFirmwareVersion

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "GetFirmwareVersion" id = "nxtdirectcommands-getfirmwareversion"></div>

Return Type : <span class="list">list</span>

Get the firmware and protocol version numbers for the robot as a list where the first element is the firmware version number and the second element is the protocol version number.

### GetInputValues

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "GetInputValues" id = "nxtdirectcommands-getinputvalues"></div>

Return Type : <span class="list">list</span>

Reads the values of an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

| Param Name       | Input Type                     |
| :--------------- | :----------------------------- |
| sensorPortLetter | <span class="text">text</span> |

### GetOutputState

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "GetOutputState" id = "nxtdirectcommands-getoutputstate"></div>

Return Type : <span class="list">list</span>

Reads the output state of a motor on the robot.

| Param Name      | Input Type                     |
| :-------------- | :----------------------------- |
| motorPortLetter | <span class="text">text</span> |

### KeepAlive

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "KeepAlive" id = "nxtdirectcommands-keepalive"></div>

Return Type : <span class="number">number</span>

Keep Alive. Returns the current sleep time limit in milliseconds.

### ListFiles

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "ListFiles" id = "nxtdirectcommands-listfiles"></div>

Return Type : <span class="list">list</span>

Returns a list containing the names of matching files found on the robot.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| wildcard   | <span class="text">text</span> |

### LsGetStatus

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "LsGetStatus" id = "nxtdirectcommands-lsgetstatus"></div>

Return Type : <span class="number">number</span>

Returns the count of available bytes to read.

| Param Name       | Input Type                     |
| :--------------- | :----------------------------- |
| sensorPortLetter | <span class="text">text</span> |

### LsRead

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "LsRead" id = "nxtdirectcommands-lsread"></div>

Return Type : <span class="list">list</span>

Reads unsigned low speed data from an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

| Param Name       | Input Type                     |
| :--------------- | :----------------------------- |
| sensorPortLetter | <span class="text">text</span> |

### LsWrite

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "LsWrite" id = "nxtdirectcommands-lswrite"></div>

Return Type : <span class="void">Void</span>

Writes low speed data to an input sensor on the robot. Assumes sensor type has been configured via SetInputMode.

| Param Name       | Input Type                         |
| :--------------- | :--------------------------------- |
| sensorPortLetter | <span class="text">text</span>     |
| list             | <span class="list">list</span>     |
| rxDataLength     | <span class="number">number</span> |

### MessageRead

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "MessageRead" id = "nxtdirectcommands-messageread"></div>

Return Type : <span class="text">text</span>

Read a message from a mailbox (1-10) on the robot.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| mailbox    | <span class="number">number</span> |

### MessageWrite

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "MessageWrite" id = "nxtdirectcommands-messagewrite"></div>

Return Type : <span class="void">Void</span>

Write a message to a mailbox (1-10) on the robot.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| mailbox    | <span class="number">number</span> |
| message    | <span class="text">text</span>     |

### PlaySoundFile

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "PlaySoundFile" id = "nxtdirectcommands-playsoundfile"></div>

Return Type : <span class="void">Void</span>

Play a sound file on the robot.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| fileName   | <span class="text">text</span> |

### PlayTone

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "PlayTone" id = "nxtdirectcommands-playtone"></div>

Return Type : <span class="void">Void</span>

Make the robot play a tone.

| Param Name  | Input Type                         |
| :---------- | :--------------------------------- |
| frequencyHz | <span class="number">number</span> |
| durationMs  | <span class="number">number</span> |

### ResetInputScaledValue

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "ResetInputScaledValue" id = "nxtdirectcommands-resetinputscaledvalue"></div>

Return Type : <span class="void">Void</span>

Reset the scaled value of an input sensor on the robot.

| Param Name       | Input Type                     |
| :--------------- | :----------------------------- |
| sensorPortLetter | <span class="text">text</span> |

### ResetMotorPosition

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "ResetMotorPosition" id = "nxtdirectcommands-resetmotorposition"></div>

Return Type : <span class="void">Void</span>

Reset motor position.

| Param Name      | Input Type                           |
| :-------------- | :----------------------------------- |
| motorPortLetter | <span class="text">text</span>       |
| relative        | <span class="boolean">boolean</span> |

### SetBrickName

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "SetBrickName" id = "nxtdirectcommands-setbrickname"></div>

Return Type : <span class="void">Void</span>

Set the brick name of the robot.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| name       | <span class="text">text</span> |

### SetInputMode

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "SetInputMode" id = "nxtdirectcommands-setinputmode"></div>

Return Type : <span class="void">Void</span>

Configure an input sensor on the robot.

| Param Name       | Input Type                         |
| :--------------- | :--------------------------------- |
| sensorPortLetter | <span class="text">text</span>     |
| sensorType       | <span class="number">number</span> |
| sensorMode       | <span class="number">number</span> |

### SetOutputState

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "SetOutputState" id = "nxtdirectcommands-setoutputstate"></div>

Return Type : <span class="void">Void</span>

Sets the output state of a motor on the robot.

| Param Name      | Input Type                         |
| :-------------- | :--------------------------------- |
| motorPortLetter | <span class="text">text</span>     |
| power           | <span class="number">number</span> |
| mode            | <span class="number">number</span> |
| regulationMode  | <span class="number">number</span> |
| turnRatio       | <span class="number">number</span> |
| runState        | <span class="number">number</span> |
| tachoLimit      | <span class="number">number</span> |

### StartProgram

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "StartProgram" id = "nxtdirectcommands-startprogram"></div>

Return Type : <span class="void">Void</span>

Start execution of a previously downloaded program on the robot.

| Param Name  | Input Type                     |
| :---------- | :----------------------------- |
| programName | <span class="text">text</span> |

### StopProgram

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "StopProgram" id = "nxtdirectcommands-stopprogram"></div>

Return Type : <span class="void">Void</span>

Stop execution of the currently running program on the robot.

### StopSoundPlayback

<div block-type = "component_method" component-selector = "NxtDirectCommands" method-selector = "StopSoundPlayback" id = "nxtdirectcommands-stopsoundplayback"></div>

Return Type : <span class="void">Void</span>

Stop sound playback.

## Block Properties

---

## Component

---

### NxtDirectCommands

<div block-type = "component_component_block" component-selector = "NxtDirectCommands" id = "component-nxtdirectcommands"></div>

Component NxtDirectCommands.

Return Type : <span class="component">component</span>

