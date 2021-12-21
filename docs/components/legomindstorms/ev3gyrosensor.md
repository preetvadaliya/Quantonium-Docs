<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Ev3GyroSensor

A component that provides a high-level interface to a gyro sensor on a LEGO MINDSTORMS EV3 robot.

---

## Designer Properties

---

### BluetoothClient

| Property Name   | Editor Type     | Default Value |
| :-------------- | :-------------- | :------------ |
| BluetoothClient | BluetoothClient |               |

### Mode

| Property Name | Editor Type               | Default Value |
| :------------ | :------------------------ | :------------ |
| Mode          | lego_ev3_gyro_sensor_mode | angle         |

### SensorPort

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| SensorPort    | lego_ev3_sensor_port | 1             |

### SensorValueChangedEventEnabled

| Property Name                  | Editor Type | Default Value |
| :----------------------------- | :---------- | :------------ |
| SensorValueChangedEventEnabled | boolean     | False         |

## Events

---

### SensorValueChanged

<div block-type = "component_event" component-selector = "Ev3GyroSensor" event-selector = "SensorValueChanged" id = "ev3gyrosensor-sensorvaluechanged"></div>

Called then the sensor value changed.

| Param Name  | IO Type                            | Getter Block                                                                                                                | Setter Block                                                                                                                |
| :---------- | :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| sensorValue | <span class="number">number</span> | <div block-type = "getter" variable-name = sensorValue id = "param-get-ev3gyrosensor-sensorvaluechanged-sensorvalue"></div> | <div block-type = "setter" variable-name = sensorValue id = "param-set-ev3gyrosensor-sensorvaluechanged-sensorvalue"></div> |

## Methods

---

### GetSensorValue

<div block-type = "component_method" component-selector = "Ev3GyroSensor" method-selector = "GetSensorValue" id = "ev3gyrosensor-getsensorvalue"></div>

Return Type : <span class="number">number</span>

Returns the current angle or rotation speed based on current mode, or -1 if the value cannot be read from sensor.

## Block Properties

---

### BluetoothClient

<div block-type = "component_set_get" component-selector = "Ev3GyroSensor" property-selector = "BluetoothClient" property-type = "get" id = "get-ev3gyrosensor-bluetoothclient"></div>

<div block-type = "component_set_get" component-selector = "Ev3GyroSensor" property-selector = "BluetoothClient" property-type = "set" id = "set-ev3gyrosensor-bluetoothclient"></div>

The BluetoothClient component that should be used for communication.

| Param Name      | IO Type                                  |
| :-------------- | :--------------------------------------- |
| BluetoothClient | <span class="component">component</span> |

### Mode

<div block-type = "component_set_get" component-selector = "Ev3GyroSensor" property-selector = "Mode" property-type = "get" id = "get-ev3gyrosensor-mode"></div>

<div block-type = "component_set_get" component-selector = "Ev3GyroSensor" property-selector = "Mode" property-type = "set" id = "set-ev3gyrosensor-mode"></div>

Specifies the mode of the sensor.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Mode       | <span class="text">text</span> |

### Mode Options

| Name  | Description      | Block                                                                                                         |
| :---- | :--------------- | :------------------------------------------------------------------------------------------------------------ |
| Angle | Option for Angle | <div block-type = "helper" helper-name = "GyroSensorMode Angle" id = "helper-ev3gyrosensor-mode-angle"></div> |
| Rate  | Option for Rate  | <div block-type = "helper" helper-name = "GyroSensorMode Rate" id = "helper-ev3gyrosensor-mode-rate"></div>   |

### SensorValueChangedEventEnabled

<div block-type = "component_set_get" component-selector = "Ev3GyroSensor" property-selector = "SensorValueChangedEventEnabled" property-type = "get" id = "get-ev3gyrosensor-sensorvaluechangedeventenabled"></div>

<div block-type = "component_set_get" component-selector = "Ev3GyroSensor" property-selector = "SensorValueChangedEventEnabled" property-type = "set" id = "set-ev3gyrosensor-sensorvaluechangedeventenabled"></div>

Whether the SensorValueChanged event should fire when the sensor value changed.

| Param Name                     | IO Type                              |
| :----------------------------- | :----------------------------------- |
| SensorValueChangedEventEnabled | <span class="boolean">boolean</span> |

## Component

---

### Ev3GyroSensor

<div block-type = "component_component_block" component-selector = "Ev3GyroSensor" id = "component-ev3gyrosensor"></div>

Component Ev3GyroSensor.

Return Type : <span class="component">component</span>

