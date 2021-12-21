<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Pedometer

A Component that acts like a Pedometer. It senses motion via the Accelerometer and attempts to determine if a step has been taken. Using a configurable stride length, it can estimate the distance traveled as well.

---

## Designer Properties

---

### StopDetectionTimeout

| Property Name        | Editor Type          | Default Value |
| :------------------- | :------------------- | :------------ |
| StopDetectionTimeout | non_negative_integer | 2000          |

### StrideLength

| Property Name | Editor Type        | Default Value |
| :------------ | :----------------- | :------------ |
| StrideLength  | non_negative_float | 0.73          |

## Events

---

### SimpleStep

<div block-type = "component_event" component-selector = "Pedometer" event-selector = "SimpleStep" id = "pedometer-simplestep"></div>

This event is run when a raw step is detected.

| Param Name  | IO Type                            | Getter Block                                                                                                    | Setter Block                                                                                                    |
| :---------- | :--------------------------------- | :-------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| simpleSteps | <span class="number">number</span> | <div block-type = "getter" variable-name = simpleSteps id = "param-get-pedometer-simplestep-simplesteps"></div> | <div block-type = "setter" variable-name = simpleSteps id = "param-set-pedometer-simplestep-simplesteps"></div> |
| distance    | <span class="number">number</span> | <div block-type = "getter" variable-name = distance id = "param-get-pedometer-simplestep-distance"></div>       | <div block-type = "setter" variable-name = distance id = "param-set-pedometer-simplestep-distance"></div>       |

### WalkStep

<div block-type = "component_event" component-selector = "Pedometer" event-selector = "WalkStep" id = "pedometer-walkstep"></div>

This event is run when a walking step is detected. A walking step is a step that appears to be involved in forward motion.

| Param Name | IO Type                            | Getter Block                                                                                              | Setter Block                                                                                              |
| :--------- | :--------------------------------- | :-------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| walkSteps  | <span class="number">number</span> | <div block-type = "getter" variable-name = walkSteps id = "param-get-pedometer-walkstep-walksteps"></div> | <div block-type = "setter" variable-name = walkSteps id = "param-set-pedometer-walkstep-walksteps"></div> |
| distance   | <span class="number">number</span> | <div block-type = "getter" variable-name = distance id = "param-get-pedometer-walkstep-distance"></div>   | <div block-type = "setter" variable-name = distance id = "param-set-pedometer-walkstep-distance"></div>   |

## Methods

---

### Reset

<div block-type = "component_method" component-selector = "Pedometer" method-selector = "Reset" id = "pedometer-reset"></div>

Return Type : <span class="void">Void</span>

Resets the step counter, distance measure and time running.

### Save

<div block-type = "component_method" component-selector = "Pedometer" method-selector = "Save" id = "pedometer-save"></div>

Return Type : <span class="void">Void</span>

Saves the pedometer state to the phone. Permits permits accumulation of steps and distance between invocations of an App that uses the pedometer. Different Apps will have their own saved state.

### Start

<div block-type = "component_method" component-selector = "Pedometer" method-selector = "Start" id = "pedometer-start"></div>

Return Type : <span class="void">Void</span>

Start counting steps

### Stop

<div block-type = "component_method" component-selector = "Pedometer" method-selector = "Stop" id = "pedometer-stop"></div>

Return Type : <span class="void">Void</span>

Stop counting steps

## Block Properties

---

### Distance

<div block-type = "component_set_get" component-selector = "Pedometer" property-selector = "Distance" property-type = "get" id = "get-pedometer-distance"></div>

The approximate distance traveled in meters.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Distance   | <span class="number">number</span> |

### ElapsedTime

<div block-type = "component_set_get" component-selector = "Pedometer" property-selector = "ElapsedTime" property-type = "get" id = "get-pedometer-elapsedtime"></div>

Time elapsed in milliseconds since the pedometer was started.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| ElapsedTime | <span class="number">number</span> |

### SimpleSteps

<div block-type = "component_set_get" component-selector = "Pedometer" property-selector = "SimpleSteps" property-type = "get" id = "get-pedometer-simplesteps"></div>

The number of simple steps taken since the pedometer has started.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| SimpleSteps | <span class="number">number</span> |

### StopDetectionTimeout

<div block-type = "component_set_get" component-selector = "Pedometer" property-selector = "StopDetectionTimeout" property-type = "get" id = "get-pedometer-stopdetectiontimeout"></div>

<div block-type = "component_set_get" component-selector = "Pedometer" property-selector = "StopDetectionTimeout" property-type = "set" id = "set-pedometer-stopdetectiontimeout"></div>

The duration in milliseconds of idleness (no steps detected) after which to go into a "stopped" state

| Param Name           | IO Type                            |
| :------------------- | :--------------------------------- |
| StopDetectionTimeout | <span class="number">number</span> |

### StrideLength

<div block-type = "component_set_get" component-selector = "Pedometer" property-selector = "StrideLength" property-type = "get" id = "get-pedometer-stridelength"></div>

<div block-type = "component_set_get" component-selector = "Pedometer" property-selector = "StrideLength" property-type = "set" id = "set-pedometer-stridelength"></div>

Set the average stride length in meters.

| Param Name   | IO Type                            |
| :----------- | :--------------------------------- |
| StrideLength | <span class="number">number</span> |

### WalkSteps

<div block-type = "component_set_get" component-selector = "Pedometer" property-selector = "WalkSteps" property-type = "get" id = "get-pedometer-walksteps"></div>

the number of walk steps taken since the pedometer has started.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| WalkSteps  | <span class="number">number</span> |

## Component

---

### Pedometer

<div block-type = "component_component_block" component-selector = "Pedometer" id = "component-pedometer"></div>

Component Pedometer.

Return Type : <span class="component">component</span>

