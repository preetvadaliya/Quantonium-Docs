<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# TinyWebDB

Non-visible component that communicates with a Web service to store and retrieve information.

---

## Designer Properties

---

### ServiceURL

| Property Name | Editor Type | Default Value                        |
| :------------ | :---------- | :----------------------------------- |
| ServiceURL    | string      | http://tinywebdb.appinventor.mit.edu |

## Events

---

### GotValue

<div block-type = "component_event" component-selector = "TinyWebDB" event-selector = "GotValue" id = "tinywebdb-gotvalue"></div>

Indicates that a GetValue server request has succeeded.

| Param Name     | IO Type                        | Getter Block                                                                                                        | Setter Block                                                                                                        |
| :------------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| tagFromWebDB   | <span class="text">text</span> | <div block-type = "getter" variable-name = tagFromWebDB id = "param-get-tinywebdb-gotvalue-tagfromwebdb"></div>     | <div block-type = "setter" variable-name = tagFromWebDB id = "param-set-tinywebdb-gotvalue-tagfromwebdb"></div>     |
| valueFromWebDB | <span class="any">any</span>   | <div block-type = "getter" variable-name = valueFromWebDB id = "param-get-tinywebdb-gotvalue-valuefromwebdb"></div> | <div block-type = "setter" variable-name = valueFromWebDB id = "param-set-tinywebdb-gotvalue-valuefromwebdb"></div> |

### ValueStored

<div block-type = "component_event" component-selector = "TinyWebDB" event-selector = "ValueStored" id = "tinywebdb-valuestored"></div>

Event indicating that a StoreValue server request has succeeded.

### WebServiceError

<div block-type = "component_event" component-selector = "TinyWebDB" event-selector = "WebServiceError" id = "tinywebdb-webserviceerror"></div>

Indicates that the communication with the Web service signaled an error.

| Param Name | IO Type                        | Getter Block                                                                                                 | Setter Block                                                                                                 |
| :--------- | :----------------------------- | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| message    | <span class="text">text</span> | <div block-type = "getter" variable-name = message id = "param-get-tinywebdb-webserviceerror-message"></div> | <div block-type = "setter" variable-name = message id = "param-set-tinywebdb-webserviceerror-message"></div> |

## Methods

---

### GetValue

<div block-type = "component_method" component-selector = "TinyWebDB" method-selector = "GetValue" id = "tinywebdb-getvalue"></div>

Return Type : <span class="void">Void</span>

Sends a request to the Web service to get the value stored under the given tag. The Web service must decide what to return if there is no value stored under the tag. This component accepts whatever is returned.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| tag        | <span class="text">text</span> |

### StoreValue

<div block-type = "component_method" component-selector = "TinyWebDB" method-selector = "StoreValue" id = "tinywebdb-storevalue"></div>

Return Type : <span class="void">Void</span>

Asks the Web service to store the given value under the given tag

| Param Name   | Input Type                     |
| :----------- | :----------------------------- |
| tag          | <span class="text">text</span> |
| valueToStore | <span class="any">any</span>   |

## Block Properties

---

### ServiceURL

<div block-type = "component_set_get" component-selector = "TinyWebDB" property-selector = "ServiceURL" property-type = "get" id = "get-tinywebdb-serviceurl"></div>

<div block-type = "component_set_get" component-selector = "TinyWebDB" property-selector = "ServiceURL" property-type = "set" id = "set-tinywebdb-serviceurl"></div>

The URL of the web service database.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| ServiceURL | <span class="text">text</span> |

## Component

---

### TinyWebDB

<div block-type = "component_component_block" component-selector = "TinyWebDB" id = "component-tinywebdb"></div>

Component TinyWebDB.

Return Type : <span class="component">component</span>

