<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Navigation

Navigation

---

## Designer Properties

---

### ApiKey

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ApiKey        | string      |               |

### EndLatitude

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| EndLatitude   | latitude    | 0.0           |

### EndLongitude

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| EndLongitude  | longitude   | 0.0           |

### Language

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Language      | text        | en            |

### StartLatitude

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| StartLatitude | latitude    | 0.0           |

### StartLongitude

| Property Name  | Editor Type | Default Value |
| :------------- | :---------- | :------------ |
| StartLongitude | longitude   | 0.0           |

### TransportationMethod

| Property Name        | Editor Type       | Default Value |
| :------------------- | :---------------- | :------------ |
| TransportationMethod | navigation_method | foot-walking  |

## Events

---

### GotDirections

<div block-type = "component_event" component-selector = "Navigation" event-selector = "GotDirections" id = "navigation-gotdirections"></div>

Event triggered when the Openrouteservice returns the directions.

| Param Name | IO Type                            | Getter Block                                                                                                      | Setter Block                                                                                                      |
| :--------- | :--------------------------------- | :---------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| directions | <span class="list">list</span>     | <div block-type = "getter" variable-name = directions id = "param-get-navigation-gotdirections-directions"></div> | <div block-type = "setter" variable-name = directions id = "param-set-navigation-gotdirections-directions"></div> |
| points     | <span class="list">list</span>     | <div block-type = "getter" variable-name = points id = "param-get-navigation-gotdirections-points"></div>         | <div block-type = "setter" variable-name = points id = "param-set-navigation-gotdirections-points"></div>         |
| distance   | <span class="number">number</span> | <div block-type = "getter" variable-name = distance id = "param-get-navigation-gotdirections-distance"></div>     | <div block-type = "setter" variable-name = distance id = "param-set-navigation-gotdirections-distance"></div>     |
| duration   | <span class="number">number</span> | <div block-type = "getter" variable-name = duration id = "param-get-navigation-gotdirections-duration"></div>     | <div block-type = "setter" variable-name = duration id = "param-set-navigation-gotdirections-duration"></div>     |

## Methods

---

### RequestDirections

<div block-type = "component_method" component-selector = "Navigation" method-selector = "RequestDirections" id = "navigation-requestdirections"></div>

Return Type : <span class="void">Void</span>

Request directions from the routing service.

## Block Properties

---

### ApiKey

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "ApiKey" property-type = "set" id = "set-navigation-apikey"></div>

API Key for Open Route Service.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| ApiKey     | <span class="text">text</span> |

### EndLatitude

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "EndLatitude" property-type = "get" id = "get-navigation-endlatitude"></div>

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "EndLatitude" property-type = "set" id = "set-navigation-endlatitude"></div>

The latitude of the end location.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| EndLatitude | <span class="number">number</span> |

### EndLocation

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "EndLocation" property-type = "set" id = "set-navigation-endlocation"></div>

Set the end location.

| Param Name  | IO Type                                  |
| :---------- | :--------------------------------------- |
| EndLocation | <span class="component">component</span> |

### EndLongitude

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "EndLongitude" property-type = "get" id = "get-navigation-endlongitude"></div>

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "EndLongitude" property-type = "set" id = "set-navigation-endlongitude"></div>

The longitude of the end location.

| Param Name   | IO Type                            |
| :----------- | :--------------------------------- |
| EndLongitude | <span class="number">number</span> |

### Language

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "Language" property-type = "get" id = "get-navigation-language"></div>

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "Language" property-type = "set" id = "set-navigation-language"></div>

The language to use for textual directions.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Language   | <span class="text">text</span> |

### ResponseContent

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "ResponseContent" property-type = "get" id = "get-navigation-responsecontent"></div>

Content of the last response as a dictionary.

| Param Name      | IO Type                                    |
| :-------------- | :----------------------------------------- |
| ResponseContent | <span class="dictionary">dictionary</span> |

### StartLatitude

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "StartLatitude" property-type = "get" id = "get-navigation-startlatitude"></div>

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "StartLatitude" property-type = "set" id = "set-navigation-startlatitude"></div>

The latitude of the start location.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| StartLatitude | <span class="number">number</span> |

### StartLocation

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "StartLocation" property-type = "set" id = "set-navigation-startlocation"></div>

Set the start location.

| Param Name    | IO Type                                  |
| :------------ | :--------------------------------------- |
| StartLocation | <span class="component">component</span> |

### StartLongitude

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "StartLongitude" property-type = "get" id = "get-navigation-startlongitude"></div>

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "StartLongitude" property-type = "set" id = "set-navigation-startlongitude"></div>

The longitude of the start location.

| Param Name     | IO Type                            |
| :------------- | :--------------------------------- |
| StartLongitude | <span class="number">number</span> |

### TransportationMethod

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "TransportationMethod" property-type = "get" id = "get-navigation-transportationmethod"></div>

<div block-type = "component_set_get" component-selector = "Navigation" property-selector = "TransportationMethod" property-type = "set" id = "set-navigation-transportationmethod"></div>

The transportation method used for determining the route.

| Param Name           | IO Type                        |
| :------------------- | :----------------------------- |
| TransportationMethod | <span class="text">text</span> |

### TransportationMethod Options

| Name       | Description           | Block                                                                                                                                 |
| :--------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| Foot       | Option for Foot       | <div block-type = "helper" helper-name = "TransportMethod Foot" id = "helper-navigation-transportationmethod-foot"></div>             |
| Car        | Option for Car        | <div block-type = "helper" helper-name = "TransportMethod Car" id = "helper-navigation-transportationmethod-car"></div>               |
| Bicycle    | Option for Bicycle    | <div block-type = "helper" helper-name = "TransportMethod Bicycle" id = "helper-navigation-transportationmethod-bicycle"></div>       |
| Wheelchair | Option for Wheelchair | <div block-type = "helper" helper-name = "TransportMethod Wheelchair" id = "helper-navigation-transportationmethod-wheelchair"></div> |

## Component

---

### Navigation

<div block-type = "component_component_block" component-selector = "Navigation" id = "component-navigation"></div>

Component Navigation.

Return Type : <span class="component">component</span>

