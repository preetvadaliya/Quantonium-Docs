<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Ev3UI

A component that provides a high-level interface to a LEGO MINDSTORMS EV3 robot, with functions to draw graphs on EV3 screen.

---

## Designer Properties

---

### BluetoothClient

| Property Name   | Editor Type     | Default Value |
| :-------------- | :-------------- | :------------ |
| BluetoothClient | BluetoothClient |               |

## Methods

---

### DrawCircle

<div block-type = "component_method" component-selector = "Ev3UI" method-selector = "DrawCircle" id = "ev3ui-drawcircle"></div>

Return Type : <span class="void">Void</span>

Draw a circle on the screen.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| color      | <span class="number">number</span>   |
| x          | <span class="number">number</span>   |
| y          | <span class="number">number</span>   |
| radius     | <span class="number">number</span>   |
| fill       | <span class="boolean">boolean</span> |

### DrawIcon

<div block-type = "component_method" component-selector = "Ev3UI" method-selector = "DrawIcon" id = "ev3ui-drawicon"></div>

Return Type : <span class="void">Void</span>

Draw a built-in icon on screen.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| color      | <span class="number">number</span> |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |
| type       | <span class="number">number</span> |
| no         | <span class="number">number</span> |

### DrawLine

<div block-type = "component_method" component-selector = "Ev3UI" method-selector = "DrawLine" id = "ev3ui-drawline"></div>

Return Type : <span class="void">Void</span>

Draw a line on the screen.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| color      | <span class="number">number</span> |
| x1         | <span class="number">number</span> |
| y1         | <span class="number">number</span> |
| x2         | <span class="number">number</span> |
| y2         | <span class="number">number</span> |

### DrawPoint

<div block-type = "component_method" component-selector = "Ev3UI" method-selector = "DrawPoint" id = "ev3ui-drawpoint"></div>

Return Type : <span class="void">Void</span>

Draw a point on the screen.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| color      | <span class="number">number</span> |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |

### DrawRect

<div block-type = "component_method" component-selector = "Ev3UI" method-selector = "DrawRect" id = "ev3ui-drawrect"></div>

Return Type : <span class="void">Void</span>

Draw a rectangle on the screen.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| color      | <span class="number">number</span>   |
| x          | <span class="number">number</span>   |
| y          | <span class="number">number</span>   |
| width      | <span class="number">number</span>   |
| height     | <span class="number">number</span>   |
| fill       | <span class="boolean">boolean</span> |

### FillScreen

<div block-type = "component_method" component-selector = "Ev3UI" method-selector = "FillScreen" id = "ev3ui-fillscreen"></div>

Return Type : <span class="void">Void</span>

Fill the screen with a color.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| color      | <span class="number">number</span> |

## Block Properties

---

### BluetoothClient

<div block-type = "component_set_get" component-selector = "Ev3UI" property-selector = "BluetoothClient" property-type = "get" id = "get-ev3ui-bluetoothclient"></div>

<div block-type = "component_set_get" component-selector = "Ev3UI" property-selector = "BluetoothClient" property-type = "set" id = "set-ev3ui-bluetoothclient"></div>

The BluetoothClient component that should be used for communication.

| Param Name      | IO Type                                  |
| :-------------- | :--------------------------------------- |
| BluetoothClient | <span class="component">component</span> |

## Component

---

### Ev3UI

<div block-type = "component_component_block" component-selector = "Ev3UI" id = "component-ev3ui"></div>

Component Ev3UI.

Return Type : <span class="component">component</span>

