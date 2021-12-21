<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Thermometer

A sensor component that can measure the ambient (external) temperature. Most Android devices do not have this sensor.

---

## Designer Properties

---

### Enabled

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Enabled       | boolean     | True          |

### RefreshTime

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| RefreshTime   | non_negative_integer | 1000          |

## Events

---

### TemperatureChanged

<div block-type = "component_event" component-selector = "Thermometer" event-selector = "TemperatureChanged" id = "thermometer-temperaturechanged"></div>

Called when a change is detected in the temperature (in degrees Celsius).

| Param Name  | IO Type                            | Getter Block                                                                                                              | Setter Block                                                                                                              |
| :---------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| temperature | <span class="number">number</span> | <div block-type = "getter" variable-name = temperature id = "param-get-thermometer-temperaturechanged-temperature"></div> | <div block-type = "setter" variable-name = temperature id = "param-set-thermometer-temperaturechanged-temperature"></div> |

## Block Properties

---

### Available

<div block-type = "component_set_get" component-selector = "Thermometer" property-selector = "Available" property-type = "get" id = "get-thermometer-available"></div>

Specifies whether or not the device has the hardware to support the Thermometer component.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Available  | <span class="boolean">boolean</span> |

### Enabled

<div block-type = "component_set_get" component-selector = "Thermometer" property-selector = "Enabled" property-type = "get" id = "get-thermometer-enabled"></div>

<div block-type = "component_set_get" component-selector = "Thermometer" property-selector = "Enabled" property-type = "set" id = "set-thermometer-enabled"></div>

If enabled, then device will listen for changes.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Enabled    | <span class="boolean">boolean</span> |

### RefreshTime

<div block-type = "component_set_get" component-selector = "Thermometer" property-selector = "RefreshTime" property-type = "get" id = "get-thermometer-refreshtime"></div>

<div block-type = "component_set_get" component-selector = "Thermometer" property-selector = "RefreshTime" property-type = "set" id = "set-thermometer-refreshtime"></div>

The requested minimum time in milliseconds between changes in readings being reported. Android is not guaranteed to honor the request. Setting this property has no effect on pre-Gingerbread devices.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| RefreshTime | <span class="number">number</span> |

### Temperature

<div block-type = "component_set_get" component-selector = "Thermometer" property-selector = "Temperature" property-type = "get" id = "get-thermometer-temperature"></div>

The temperature in degrees Celsius, if the sensor is available and enabled

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| Temperature | <span class="number">number</span> |

## Component

---

### Thermometer

<div block-type = "component_component_block" component-selector = "Thermometer" id = "component-thermometer"></div>

Component Thermometer.

Return Type : <span class="component">component</span>

