<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Screen

Top-level component containing all other components in the program

---

## Designer Properties

---

### AboutScreen

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| AboutScreen   | textArea    |               |

### AccentColor

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| AccentColor   | color       | &HFFFF4081    |

### ActionBar

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ActionBar     | boolean     | False         |

### AlignHorizontal

| Property Name   | Editor Type          | Default Value |
| :-------------- | :------------------- | :------------ |
| AlignHorizontal | horizontal_alignment | 1             |

### AlignVertical

| Property Name | Editor Type        | Default Value |
| :------------ | :----------------- | :------------ |
| AlignVertical | vertical_alignment | 1             |

### AppName

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| AppName       | string      |               |

### BackgroundColor

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| BackgroundColor | color       | &HFFFFFFFF    |

### BackgroundImage

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| BackgroundImage | asset       |               |

### BigDefaultText

| Property Name  | Editor Type | Default Value |
| :------------- | :---------- | :------------ |
| BigDefaultText | boolean     | False         |

### BlocksToolkit

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| BlocksToolkit | subset_json |               |

### CloseScreenAnimation

| Property Name        | Editor Type      | Default Value |
| :------------------- | :--------------- | :------------ |
| CloseScreenAnimation | screen_animation | default       |

### DefaultFileScope

| Property Name    | Editor Type | Default Value |
| :--------------- | :---------- | :------------ |
| DefaultFileScope | file_scope  | App           |

### HighContrast

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| HighContrast  | boolean     | False         |

### Icon

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Icon          | asset       |               |

### OpenScreenAnimation

| Property Name       | Editor Type      | Default Value |
| :------------------ | :--------------- | :------------ |
| OpenScreenAnimation | screen_animation | default       |

### PrimaryColor

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| PrimaryColor  | color       | &HFF3F51B5    |

### PrimaryColorDark

| Property Name    | Editor Type | Default Value |
| :--------------- | :---------- | :------------ |
| PrimaryColorDark | color       | &HFF303F9F    |

### ScreenOrientation

| Property Name     | Editor Type        | Default Value |
| :---------------- | :----------------- | :------------ |
| ScreenOrientation | screen_orientation | unspecified   |

### Scrollable

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Scrollable    | boolean     | False         |

### ShowListsAsJson

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| ShowListsAsJson | boolean     | True          |

### ShowStatusBar

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ShowStatusBar | boolean     | True          |

### Sizing

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Sizing        | sizing      | Responsive    |

### Theme

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Theme         | theme       | Classic       |

### Title

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Title         | string      |               |

### TitleVisible

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| TitleVisible  | boolean     | True          |

### TutorialURL

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| TutorialURL   | string      |               |

### VersionCode

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| VersionCode   | non_negative_integer | 1             |

### VersionName

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| VersionName   | string      | 1.0           |

## Events

---

### BackPressed

<div block-type = "component_event" component-selector = "Screen" event-selector = "BackPressed" id = "screen-backpressed"></div>

Device back button pressed.

### ErrorOccurred

<div block-type = "component_event" component-selector = "Screen" event-selector = "ErrorOccurred" id = "screen-erroroccurred"></div>

Event raised when an error occurs. Only some errors will raise this condition. For those errors, the system will show a notification by default. You can use this event handler to prescribe an error behavior different than the default.

| Param Name   | IO Type                                  | Getter Block                                                                                                      | Setter Block                                                                                                      |
| :----------- | :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| component    | <span class="component">component</span> | <div block-type = "getter" variable-name = component id = "param-get-screen-erroroccurred-component"></div>       | <div block-type = "setter" variable-name = component id = "param-set-screen-erroroccurred-component"></div>       |
| functionName | <span class="text">text</span>           | <div block-type = "getter" variable-name = functionName id = "param-get-screen-erroroccurred-functionname"></div> | <div block-type = "setter" variable-name = functionName id = "param-set-screen-erroroccurred-functionname"></div> |
| errorNumber  | <span class="number">number</span>       | <div block-type = "getter" variable-name = errorNumber id = "param-get-screen-erroroccurred-errornumber"></div>   | <div block-type = "setter" variable-name = errorNumber id = "param-set-screen-erroroccurred-errornumber"></div>   |
| message      | <span class="text">text</span>           | <div block-type = "getter" variable-name = message id = "param-get-screen-erroroccurred-message"></div>           | <div block-type = "setter" variable-name = message id = "param-set-screen-erroroccurred-message"></div>           |

### Initialize

<div block-type = "component_event" component-selector = "Screen" event-selector = "Initialize" id = "screen-initialize"></div>

The Initialize event is run when the Screen starts and is only run once per screen.

### OtherScreenClosed

<div block-type = "component_event" component-selector = "Screen" event-selector = "OtherScreenClosed" id = "screen-otherscreenclosed"></div>

Event raised when another screen has closed and control has returned to this screen.

| Param Name      | IO Type                        | Getter Block                                                                                                                | Setter Block                                                                                                                |
| :-------------- | :----------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| otherScreenName | <span class="text">text</span> | <div block-type = "getter" variable-name = otherScreenName id = "param-get-screen-otherscreenclosed-otherscreenname"></div> | <div block-type = "setter" variable-name = otherScreenName id = "param-set-screen-otherscreenclosed-otherscreenname"></div> |
| result          | <span class="any">any</span>   | <div block-type = "getter" variable-name = result id = "param-get-screen-otherscreenclosed-result"></div>                   | <div block-type = "setter" variable-name = result id = "param-set-screen-otherscreenclosed-result"></div>                   |

### PermissionDenied

<div block-type = "component_event" component-selector = "Screen" event-selector = "PermissionDenied" id = "screen-permissiondenied"></div>

Event to handle when the app user has denied a needed permission.

| Param Name     | IO Type                                  | Getter Block                                                                                                             | Setter Block                                                                                                             |
| :------------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| component      | <span class="component">component</span> | <div block-type = "getter" variable-name = component id = "param-get-screen-permissiondenied-component"></div>           | <div block-type = "setter" variable-name = component id = "param-set-screen-permissiondenied-component"></div>           |
| functionName   | <span class="text">text</span>           | <div block-type = "getter" variable-name = functionName id = "param-get-screen-permissiondenied-functionname"></div>     | <div block-type = "setter" variable-name = functionName id = "param-set-screen-permissiondenied-functionname"></div>     |
| permissionName | <span class="text">text</span>           | <div block-type = "getter" variable-name = permissionName id = "param-get-screen-permissiondenied-permissionname"></div> | <div block-type = "setter" variable-name = permissionName id = "param-set-screen-permissiondenied-permissionname"></div> |

### PermissionGranted

<div block-type = "component_event" component-selector = "Screen" event-selector = "PermissionGranted" id = "screen-permissiongranted"></div>

Event to handle when the app user has granted a needed permission. This event is only run when permission is granted in response to the AskForPermission method.

| Param Name     | IO Type                        | Getter Block                                                                                                              | Setter Block                                                                                                              |
| :------------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| permissionName | <span class="text">text</span> | <div block-type = "getter" variable-name = permissionName id = "param-get-screen-permissiongranted-permissionname"></div> | <div block-type = "setter" variable-name = permissionName id = "param-set-screen-permissiongranted-permissionname"></div> |

### ScreenOrientationChanged

<div block-type = "component_event" component-selector = "Screen" event-selector = "ScreenOrientationChanged" id = "screen-screenorientationchanged"></div>

Screen orientation changed

## Methods

---

### AskForPermission

<div block-type = "component_method" component-selector = "Screen" method-selector = "AskForPermission" id = "screen-askforpermission"></div>

Return Type : <span class="void">Void</span>

Ask the user to grant access to a dangerous permission.

| Param Name     | Input Type                     |
| :------------- | :----------------------------- |
| permissionName | <span class="text">text</span> |

### HideKeyboard

<div block-type = "component_method" component-selector = "Screen" method-selector = "HideKeyboard" id = "screen-hidekeyboard"></div>

Return Type : <span class="void">Void</span>

Hide the onscreen soft keyboard.

## Block Properties

---

### AboutScreen

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "AboutScreen" property-type = "get" id = "get-screen-aboutscreen"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "AboutScreen" property-type = "set" id = "set-screen-aboutscreen"></div>

Information about the screen. It appears when "About this Application" is selected from the system menu. Use it to inform people about your app. In multiple screen apps, each screen has its own AboutScreen info.

| Param Name  | IO Type                        |
| :---------- | :----------------------------- |
| AboutScreen | <span class="text">text</span> |

### AlignHorizontal

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "AlignHorizontal" property-type = "get" id = "get-screen-alignhorizontal"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "AlignHorizontal" property-type = "set" id = "set-screen-alignhorizontal"></div>

A number that encodes how contents of the screen are aligned horizontally. The choices are: 1 = left aligned, 3 = horizontally centered, 2 = right aligned.

| Param Name      | IO Type                            |
| :-------------- | :--------------------------------- |
| AlignHorizontal | <span class="number">number</span> |

### AlignHorizontal Options

| Name   | Description       | Block                                                                                                                    |
| :----- | :---------------- | :----------------------------------------------------------------------------------------------------------------------- |
| Left   | Option for Left   | <div block-type = "helper" helper-name = "HorizontalAlignment Left" id = "helper-screen-alignhorizontal-left"></div>     |
| Center | Option for Center | <div block-type = "helper" helper-name = "HorizontalAlignment Center" id = "helper-screen-alignhorizontal-center"></div> |
| Right  | Option for Right  | <div block-type = "helper" helper-name = "HorizontalAlignment Right" id = "helper-screen-alignhorizontal-right"></div>   |

### AlignVertical

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "AlignVertical" property-type = "get" id = "get-screen-alignvertical"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "AlignVertical" property-type = "set" id = "set-screen-alignvertical"></div>

A number that encodes how the contents of the arrangement are aligned vertically. The choices are: 1 = aligned at the top, 2 = vertically centered, 3 = aligned at the bottom. Vertical alignment has no effect if the screen is scrollable.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| AlignVertical | <span class="number">number</span> |

### AlignVertical Options

| Name   | Description       | Block                                                                                                                |
| :----- | :---------------- | :------------------------------------------------------------------------------------------------------------------- |
| Top    | Option for Top    | <div block-type = "helper" helper-name = "VerticalAlignment Top" id = "helper-screen-alignvertical-top"></div>       |
| Center | Option for Center | <div block-type = "helper" helper-name = "VerticalAlignment Center" id = "helper-screen-alignvertical-center"></div> |
| Bottom | Option for Bottom | <div block-type = "helper" helper-name = "VerticalAlignment Bottom" id = "helper-screen-alignvertical-bottom"></div> |

### BackgroundColor

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "BackgroundColor" property-type = "get" id = "get-screen-backgroundcolor"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "BackgroundColor" property-type = "set" id = "set-screen-backgroundcolor"></div>

BackgroundColor property getter method.

| Param Name      | IO Type                            |
| :-------------- | :--------------------------------- |
| BackgroundColor | <span class="number">number</span> |

### BackgroundImage

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "BackgroundImage" property-type = "get" id = "get-screen-backgroundimage"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "BackgroundImage" property-type = "set" id = "set-screen-backgroundimage"></div>

The screen background image.

| Param Name      | IO Type                        |
| :-------------- | :----------------------------- |
| BackgroundImage | <span class="text">text</span> |

### BigDefaultText

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "BigDefaultText" property-type = "get" id = "get-screen-bigdefaulttext"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "BigDefaultText" property-type = "set" id = "set-screen-bigdefaulttext"></div>

When checked, we will use high contrast mode

| Param Name     | IO Type                              |
| :------------- | :----------------------------------- |
| BigDefaultText | <span class="boolean">boolean</span> |

### CloseScreenAnimation

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "CloseScreenAnimation" property-type = "get" id = "get-screen-closescreenanimation"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "CloseScreenAnimation" property-type = "set" id = "set-screen-closescreenanimation"></div>

The animation for closing current screen and returning to the previous screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

| Param Name           | IO Type                        |
| :------------------- | :----------------------------- |
| CloseScreenAnimation | <span class="text">text</span> |

### CloseScreenAnimation Options

| Name            | Description                | Block                                                                                                                                       |
| :-------------- | :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| Default         | Option for Default         | <div block-type = "helper" helper-name = "ScreenAnimation Default" id = "helper-screen-closescreenanimation-default"></div>                 |
| Fade            | Option for Fade            | <div block-type = "helper" helper-name = "ScreenAnimation Fade" id = "helper-screen-closescreenanimation-fade"></div>                       |
| Zoom            | Option for Zoom            | <div block-type = "helper" helper-name = "ScreenAnimation Zoom" id = "helper-screen-closescreenanimation-zoom"></div>                       |
| SlideHorizontal | Option for SlideHorizontal | <div block-type = "helper" helper-name = "ScreenAnimation SlideHorizontal" id = "helper-screen-closescreenanimation-slidehorizontal"></div> |
| SlideVertical   | Option for SlideVertical   | <div block-type = "helper" helper-name = "ScreenAnimation SlideVertical" id = "helper-screen-closescreenanimation-slidevertical"></div>     |
| None            | Option for None            | <div block-type = "helper" helper-name = "ScreenAnimation None" id = "helper-screen-closescreenanimation-none"></div>                       |

### Height

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "Height" property-type = "get" id = "get-screen-height"></div>

Screen height (y-size).

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Height     | <span class="number">number</span> |

### HighContrast

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "HighContrast" property-type = "get" id = "get-screen-highcontrast"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "HighContrast" property-type = "set" id = "set-screen-highcontrast"></div>

When checked, we will use high contrast mode

| Param Name   | IO Type                              |
| :----------- | :----------------------------------- |
| HighContrast | <span class="boolean">boolean</span> |

### OpenScreenAnimation

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "OpenScreenAnimation" property-type = "get" id = "get-screen-openscreenanimation"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "OpenScreenAnimation" property-type = "set" id = "set-screen-openscreenanimation"></div>

The animation for switching to another screen. Valid options are default, fade, zoom, slidehorizontal, slidevertical, and none

| Param Name          | IO Type                        |
| :------------------ | :----------------------------- |
| OpenScreenAnimation | <span class="text">text</span> |

### OpenScreenAnimation Options

| Name            | Description                | Block                                                                                                                                      |
| :-------------- | :------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| Default         | Option for Default         | <div block-type = "helper" helper-name = "ScreenAnimation Default" id = "helper-screen-openscreenanimation-default"></div>                 |
| Fade            | Option for Fade            | <div block-type = "helper" helper-name = "ScreenAnimation Fade" id = "helper-screen-openscreenanimation-fade"></div>                       |
| Zoom            | Option for Zoom            | <div block-type = "helper" helper-name = "ScreenAnimation Zoom" id = "helper-screen-openscreenanimation-zoom"></div>                       |
| SlideHorizontal | Option for SlideHorizontal | <div block-type = "helper" helper-name = "ScreenAnimation SlideHorizontal" id = "helper-screen-openscreenanimation-slidehorizontal"></div> |
| SlideVertical   | Option for SlideVertical   | <div block-type = "helper" helper-name = "ScreenAnimation SlideVertical" id = "helper-screen-openscreenanimation-slidevertical"></div>     |
| None            | Option for None            | <div block-type = "helper" helper-name = "ScreenAnimation None" id = "helper-screen-openscreenanimation-none"></div>                       |

### Platform

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "Platform" property-type = "get" id = "get-screen-platform"></div>

The platform the app is running on, for example "Android" or "iOS".

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Platform   | <span class="text">text</span> |

### PlatformVersion

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "PlatformVersion" property-type = "get" id = "get-screen-platformversion"></div>

The dotted version number of the platform, such as 4.2.2 or 10.0. This is platform specific and there is no guarantee that it has a particular format.

| Param Name      | IO Type                        |
| :-------------- | :----------------------------- |
| PlatformVersion | <span class="text">text</span> |

### ScreenOrientation

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "ScreenOrientation" property-type = "get" id = "get-screen-screenorientation"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "ScreenOrientation" property-type = "set" id = "set-screen-screenorientation"></div>

The requested screen orientation, specified as a text value. Commonly used values are landscape, portrait, sensor, user and unspecified. See the Android developer documentation for ActivityInfo.Screen\_Orientation for the complete list of possible settings.

| Param Name        | IO Type                        |
| :---------------- | :----------------------------- |
| ScreenOrientation | <span class="text">text</span> |

### ScreenOrientation Options

| Name             | Description                 | Block                                                                                                                                        |
| :--------------- | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| Unspecified      | Option for Unspecified      | <div block-type = "helper" helper-name = "ScreenOrientation Unspecified" id = "helper-screen-screenorientation-unspecified"></div>           |
| Landscape        | Option for Landscape        | <div block-type = "helper" helper-name = "ScreenOrientation Landscape" id = "helper-screen-screenorientation-landscape"></div>               |
| Portrait         | Option for Portrait         | <div block-type = "helper" helper-name = "ScreenOrientation Portrait" id = "helper-screen-screenorientation-portrait"></div>                 |
| Sensor           | Option for Sensor           | <div block-type = "helper" helper-name = "ScreenOrientation Sensor" id = "helper-screen-screenorientation-sensor"></div>                     |
| User             | Option for User             | <div block-type = "helper" helper-name = "ScreenOrientation User" id = "helper-screen-screenorientation-user"></div>                         |
| Behind           | Option for Behind           | <div block-type = "helper" helper-name = "ScreenOrientation Behind" id = "helper-screen-screenorientation-behind"></div>                     |
| NoSensor         | Option for NoSensor         | <div block-type = "helper" helper-name = "ScreenOrientation NoSensor" id = "helper-screen-screenorientation-nosensor"></div>                 |
| FullSensor       | Option for FullSensor       | <div block-type = "helper" helper-name = "ScreenOrientation FullSensor" id = "helper-screen-screenorientation-fullsensor"></div>             |
| ReverseLandscape | Option for ReverseLandscape | <div block-type = "helper" helper-name = "ScreenOrientation ReverseLandscape" id = "helper-screen-screenorientation-reverselandscape"></div> |
| ReversePortrait  | Option for ReversePortrait  | <div block-type = "helper" helper-name = "ScreenOrientation ReversePortrait" id = "helper-screen-screenorientation-reverseportrait"></div>   |
| SensorLandscape  | Option for SensorLandscape  | <div block-type = "helper" helper-name = "ScreenOrientation SensorLandscape" id = "helper-screen-screenorientation-sensorlandscape"></div>   |
| SensorPortrait   | Option for SensorPortrait   | <div block-type = "helper" helper-name = "ScreenOrientation SensorPortrait" id = "helper-screen-screenorientation-sensorportrait"></div>     |

### Scrollable

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "Scrollable" property-type = "get" id = "get-screen-scrollable"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "Scrollable" property-type = "set" id = "set-screen-scrollable"></div>

When checked, there will be a vertical scrollbar on the screen, and the height of the application can exceed the physical height of the device. When unchecked, the application height is constrained to the height of the device.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Scrollable | <span class="boolean">boolean</span> |

### ShowStatusBar

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "ShowStatusBar" property-type = "get" id = "get-screen-showstatusbar"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "ShowStatusBar" property-type = "set" id = "set-screen-showstatusbar"></div>

The status bar is the topmost bar on the screen. This property reports whether the status bar is visible.

| Param Name    | IO Type                              |
| :------------ | :----------------------------------- |
| ShowStatusBar | <span class="boolean">boolean</span> |

### Title

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "Title" property-type = "get" id = "get-screen-title"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "Title" property-type = "set" id = "set-screen-title"></div>

The caption for the form, which apears in the title bar

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Title      | <span class="text">text</span> |

### TitleVisible

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "TitleVisible" property-type = "get" id = "get-screen-titlevisible"></div>

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "TitleVisible" property-type = "set" id = "set-screen-titlevisible"></div>

The title bar is the top gray bar on the screen. This property reports whether the title bar is visible.

| Param Name   | IO Type                              |
| :----------- | :----------------------------------- |
| TitleVisible | <span class="boolean">boolean</span> |

### Width

<div block-type = "component_set_get" component-selector = "Screen" property-selector = "Width" property-type = "get" id = "get-screen-width"></div>

Screen width (x-size).

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Width      | <span class="number">number</span> |

## Component

---

### Screen

<div block-type = "component_component_block" component-selector = "Screen" id = "component-screen"></div>

Component Screen.

Return Type : <span class="component">component</span>

