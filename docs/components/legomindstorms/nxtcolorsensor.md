<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# NxtColorSensor

A component that provides a high-level interface to a color sensor on a LEGO MINDSTORMS NXT robot.

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
| BottomOfRange | non_negative_integer | 256           |

### ColorChangedEventEnabled

| Property Name            | Editor Type | Default Value |
| :----------------------- | :---------- | :------------ |
| ColorChangedEventEnabled | boolean     | False         |

### DetectColor

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| DetectColor   | boolean     | True          |

### GenerateColor

| Property Name | Editor Type              | Default Value |
| :------------ | :----------------------- | :------------ |
| GenerateColor | lego_nxt_generated_color | &H00FFFFFF    |

### SensorPort

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| SensorPort    | lego_nxt_sensor_port | 3             |

### TopOfRange

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| TopOfRange    | non_negative_integer | 767           |

### WithinRangeEventEnabled

| Property Name           | Editor Type | Default Value |
| :---------------------- | :---------- | :------------ |
| WithinRangeEventEnabled | boolean     | False         |

## Events

---

### AboveRange

<div block-type = "component_event" component-selector = "NxtColorSensor" event-selector = "AboveRange" id = "nxtcolorsensor-aboverange"></div>

Light level has gone above the range. The AboveRange event will not occur if the DetectColor property is set to True or if the AboveRangeEventEnabled property is set to False.

### BelowRange

<div block-type = "component_event" component-selector = "NxtColorSensor" event-selector = "BelowRange" id = "nxtcolorsensor-belowrange"></div>

Light level has gone below the range. The BelowRange event will not occur if the DetectColor property is set to True or if the BelowRangeEventEnabled property is set to False.

### ColorChanged

<div block-type = "component_event" component-selector = "NxtColorSensor" event-selector = "ColorChanged" id = "nxtcolorsensor-colorchanged"></div>

Detected color has changed. The ColorChanged event will not occur if the DetectColor property is set to False or if the ColorChangedEventEnabled property is set to False.

| Param Name | IO Type                            | Getter Block                                                                                               | Setter Block                                                                                               |
| :--------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| color      | <span class="number">number</span> | <div block-type = "getter" variable-name = color id = "param-get-nxtcolorsensor-colorchanged-color"></div> | <div block-type = "setter" variable-name = color id = "param-set-nxtcolorsensor-colorchanged-color"></div> |

### WithinRange

<div block-type = "component_event" component-selector = "NxtColorSensor" event-selector = "WithinRange" id = "nxtcolorsensor-withinrange"></div>

Light level has gone within the range. The WithinRange event will not occur if the DetectColor property is set to True or if the WithinRangeEventEnabled property is set to False.

## Methods

---

### GetColor

<div block-type = "component_method" component-selector = "NxtColorSensor" method-selector = "GetColor" id = "nxtcolorsensor-getcolor"></div>

Return Type : <span class="number">number</span>

Returns the current detected color, or the color None if the color can not be read or if the DetectColor property is set to False.

### GetLightLevel

<div block-type = "component_method" component-selector = "NxtColorSensor" method-selector = "GetLightLevel" id = "nxtcolorsensor-getlightlevel"></div>

Return Type : <span class="number">number</span>

Returns the current light level as a value between 0 and 1023, or -1 if the light level can not be read or if the DetectColor property is set to True.

## Block Properties

---

### AboveRangeEventEnabled

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "AboveRangeEventEnabled" property-type = "get" id = "get-nxtcolorsensor-aboverangeeventenabled"></div>

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "AboveRangeEventEnabled" property-type = "set" id = "set-nxtcolorsensor-aboverangeeventenabled"></div>

Whether the AboveRange event should fire when the DetectColor property is set to False and the light level goes above the TopOfRange.

| Param Name             | IO Type                              |
| :--------------------- | :----------------------------------- |
| AboveRangeEventEnabled | <span class="boolean">boolean</span> |

### BelowRangeEventEnabled

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "BelowRangeEventEnabled" property-type = "get" id = "get-nxtcolorsensor-belowrangeeventenabled"></div>

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "BelowRangeEventEnabled" property-type = "set" id = "set-nxtcolorsensor-belowrangeeventenabled"></div>

Whether the BelowRange event should fire when the DetectColor property is set to False and the light level goes below the BottomOfRange.

| Param Name             | IO Type                              |
| :--------------------- | :----------------------------------- |
| BelowRangeEventEnabled | <span class="boolean">boolean</span> |

### BottomOfRange

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "BottomOfRange" property-type = "get" id = "get-nxtcolorsensor-bottomofrange"></div>

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "BottomOfRange" property-type = "set" id = "set-nxtcolorsensor-bottomofrange"></div>

The bottom of the range used for the BelowRange, WithinRange, and AboveRange events.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| BottomOfRange | <span class="number">number</span> |

### ColorChangedEventEnabled

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "ColorChangedEventEnabled" property-type = "get" id = "get-nxtcolorsensor-colorchangedeventenabled"></div>

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "ColorChangedEventEnabled" property-type = "set" id = "set-nxtcolorsensor-colorchangedeventenabled"></div>

Whether the ColorChanged event should fire when the DetectColor property is set to True and the detected color changes.

| Param Name               | IO Type                              |
| :----------------------- | :----------------------------------- |
| ColorChangedEventEnabled | <span class="boolean">boolean</span> |

### DetectColor

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "DetectColor" property-type = "get" id = "get-nxtcolorsensor-detectcolor"></div>

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "DetectColor" property-type = "set" id = "set-nxtcolorsensor-detectcolor"></div>

Whether the sensor should detect color or light. True indicates that the sensor should detect color; False indicates that the sensor should detect light. If the DetectColor property is set to True, the BelowRange, WithinRange, and AboveRange events will not occur and the sensor will not generate color. If the DetectColor property is set to False, the ColorChanged event will not occur.

| Param Name  | IO Type                              |
| :---------- | :----------------------------------- |
| DetectColor | <span class="boolean">boolean</span> |

### GenerateColor

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "GenerateColor" property-type = "get" id = "get-nxtcolorsensor-generatecolor"></div>

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "GenerateColor" property-type = "set" id = "set-nxtcolorsensor-generatecolor"></div>

The color that should generated by the sensor. Only None, Red, Green, or Blue are valid values. The sensor will not generate color when the DetectColor property is set to True.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| GenerateColor | <span class="number">number</span> |

### TopOfRange

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "TopOfRange" property-type = "get" id = "get-nxtcolorsensor-topofrange"></div>

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "TopOfRange" property-type = "set" id = "set-nxtcolorsensor-topofrange"></div>

The top of the range used for the BelowRange, WithinRange, and AboveRange events.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| TopOfRange | <span class="number">number</span> |

### WithinRangeEventEnabled

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "WithinRangeEventEnabled" property-type = "get" id = "get-nxtcolorsensor-withinrangeeventenabled"></div>

<div block-type = "component_set_get" component-selector = "NxtColorSensor" property-selector = "WithinRangeEventEnabled" property-type = "set" id = "set-nxtcolorsensor-withinrangeeventenabled"></div>

Whether the WithinRange event should fire when the DetectColor property is set to False and the light level goes between the BottomOfRange and the TopOfRange.

| Param Name              | IO Type                              |
| :---------------------- | :----------------------------------- |
| WithinRangeEventEnabled | <span class="boolean">boolean</span> |

## Component

---

### NxtColorSensor

<div block-type = "component_component_block" component-selector = "NxtColorSensor" id = "component-nxtcolorsensor"></div>

Component NxtColorSensor.

Return Type : <span class="component">component</span>

