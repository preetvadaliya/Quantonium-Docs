<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# ListView

This is a visible component that displays a list of text and image elements.

Simple lists of strings may be set using the ElementsFromString property. More complex lists of elements containing multiple strings and/or images can be created using the ListData and ListViewLayout properties.

---

## Designer Properties

---

### BackgroundColor

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| BackgroundColor | color       | &HFF000000    |

### ElementsFromString

| Property Name      | Editor Type | Default Value |
| :----------------- | :---------- | :------------ |
| ElementsFromString | textArea    |               |

### FontSizeDetail

| Property Name  | Editor Type        | Default Value |
| :------------- | :----------------- | :------------ |
| FontSizeDetail | non_negative_float | 14.0          |

### FontTypeface

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| FontTypeface  | typeface    | 0             |

### FontTypefaceDetail

| Property Name      | Editor Type | Default Value |
| :----------------- | :---------- | :------------ |
| FontTypefaceDetail | typeface    | 0             |

### ImageHeight

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| ImageHeight   | non_negative_integer | 200           |

### ImageWidth

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| ImageWidth    | non_negative_integer | 200           |

### ListData

| Property Name | Editor Type     | Default Value |
| :------------ | :-------------- | :------------ |
| ListData      | ListViewAddData |               |

### ListViewLayout

| Property Name  | Editor Type    | Default Value |
| :------------- | :------------- | :------------ |
| ListViewLayout | ListViewLayout | 0             |

### Orientation

| Property Name | Editor Type              | Default Value |
| :------------ | :----------------------- | :------------ |
| Orientation   | recyclerview_orientation | 0             |

### Selection

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Selection     | string      |               |

### SelectionColor

| Property Name  | Editor Type | Default Value |
| :------------- | :---------- | :------------ |
| SelectionColor | color       | &HFFCCCCCC    |

### ShowFilterBar

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ShowFilterBar | boolean     | False         |

### TextColor

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| TextColor     | color       | &HFFFFFFFF    |

### TextColorDetail

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| TextColorDetail | color       | &HFFFFFFFF    |

### TextSize

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| TextSize      | non_negative_integer | 22            |

### Visible

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Visible       | visibility  | True          |

## Events

---

### AfterPicking

<div block-type = "component_event" component-selector = "ListView" event-selector = "AfterPicking" id = "listview-afterpicking"></div>

Simple event to be raised after the an element has been chosen in the list. The selected element is available in the Selection property.

## Methods

---

### CreateElement

<div block-type = "component_method" component-selector = "ListView" method-selector = "CreateElement" id = "listview-createelement"></div>

Return Type : <span class="dictionary">dictionary</span>

Create a ListView entry. MainText is required. DetailText and ImageName are optional.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| mainText   | <span class="text">text</span> |
| detailText | <span class="text">text</span> |
| imageName  | <span class="text">text</span> |

### GetDetailText

<div block-type = "component_method" component-selector = "ListView" method-selector = "GetDetailText" id = "listview-getdetailtext"></div>

Return Type : <span class="text">text</span>

Get the Detail Text of a ListView element.

| Param Name  | Input Type                                 |
| :---------- | :----------------------------------------- |
| listElement | <span class="dictionary">dictionary</span> |

### GetImageName

<div block-type = "component_method" component-selector = "ListView" method-selector = "GetImageName" id = "listview-getimagename"></div>

Return Type : <span class="text">text</span>

Get the filename of the image of a ListView element that has been uploaded to Media.

| Param Name  | Input Type                                 |
| :---------- | :----------------------------------------- |
| listElement | <span class="dictionary">dictionary</span> |

### GetMainText

<div block-type = "component_method" component-selector = "ListView" method-selector = "GetMainText" id = "listview-getmaintext"></div>

Return Type : <span class="text">text</span>

Get the Main Text of a ListView element.

| Param Name  | Input Type                                 |
| :---------- | :----------------------------------------- |
| listElement | <span class="dictionary">dictionary</span> |

### Refresh

<div block-type = "component_method" component-selector = "ListView" method-selector = "Refresh" id = "listview-refresh"></div>

Return Type : <span class="void">Void</span>

Reload the ListView to reflect any changes in the data.

## Block Properties

---

### BackgroundColor

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "BackgroundColor" property-type = "get" id = "get-listview-backgroundcolor"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "BackgroundColor" property-type = "set" id = "set-listview-backgroundcolor"></div>

The color of the listview background.

| Param Name      | IO Type                            |
| :-------------- | :--------------------------------- |
| BackgroundColor | <span class="number">number</span> |

### Elements

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Elements" property-type = "get" id = "get-listview-elements"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Elements" property-type = "set" id = "set-listview-elements"></div>

List of elements to show in the ListView. Depending on the ListView, this may be a list of strings or a list of 3-element sub-lists containing Text, Description, and Image file name.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Elements   | <span class="list">list</span> |

### ElementsFromString

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "ElementsFromString" property-type = "set" id = "set-listview-elementsfromstring"></div>

The TextView elements specified as a string with the stringItems separated by commas such as: Cheese,Fruit,Bacon,Radish. Each word before the comma will be an element in the list.

| Param Name         | IO Type                        |
| :----------------- | :----------------------------- |
| ElementsFromString | <span class="text">text</span> |

### FontSizeDetail

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "FontSizeDetail" property-type = "get" id = "get-listview-fontsizedetail"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "FontSizeDetail" property-type = "set" id = "set-listview-fontsizedetail"></div>

The text size of the listview stringItems.

| Param Name     | IO Type                            |
| :------------- | :--------------------------------- |
| FontSizeDetail | <span class="number">number</span> |

### Height

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Height" property-type = "get" id = "get-listview-height"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Height" property-type = "set" id = "set-listview-height"></div>

Determines the height of the list on the view.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Height     | <span class="number">number</span> |

### HeightPercent

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "HeightPercent" property-type = "set" id = "set-listview-heightpercent"></div>

Specifies the vertical height of the ListView as a percentage of the height of the Screen.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| HeightPercent | <span class="number">number</span> |

### ImageHeight

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "ImageHeight" property-type = "get" id = "get-listview-imageheight"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "ImageHeight" property-type = "set" id = "set-listview-imageheight"></div>

The image height of the listview image stringItems.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| ImageHeight | <span class="number">number</span> |

### ImageWidth

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "ImageWidth" property-type = "get" id = "get-listview-imagewidth"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "ImageWidth" property-type = "set" id = "set-listview-imagewidth"></div>

The image width of the listview image.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| ImageWidth | <span class="number">number</span> |

### Orientation

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Orientation" property-type = "get" id = "get-listview-orientation"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Orientation" property-type = "set" id = "set-listview-orientation"></div>

Returns the style of the button.

| Param Name  | IO Type                            |
| :---------- | :--------------------------------- |
| Orientation | <span class="number">number</span> |

### Selection

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Selection" property-type = "get" id = "get-listview-selection"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Selection" property-type = "set" id = "set-listview-selection"></div>

Returns the text last selected in the ListView.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Selection  | <span class="text">text</span> |

### SelectionColor

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "SelectionColor" property-type = "get" id = "get-listview-selectioncolor"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "SelectionColor" property-type = "set" id = "set-listview-selectioncolor"></div>

The color of the item when it is selected.

| Param Name     | IO Type                            |
| :------------- | :--------------------------------- |
| SelectionColor | <span class="number">number</span> |

### SelectionDetailText

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "SelectionDetailText" property-type = "get" id = "get-listview-selectiondetailtext"></div>

Returns the secondary text of the selected row in the ListView.

| Param Name          | IO Type                        |
| :------------------ | :----------------------------- |
| SelectionDetailText | <span class="text">text</span> |

### SelectionIndex

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "SelectionIndex" property-type = "get" id = "get-listview-selectionindex"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "SelectionIndex" property-type = "set" id = "set-listview-selectionindex"></div>

The index of the currently selected item, starting at 1. If no item is selected, the value will be 0. If an attempt is made to set this to a number less than 1 or greater than the number of stringItems in the ListView, SelectionIndex will be set to 0, and Selection will be set to the empty text.

| Param Name     | IO Type                            |
| :------------- | :--------------------------------- |
| SelectionIndex | <span class="number">number</span> |

### ShowFilterBar

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "ShowFilterBar" property-type = "get" id = "get-listview-showfilterbar"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "ShowFilterBar" property-type = "set" id = "set-listview-showfilterbar"></div>

Sets visibility of ShowFilterBar. True will show the bar, False will hide it.

| Param Name    | IO Type                              |
| :------------ | :----------------------------------- |
| ShowFilterBar | <span class="boolean">boolean</span> |

### TextColor

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "TextColor" property-type = "get" id = "get-listview-textcolor"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "TextColor" property-type = "set" id = "set-listview-textcolor"></div>

The text color of the listview stringItems.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| TextColor  | <span class="number">number</span> |

### TextColorDetail

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "TextColorDetail" property-type = "get" id = "get-listview-textcolordetail"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "TextColorDetail" property-type = "set" id = "set-listview-textcolordetail"></div>

The text color of DetailText of listview stringItems.

| Param Name      | IO Type                            |
| :-------------- | :--------------------------------- |
| TextColorDetail | <span class="number">number</span> |

### TextSize

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "TextSize" property-type = "get" id = "get-listview-textsize"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "TextSize" property-type = "set" id = "set-listview-textsize"></div>

The text size of the listview items.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| TextSize   | <span class="number">number</span> |

### Visible

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Visible" property-type = "get" id = "get-listview-visible"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Visible" property-type = "set" id = "set-listview-visible"></div>

Specifies whether the ListView should be visible on the screen. Value is true if the ListView is showing and false if hidden.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Visible    | <span class="boolean">boolean</span> |

### Width

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Width" property-type = "get" id = "get-listview-width"></div>

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "Width" property-type = "set" id = "set-listview-width"></div>

Determines the width of the list on the view.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Width      | <span class="number">number</span> |

### WidthPercent

<div block-type = "component_set_get" component-selector = "ListView" property-selector = "WidthPercent" property-type = "set" id = "set-listview-widthpercent"></div>

Specifies the horizontal width of the ListView as a percentage of the width of the Screen.

| Param Name   | IO Type                            |
| :----------- | :--------------------------------- |
| WidthPercent | <span class="number">number</span> |

## Component

---

### ListView

<div block-type = "component_component_block" component-selector = "ListView" id = "component-listview"></div>

Component ListView.

Return Type : <span class="component">component</span>

