<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Sharing

Sharing is a non-visible component that enables sharing files and/or messages between your app and other apps installed on a device. The component will display a list of the installed apps that can handle the information provided, and will allow the user to choose one to share the content with, for instance a mail app, a social network app, a texting app, and so on.  
The file path can be taken directly from other components such as the Camera or the ImagePicker, but can also be specified directly to read from storage. Be aware that different devices treat storage differently, so a few things to try if, for instance, you have a file called arrow.gif in the folder `Appinventor/assets`, would be:

*   `"file:///sdcard/Appinventor/assets/arrow.gif"`
or*   `"/storage/Appinventor/assets/arrow.gif"`

---

## Methods

---

### ShareFile

<div block-type = "component_method" component-selector = "Sharing" method-selector = "ShareFile" id = "sharing-sharefile"></div>

Return Type : <span class="void">Void</span>

Shares a file through any capable application installed on the phone by displaying a list of the available apps and allowing the user to choose one from the list. The selected app will open with the file inserted on it.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| file       | <span class="text">text</span> |

### ShareFileWithMessage

<div block-type = "component_method" component-selector = "Sharing" method-selector = "ShareFileWithMessage" id = "sharing-sharefilewithmessage"></div>

Return Type : <span class="void">Void</span>

Shares both a file and a message through any capable application installed on the phone by displaying a list of available apps and allowing the user to choose one from the list. The selected app will open with the file and message inserted on it.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| file       | <span class="text">text</span> |
| message    | <span class="text">text</span> |

### ShareMessage

<div block-type = "component_method" component-selector = "Sharing" method-selector = "ShareMessage" id = "sharing-sharemessage"></div>

Return Type : <span class="void">Void</span>

Shares a message through any capable application installed on the phone by displaying a list of the available apps and allowing the user to choose one from the list. The selected app will open with the message inserted on it.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| message    | <span class="text">text</span> |

## Component

---

### Sharing

<div block-type = "component_component_block" component-selector = "Sharing" id = "component-sharing"></div>

Component Sharing.

Return Type : <span class="component">component</span>

