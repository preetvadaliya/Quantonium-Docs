<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# CloudDB

Non-visible component that communicates with CloudDB server to store and retrieve information.

---

## Designer Properties

---

### DefaultRedisServer

| Property Name      | Editor Type | Default Value |
| :----------------- | :---------- | :------------ |
| DefaultRedisServer | string      |               |

### ProjectID

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ProjectID     | string      |               |

### RedisPort

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| RedisPort     | integer     | 6381          |

### RedisServer

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| RedisServer   | string      | DEFAULT       |

### Token

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Token         | string      |               |

### UseSSL

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| UseSSL        | boolean     | True          |

## Events

---

### CloudDBError

<div block-type = "component_event" component-selector = "CloudDB" event-selector = "CloudDBError" id = "clouddb-clouddberror"></div>

Indicates that an error occurred while communicating with the CloudDB Redis server.

| Param Name | IO Type                        | Getter Block                                                                                            | Setter Block                                                                                            |
| :--------- | :----------------------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------ |
| message    | <span class="text">text</span> | <div block-type = "getter" variable-name = message id = "param-get-clouddb-clouddberror-message"></div> | <div block-type = "setter" variable-name = message id = "param-set-clouddb-clouddberror-message"></div> |

### DataChanged

<div block-type = "component_event" component-selector = "CloudDB" event-selector = "DataChanged" id = "clouddb-datachanged"></div>

Indicates that the data in the CloudDB project has changed. Launches an event with the \`tag\`

| Param Name | IO Type                        | Getter Block                                                                                       | Setter Block                                                                                       |
| :--------- | :----------------------------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| tag        | <span class="text">text</span> | <div block-type = "getter" variable-name = tag id = "param-get-clouddb-datachanged-tag"></div>     | <div block-type = "setter" variable-name = tag id = "param-set-clouddb-datachanged-tag"></div>     |
| value      | <span class="any">any</span>   | <div block-type = "getter" variable-name = value id = "param-get-clouddb-datachanged-value"></div> | <div block-type = "setter" variable-name = value id = "param-set-clouddb-datachanged-value"></div> |

### FirstRemoved

<div block-type = "component_event" component-selector = "CloudDB" event-selector = "FirstRemoved" id = "clouddb-firstremoved"></div>

Event triggered by the "RemoveFirstFromList" function. The argument "value" is the object that was the first in the list, and which is now removed.

| Param Name | IO Type                      | Getter Block                                                                                        | Setter Block                                                                                        |
| :--------- | :--------------------------- | :-------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| value      | <span class="any">any</span> | <div block-type = "getter" variable-name = value id = "param-get-clouddb-firstremoved-value"></div> | <div block-type = "setter" variable-name = value id = "param-set-clouddb-firstremoved-value"></div> |

### GotValue

<div block-type = "component_event" component-selector = "CloudDB" event-selector = "GotValue" id = "clouddb-gotvalue"></div>

Indicates that a

| Param Name | IO Type                        | Getter Block                                                                                    | Setter Block                                                                                    |
| :--------- | :----------------------------- | :---------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| tag        | <span class="text">text</span> | <div block-type = "getter" variable-name = tag id = "param-get-clouddb-gotvalue-tag"></div>     | <div block-type = "setter" variable-name = tag id = "param-set-clouddb-gotvalue-tag"></div>     |
| value      | <span class="any">any</span>   | <div block-type = "getter" variable-name = value id = "param-get-clouddb-gotvalue-value"></div> | <div block-type = "setter" variable-name = value id = "param-set-clouddb-gotvalue-value"></div> |

### TagList

<div block-type = "component_event" component-selector = "CloudDB" event-selector = "TagList" id = "clouddb-taglist"></div>

Event triggered when we have received the list of known tags. Used with the "GetTagList" Function.

| Param Name | IO Type                        | Getter Block                                                                                   | Setter Block                                                                                   |
| :--------- | :----------------------------- | :--------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| value      | <span class="list">list</span> | <div block-type = "getter" variable-name = value id = "param-get-clouddb-taglist-value"></div> | <div block-type = "setter" variable-name = value id = "param-set-clouddb-taglist-value"></div> |

### UpdateDone

<div block-type = "component_event" component-selector = "CloudDB" event-selector = "UpdateDone" id = "clouddb-updatedone"></div>

Indicates that operations that store data to CloudDB have completed.

| Param Name | IO Type                        | Getter Block                                                                                              | Setter Block                                                                                              |
| :--------- | :----------------------------- | :-------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| tag        | <span class="text">text</span> | <div block-type = "getter" variable-name = tag id = "param-get-clouddb-updatedone-tag"></div>             | <div block-type = "setter" variable-name = tag id = "param-set-clouddb-updatedone-tag"></div>             |
| operation  | <span class="text">text</span> | <div block-type = "getter" variable-name = operation id = "param-get-clouddb-updatedone-operation"></div> | <div block-type = "setter" variable-name = operation id = "param-set-clouddb-updatedone-operation"></div> |

## Methods

---

### AppendValueToList

<div block-type = "component_method" component-selector = "CloudDB" method-selector = "AppendValueToList" id = "clouddb-appendvaluetolist"></div>

Return Type : <span class="void">Void</span>

Append a value to the end of a list atomically. If two devices use this function simultaneously, both will be appended and no data lost.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| tag        | <span class="text">text</span> |
| itemToAdd  | <span class="any">any</span>   |

### ClearTag

<div block-type = "component_method" component-selector = "CloudDB" method-selector = "ClearTag" id = "clouddb-cleartag"></div>

Return Type : <span class="void">Void</span>

Remove the tag from CloudDB.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| tag        | <span class="text">text</span> |

### CloudConnected

<div block-type = "component_method" component-selector = "CloudDB" method-selector = "CloudConnected" id = "clouddb-cloudconnected"></div>

Return Type : <span class="boolean">boolean</span>

returns True if we are on the network and will likely be able to connect to the CloudDB server.

### GetTagList

<div block-type = "component_method" component-selector = "CloudDB" method-selector = "GetTagList" id = "clouddb-gettaglist"></div>

Return Type : <span class="void">Void</span>

Get the list of tags for this application. When complete a "TagList" event will be triggered with the list of known tags.

### GetValue

<div block-type = "component_method" component-selector = "CloudDB" method-selector = "GetValue" id = "clouddb-getvalue"></div>

Return Type : <span class="void">Void</span>

Get the Value for a tag, doesn't return the value but will cause a GotValue event to fire when the value is looked up.

| Param Name         | Input Type                     |
| :----------------- | :----------------------------- |
| tag                | <span class="text">text</span> |
| valueIfTagNotThere | <span class="any">any</span>   |

### RemoveFirstFromList

<div block-type = "component_method" component-selector = "CloudDB" method-selector = "RemoveFirstFromList" id = "clouddb-removefirstfromlist"></div>

Return Type : <span class="void">Void</span>

Return the first element of a list and atomically remove it. If two devices use this function simultaneously, one will get the first element and the the other will get the second element, or an error if there is no available element. When the element is available, the "FirstRemoved" event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| tag        | <span class="text">text</span> |

### StoreValue

<div block-type = "component_method" component-selector = "CloudDB" method-selector = "StoreValue" id = "clouddb-storevalue"></div>

Return Type : <span class="void">Void</span>

Store a value at a tag.

| Param Name   | Input Type                     |
| :----------- | :----------------------------- |
| tag          | <span class="text">text</span> |
| valueToStore | <span class="any">any</span>   |

## Block Properties

---

### ProjectID

<div block-type = "component_set_get" component-selector = "CloudDB" property-selector = "ProjectID" property-type = "get" id = "get-clouddb-projectid"></div>

Gets the ProjectID for this CloudDB project.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| ProjectID  | <span class="text">text</span> |

### RedisPort

<div block-type = "component_set_get" component-selector = "CloudDB" property-selector = "RedisPort" property-type = "get" id = "get-clouddb-redisport"></div>

The Redis Server port to use. Defaults to 6381

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| RedisPort  | <span class="number">number</span> |

### RedisServer

<div block-type = "component_set_get" component-selector = "CloudDB" property-selector = "RedisServer" property-type = "get" id = "get-clouddb-redisserver"></div>

The Redis Server to use to store data. A setting of "DEFAULT" means that the MIT server will be used.

| Param Name  | IO Type                        |
| :---------- | :----------------------------- |
| RedisServer | <span class="text">text</span> |

## Component

---

### CloudDB

<div block-type = "component_component_block" component-selector = "CloudDB" id = "component-clouddb"></div>

Component CloudDB.

Return Type : <span class="component">component</span>

