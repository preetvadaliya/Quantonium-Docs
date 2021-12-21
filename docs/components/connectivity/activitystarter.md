<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# ActivityStarter

A component that can launch an activity using the `StartActivity` method.

Activities that can be launched include:

*   starting other App Inventor for Android apps
*   starting the camera application
*   performing web search
*   opening a browser to a specified web page
*   opening the map application to a specified location

You can also launch activities that return text data. See the documentation on using the Activity Starter for examples.

---

## Designer Properties

---

### Action

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Action        | string      |               |

### ActivityClass

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ActivityClass | string      |               |

### ActivityPackage

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| ActivityPackage | string      |               |

### DataType

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| DataType      | string      |               |

### DataUri

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| DataUri       | string      |               |

### ExtraKey

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ExtraKey      | string      |               |

### ExtraValue

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ExtraValue    | string      |               |

### ResultName

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ResultName    | string      |               |

## Events

---

### ActivityCanceled

<div block-type = "component_event" component-selector = "ActivityStarter" event-selector = "ActivityCanceled" id = "activitystarter-activitycanceled"></div>

Event raised if this ActivityStarter returns because the activity was canceled.

### ActivityError

<div block-type = "component_event" component-selector = "ActivityStarter" event-selector = "ActivityError" id = "activitystarter-activityerror"></div>

The ActivityError event is no longer used. Please use the Screen.ErrorOccurred event instead.

| Param Name | IO Type                        | Getter Block                                                                                                     | Setter Block                                                                                                     |
| :--------- | :----------------------------- | :--------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| message    | <span class="text">text</span> | <div block-type = "getter" variable-name = message id = "param-get-activitystarter-activityerror-message"></div> | <div block-type = "setter" variable-name = message id = "param-set-activitystarter-activityerror-message"></div> |

### AfterActivity

<div block-type = "component_event" component-selector = "ActivityStarter" event-selector = "AfterActivity" id = "activitystarter-afteractivity"></div>

Event raised after this ActivityStarter returns.

| Param Name | IO Type                        | Getter Block                                                                                                   | Setter Block                                                                                                   |
| :--------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| result     | <span class="text">text</span> | <div block-type = "getter" variable-name = result id = "param-get-activitystarter-afteractivity-result"></div> | <div block-type = "setter" variable-name = result id = "param-set-activitystarter-afteractivity-result"></div> |

## Methods

---

### ResolveActivity

<div block-type = "component_method" component-selector = "ActivityStarter" method-selector = "ResolveActivity" id = "activitystarter-resolveactivity"></div>

Return Type : <span class="text">text</span>

Returns the name of the activity that corresponds to this ActivityStarter, or an empty string if no corresponding activity can be found.

### StartActivity

<div block-type = "component_method" component-selector = "ActivityStarter" method-selector = "StartActivity" id = "activitystarter-startactivity"></div>

Return Type : <span class="void">Void</span>

Start the activity corresponding to this ActivityStarter.

## Block Properties

---

### Action

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "Action" property-type = "get" id = "get-activitystarter-action"></div>

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "Action" property-type = "set" id = "set-activitystarter-action"></div>

Returns the action that will be used to start the activity.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Action     | <span class="text">text</span> |

### ActivityClass

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ActivityClass" property-type = "get" id = "get-activitystarter-activityclass"></div>

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ActivityClass" property-type = "set" id = "set-activitystarter-activityclass"></div>

Returns the class part of the specific component that will be started.

| Param Name    | IO Type                        |
| :------------ | :----------------------------- |
| ActivityClass | <span class="text">text</span> |

### ActivityPackage

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ActivityPackage" property-type = "get" id = "get-activitystarter-activitypackage"></div>

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ActivityPackage" property-type = "set" id = "set-activitystarter-activitypackage"></div>

Returns the package part of the specific component that will be started.

| Param Name      | IO Type                        |
| :-------------- | :----------------------------- |
| ActivityPackage | <span class="text">text</span> |

### DataType

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "DataType" property-type = "get" id = "get-activitystarter-datatype"></div>

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "DataType" property-type = "set" id = "set-activitystarter-datatype"></div>

Returns the MIME type to pass to the activity.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| DataType   | <span class="text">text</span> |

### DataUri

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "DataUri" property-type = "get" id = "get-activitystarter-datauri"></div>

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "DataUri" property-type = "set" id = "set-activitystarter-datauri"></div>

Returns the data URI that will be used to start the activity.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| DataUri    | <span class="text">text</span> |

### ExtraKey

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ExtraKey" property-type = "get" id = "get-activitystarter-extrakey"></div>

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ExtraKey" property-type = "set" id = "set-activitystarter-extrakey"></div>

Returns the extra key that will be passed to the activity. DEPRECATED: New code should use Extras property instead.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| ExtraKey   | <span class="text">text</span> |

### ExtraValue

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ExtraValue" property-type = "get" id = "get-activitystarter-extravalue"></div>

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ExtraValue" property-type = "set" id = "set-activitystarter-extravalue"></div>

Returns the extra value that will be passed to the activity. DEPRECATED: New code should use Extras property instead.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| ExtraValue | <span class="text">text</span> |

### Extras

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "Extras" property-type = "get" id = "get-activitystarter-extras"></div>

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "Extras" property-type = "set" id = "set-activitystarter-extras"></div>

Specifies the list of key-value pairs that will be passed as extra data to the activity.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Extras     | <span class="list">list</span> |

### Result

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "Result" property-type = "get" id = "get-activitystarter-result"></div>

Returns the result from the activity.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Result     | <span class="text">text</span> |

### ResultName

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ResultName" property-type = "get" id = "get-activitystarter-resultname"></div>

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ResultName" property-type = "set" id = "set-activitystarter-resultname"></div>

Returns the name that will be used to retrieve a result from the activity.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| ResultName | <span class="text">text</span> |

### ResultType

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ResultType" property-type = "get" id = "get-activitystarter-resulttype"></div>

Returns the MIME type from the activity.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| ResultType | <span class="text">text</span> |

### ResultUri

<div block-type = "component_set_get" component-selector = "ActivityStarter" property-selector = "ResultUri" property-type = "get" id = "get-activitystarter-resulturi"></div>

Returns the URI from the activity.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| ResultUri  | <span class="text">text</span> |

## Component

---

### ActivityStarter

<div block-type = "component_component_block" component-selector = "ActivityStarter" id = "component-activitystarter"></div>

Component ActivityStarter.

Return Type : <span class="component">component</span>

