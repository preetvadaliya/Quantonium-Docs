<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# ImageSprite

A 'sprite' that can be placed on a `Canvas`, where it can react to touches and drags, interact with other sprites (`Ball`s and other `ImageSprite`s) and the edge of the Canvas, and move according to its property values. Its appearance is that of the image specified in its `Picture` property (unless its `Visible` property is `False`).

To have an `ImageSprite` move 10 pixels to the left every 1000 milliseconds (one second), for example, you would set the `Speed` property to 10 \[pixels\], the `Interval` property to 1000 \[milliseconds\], the `Heading` property to 180 \[degrees\], and the `Enabled` property to `True`. A sprite whose `Rotates` property is `True` will rotate its image as the sprite's `Heading` changes. Checking for collisions with a rotated sprite currently checks the sprite's unrotated position so that collision checking will be inaccurate for tall narrow or short wide sprites that are rotated. Any of the sprite properties can be changed at any time under program control.

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

### Picture

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Picture       | asset       |               |

### Rotates

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Rotates       | boolean     | True          |

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

<div block-type = "component_event" component-selector = "ImageSprite" event-selector = "CollidedWith" id = "imagesprite-collidedwith"></div>

Event handler called when two enabled sprites (

| Param Name | IO Type                                  | Getter Block                                                                                            | Setter Block                                                                                            |
| :--------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ |
| other      | <span class="component">component</span> | <div block-type = "getter" variable-name = other id = "param-get-imagesprite-collidedwith-other"></div> | <div block-type = "setter" variable-name = other id = "param-set-imagesprite-collidedwith-other"></div> |

### Dragged

<div block-type = "component_event" component-selector = "ImageSprite" event-selector = "Dragged" id = "imagesprite-dragged"></div>

Event handler called when a ImageSprite is dragged. On all calls, the starting coordinates are where the screen was first touched, and the "current" coordinates describe the endpoint of the current line segment. On the first call within a given drag, the "previous" coordinates are the same as the starting coordinates; subsequently, they are the "current" coordinates from the prior call. Note that the ImageSprite won't actually move anywhere in response to the Dragged event unless MoveTo is explicitly called. For smooth movement, each of its coordinates should be set to the sum of its initial value and the difference between its current and previous values.

| Param Name | IO Type                            | Getter Block                                                                                             | Setter Block                                                                                             |
| :--------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| startX     | <span class="number">number</span> | <div block-type = "getter" variable-name = startX id = "param-get-imagesprite-dragged-startx"></div>     | <div block-type = "setter" variable-name = startX id = "param-set-imagesprite-dragged-startx"></div>     |
| startY     | <span class="number">number</span> | <div block-type = "getter" variable-name = startY id = "param-get-imagesprite-dragged-starty"></div>     | <div block-type = "setter" variable-name = startY id = "param-set-imagesprite-dragged-starty"></div>     |
| prevX      | <span class="number">number</span> | <div block-type = "getter" variable-name = prevX id = "param-get-imagesprite-dragged-prevx"></div>       | <div block-type = "setter" variable-name = prevX id = "param-set-imagesprite-dragged-prevx"></div>       |
| prevY      | <span class="number">number</span> | <div block-type = "getter" variable-name = prevY id = "param-get-imagesprite-dragged-prevy"></div>       | <div block-type = "setter" variable-name = prevY id = "param-set-imagesprite-dragged-prevy"></div>       |
| currentX   | <span class="number">number</span> | <div block-type = "getter" variable-name = currentX id = "param-get-imagesprite-dragged-currentx"></div> | <div block-type = "setter" variable-name = currentX id = "param-set-imagesprite-dragged-currentx"></div> |
| currentY   | <span class="number">number</span> | <div block-type = "getter" variable-name = currentY id = "param-get-imagesprite-dragged-currenty"></div> | <div block-type = "setter" variable-name = currentY id = "param-set-imagesprite-dragged-currenty"></div> |

### EdgeReached

<div block-type = "component_event" component-selector = "ImageSprite" event-selector = "EdgeReached" id = "imagesprite-edgereached"></div>

Event handler called when the ImageSprite reaches an edge of the screen. If Bounce is then called with that edge, the ImageSprite will appear to bounce off of the edge it reached. Edge here is represented as an integer that indicates one of eight directions north (1), northeast (2), east (3), southeast (4), south (-1), southwest (-2), west (-3), and northwest (-4).

| Param Name | IO Type                            | Getter Block                                                                                         | Setter Block                                                                                         |
| :--------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| edge       | <span class="number">number</span> | <div block-type = "getter" variable-name = edge id = "param-get-imagesprite-edgereached-edge"></div> | <div block-type = "setter" variable-name = edge id = "param-set-imagesprite-edgereached-edge"></div> |

### Flung

<div block-type = "component_event" component-selector = "ImageSprite" event-selector = "Flung" id = "imagesprite-flung"></div>

Event handler called when a fling gesture (quick swipe) is made on an enabled ImageSprite. This provides the x and y coordinates of the start of the fling (relative to the upper left of the canvas), the speed (pixels per millisecond), the heading (0-360 degrees), and the x and y velocity components of the fling's vector.

| Param Name | IO Type                            | Getter Block                                                                                         | Setter Block                                                                                         |
| :--------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-imagesprite-flung-x"></div>             | <div block-type = "setter" variable-name = x id = "param-set-imagesprite-flung-x"></div>             |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-imagesprite-flung-y"></div>             | <div block-type = "setter" variable-name = y id = "param-set-imagesprite-flung-y"></div>             |
| speed      | <span class="number">number</span> | <div block-type = "getter" variable-name = speed id = "param-get-imagesprite-flung-speed"></div>     | <div block-type = "setter" variable-name = speed id = "param-set-imagesprite-flung-speed"></div>     |
| heading    | <span class="number">number</span> | <div block-type = "getter" variable-name = heading id = "param-get-imagesprite-flung-heading"></div> | <div block-type = "setter" variable-name = heading id = "param-set-imagesprite-flung-heading"></div> |
| xvel       | <span class="number">number</span> | <div block-type = "getter" variable-name = xvel id = "param-get-imagesprite-flung-xvel"></div>       | <div block-type = "setter" variable-name = xvel id = "param-set-imagesprite-flung-xvel"></div>       |
| yvel       | <span class="number">number</span> | <div block-type = "getter" variable-name = yvel id = "param-get-imagesprite-flung-yvel"></div>       | <div block-type = "setter" variable-name = yvel id = "param-set-imagesprite-flung-yvel"></div>       |

### NoLongerCollidingWith

<div block-type = "component_event" component-selector = "ImageSprite" event-selector = "NoLongerCollidingWith" id = "imagesprite-nolongercollidingwith"></div>

Event handler called when a pair of sprites (Balls and ImageSprites) are no longer colliding.

| Param Name | IO Type                                  | Getter Block                                                                                                     | Setter Block                                                                                                     |
| :--------- | :--------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| other      | <span class="component">component</span> | <div block-type = "getter" variable-name = other id = "param-get-imagesprite-nolongercollidingwith-other"></div> | <div block-type = "setter" variable-name = other id = "param-set-imagesprite-nolongercollidingwith-other"></div> |

### TouchDown

<div block-type = "component_event" component-selector = "ImageSprite" event-selector = "TouchDown" id = "imagesprite-touchdown"></div>

Event handler called when the user begins touching an enabled ImageSprite (placing their finger on a ImageSprite and leaving it there). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

| Param Name | IO Type                            | Getter Block                                                                                 | Setter Block                                                                                 |
| :--------- | :--------------------------------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-imagesprite-touchdown-x"></div> | <div block-type = "setter" variable-name = x id = "param-set-imagesprite-touchdown-x"></div> |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-imagesprite-touchdown-y"></div> | <div block-type = "setter" variable-name = y id = "param-set-imagesprite-touchdown-y"></div> |

### TouchUp

<div block-type = "component_event" component-selector = "ImageSprite" event-selector = "TouchUp" id = "imagesprite-touchup"></div>

Event handler called when the user stops touching an enabled ImageSprite (lifting their finger after a TouchDown event). This provides the x and y coordinates of the touch, relative to the upper left of the canvas.

| Param Name | IO Type                            | Getter Block                                                                               | Setter Block                                                                               |
| :--------- | :--------------------------------- | :----------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-imagesprite-touchup-x"></div> | <div block-type = "setter" variable-name = x id = "param-set-imagesprite-touchup-x"></div> |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-imagesprite-touchup-y"></div> | <div block-type = "setter" variable-name = y id = "param-set-imagesprite-touchup-y"></div> |

### Touched

<div block-type = "component_event" component-selector = "ImageSprite" event-selector = "Touched" id = "imagesprite-touched"></div>

Event handler called when the user touches an enabled ImageSprite and then immediately lifts their finger. The provided x and y coordinates are relative to the upper left of the canvas.

| Param Name | IO Type                            | Getter Block                                                                               | Setter Block                                                                               |
| :--------- | :--------------------------------- | :----------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| x          | <span class="number">number</span> | <div block-type = "getter" variable-name = x id = "param-get-imagesprite-touched-x"></div> | <div block-type = "setter" variable-name = x id = "param-set-imagesprite-touched-x"></div> |
| y          | <span class="number">number</span> | <div block-type = "getter" variable-name = y id = "param-get-imagesprite-touched-y"></div> | <div block-type = "setter" variable-name = y id = "param-set-imagesprite-touched-y"></div> |

## Methods

---

### Bounce

<div block-type = "component_method" component-selector = "ImageSprite" method-selector = "Bounce" id = "imagesprite-bounce"></div>

Return Type : <span class="void">Void</span>

Makes the ImageSprite bounce, as if off a wall. For normal bouncing, the edge argument should be the one returned by EdgeReached.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| edge       | <span class="number">number</span> |

### CollidingWith

<div block-type = "component_method" component-selector = "ImageSprite" method-selector = "CollidingWith" id = "imagesprite-collidingwith"></div>

Return Type : <span class="boolean">boolean</span>

Indicates whether a collision has been registered between this ImageSprite and the passed sprite (Ball or ImageSprite).

| Param Name | Input Type                               |
| :--------- | :--------------------------------------- |
| other      | <span class="component">component</span> |

### MoveIntoBounds

<div block-type = "component_method" component-selector = "ImageSprite" method-selector = "MoveIntoBounds" id = "imagesprite-moveintobounds"></div>

Return Type : <span class="void">Void</span>

Moves the ImageSprite back in bounds if part of it extends out of bounds, having no effect otherwise. If the ImageSprite is too wide to fit on the canvas, this aligns the left side of the ImageSprite with the left side of the canvas. If the ImageSprite is too tall to fit on the canvas, this aligns the top side of the ImageSprite with the top side of the canvas.

### MoveTo

<div block-type = "component_method" component-selector = "ImageSprite" method-selector = "MoveTo" id = "imagesprite-moveto"></div>

Return Type : <span class="void">Void</span>

Moves the ImageSprite so that its left top corner is at the specified x and y coordinates.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |

### MoveToPoint

<div block-type = "component_method" component-selector = "ImageSprite" method-selector = "MoveToPoint" id = "imagesprite-movetopoint"></div>

Return Type : <span class="void">Void</span>

Moves the origin of ImageSprite to the position of the cooordinates given by the list formatted as \[x-coordinate, y-coordinate\].

| Param Name  | Input Type                     |
| :---------- | :----------------------------- |
| coordinates | <span class="list">list</span> |

### PointInDirection

<div block-type = "component_method" component-selector = "ImageSprite" method-selector = "PointInDirection" id = "imagesprite-pointindirection"></div>

Return Type : <span class="void">Void</span>

Sets the heading of the ImageSprite toward the point with the coordinates (x, y).

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| x          | <span class="number">number</span> |
| y          | <span class="number">number</span> |

### PointTowards

<div block-type = "component_method" component-selector = "ImageSprite" method-selector = "PointTowards" id = "imagesprite-pointtowards"></div>

Return Type : <span class="void">Void</span>

Turns the ImageSprite to point towards a designated target sprite (Ball or ImageSprite). The new heading will be parallel to the line joining the centerpoints of the two sprites.

| Param Name | Input Type                               |
| :--------- | :--------------------------------------- |
| target     | <span class="component">component</span> |

## Block Properties

---

### Enabled

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Enabled" property-type = "get" id = "get-imagesprite-enabled"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Enabled" property-type = "set" id = "set-imagesprite-enabled"></div>

Controls whether the ImageSprite moves and can be interacted with through collisions, dragging, touching, and flinging.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Enabled    | <span class="boolean">boolean</span> |

### Heading

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Heading" property-type = "get" id = "get-imagesprite-heading"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Heading" property-type = "set" id = "set-imagesprite-heading"></div>

Returns the ImageSprite's heading in degrees above the positive x-axis. Zero degrees is toward the right of the screen; 90 degrees is toward the top of the screen.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Heading    | <span class="number">number</span> |

### Height

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Height" property-type = "get" id = "get-imagesprite-height"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Height" property-type = "set" id = "set-imagesprite-height"></div>

The height of the ImageSprite in pixels.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Height     | <span class="number">number</span> |

### Interval

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Interval" property-type = "get" id = "get-imagesprite-interval"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Interval" property-type = "set" id = "set-imagesprite-interval"></div>

The interval in milliseconds at which the ImageSprite's position is updated. For example, if the interval is 50 and the speed is 10, then every 50 milliseconds the sprite will move 10 pixels in the heading direction.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Interval   | <span class="number">number</span> |

### Picture

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Picture" property-type = "get" id = "get-imagesprite-picture"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Picture" property-type = "set" id = "set-imagesprite-picture"></div>

The picture that determines the ImageSprite's appearance.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Picture    | <span class="text">text</span> |

### Rotates

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Rotates" property-type = "get" id = "get-imagesprite-rotates"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Rotates" property-type = "set" id = "set-imagesprite-rotates"></div>

Whether the image should rotate to match the ImageSprite's heading. The sprite rotates around its centerpoint.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Rotates    | <span class="boolean">boolean</span> |

### Speed

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Speed" property-type = "get" id = "get-imagesprite-speed"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Speed" property-type = "set" id = "set-imagesprite-speed"></div>

The number of pixels that the ImageSprite should move every interval, if enabled.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Speed      | <span class="number">number</span> |

### Visible

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Visible" property-type = "get" id = "get-imagesprite-visible"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Visible" property-type = "set" id = "set-imagesprite-visible"></div>

Whether the ImageSprite is visible.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Visible    | <span class="boolean">boolean</span> |

### Width

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Width" property-type = "get" id = "get-imagesprite-width"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Width" property-type = "set" id = "set-imagesprite-width"></div>

The width of the ImageSprite in pixels.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Width      | <span class="number">number</span> |

### X

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "X" property-type = "get" id = "get-imagesprite-x"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "X" property-type = "set" id = "set-imagesprite-x"></div>

The horizontal coordinate of the left edge of the ImageSprite, increasing as the ImageSprite moves right.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| X          | <span class="number">number</span> |

### Y

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Y" property-type = "get" id = "get-imagesprite-y"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Y" property-type = "set" id = "set-imagesprite-y"></div>

The vertical coordinate of the top edge of the ImageSprite, increasing as the ImageSprite moves down.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Y          | <span class="number">number</span> |

### Z

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Z" property-type = "get" id = "get-imagesprite-z"></div>

<div block-type = "component_set_get" component-selector = "ImageSprite" property-selector = "Z" property-type = "set" id = "set-imagesprite-z"></div>

How the \`ImageSprite\` should be layered relative to other

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Z          | <span class="number">number</span> |

## Component

---

### ImageSprite

<div block-type = "component_component_block" component-selector = "ImageSprite" id = "component-imagesprite"></div>

Component ImageSprite.

Return Type : <span class="component">component</span>

