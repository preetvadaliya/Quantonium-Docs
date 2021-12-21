<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# GyroscopeSensor

Non-visible component that can measure angular velocity in three dimensions in units of degrees per second.

In order to function, the component must have its `Enabled` property set to True, and the device must have a gyroscope sensor.

---

## Designer Properties

---

### Enabled

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Enabled       | boolean     | True          |

## Events

---

### GyroscopeChanged

<div block-type = "component_event" component-selector = "GyroscopeSensor" event-selector = "GyroscopeChanged" id = "gyroscopesensor-gyroscopechanged"></div>

Indicates that the gyroscope sensor data has changed. The timestamp parameter is the time in nanoseconds at which the event occurred.

| Param Name       | IO Type                            | Getter Block                                                                                                                          | Setter Block                                                                                                                          |
| :--------------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| xAngularVelocity | <span class="number">number</span> | <div block-type = "getter" variable-name = xAngularVelocity id = "param-get-gyroscopesensor-gyroscopechanged-xangularvelocity"></div> | <div block-type = "setter" variable-name = xAngularVelocity id = "param-set-gyroscopesensor-gyroscopechanged-xangularvelocity"></div> |
| yAngularVelocity | <span class="number">number</span> | <div block-type = "getter" variable-name = yAngularVelocity id = "param-get-gyroscopesensor-gyroscopechanged-yangularvelocity"></div> | <div block-type = "setter" variable-name = yAngularVelocity id = "param-set-gyroscopesensor-gyroscopechanged-yangularvelocity"></div> |
| zAngularVelocity | <span class="number">number</span> | <div block-type = "getter" variable-name = zAngularVelocity id = "param-get-gyroscopesensor-gyroscopechanged-zangularvelocity"></div> | <div block-type = "setter" variable-name = zAngularVelocity id = "param-set-gyroscopesensor-gyroscopechanged-zangularvelocity"></div> |
| timestamp        | <span class="number">number</span> | <div block-type = "getter" variable-name = timestamp id = "param-get-gyroscopesensor-gyroscopechanged-timestamp"></div>               | <div block-type = "setter" variable-name = timestamp id = "param-set-gyroscopesensor-gyroscopechanged-timestamp"></div>               |

## Block Properties

---

### Available

<div block-type = "component_set_get" component-selector = "GyroscopeSensor" property-selector = "Available" property-type = "get" id = "get-gyroscopesensor-available"></div>

Indicates whether a gyroscope sensor is available.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Available  | <span class="boolean">boolean</span> |

### Enabled

<div block-type = "component_set_get" component-selector = "GyroscopeSensor" property-selector = "Enabled" property-type = "get" id = "get-gyroscopesensor-enabled"></div>

<div block-type = "component_set_get" component-selector = "GyroscopeSensor" property-selector = "Enabled" property-type = "set" id = "set-gyroscopesensor-enabled"></div>

Enabled property getter method.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Enabled    | <span class="boolean">boolean</span> |

### XAngularVelocity

<div block-type = "component_set_get" component-selector = "GyroscopeSensor" property-selector = "XAngularVelocity" property-type = "get" id = "get-gyroscopesensor-xangularvelocity"></div>

The angular velocity around the X axis, in degrees per second.

| Param Name       | IO Type                            |
| :--------------- | :--------------------------------- |
| XAngularVelocity | <span class="number">number</span> |

### YAngularVelocity

<div block-type = "component_set_get" component-selector = "GyroscopeSensor" property-selector = "YAngularVelocity" property-type = "get" id = "get-gyroscopesensor-yangularvelocity"></div>

The angular velocity around the Y axis, in degrees per second.

| Param Name       | IO Type                            |
| :--------------- | :--------------------------------- |
| YAngularVelocity | <span class="number">number</span> |

### ZAngularVelocity

<div block-type = "component_set_get" component-selector = "GyroscopeSensor" property-selector = "ZAngularVelocity" property-type = "get" id = "get-gyroscopesensor-zangularvelocity"></div>

The angular velocity around the Z axis, in degrees per second.

| Param Name       | IO Type                            |
| :--------------- | :--------------------------------- |
| ZAngularVelocity | <span class="number">number</span> |

## Component

---

### GyroscopeSensor

<div block-type = "component_component_block" component-selector = "GyroscopeSensor" id = "component-gyroscopesensor"></div>

Component GyroscopeSensor.

Return Type : <span class="component">component</span>

