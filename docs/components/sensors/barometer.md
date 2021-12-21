<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Barometer

A sensor component that can measure the ambient air pressure.

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

### AirPressureChanged

<div block-type = "component_event" component-selector = "Barometer" event-selector = "AirPressureChanged" id = "barometer-airpressurechanged"></div>

Called when a change is detected in the air pressure (provided in hPa).

| Param Name | IO Type                            | Getter Block                                                                                                      | Setter Block                                                                                                      |
| :--------- | :--------------------------------- | :---------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| pressure   | <span class="number">number</span> | <div block-type = "getter" variable-name = pressure id = "param-get-barometer-airpressurechanged-pressure"></div> | <div block-type = "setter" variable-name = pressure id = "param-set-barometer-airpressurechanged-pressure"></div> |

## Block Properties

---

### AirPressure

<div block-type = "component_set_get" component-selector = "Barometer" property-selector = "AirPressure" property-type = "get" id = "get-barometer-airpressure"></div>

The air pressure in hPa (millibar), if the sensor is available and enabled.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| AirPressure | <span class="number">number</span> |

### Available

<div block-type = "component_set_get" component-selector = "Barometer" property-selector = "Available" property-type = "get" id = "get-barometer-available"></div>

Specifies whether or not the device has the hardware to support the Barometer component.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Available  | <span class="boolean">boolean</span> |

### Enabled

<div block-type = "component_set_get" component-selector = "Barometer" property-selector = "Enabled" property-type = "get" id = "get-barometer-enabled"></div>

<div block-type = "component_set_get" component-selector = "Barometer" property-selector = "Enabled" property-type = "set" id = "set-barometer-enabled"></div>

If enabled, then device will listen for changes.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Enabled    | <span class="boolean">boolean</span> |

### RefreshTime

<div block-type = "component_set_get" component-selector = "Barometer" property-selector = "RefreshTime" property-type = "get" id = "get-barometer-refreshtime"></div>

<div block-type = "component_set_get" component-selector = "Barometer" property-selector = "RefreshTime" property-type = "set" id = "set-barometer-refreshtime"></div>

The requested minimum time in milliseconds between changes in readings being reported. Android is not guaranteed to honor the request. Setting this property has no effect on pre-Gingerbread devices.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| RefreshTime | <span class="number">number</span> |

## Component

---

### Barometer

<div block-type = "component_component_block" component-selector = "Barometer" id = "component-barometer"></div>

Component Barometer.

Return Type : <span class="component">component</span>

