<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Polygon

Polygon

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

### FillColor

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| FillColor     | color       | &HFFFF0000    |

### FillOpacity

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| FillOpacity   | float       | 1.0           |

### HolePointsFromString

| Property Name        | Editor Type | Default Value |
| :------------------- | :---------- | :------------ |
| HolePointsFromString | textArea    |               |

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
| StrokeWidth   | integer     | 1             |

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

<div block-type = "component_event" component-selector = "Polygon" event-selector = "Click" id = "polygon-click"></div>

The user clicked on the Polygon.

### Drag

<div block-type = "component_event" component-selector = "Polygon" event-selector = "Drag" id = "polygon-drag"></div>

The user dragged the Polygon.

### LongClick

<div block-type = "component_event" component-selector = "Polygon" event-selector = "LongClick" id = "polygon-longclick"></div>

The user long-pressed on the Polygon. This event will only trigger if Draggable is false.

### StartDrag

<div block-type = "component_event" component-selector = "Polygon" event-selector = "StartDrag" id = "polygon-startdrag"></div>

The user started a drag operation.

### StopDrag

<div block-type = "component_event" component-selector = "Polygon" event-selector = "StopDrag" id = "polygon-stopdrag"></div>

The user stopped a drag operation.

## Methods

---

### Centroid

<div block-type = "component_method" component-selector = "Polygon" method-selector = "Centroid" id = "polygon-centroid"></div>

Return Type : <span class="list">list</span>

Returns the centroid of the Polygon as a (latitude, longitude) pair.

### DistanceToFeature

<div block-type = "component_method" component-selector = "Polygon" method-selector = "DistanceToFeature" id = "polygon-distancetofeature"></div>

Return Type : <span class="number">number</span>

Compute the distance, in meters, between two map features.

| Param Name | Input Type                               |
| :--------- | :--------------------------------------- |
| mapFeature | <span class="component">component</span> |
| centroids  | <span class="boolean">boolean</span>     |

### DistanceToPoint

<div block-type = "component_method" component-selector = "Polygon" method-selector = "DistanceToPoint" id = "polygon-distancetopoint"></div>

Return Type : <span class="number">number</span>

Compute the distance, in meters, between a Polygon and a latitude, longitude point.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| latitude   | <span class="number">number</span>   |
| longitude  | <span class="number">number</span>   |
| centroid   | <span class="boolean">boolean</span> |

### HideInfobox

<div block-type = "component_method" component-selector = "Polygon" method-selector = "HideInfobox" id = "polygon-hideinfobox"></div>

Return Type : <span class="void">Void</span>

Hide the infobox if it is shown. If the infobox is not visible this function has no effect.

### ShowInfobox

<div block-type = "component_method" component-selector = "Polygon" method-selector = "ShowInfobox" id = "polygon-showinfobox"></div>

Return Type : <span class="void">Void</span>

Show the infobox for the Polygon. This will show the infobox even if EnableInfobox is set to false.

## Block Properties

---

### Description

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Description" property-type = "get" id = "get-polygon-description"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Description" property-type = "set" id = "set-polygon-description"></div>

The description displayed in the info window that appears when the user clicks on the Polygon.

| Param Name  | IO Type                        |
| :---------- | :----------------------------- |
| Description | <span class="text">text</span> |

### Draggable

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Draggable" property-type = "get" id = "get-polygon-draggable"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Draggable" property-type = "set" id = "set-polygon-draggable"></div>

The Draggable property is used to set whether or not the user can drag the Polygon by long-pressing and then dragging the Polygon to a new location.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Draggable  | <span class="boolean">boolean</span> |

### EnableInfobox

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "EnableInfobox" property-type = "get" id = "get-polygon-enableinfobox"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "EnableInfobox" property-type = "set" id = "set-polygon-enableinfobox"></div>

Enable or disable the infobox window display when the user taps the Polygon.

| Param Name    | IO Type                              |
| :------------ | :----------------------------------- |
| EnableInfobox | <span class="boolean">boolean</span> |

### FillColor

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "FillColor" property-type = "get" id = "get-polygon-fillcolor"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "FillColor" property-type = "set" id = "set-polygon-fillcolor"></div>

The paint color used to fill in the Polygon.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| FillColor  | <span class="number">number</span> |

### FillOpacity

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "FillOpacity" property-type = "get" id = "get-polygon-fillopacity"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "FillOpacity" property-type = "set" id = "set-polygon-fillopacity"></div>

The opacity of the interior of the map feature.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| FillOpacity | <span class="number">number</span> |

### HolePoints

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "HolePoints" property-type = "get" id = "get-polygon-holepoints"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "HolePoints" property-type = "set" id = "set-polygon-holepoints"></div>

Specifies the points of any holes in the \`Polygon\`. The \`HolePoints\` property is a list of lists, with each sublist containing \`(latitude, longitude)\` points representing a hole.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| HolePoints | <span class="list">list</span> |

### HolePointsFromString

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "HolePointsFromString" property-type = "set" id = "set-polygon-holepointsfromstring"></div>

Constructs holes in a polygon from a given list of coordinates per hole.

| Param Name           | IO Type                        |
| :------------------- | :----------------------------- |
| HolePointsFromString | <span class="text">text</span> |

### Points

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Points" property-type = "get" id = "get-polygon-points"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Points" property-type = "set" id = "set-polygon-points"></div>

Specifies the Points used for drawing the \`Polygon\`. The Points are specified as a list of lists containing latitude and longitude values, such as \`\[\[lat1, long1\], \[lat2, long2\], ...\]\`.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Points     | <span class="list">list</span> |

### PointsFromString

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "PointsFromString" property-type = "set" id = "set-polygon-pointsfromstring"></div>

Constructs a polygon from the given list of coordinates.

| Param Name       | IO Type                        |
| :--------------- | :----------------------------- |
| PointsFromString | <span class="text">text</span> |

### StrokeColor

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "StrokeColor" property-type = "get" id = "get-polygon-strokecolor"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "StrokeColor" property-type = "set" id = "set-polygon-strokecolor"></div>

The paint color used to outline the Polygon.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| StrokeColor | <span class="number">number</span> |

### StrokeOpacity

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "StrokeOpacity" property-type = "get" id = "get-polygon-strokeopacity"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "StrokeOpacity" property-type = "set" id = "set-polygon-strokeopacity"></div>

The opacity of the stroke used to outline the map feature.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| StrokeOpacity | <span class="number">number</span> |

### StrokeWidth

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "StrokeWidth" property-type = "get" id = "get-polygon-strokewidth"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "StrokeWidth" property-type = "set" id = "set-polygon-strokewidth"></div>

The width of the stroke used to outline the Polygon.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| StrokeWidth | <span class="number">number</span> |

### Title

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Title" property-type = "get" id = "get-polygon-title"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Title" property-type = "set" id = "set-polygon-title"></div>

The title displayed in the info window that appears when the user clicks on the Polygon.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Title      | <span class="text">text</span> |

### Type

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Type" property-type = "get" id = "get-polygon-type"></div>

Returns the type of the feature. For polygons, this returns MapFeature.Polygon ("Polygon").

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Type       | <span class="text">text</span> |

### Type Options

| Name       | Description           | Block                                                                                                         |
| :--------- | :-------------------- | :------------------------------------------------------------------------------------------------------------ |
| Circle     | Option for Circle     | <div block-type = "helper" helper-name = "MapFeature Circle" id = "helper-polygon-type-circle"></div>         |
| LineString | Option for LineString | <div block-type = "helper" helper-name = "MapFeature LineString" id = "helper-polygon-type-linestring"></div> |
| Marker     | Option for Marker     | <div block-type = "helper" helper-name = "MapFeature Marker" id = "helper-polygon-type-marker"></div>         |
| Polygon    | Option for Polygon    | <div block-type = "helper" helper-name = "MapFeature Polygon" id = "helper-polygon-type-polygon"></div>       |
| Rectangle  | Option for Rectangle  | <div block-type = "helper" helper-name = "MapFeature Rectangle" id = "helper-polygon-type-rectangle"></div>   |

### Visible

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Visible" property-type = "get" id = "get-polygon-visible"></div>

<div block-type = "component_set_get" component-selector = "Polygon" property-selector = "Visible" property-type = "set" id = "set-polygon-visible"></div>

Specifies whether the Polygon should be visible on the screen. Value is true if the component is showing and false if hidden.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Visible    | <span class="boolean">boolean</span> |

## Component

---

### Polygon

<div block-type = "component_component_block" component-selector = "Polygon" id = "component-polygon"></div>

Component Polygon.

Return Type : <span class="component">component</span>

