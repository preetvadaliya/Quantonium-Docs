<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# LineString

LineString

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

### EnableInfobox

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| EnableInfobox | boolean     | False         |

### PointsFromString

| Property Name    | Editor Type | Default Value |
| :--------------- | :---------- | :------------ |
| PointsFromString | textArea    |               |

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
| StrokeWidth   | text        | 3             |

### Title

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Title         | text        |               |

### Visible

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Visible       | visibility  | True          |

## Events

---

### Click

<div block-type = "component_event" component-selector = "LineString" event-selector = "Click" id = "linestring-click"></div>

The user clicked on the LineString.

### Drag

<div block-type = "component_event" component-selector = "LineString" event-selector = "Drag" id = "linestring-drag"></div>

The user dragged the LineString.

### LongClick

<div block-type = "component_event" component-selector = "LineString" event-selector = "LongClick" id = "linestring-longclick"></div>

The user long-pressed on the LineString. This event will only trigger if Draggable is false.

### StartDrag

<div block-type = "component_event" component-selector = "LineString" event-selector = "StartDrag" id = "linestring-startdrag"></div>

The user started a drag operation.

### StopDrag

<div block-type = "component_event" component-selector = "LineString" event-selector = "StopDrag" id = "linestring-stopdrag"></div>

The user stopped a drag operation.

## Methods

---

### DistanceToFeature

<div block-type = "component_method" component-selector = "LineString" method-selector = "DistanceToFeature" id = "linestring-distancetofeature"></div>

Return Type : <span class="number">number</span>

Compute the distance, in meters, between two map features.

| Param Name | Input Type                               |
| :--------- | :--------------------------------------- |
| mapFeature | <span class="component">component</span> |
| centroids  | <span class="boolean">boolean</span>     |

### DistanceToPoint

<div block-type = "component_method" component-selector = "LineString" method-selector = "DistanceToPoint" id = "linestring-distancetopoint"></div>

Return Type : <span class="number">number</span>

Compute the distance, in meters, between a LineString and a latitude, longitude point.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| latitude   | <span class="number">number</span>   |
| longitude  | <span class="number">number</span>   |
| centroid   | <span class="boolean">boolean</span> |

### HideInfobox

<div block-type = "component_method" component-selector = "LineString" method-selector = "HideInfobox" id = "linestring-hideinfobox"></div>

Return Type : <span class="void">Void</span>

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

### ShowInfobox

<div block-type = "component_method" component-selector = "LineString" method-selector = "ShowInfobox" id = "linestring-showinfobox"></div>

Return Type : <span class="void">Void</span>

Show the infobox for the LineString. This will show the infobox even if EnableInfobox is set to false.

## Block Properties

---

### Description

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Description" property-type = "get" id = "get-linestring-description"></div>

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Description" property-type = "set" id = "set-linestring-description"></div>

The description displayed in the info window that appears when the user clicks on the LineString.

| Param Name  | IO Type                        |
| :---------- | :----------------------------- |
| Description | <span class="text">text</span> |

### Draggable

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Draggable" property-type = "get" id = "get-linestring-draggable"></div>

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Draggable" property-type = "set" id = "set-linestring-draggable"></div>

The Draggable property is used to set whether or not the user can drag the LineString by long-pressing and then dragging the LineString to a new location.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Draggable  | <span class="boolean">boolean</span> |

### EnableInfobox

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "EnableInfobox" property-type = "get" id = "get-linestring-enableinfobox"></div>

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "EnableInfobox" property-type = "set" id = "set-linestring-enableinfobox"></div>

Enable or disable the infobox window display when the user taps the LineString.

| Param Name    | IO Type                              |
| :------------ | :----------------------------------- |
| EnableInfobox | <span class="boolean">boolean</span> |

### Points

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Points" property-type = "get" id = "get-linestring-points"></div>

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Points" property-type = "set" id = "set-linestring-points"></div>

The list of points, as pairs of latitudes and longitudes, in the \`LineString\`.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Points     | <span class="list">list</span> |

### PointsFromString

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "PointsFromString" property-type = "set" id = "set-linestring-pointsfromstring"></div>

Set the points of the LineString from a specially-coded character string of the form: \[\[latitude1, longitude1\], \[latitude2, longitude2\], ...\]

| Param Name       | IO Type                        |
| :--------------- | :----------------------------- |
| PointsFromString | <span class="text">text</span> |

### StrokeColor

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "StrokeColor" property-type = "get" id = "get-linestring-strokecolor"></div>

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "StrokeColor" property-type = "set" id = "set-linestring-strokecolor"></div>

The paint color used to outline the LineString.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| StrokeColor | <span class="number">number</span> |

### StrokeOpacity

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "StrokeOpacity" property-type = "get" id = "get-linestring-strokeopacity"></div>

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "StrokeOpacity" property-type = "set" id = "set-linestring-strokeopacity"></div>

The opacity of the stroke used to outline the map feature.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| StrokeOpacity | <span class="number">number</span> |

### StrokeWidth

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "StrokeWidth" property-type = "get" id = "get-linestring-strokewidth"></div>

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "StrokeWidth" property-type = "set" id = "set-linestring-strokewidth"></div>

Sets or gets the width of the stroke used to outline the \`LineString\`.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| StrokeWidth | <span class="number">number</span> |

### Title

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Title" property-type = "get" id = "get-linestring-title"></div>

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Title" property-type = "set" id = "set-linestring-title"></div>

The title displayed in the info window that appears when the user clicks on the LineString.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Title      | <span class="text">text</span> |

### Type

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Type" property-type = "get" id = "get-linestring-type"></div>

Returns the type of the map feature. For LineString, this returns MapFeature.LineString ("LineString").

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Type       | <span class="text">text</span> |

### Type Options

| Name       | Description           | Block                                                                                                            |
| :--------- | :-------------------- | :--------------------------------------------------------------------------------------------------------------- |
| Circle     | Option for Circle     | <div block-type = "helper" helper-name = "MapFeature Circle" id = "helper-linestring-type-circle"></div>         |
| LineString | Option for LineString | <div block-type = "helper" helper-name = "MapFeature LineString" id = "helper-linestring-type-linestring"></div> |
| Marker     | Option for Marker     | <div block-type = "helper" helper-name = "MapFeature Marker" id = "helper-linestring-type-marker"></div>         |
| Polygon    | Option for Polygon    | <div block-type = "helper" helper-name = "MapFeature Polygon" id = "helper-linestring-type-polygon"></div>       |
| Rectangle  | Option for Rectangle  | <div block-type = "helper" helper-name = "MapFeature Rectangle" id = "helper-linestring-type-rectangle"></div>   |

### Visible

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Visible" property-type = "get" id = "get-linestring-visible"></div>

<div block-type = "component_set_get" component-selector = "LineString" property-selector = "Visible" property-type = "set" id = "set-linestring-visible"></div>

Specifies whether the LineString should be visible on the screen. Value is true if the component is showing and false if hidden.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Visible    | <span class="boolean">boolean</span> |

## Component

---

### LineString

<div block-type = "component_component_block" component-selector = "LineString" id = "component-linestring"></div>

Component LineString.

Return Type : <span class="component">component</span>

