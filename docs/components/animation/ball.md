<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Ball

A round 'sprite' that can be placed on a `Canvas`, where it can react to touches and drags, interact with other sprites (`ImageSprite`s and other `Ball`s) and the edge of the Canvas, and move according to its property values.

For example, to have a `Ball` move 4 pixels toward the top of a `Canvas` every 500 milliseconds (half second), you would set the `Speed` property to 4 \[pixels\], the `Interval` property to 500 \[milliseconds\], the `Heading` property to 90 \[degrees\], and the `Enabled` property to `True`.

The difference between a `Ball` and an `ImageSprite` is that the latter can get its appearance from an image file, while a `Ball`'s appearance can be changed only by varying its `PaintColor` and `Radius` properties.

---

## Designer Properties

---

### Enabled

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Enabled       | boolean     | True          |

### Heading

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Heading       | float       | 0             |

### Interval

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| Interval      | non_negative_integer | 100           |

### OriginAtCenter

| Property Name  | Editor Type | Default Value |
| :------------- | :---------- | :------------ |
| OriginAtCenter | boolean     | False         |

### PaintColor

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| PaintColor    | color       | &HFF000000    |

### Radius

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| Radius        | non_negative_integer | 5             |

### Speed

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Speed         | float       | 0.0           |

### Visible

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Visible       | boolean     | True          |

### X

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| X             | float       | 0.0           |

### Y

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Y             | float       | 0.0           |

### Z

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Z             | float       | 1.0           |

## Events

---

### CollidedWith

<div block-type = "component_event" component-selector = "Ball" event-selector = "CollidedWith" id = "ball-collidedwith"></div>

Event handler called when two enabled sprites (

| Param Name | IO Type                                  | Getter Block                                                                                     | Setter Block                                                                                     |
| :--------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| other      | <span class="component">component</span> | <div block-type = "getter" variable-name = other id = "param-get-ball-collidedwith-other"></div> | <div block-type = "setter" variable-name = other id = "param-set-ball-collidedwith-other"></div> |

### Dragged

<div block-type = "component_event" component-selector = "Ball" event-selector = "Dragged" id = "ball-dragged"></div>

Event handler called when a Ball is dragged. On all calls, the starting coordinates are where the screen was first touched, and the "current" coordinates describe the endpoint of the current line segment. On the first call within a given drag, the "previous" coordinates are the same as the starting coordinates; subsequently, they are the "current" coordinates from the prior call. Note that the Ball won't actually move anywhere in response to the Dragged event unless MoveTo is explicitly called. For smooth movement, each of its coordinates should be set to the sum of its initial value and the difference between its current and previous values.

| Param Name | IO Type                            | Getter Block                                                                                      | Setter Block                                                                                      |
| :--------- | :--------------------------------- | :------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------ |
| startX     | <span class="number">number</span> | <div block-type = "getter" variable-name = startX id = "param-get-ball-dragged-startx"></div>     | <div block-type = "setter" variable-name = startX id = "param-set-ball-dragged-startx"></div>     |
| startY     | <span class="number">number</span> | <div block-type = "getter" variable-name = startY id = "param-get-ball-dragged-starty"></div>     | <div block-type = "setter" variable-name = startY id = "param-set-ball-dragged-starty"></div>     |
| prevX      | <span class="number">number</span> | <div block-type = "getter" variable-name = prevX id = "param-get-ball-dragged-prevx"></div>       | <div block-type = "setter" variable-name = prevX id = "param-set-ball-dragged-prevx"></div>       |
| prevY      | <span class="number">number</span> | <div block-type = "getter" variable-name = prevY id = "param-get-ball-dragged-prevy"></div>       | <div block-type = "setter" variable-name = prevY id = "param-set-ball-dragged-prevy"></div>       |
| currentX   | <span class="number">number</span> | <div block-type = "getter" variable-name = currentX id = "param-get-ball-dragged-currentx"></div> | <div block-type = "setter" variable-name = currentX id = "param-set-ball-dragged-currentx"></div> |
| currentY   | <span class="number">number</span> | <div block-type = "getter" variable-name = currentY id = "param-get-ball-dragged-currenty"></div> | <div block-type = "setter" variable-name = currentY id = "param-set-ball-dragged-currenty"></div> |

### EdgeReached

<div block-type = "component_event" component-selector = "Ball" event-selector = "EdgeReached" id = "ball-edgereached"></div>

Event handler called when the Ball reaches an edge of the screen. If Bounce is then called with that edge, the Ball will appear to bounce off of the edge it reached. Edge here is represented as an integer that indicates one of eight directions north (1), northeast (2), east (3), southeast (4), south (-1), southwest (-2), west (-3), and northwest (-4).

| Param Name | IO Type                            | Getter Block                                                                                  | Setter Block                                                                                  |
| :--------- | :--------------------------------- | :-------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| edge       | <span class="number">number</span> | <div block-type = "getter" variable-name = edge id = "param-get-ball-edgereached-edge"></div> | <div block-type = "setter" variable-name = edge id = "param-set-ball-edgereached-edge"></div> |

### Flung

<div block-type = "component_event" component-selector = "Ball" event-selector = "Flung" id = "ball-flung"></div>

Event handler called when a fling gesture (quick swipe) is made on an enabled Ball. This provides the x and y coordinates of the start of the fling (relative to the upper left of the canvas), the speed (pixels per millisecond), the heading (0-360 degrees), and the x and y velocity components of the fling's vector.

| Param Name | IO Type                            | Getter Block                                                                                  | Setter Block                                                                                  |
| :--------- | :--------------------------------- | :-------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-ball-flung-x"></div>             | <div block-type = "setter" variable-name = x id = "param-set-ball-flung-x"></div>             |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-ball-flung-y"></div>             | <div block-type = "setter" variable-name = y id = "param-set-ball-flung-y"></div>             |
| speed      | <span class="number">number</span> | <div block-type = "getter" variable-name = speed id = "param-get-ball-flung-speed"></div>     | <div block-type = "setter" variable-name = speed id = "param-set-ball-flung-speed"></div>     |
| heading    | <span class="number">number</span> | <div block-type = "getter" variable-name = heading id = "param-get-ball-flung-heading"></div> | <div block-type = "setter" variable-name = heading id = "param-set-ball-flung-heading"></div> |
| xvel       | <span class="number">number</span> | <div block-type = "getter" variable-name = xvel id = "param-get-ball-flung-xvel"></div>       | <div block-type = "setter" variable-name = xvel id = "param-set-ball-flung-xvel"></div>       |
| yvel       | <span class="number">number</span> | <div block-type = "getter" variable-name = yvel id = "param-get-ball-flung-yvel"></div>       | <div block-type = "setter" variable-name = yvel id = "param-set-ball-flung-yvel"></div>       |

### NoLongerCollidingWith

<div block-type = "component_event" component-selector = "Ball" event-selector = "NoLongerCollidingWith" id = "ball-nolongercollidingwith"></div>

Event handler called when a pair of sprites (Balls and ImageSprites) are no longer colliding.

| Param Name | IO Type                                  | Getter Block                                                                                              | Setter Block                                                                                              |
| :--------- | :--------------------------------------- | :-------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| other      | <span class="component">component</span> | <div block-type = "getter" variable-name = other id = "param-get-ball-nolongercollidingwith-other"></div> | <div block-type = "setter" variable-name = other id = "param-set-ball-nolongercollidingwith-other"></div> |

### TouchDown

<div block-type = "component_event" component-selector = "Ball" event-selector = "TouchDown" id = "ball-touchdown"></div>

Event handler called when the user begins touching an enabled Ball (placing their finger on a Ball and leaving it there). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

| Param Name | IO Type                            | Getter Block                                                                          | Setter Block                                                                          |
| :--------- | :--------------------------------- | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------ |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-ball-touchdown-x"></div> | <div block-type = "setter" variable-name = x id = "param-set-ball-touchdown-x"></div> |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-ball-touchdown-y"></div> | <div block-type = "setter" variable-name = y id = "param-set-ball-touchdown-y"></div> |

### TouchUp

<div block-type = "component_event" component-selector = "Ball" event-selector = "TouchUp" id = "ball-touchup"></div>

Event handler called when the user stops touching an enabled Ball (lifting their finger after a TouchDown event). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

| Param Name | IO Type                            | Getter Block                                                                        | Setter Block                                                                        |
| :--------- | :--------------------------------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-ball-touchup-x"></div> | <div block-type = "setter" variable-name = x id = "param-set-ball-touchup-x"></div> |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-ball-touchup-y"></div> | <div block-type = "setter" variable-name = y id = "param-set-ball-touchup-y"></div> |

### Touched

<div block-type = "component_event" component-selector = "Ball" event-selector = "Touched" id = "ball-touched"></div>

Event handler called when the user touches an enabled Ball and then immediately lifts their finger. The provided x and y coordinates are relative to the upper left of the canvas.

| Param Name | IO Type                            | Getter Block                                                                        | Setter Block                                                                        |
| :--------- | :--------------------------------- | :---------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-ball-touched-x"></div> | <div block-type = "setter" variable-name = x id = "param-set-ball-touched-x"></div> |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-ball-touched-y"></div> | <div block-type = "setter" variable-name = y id = "param-set-ball-touched-y"></div> |

## Methods

---

### Bounce

<div block-type = "component_method" component-selector = "Ball" method-selector = "Bounce" id = "ball-bounce"></div>

Return Type : <span class="void">Void</span>

Makes the Ball bounce, as if off a wall. For normal bouncing, the edge argument should be the one returned by EdgeReached.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| edge       | <span class="number">number</span> |

### CollidingWith

<div block-type = "component_method" component-selector = "Ball" method-selector = "CollidingWith" id = "ball-collidingwith"></div>

Return Type : <span class="boolean">boolean</span>

Indicates whether a collision has been registered between this Ball and the passed sprite (Ball or ImageSprite).

| Param Name | Input Type                               |
| :--------- | :--------------------------------------- |
| other      | <span class="component">component</span> |

### MoveIntoBounds

<div block-type = "component_method" component-selector = "Ball" method-selector = "MoveIntoBounds" id = "ball-moveintobounds"></div>

Return Type : <span class="void">Void</span>

Moves the Ball back in bounds if part of it extends out of bounds, having no effect otherwise. If the Ball is too wide to fit on the canvas, this aligns the left side of the Ball with the left side of the canvas. If the Ball is too tall to fit on the canvas, this aligns the top side of the Ball with the top side of the canvas.

### MoveTo

<div block-type = "component_method" component-selector = "Ball" method-selector = "MoveTo" id = "ball-moveto"></div>

Return Type : <span class="void">Void</span>

Sets the x and y coordinates of the Ball. If CenterAtOrigin is true, the center of the Ball will be placed here. Otherwise, the top left edge of the Ball will be placed at the specified coordinates.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |

### MoveToPoint

<div block-type = "component_method" component-selector = "Ball" method-selector = "MoveToPoint" id = "ball-movetopoint"></div>

Return Type : <span class="void">Void</span>

Moves the origin of Ball to the position of the cooordinates given by the list formatted as \[x-coordinate, y-coordinate\].

| Param Name  | Input Type                     |
| :---------- | :----------------------------- |
| coordinates | <span class="list">list</span> |

### PointInDirection

<div block-type = "component_method" component-selector = "Ball" method-selector = "PointInDirection" id = "ball-pointindirection"></div>

Return Type : <span class="void">Void</span>

Sets the heading of the Ball toward the point with the coordinates (x, y).

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |

### PointTowards

<div block-type = "component_method" component-selector = "Ball" method-selector = "PointTowards" id = "ball-pointtowards"></div>

Return Type : <span class="void">Void</span>

Turns the Ball to point towards a designated target sprite (Ball or ImageSprite). The new heading will be parallel to the line joining the centerpoints of the two sprites.

| Param Name | Input Type                               |
| :--------- | :--------------------------------------- |
| target     | <span class="component">component</span> |

## Block Properties

---

### Enabled

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Enabled" property-type = "get" id = "get-ball-enabled"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Enabled" property-type = "set" id = "set-ball-enabled"></div>

Controls whether the Ball moves and can be interacted with through collisions, dragging, touching, and flinging.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Enabled    | <span class="boolean">boolean</span> |

### Heading

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Heading" property-type = "get" id = "get-ball-heading"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Heading" property-type = "set" id = "set-ball-heading"></div>

Returns the Ball's heading in degrees above the positive x-axis. Zero degrees is toward the right of the screen; 90 degrees is toward the top of the screen.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Heading    | <span class="number">number</span> |

### Interval

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Interval" property-type = "get" id = "get-ball-interval"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Interval" property-type = "set" id = "set-ball-interval"></div>

The interval in milliseconds at which the Ball's position is updated. For example, if the interval is 50 and the speed is 10, then every 50 milliseconds the sprite will move 10 pixels in the heading direction.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Interval   | <span class="number">number</span> |

### PaintColor

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "PaintColor" property-type = "get" id = "get-ball-paintcolor"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "PaintColor" property-type = "set" id = "set-ball-paintcolor"></div>

The color of the Ball.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| PaintColor | <span class="number">number</span> |

### Radius

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Radius" property-type = "get" id = "get-ball-radius"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Radius" property-type = "set" id = "set-ball-radius"></div>

The distance from the edge of the Ball to its center.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Radius     | <span class="number">number</span> |

### Speed

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Speed" property-type = "get" id = "get-ball-speed"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Speed" property-type = "set" id = "set-ball-speed"></div>

The number of pixels that the Ball should move every interval, if enabled.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Speed      | <span class="number">number</span> |

### Visible

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Visible" property-type = "get" id = "get-ball-visible"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Visible" property-type = "set" id = "set-ball-visible"></div>

Whether the Ball is visible.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Visible    | <span class="boolean">boolean</span> |

### X

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "X" property-type = "get" id = "get-ball-x"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "X" property-type = "set" id = "set-ball-x"></div>

The horizontal coordinate of the Ball, increasing as the Ball moves right. If the property OriginAtCenter is true, the coordinate is for the center of the Ball; otherwise, it is for the leftmost point of the Ball.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| X          | <span class="number">number</span> |

### Y

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Y" property-type = "get" id = "get-ball-y"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Y" property-type = "set" id = "set-ball-y"></div>

The vertical coordinate of the Ball, increasing as the Ball moves down. If the property OriginAtCenter is true, the coordinate is for the center of the Ball; otherwise, it is for the uppermost point of the Ball.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Y          | <span class="number">number</span> |

### Z

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Z" property-type = "get" id = "get-ball-z"></div>

<div block-type = "component_set_get" component-selector = "Ball" property-selector = "Z" property-type = "set" id = "set-ball-z"></div>

How the \`Ball\` should be layered relative to other

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Z          | <span class="number">number</span> |

## Component

---

### Ball

<div block-type = "component_component_block" component-selector = "Ball" id = "component-ball"></div>

Component Ball.

Return Type : <span class="component">component</span>

