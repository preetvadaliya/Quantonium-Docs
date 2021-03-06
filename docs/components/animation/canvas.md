<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Canvas

A two-dimensional touch-sensitive rectangular panel on which drawing can be done and sprites can be moved.

The `BackgroundColor`, `PaintColor`, `BackgroundImage`, `Width`, and `Height` of the Canvas can be set in either the Designer or in the Blocks Editor. The `Width` and `Height` are measured in pixels and must be positive.

Any location on the Canvas can be specified as a pair of (X, Y) values, where

*   X is the number of pixels away from the left edge of the Canvas
*   Y is the number of pixels away from the top edge of the Canvas

.

There are events to tell when and where a Canvas has been touched or a `Sprite` (`ImageSprite` or `Ball`) has been dragged. There are also methods for drawing points, lines, and circles.

---

## Designer Properties

---

### BackgroundColor

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| BackgroundColor | color       | &HFFFFFFFF    |

### BackgroundImage

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| BackgroundImage | asset       |               |

### ExtendMovesOutsideCanvas

| Property Name            | Editor Type | Default Value |
| :----------------------- | :---------- | :------------ |
| ExtendMovesOutsideCanvas | boolean     | False         |

### FontSize

| Property Name | Editor Type        | Default Value |
| :------------ | :----------------- | :------------ |
| FontSize      | non_negative_float | 14.0          |

### LineWidth

| Property Name | Editor Type        | Default Value |
| :------------ | :----------------- | :------------ |
| LineWidth     | non_negative_float | 2.0           |

### PaintColor

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| PaintColor    | color       | &HFF000000    |

### TapThreshold

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| TapThreshold  | integer     | 15            |

### TextAlignment

| Property Name | Editor Type   | Default Value |
| :------------ | :------------ | :------------ |
| TextAlignment | textalignment | 1             |

### Visible

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Visible       | visibility  | True          |

## Events

---

### Dragged

<div block-type = "component_event" component-selector = "Canvas" event-selector = "Dragged" id = "canvas-dragged"></div>

When the user does a drag from one point (prevX, prevY) to another (x, y). The pair (startX, startY) indicates where the user first touched the screen, and "draggedAnySprite" indicates whether a sprite is being dragged.

| Param Name       | IO Type                              | Getter Block                                                                                                        | Setter Block                                                                                                        |
| :--------------- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| startX           | <span class="number">number</span>   | <div block-type = "getter" variable-name = startX id = "param-get-canvas-dragged-startx"></div>                     | <div block-type = "setter" variable-name = startX id = "param-set-canvas-dragged-startx"></div>                     |
| startY           | <span class="number">number</span>   | <div block-type = "getter" variable-name = startY id = "param-get-canvas-dragged-starty"></div>                     | <div block-type = "setter" variable-name = startY id = "param-set-canvas-dragged-starty"></div>                     |
| prevX            | <span class="number">number</span>   | <div block-type = "getter" variable-name = prevX id = "param-get-canvas-dragged-prevx"></div>                       | <div block-type = "setter" variable-name = prevX id = "param-set-canvas-dragged-prevx"></div>                       |
| prevY            | <span class="number">number</span>   | <div block-type = "getter" variable-name = prevY id = "param-get-canvas-dragged-prevy"></div>                       | <div block-type = "setter" variable-name = prevY id = "param-set-canvas-dragged-prevy"></div>                       |
| currentX         | <span class="number">number</span>   | <div block-type = "getter" variable-name = currentX id = "param-get-canvas-dragged-currentx"></div>                 | <div block-type = "setter" variable-name = currentX id = "param-set-canvas-dragged-currentx"></div>                 |
| currentY         | <span class="number">number</span>   | <div block-type = "getter" variable-name = currentY id = "param-get-canvas-dragged-currenty"></div>                 | <div block-type = "setter" variable-name = currentY id = "param-set-canvas-dragged-currenty"></div>                 |
| draggedAnySprite | <span class="boolean">boolean</span> | <div block-type = "getter" variable-name = draggedAnySprite id = "param-get-canvas-dragged-draggedanysprite"></div> | <div block-type = "setter" variable-name = draggedAnySprite id = "param-set-canvas-dragged-draggedanysprite"></div> |

### Flung

<div block-type = "component_event" component-selector = "Canvas" event-selector = "Flung" id = "canvas-flung"></div>

When a fling gesture (quick swipe) is made on the canvas: provides the (x,y) position of the start of the fling, relative to the upper left of the canvas. Also provides the speed (pixels per millisecond) and heading (0-360 degrees) of the fling, as well as the x velocity and y velocity components of the fling's vector. The value "flungSprite" is true if a sprite was located near the the starting point of the fling gesture.

| Param Name  | IO Type                              | Getter Block                                                                                            | Setter Block                                                                                            |
| :---------- | :----------------------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ |
| x           | <span class="number">number</span>   | <div block-type = "getter" variable-name = x id = "param-get-canvas-flung-x"></div>                     | <div block-type = "setter" variable-name = x id = "param-set-canvas-flung-x"></div>                     |
| y           | <span class="number">number</span>   | <div block-type = "getter" variable-name = y id = "param-get-canvas-flung-y"></div>                     | <div block-type = "setter" variable-name = y id = "param-set-canvas-flung-y"></div>                     |
| speed       | <span class="number">number</span>   | <div block-type = "getter" variable-name = speed id = "param-get-canvas-flung-speed"></div>             | <div block-type = "setter" variable-name = speed id = "param-set-canvas-flung-speed"></div>             |
| heading     | <span class="number">number</span>   | <div block-type = "getter" variable-name = heading id = "param-get-canvas-flung-heading"></div>         | <div block-type = "setter" variable-name = heading id = "param-set-canvas-flung-heading"></div>         |
| xvel        | <span class="number">number</span>   | <div block-type = "getter" variable-name = xvel id = "param-get-canvas-flung-xvel"></div>               | <div block-type = "setter" variable-name = xvel id = "param-set-canvas-flung-xvel"></div>               |
| yvel        | <span class="number">number</span>   | <div block-type = "getter" variable-name = yvel id = "param-get-canvas-flung-yvel"></div>               | <div block-type = "setter" variable-name = yvel id = "param-set-canvas-flung-yvel"></div>               |
| flungSprite | <span class="boolean">boolean</span> | <div block-type = "getter" variable-name = flungSprite id = "param-get-canvas-flung-flungsprite"></div> | <div block-type = "setter" variable-name = flungSprite id = "param-set-canvas-flung-flungsprite"></div> |

### TouchDown

<div block-type = "component_event" component-selector = "Canvas" event-selector = "TouchDown" id = "canvas-touchdown"></div>

When the user begins touching the canvas (places finger on canvas and leaves it there): provides the (x,y) position of the touch, relative to the upper left of the canvas

| Param Name | IO Type                            | Getter Block                                                                            | Setter Block                                                                            |
| :--------- | :--------------------------------- | :-------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-canvas-touchdown-x"></div> | <div block-type = "setter" variable-name = x id = "param-set-canvas-touchdown-x"></div> |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-canvas-touchdown-y"></div> | <div block-type = "setter" variable-name = y id = "param-set-canvas-touchdown-y"></div> |

### TouchUp

<div block-type = "component_event" component-selector = "Canvas" event-selector = "TouchUp" id = "canvas-touchup"></div>

When the user stops touching the canvas (lifts finger after a TouchDown event): provides the (x,y) position of the touch, relative to the upper left of the canvas

| Param Name | IO Type                            | Getter Block                                                                          | Setter Block                                                                          |
| :--------- | :--------------------------------- | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-canvas-touchup-x"></div> | <div block-type = "setter" variable-name = x id = "param-set-canvas-touchup-x"></div> |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-canvas-touchup-y"></div> | <div block-type = "setter" variable-name = y id = "param-set-canvas-touchup-y"></div> |

### Touched

<div block-type = "component_event" component-selector = "Canvas" event-selector = "Touched" id = "canvas-touched"></div>

When the user touches the canvas and then immediately lifts finger: provides the (x,y) position of the touch, relative to the upper left of the canvas. TouchedAnySprite is true if the same touch also touched a sprite, and false otherwise.

| Param Name       | IO Type                              | Getter Block                                                                                                        | Setter Block                                                                                                        |
| :--------------- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| x                | <span class="number">number</span>   | <div block-type = "getter" variable-name = x id = "param-get-canvas-touched-x"></div>                               | <div block-type = "setter" variable-name = x id = "param-set-canvas-touched-x"></div>                               |
| y                | <span class="number">number</span>   | <div block-type = "getter" variable-name = y id = "param-get-canvas-touched-y"></div>                               | <div block-type = "setter" variable-name = y id = "param-set-canvas-touched-y"></div>                               |
| touchedAnySprite | <span class="boolean">boolean</span> | <div block-type = "getter" variable-name = touchedAnySprite id = "param-get-canvas-touched-touchedanysprite"></div> | <div block-type = "setter" variable-name = touchedAnySprite id = "param-set-canvas-touched-touchedanysprite"></div> |

## Methods

---

### Clear

<div block-type = "component_method" component-selector = "Canvas" method-selector = "Clear" id = "canvas-clear"></div>

Return Type : <span class="void">Void</span>

Clears anything drawn on this Canvas but not any background color or image.

### DrawArc

<div block-type = "component_method" component-selector = "Canvas" method-selector = "DrawArc" id = "canvas-drawarc"></div>

Return Type : <span class="void">Void</span>

Draw an arc on Canvas, by drawing an arc from a specified oval (specified by left, top, right & bottom). Start angle is 0 when heading to the right, and increase when rotate clockwise. When useCenter is true, a sector will be drawed instead of an arc. When fill is true, a filled arc (or sector) will be drawed instead of just an outline.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| left       | <span class="number">number</span>   |
| top        | <span class="number">number</span>   |
| right      | <span class="number">number</span>   |
| bottom     | <span class="number">number</span>   |
| startAngle | <span class="number">number</span>   |
| sweepAngle | <span class="number">number</span>   |
| useCenter  | <span class="boolean">boolean</span> |
| fill       | <span class="boolean">boolean</span> |

### DrawCircle

<div block-type = "component_method" component-selector = "Canvas" method-selector = "DrawCircle" id = "canvas-drawcircle"></div>

Return Type : <span class="void">Void</span>

Draws a circle (filled in) with the given radius centered at the given coordinates on the Canvas.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| centerX    | <span class="number">number</span>   |
| centerY    | <span class="number">number</span>   |
| radius     | <span class="number">number</span>   |
| fill       | <span class="boolean">boolean</span> |

### DrawLine

<div block-type = "component_method" component-selector = "Canvas" method-selector = "DrawLine" id = "canvas-drawline"></div>

Return Type : <span class="void">Void</span>

Draws a line between the given coordinates on the canvas.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| x1         | <span class="number">number</span> |
| y1         | <span class="number">number</span> |
| x2         | <span class="number">number</span> |
| y2         | <span class="number">number</span> |

### DrawPoint

<div block-type = "component_method" component-selector = "Canvas" method-selector = "DrawPoint" id = "canvas-drawpoint"></div>

Return Type : <span class="void">Void</span>

Draws a point at the given coordinates on the canvas.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |

### DrawShape

<div block-type = "component_method" component-selector = "Canvas" method-selector = "DrawShape" id = "canvas-drawshape"></div>

Return Type : <span class="void">Void</span>

Draws a shape on the canvas. pointList should be a list contains sub-lists with two number which represents a coordinate. The first point and last point does not need to be the same. e.g. ((x1 y1) (x2 y2) (x3 y3)) When fill is true, the shape will be filled.

| Param Name | Input Type                           |
| :--------- | :----------------------------------- |
| pointList  | <span class="list">list</span>       |
| fill       | <span class="boolean">boolean</span> |

### DrawText

<div block-type = "component_method" component-selector = "Canvas" method-selector = "DrawText" id = "canvas-drawtext"></div>

Return Type : <span class="void">Void</span>

Draws the specified text relative to the specified coordinates using the values of the FontSize and TextAlignment properties.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| text       | <span class="text">text</span>     |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |

### DrawTextAtAngle

<div block-type = "component_method" component-selector = "Canvas" method-selector = "DrawTextAtAngle" id = "canvas-drawtextatangle"></div>

Return Type : <span class="void">Void</span>

Draws the specified text starting at the specified coordinates at the specified angle using the values of the FontSize and TextAlignment properties.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| text       | <span class="text">text</span>     |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |
| angle      | <span class="number">number</span> |

### GetBackgroundPixelColor

<div block-type = "component_method" component-selector = "Canvas" method-selector = "GetBackgroundPixelColor" id = "canvas-getbackgroundpixelcolor"></div>

Return Type : <span class="number">number</span>

Gets the color of the specified point. This includes the background and any drawn points, lines, or circles but not sprites.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |

### GetPixelColor

<div block-type = "component_method" component-selector = "Canvas" method-selector = "GetPixelColor" id = "canvas-getpixelcolor"></div>

Return Type : <span class="number">number</span>

Gets the color of the specified point.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |

### Save

<div block-type = "component_method" component-selector = "Canvas" method-selector = "Save" id = "canvas-save"></div>

Return Type : <span class="text">text</span>

Saves a picture of this Canvas to the device's external storage. If an error occurs, the Screen's ErrorOccurred event will be called.

### SaveAs

<div block-type = "component_method" component-selector = "Canvas" method-selector = "SaveAs" id = "canvas-saveas"></div>

Return Type : <span class="text">text</span>

Saves a picture of this Canvas to the device's external storage in the file named fileName. fileName must end with one of .jpg, .jpeg, or .png, which determines the file type.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| fileName   | <span class="text">text</span> |

### SetBackgroundPixelColor

<div block-type = "component_method" component-selector = "Canvas" method-selector = "SetBackgroundPixelColor" id = "canvas-setbackgroundpixelcolor"></div>

Return Type : <span class="void">Void</span>

Sets the color of the specified point. This differs from DrawPoint by having an argument for color.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |
| color      | <span class="number">number</span> |

## Block Properties

---

### BackgroundColor

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "BackgroundColor" property-type = "get" id = "get-canvas-backgroundcolor"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "BackgroundColor" property-type = "set" id = "set-canvas-backgroundcolor"></div>

The color of the canvas background.

| Param Name      | IO Type                            |
| :-------------- | :--------------------------------- |
| BackgroundColor | <span class="number">number</span> |

### BackgroundImage

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "BackgroundImage" property-type = "get" id = "get-canvas-backgroundimage"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "BackgroundImage" property-type = "set" id = "set-canvas-backgroundimage"></div>

The name of a file containing the background image for the canvas

| Param Name      | IO Type                        |
| :-------------- | :----------------------------- |
| BackgroundImage | <span class="text">text</span> |

### BackgroundImageinBase64

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "BackgroundImageinBase64" property-type = "set" id = "set-canvas-backgroundimageinbase64"></div>

Set the background image in Base64 format. This requires API level >= 8. For devices with API level less than 8, setting this will end up with an empty background.

| Param Name              | IO Type                        |
| :---------------------- | :----------------------------- |
| BackgroundImageinBase64 | <span class="text">text</span> |

### ExtendMovesOutsideCanvas

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "ExtendMovesOutsideCanvas" property-type = "get" id = "get-canvas-extendmovesoutsidecanvas"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "ExtendMovesOutsideCanvas" property-type = "set" id = "set-canvas-extendmovesoutsidecanvas"></div>

Determines whether moves can extend beyond the canvas borders. Default is false. This should normally be false, and the property is provided for backwards compatibility.

| Param Name               | IO Type                              |
| :----------------------- | :----------------------------------- |
| ExtendMovesOutsideCanvas | <span class="boolean">boolean</span> |

### FontSize

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "FontSize" property-type = "get" id = "get-canvas-fontsize"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "FontSize" property-type = "set" id = "set-canvas-fontsize"></div>

The font size of text drawn on the canvas.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| FontSize   | <span class="number">number</span> |

### Height

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "Height" property-type = "get" id = "get-canvas-height"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "Height" property-type = "set" id = "set-canvas-height"></div>

Specifies the \`Canvas\`'s vertical height, measured in pixels.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Height     | <span class="number">number</span> |

### HeightPercent

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "HeightPercent" property-type = "set" id = "set-canvas-heightpercent"></div>

Specifies the vertical height of the Canvas as a percentage of the height of the Screen.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| HeightPercent | <span class="number">number</span> |

### LineWidth

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "LineWidth" property-type = "get" id = "get-canvas-linewidth"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "LineWidth" property-type = "set" id = "set-canvas-linewidth"></div>

The width of lines drawn on the canvas.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| LineWidth  | <span class="number">number</span> |

### PaintColor

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "PaintColor" property-type = "get" id = "get-canvas-paintcolor"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "PaintColor" property-type = "set" id = "set-canvas-paintcolor"></div>

The color in which lines are drawn

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| PaintColor | <span class="number">number</span> |

### TapThreshold

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "TapThreshold" property-type = "get" id = "get-canvas-tapthreshold"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "TapThreshold" property-type = "set" id = "set-canvas-tapthreshold"></div>

Set the number of pixels right, left, up or down, a sequence of drags mustmove from the starting point to be considered a drag (instead of a touch).

| Param Name   | IO Type                            |
| :----------- | :--------------------------------- |
| TapThreshold | <span class="number">number</span> |

### TextAlignment

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "TextAlignment" property-type = "get" id = "get-canvas-textalignment"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "TextAlignment" property-type = "set" id = "set-canvas-textalignment"></div>

Determines the alignment of the text drawn by DrawText() or DrawAngle() with respect to the point specified by that command: point at the left of the text, point at the center of the text, or point at the right of the text.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| TextAlignment | <span class="number">number</span> |

### Visible

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "Visible" property-type = "get" id = "get-canvas-visible"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "Visible" property-type = "set" id = "set-canvas-visible"></div>

Specifies whether the Canvas should be visible on the screen. Value is true if the Canvas is showing and false if hidden.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Visible    | <span class="boolean">boolean</span> |

### Width

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "Width" property-type = "get" id = "get-canvas-width"></div>

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "Width" property-type = "set" id = "set-canvas-width"></div>

Specifies the horizontal width of the \`Canvas\`, measured in pixels.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Width      | <span class="number">number</span> |

### WidthPercent

<div block-type = "component_set_get" component-selector = "Canvas" property-selector = "WidthPercent" property-type = "set" id = "set-canvas-widthpercent"></div>

Specifies the horizontal width of the Canvas as a percentage of the width of the Screen.

| Param Name   | IO Type                            |
| :----------- | :--------------------------------- |
| WidthPercent | <span class="number">number</span> |

## Component

---

### Canvas

<div block-type = "component_component_block" component-selector = "Canvas" id = "component-canvas"></div>

Component Canvas.

Return Type : <span class="component">component</span>

