<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# FeatureCollection

A FeatureCollection contains one or more map features as a group. Any events fired on a feature in the collection will also trigger the corresponding event on the collection object. FeatureCollections can be loaded from external resources as a means of populating a Map with content.

---

## Designer Properties

---

### FeaturesFromGeoJSON

| Property Name       | Editor Type | Default Value |
| :------------------ | :---------- | :------------ |
| FeaturesFromGeoJSON | textArea    |               |

### Source

| Property Name | Editor Type  | Default Value |
| :------------ | :----------- | :------------ |
| Source        | geojson_type |               |

### Visible

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Visible       | visibility  | True          |

## Events

---

### FeatureClick

<div block-type = "component_event" component-selector = "FeatureCollection" event-selector = "FeatureClick" id = "featurecollection-featureclick"></div>

The user clicked on a map feature.

| Param Name | IO Type                                  | Getter Block                                                                                                      | Setter Block                                                                                                      |
| :--------- | :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| feature    | <span class="component">component</span> | <div block-type = "getter" variable-name = feature id = "param-get-featurecollection-featureclick-feature"></div> | <div block-type = "setter" variable-name = feature id = "param-set-featurecollection-featureclick-feature"></div> |

### FeatureDrag

<div block-type = "component_event" component-selector = "FeatureCollection" event-selector = "FeatureDrag" id = "featurecollection-featuredrag"></div>

The user dragged a map feature.

| Param Name | IO Type                                  | Getter Block                                                                                                     | Setter Block                                                                                                     |
| :--------- | :--------------------------------------- | :--------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| feature    | <span class="component">component</span> | <div block-type = "getter" variable-name = feature id = "param-get-featurecollection-featuredrag-feature"></div> | <div block-type = "setter" variable-name = feature id = "param-set-featurecollection-featuredrag-feature"></div> |

### FeatureLongClick

<div block-type = "component_event" component-selector = "FeatureCollection" event-selector = "FeatureLongClick" id = "featurecollection-featurelongclick"></div>

The user long-pressed on a map feature.

| Param Name | IO Type                                  | Getter Block                                                                                                          | Setter Block                                                                                                          |
| :--------- | :--------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| feature    | <span class="component">component</span> | <div block-type = "getter" variable-name = feature id = "param-get-featurecollection-featurelongclick-feature"></div> | <div block-type = "setter" variable-name = feature id = "param-set-featurecollection-featurelongclick-feature"></div> |

### FeatureStartDrag

<div block-type = "component_event" component-selector = "FeatureCollection" event-selector = "FeatureStartDrag" id = "featurecollection-featurestartdrag"></div>

The user started dragging a map feature.

| Param Name | IO Type                                  | Getter Block                                                                                                          | Setter Block                                                                                                          |
| :--------- | :--------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| feature    | <span class="component">component</span> | <div block-type = "getter" variable-name = feature id = "param-get-featurecollection-featurestartdrag-feature"></div> | <div block-type = "setter" variable-name = feature id = "param-set-featurecollection-featurestartdrag-feature"></div> |

### FeatureStopDrag

<div block-type = "component_event" component-selector = "FeatureCollection" event-selector = "FeatureStopDrag" id = "featurecollection-featurestopdrag"></div>

The user stopped dragging a map feature.

| Param Name | IO Type                                  | Getter Block                                                                                                         | Setter Block                                                                                                         |
| :--------- | :--------------------------------------- | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| feature    | <span class="component">component</span> | <div block-type = "getter" variable-name = feature id = "param-get-featurecollection-featurestopdrag-feature"></div> | <div block-type = "setter" variable-name = feature id = "param-set-featurecollection-featurestopdrag-feature"></div> |

### GotFeatures

<div block-type = "component_event" component-selector = "FeatureCollection" event-selector = "GotFeatures" id = "featurecollection-gotfeatures"></div>

A GeoJSON document was successfully read from url. The features specified in the document are provided as a list in features.

| Param Name | IO Type                        | Getter Block                                                                                                       | Setter Block                                                                                                       |
| :--------- | :----------------------------- | :----------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| url        | <span class="text">text</span> | <div block-type = "getter" variable-name = url id = "param-get-featurecollection-gotfeatures-url"></div>           | <div block-type = "setter" variable-name = url id = "param-set-featurecollection-gotfeatures-url"></div>           |
| features   | <span class="list">list</span> | <div block-type = "getter" variable-name = features id = "param-get-featurecollection-gotfeatures-features"></div> | <div block-type = "setter" variable-name = features id = "param-set-featurecollection-gotfeatures-features"></div> |

### LoadError

<div block-type = "component_event" component-selector = "FeatureCollection" event-selector = "LoadError" id = "featurecollection-loaderror"></div>

An error was encountered while processing a GeoJSON document at the given url. The responseCode parameter will contain an HTTP status code and the errorMessage parameter will contain a detailed error message.

| Param Name   | IO Type                            | Getter Block                                                                                                             | Setter Block                                                                                                             |
| :----------- | :--------------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| url          | <span class="text">text</span>     | <div block-type = "getter" variable-name = url id = "param-get-featurecollection-loaderror-url"></div>                   | <div block-type = "setter" variable-name = url id = "param-set-featurecollection-loaderror-url"></div>                   |
| responseCode | <span class="number">number</span> | <div block-type = "getter" variable-name = responseCode id = "param-get-featurecollection-loaderror-responsecode"></div> | <div block-type = "setter" variable-name = responseCode id = "param-set-featurecollection-loaderror-responsecode"></div> |
| errorMessage | <span class="text">text</span>     | <div block-type = "getter" variable-name = errorMessage id = "param-get-featurecollection-loaderror-errormessage"></div> | <div block-type = "setter" variable-name = errorMessage id = "param-set-featurecollection-loaderror-errormessage"></div> |

## Methods

---

### FeatureFromDescription

<div block-type = "component_method" component-selector = "FeatureCollection" method-selector = "FeatureFromDescription" id = "featurecollection-featurefromdescription"></div>

Return Type : <span class="any">any</span>

Converts a feature description into an App Inventor map feature. Points are converted into

| Param Name  | Input Type                     |
| :---------- | :----------------------------- |
| description | <span class="list">list</span> |

### LoadFromURL

<div block-type = "component_method" component-selector = "FeatureCollection" method-selector = "LoadFromURL" id = "featurecollection-loadfromurl"></div>

Return Type : <span class="void">Void</span>

Load a feature collection in [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) format from the given url. On success, the event GotFeatures will be raised with the given url and a list of the features parsed from the GeoJSON as a list of (key, value) pairs. On failure, the LoadError event will be raised with any applicable HTTP response code and error message.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| url        | <span class="text">text</span> |

## Block Properties

---

### Features

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "Features" property-type = "get" id = "get-featurecollection-features"></div>

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "Features" property-type = "set" id = "set-featurecollection-features"></div>

The list of features placed on this FeatureCollection. This list also includes any features created by calls to FeatureFromDescription

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Features   | <span class="list">list</span> |

### FeaturesFromGeoJSON

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "FeaturesFromGeoJSON" property-type = "set" id = "set-featurecollection-featuresfromgeojson"></div>

Loads a collection of features from the given string. If the string is not valid GeoJSON, the ErrorLoadingFeatureCollection error will be run with url = .

| Param Name          | IO Type                        |
| :------------------ | :----------------------------- |
| FeaturesFromGeoJSON | <span class="text">text</span> |

### Height

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "Height" property-type = "get" id = "get-featurecollection-height"></div>

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "Height" property-type = "set" id = "set-featurecollection-height"></div>

Specifies the vertical height of the FeatureCollection, measured in pixels.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Height     | <span class="number">number</span> |

### HeightPercent

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "HeightPercent" property-type = "set" id = "set-featurecollection-heightpercent"></div>

Specifies the vertical height of the FeatureCollection as a percentage of the height of the Screen.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| HeightPercent | <span class="number">number</span> |

### Source

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "Source" property-type = "get" id = "get-featurecollection-source"></div>

Specifies the source URL used to populate the feature collection. If the feature collection was not loaded from a URL, this will be the empty string.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Source     | <span class="text">text</span> |

### Visible

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "Visible" property-type = "get" id = "get-featurecollection-visible"></div>

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "Visible" property-type = "set" id = "set-featurecollection-visible"></div>

Specifies whether the FeatureCollection should be visible on the screen. Value is true if the FeatureCollection is showing and false if hidden.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Visible    | <span class="boolean">boolean</span> |

### Width

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "Width" property-type = "get" id = "get-featurecollection-width"></div>

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "Width" property-type = "set" id = "set-featurecollection-width"></div>

Specifies the horizontal width of the FeatureCollection, measured in pixels.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Width      | <span class="number">number</span> |

### WidthPercent

<div block-type = "component_set_get" component-selector = "FeatureCollection" property-selector = "WidthPercent" property-type = "set" id = "set-featurecollection-widthpercent"></div>

Specifies the horizontal width of the FeatureCollection as a percentage of the width of the Screen.

| Param Name   | IO Type                            |
| :----------- | :--------------------------------- |
| WidthPercent | <span class="number">number</span> |

## Component

---

### FeatureCollection

<div block-type = "component_component_block" component-selector = "FeatureCollection" id = "component-featurecollection"></div>

Component FeatureCollection.

Return Type : <span class="component">component</span>

