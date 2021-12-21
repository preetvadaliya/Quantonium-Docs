<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Rectangle

Rectangle

---

## Designer Properties

---

### Description

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Description   | text        |               |

### Draggable

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Draggable     | boolean     | False         |

### EastLongitude

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| EastLongitude | float       | 0             |

### EnableInfobox

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| EnableInfobox | boolean     | False         |

### FillColor

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| FillColor     | color       | &HFFFF0000    |

### FillOpacity

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| FillOpacity   | float       | 1.0           |

### NorthLatitude

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| NorthLatitude | float       | 0             |

### SouthLatitude

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| SouthLatitude | float       | 0             |

### StrokeColor

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| StrokeColor   | color       | &HFF000000    |

### StrokeOpacity

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| StrokeOpacity | float       | 1.0           |

### StrokeWidth

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| StrokeWidth   | integer     | 1             |

### Title

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Title         | text        |               |

### Visible

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Visible       | visibility  | True          |

### WestLongitude

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| WestLongitude | float       | 0             |

## Events

---

### Click

<div block-type = "component_event" component-selector = "Rectangle" event-selector = "Click" id = "rectangle-click"></div>

The user clicked on the Rectangle.

### Drag

<div block-type = "component_event" component-selector = "Rectangle" event-selector = "Drag" id = "rectangle-drag"></div>

The user dragged the Rectangle.

### LongClick

<div block-type = "component_event" component-selector = "Rectangle" event-selector = "LongClick" id = "rectangle-longclick"></div>

The user long-pressed on the Rectangle. This event will only trigger if Draggable is false.

### StartDrag

<div block-type = "component_event" component-selector = "Rectangle" event-selector = "StartDrag" id = "rectangle-startdrag"></div>

The user started a drag operation.

### StopDrag

<div block-type = "component_event" component-selector = "Rectangle" event-selector = "StopDrag" id = "rectangle-stopdrag"></div>

The user stopped a drag operation.

## Methods

---

### Bounds

<div block-type = "component_method" component-selector = "Rectangle" method-selector = "Bounds" id = "rectangle-bounds"></div>

Return Type : <span class="list">list</span>

Returns the bounding box of the Rectangle in the format ((North West) (South East)).

### Center

<div block-type = "component_method" component-selector = "Rectangle" method-selector = "Center" id = "rectangle-center"></div>

Return Type : <span class="list">list</span>

Returns the center of the Rectangle as a list of the form (Latitude Longitude).

### DistanceToFeature

<div block-type = "component_method" component-selector = "Rectangle" method-selector = "DistanceToFeature" id = "rectangle-distancetofeature"></div>

Return Type : <span class="number">number</span>

Compute the distance, in meters, between two map features.

| Param Name | Input Type                               |
| :--------- | :--------------------------------------- |
| mapFeature | <span class="component">component</span> |
| centroids  | <span class="boolean">boolean</span>     |

### DistanceToPoint

<div block-type = "component_method" component-selector = "Rectangle" method-selector = "DistanceToPoint" id = "rectangle-distancetopoint"></div>

Return Type : <span class="number">number</span>

Compute the distance, in meters, between a Rectangle and a latitude, longitude point.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| latitude   | <span class="number">number</span>   |
| longitude  | <span class="number">number</span>   |
| centroid   | <span class="boolean">boolean</span> |

### HideInfobox

<div block-type = "component_method" component-selector = "Rectangle" method-selector = "HideInfobox" id = "rectangle-hideinfobox"></div>

Return Type : <span class="void">Void</span>

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

### SetCenter

<div block-type = "component_method" component-selector = "Rectangle" method-selector = "SetCenter" id = "rectangle-setcenter"></div>

Return Type : <span class="void">Void</span>

Moves the Rectangle so that it is centered on the given latitude and longitude while attempting to maintain the width and height of the Rectangle as measured from the center to the edges.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| latitude   | <span class="number">number</span> |
| longitude  | <span class="number">number</span> |

### ShowInfobox

<div block-type = "component_method" component-selector = "Rectangle" method-selector = "ShowInfobox" id = "rectangle-showinfobox"></div>

Return Type : <span class="void">Void</span>

Show the infobox for the Rectangle. This will show the infobox even if EnableInfobox is set to false.

## Block Properties

---

### Description

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "Description" property-type = "get" id = "get-rectangle-description"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "Description" property-type = "set" id = "set-rectangle-description"></div>

The description displayed in the info window that appears when the user clicks on the Rectangle.

| Param Name  | IO Type                        |
| :---------- | :----------------------------- |
| Description | <span class="text">text</span> |

### Draggable

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "Draggable" property-type = "get" id = "get-rectangle-draggable"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "Draggable" property-type = "set" id = "set-rectangle-draggable"></div>

The Draggable property is used to set whether or not the user can drag the Rectangle by long-pressing and then dragging the Rectangle to a new location.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Draggable  | <span class="boolean">boolean</span> |

### EastLongitude

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "EastLongitude" property-type = "get" id = "get-rectangle-eastlongitude"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "EastLongitude" property-type = "set" id = "set-rectangle-eastlongitude"></div>

The east edge of the rectangle, in decimal degrees east of the prime meridian.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| EastLongitude | <span class="number">number</span> |

### EnableInfobox

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "EnableInfobox" property-type = "get" id = "get-rectangle-enableinfobox"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "EnableInfobox" property-type = "set" id = "set-rectangle-enableinfobox"></div>

Enable or disable the infobox window display when the user taps the Rectangle.

| Param Name    | IO Type                              |
| :------------ | :----------------------------------- |
| EnableInfobox | <span class="boolean">boolean</span> |

### FillColor

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "FillColor" property-type = "get" id = "get-rectangle-fillcolor"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "FillColor" property-type = "set" id = "set-rectangle-fillcolor"></div>

The paint color used to fill in the Rectangle.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| FillColor  | <span class="number">number</span> |

### FillOpacity

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "FillOpacity" property-type = "get" id = "get-rectangle-fillopacity"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "FillOpacity" property-type = "set" id = "set-rectangle-fillopacity"></div>

The opacity of the interior of the map feature.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| FillOpacity | <span class="number">number</span> |

### NorthLatitude

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "NorthLatitude" property-type = "get" id = "get-rectangle-northlatitude"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "NorthLatitude" property-type = "set" id = "set-rectangle-northlatitude"></div>

The north edge of the rectangle, in decimal degrees north of the equator.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| NorthLatitude | <span class="number">number</span> |

### SouthLatitude

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "SouthLatitude" property-type = "get" id = "get-rectangle-southlatitude"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "SouthLatitude" property-type = "set" id = "set-rectangle-southlatitude"></div>

The south edge of the rectangle, in decimal degrees north of the equator.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| SouthLatitude | <span class="number">number</span> |

### StrokeColor

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "StrokeColor" property-type = "get" id = "get-rectangle-strokecolor"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "StrokeColor" property-type = "set" id = "set-rectangle-strokecolor"></div>

The paint color used to outline the Rectangle.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| StrokeColor | <span class="number">number</span> |

### StrokeOpacity

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "StrokeOpacity" property-type = "get" id = "get-rectangle-strokeopacity"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "StrokeOpacity" property-type = "set" id = "set-rectangle-strokeopacity"></div>

The opacity of the stroke used to outline the map feature.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| StrokeOpacity | <span class="number">number</span> |

### StrokeWidth

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "StrokeWidth" property-type = "get" id = "get-rectangle-strokewidth"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "StrokeWidth" property-type = "set" id = "set-rectangle-strokewidth"></div>

The width of the stroke used to outline the Rectangle.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| StrokeWidth | <span class="number">number</span> |

### Title

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "Title" property-type = "get" id = "get-rectangle-title"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "Title" property-type = "set" id = "set-rectangle-title"></div>

The title displayed in the info window that appears when the user clicks on the Rectangle.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Title      | <span class="text">text</span> |

### Type

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "Type" property-type = "get" id = "get-rectangle-type"></div>

Returns the type of the feature. For rectangles, this returns MapFeature.Rectangle ("Rectangle").

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Type       | <span class="text">text</span> |

### Type Options

| Name       | Description           | Block                                                                                                           |
| :--------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------- |
| Circle     | Option for Circle     | <div block-type = "helper" helper-name = "MapFeature Circle" id = "helper-rectangle-type-circle"></div>         |
| LineString | Option for LineString | <div block-type = "helper" helper-name = "MapFeature LineString" id = "helper-rectangle-type-linestring"></div> |
| Marker     | Option for Marker     | <div block-type = "helper" helper-name = "MapFeature Marker" id = "helper-rectangle-type-marker"></div>         |
| Polygon    | Option for Polygon    | <div block-type = "helper" helper-name = "MapFeature Polygon" id = "helper-rectangle-type-polygon"></div>       |
| Rectangle  | Option for Rectangle  | <div block-type = "helper" helper-name = "MapFeature Rectangle" id = "helper-rectangle-type-rectangle"></div>   |

### Visible

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "Visible" property-type = "get" id = "get-rectangle-visible"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "Visible" property-type = "set" id = "set-rectangle-visible"></div>

Specifies whether the Rectangle should be visible on the screen. Value is true if the component is showing and false if hidden.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Visible    | <span class="boolean">boolean</span> |

### WestLongitude

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "WestLongitude" property-type = "get" id = "get-rectangle-westlongitude"></div>

<div block-type = "component_set_get" component-selector = "Rectangle" property-selector = "WestLongitude" property-type = "set" id = "set-rectangle-westlongitude"></div>

The west edge of the rectangle, in decimal degrees east of the equator.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| WestLongitude | <span class="number">number</span> |

## Component

---

### Rectangle

<div block-type = "component_component_block" component-selector = "Rectangle" id = "component-rectangle"></div>

Component Rectangle.

Return Type : <span class="component">component</span>

