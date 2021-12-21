<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Ev3Commands

A component that provides a low-level interface to a LEGO MINDSTORMS EV3 robot, with functions to send system or direct commands to EV3 robots.

---

## Designer Properties

---

### BluetoothClient

| Property Name   | Editor Type     | Default Value |
| :-------------- | :-------------- | :------------ |
| BluetoothClient | BluetoothClient |               |

## Methods

---

### GetBatteryCurrent

<div block-type = "component_method" component-selector = "Ev3Commands" method-selector = "GetBatteryCurrent" id = "ev3commands-getbatterycurrent"></div>

Return Type : <span class="number">number</span>

Get the battery current.

### GetBatteryVoltage

<div block-type = "component_method" component-selector = "Ev3Commands" method-selector = "GetBatteryVoltage" id = "ev3commands-getbatteryvoltage"></div>

Return Type : <span class="number">number</span>

Get the battery voltage.

### GetFirmwareBuild

<div block-type = "component_method" component-selector = "Ev3Commands" method-selector = "GetFirmwareBuild" id = "ev3commands-getfirmwarebuild"></div>

Return Type : <span class="text">text</span>

Get the firmware build on EV3.

### GetFirmwareVersion

<div block-type = "component_method" component-selector = "Ev3Commands" method-selector = "GetFirmwareVersion" id = "ev3commands-getfirmwareversion"></div>

Return Type : <span class="text">text</span>

Get the firmware version on EV3.

### GetHardwareVersion

<div block-type = "component_method" component-selector = "Ev3Commands" method-selector = "GetHardwareVersion" id = "ev3commands-gethardwareversion"></div>

Return Type : <span class="text">text</span>

Get the hardware version of EV3.

### GetOSBuild

<div block-type = "component_method" component-selector = "Ev3Commands" method-selector = "GetOSBuild" id = "ev3commands-getosbuild"></div>

Return Type : <span class="text">text</span>

Get the OS build on EV3.

### GetOSVersion

<div block-type = "component_method" component-selector = "Ev3Commands" method-selector = "GetOSVersion" id = "ev3commands-getosversion"></div>

Return Type : <span class="text">text</span>

Get the OS version on EV3.

### KeepAlive

<div block-type = "component_method" component-selector = "Ev3Commands" method-selector = "KeepAlive" id = "ev3commands-keepalive"></div>

Return Type : <span class="void">Void</span>

Keep the EV3 brick from shutdown for a period of time.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| minutes    | <span class="number">number</span> |

## Block Properties

---

### BluetoothClient

<div block-type = "component_set_get" component-selector = "Ev3Commands" property-selector = "BluetoothClient" property-type = "get" id = "get-ev3commands-bluetoothclient"></div>

<div block-type = "component_set_get" component-selector = "Ev3Commands" property-selector = "BluetoothClient" property-type = "set" id = "set-ev3commands-bluetoothclient"></div>

The BluetoothClient component that should be used for communication.

| Param Name      | IO Type                                  |
| :-------------- | :--------------------------------------- |
| BluetoothClient | <span class="component">component</span> |

## Component

---

### Ev3Commands

<div block-type = "component_component_block" component-selector = "Ev3Commands" id = "component-ev3commands"></div>

Component Ev3Commands.

Return Type : <span class="component">component</span>

