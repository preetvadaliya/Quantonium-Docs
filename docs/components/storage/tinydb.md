<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# TinyDB

TinyDB is a non-visible component that stores data for an app.

Apps created with App Inventor are initialized each time they run: If an app sets the value of a variable and the user then quits the app, the value of that variable will not be remembered the next time the app is run. In contrast, TinyDB is a _persistent_ data store for the app, that is, the data stored there will be available each time the app is run. An example might be a game that saves the high score and retrieves it each time the game is played.

Data items are strings stored under _tags_ . To store a data item, you specify the tag it should be stored under. Subsequently, you can retrieve the data that was stored under a given tag.

There is only one data store per app. Even if you have multiple TinyDB components, they will use the same data store. To get the effect of separate stores, use different keys. Also each app has its own data store. You cannot use TinyDB to pass data between two different apps on the phone, although you _can_ use TinyDb to shares data between the different screens of a multi-screen app.

When you are developing apps using the AI Companion, all the apps using that companion will share the same TinyDb. That sharing will disappear once the apps are packaged. But, during development, you should be careful to clear the TinyDb each time you start working on a new app.

---

## Designer Properties

---

### Namespace

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Namespace     | string      | TinyDB1       |

## Methods

---

### ClearAll

<div block-type = "component_method" component-selector = "TinyDB" method-selector = "ClearAll" id = "tinydb-clearall"></div>

Return Type : <span class="void">Void</span>

Clear the entire data store.

### ClearTag

<div block-type = "component_method" component-selector = "TinyDB" method-selector = "ClearTag" id = "tinydb-cleartag"></div>

Return Type : <span class="void">Void</span>

Clear the entry with the given tag.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| tag        | <span class="text">text</span> |

### GetTags

<div block-type = "component_method" component-selector = "TinyDB" method-selector = "GetTags" id = "tinydb-gettags"></div>

Return Type : <span class="any">any</span>

Return a list of all the tags in the data store.

### GetValue

<div block-type = "component_method" component-selector = "TinyDB" method-selector = "GetValue" id = "tinydb-getvalue"></div>

Return Type : <span class="any">any</span>

Retrieve the value stored under the given tag. If there's no such tag, then return valueIfTagNotThere.

| Param Name         | Input Type                     |
| :----------------- | :----------------------------- |
| tag                | <span class="text">text</span> |
| valueIfTagNotThere | <span class="any">any</span>   |

### StoreValue

<div block-type = "component_method" component-selector = "TinyDB" method-selector = "StoreValue" id = "tinydb-storevalue"></div>

Return Type : <span class="void">Void</span>

Store the given value under the given tag. The storage persists on the phone when the app is restarted.

| Param Name   | Input Type                     |
| :----------- | :----------------------------- |
| tag          | <span class="text">text</span> |
| valueToStore | <span class="any">any</span>   |

## Block Properties

---

### Namespace

<div block-type = "component_set_get" component-selector = "TinyDB" property-selector = "Namespace" property-type = "get" id = "get-tinydb-namespace"></div>

<div block-type = "component_set_get" component-selector = "TinyDB" property-selector = "Namespace" property-type = "set" id = "set-tinydb-namespace"></div>

Namespace for storing data.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Namespace  | <span class="text">text</span> |

## Component

---

### TinyDB

<div block-type = "component_component_block" component-selector = "TinyDB" id = "component-tinydb"></div>

Component TinyDB.

Return Type : <span class="component">component</span>

