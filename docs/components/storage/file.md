<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# File

Non-visible component for storing and retrieving files. Use this component to write or read files on your device. The default behaviour is to write files to the private data directory associated with your App. The Companion is special cased to write files to a public directory for debugging. Use the More information link to read more about how the File component uses paths and scopes to manage access to files.

---

## Designer Properties

---

### DefaultScope

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| DefaultScope  | file_scope  | App           |

### ReadPermission

| Property Name  | Editor Type | Default Value |
| :------------- | :---------- | :------------ |
| ReadPermission | boolean     | False         |

### WritePermission

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| WritePermission | boolean     | False         |

## Events

---

### AfterFileSaved

<div block-type = "component_event" component-selector = "File" event-selector = "AfterFileSaved" id = "file-afterfilesaved"></div>

Event indicating that the contents of the file have been written.

| Param Name | IO Type                        | Getter Block                                                                                             | Setter Block                                                                                             |
| :--------- | :----------------------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| fileName   | <span class="text">text</span> | <div block-type = "getter" variable-name = fileName id = "param-get-file-afterfilesaved-filename"></div> | <div block-type = "setter" variable-name = fileName id = "param-set-file-afterfilesaved-filename"></div> |

### GotText

<div block-type = "component_event" component-selector = "File" event-selector = "GotText" id = "file-gottext"></div>

Event indicating that the contents from the file have been read.

| Param Name | IO Type                        | Getter Block                                                                              | Setter Block                                                                              |
| :--------- | :----------------------------- | :---------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| text       | <span class="text">text</span> | <div block-type = "getter" variable-name = text id = "param-get-file-gottext-text"></div> | <div block-type = "setter" variable-name = text id = "param-set-file-gottext-text"></div> |

## Methods

---

### AppendToFile

<div block-type = "component_method" component-selector = "File" method-selector = "AppendToFile" id = "file-appendtofile"></div>

Return Type : <span class="void">Void</span>

Appends text to the end of a file storage, creating the file if it does not exist. See the help text under SaveFile for information about where files are written.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |
| fileName   | <span class="text">text</span> |

### CopyFile

<div block-type = "component_method" component-selector = "File" method-selector = "CopyFile" id = "file-copyfile"></div>

Return Type : <span class="boolean">boolean</span>

Copy the contents from the first file to the second file.

| Param Name   | Input Type                                                                                                                         |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| fromScope    | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| fromFileName | <span class="text">text</span>                                                                                                     |
| toScope      | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| toFileName   | <span class="text">text</span>                                                                                                     |

### Delete

<div block-type = "component_method" component-selector = "File" method-selector = "Delete" id = "file-delete"></div>

Return Type : <span class="void">Void</span>

Deletes a file from storage. Prefix the filename with / to delete a specific file in the SD card, for instance /myFile.txt. will delete the file /sdcard/myFile.txt. If the file does not begin with a /, then the file located in the programs private storage will be deleted. Starting the file with // is an error because assets files cannot be deleted.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| fileName   | <span class="text">text</span> |

### Exists

<div block-type = "component_method" component-selector = "File" method-selector = "Exists" id = "file-exists"></div>

Return Type : <span class="boolean">boolean</span>

Tests whether the path exists in the given scope.

| Param Name | Input Type                                                                                                                         |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| scope      | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| path       | <span class="text">text</span>                                                                                                     |

### IsDirectory

<div block-type = "component_method" component-selector = "File" method-selector = "IsDirectory" id = "file-isdirectory"></div>

Return Type : <span class="boolean">boolean</span>

Tests whether the path named in the given scope is a directory.

| Param Name | Input Type                                                                                                                         |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| scope      | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| path       | <span class="text">text</span>                                                                                                     |

### ListDirectory

<div block-type = "component_method" component-selector = "File" method-selector = "ListDirectory" id = "file-listdirectory"></div>

Return Type : <span class="list">list</span>

Get a list of files and directories in the given directory.

| Param Name    | Input Type                                                                                                                         |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| scope         | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| directoryName | <span class="text">text</span>                                                                                                     |

### MakeDirectory

<div block-type = "component_method" component-selector = "File" method-selector = "MakeDirectory" id = "file-makedirectory"></div>

Return Type : <span class="boolean">boolean</span>

Create a new directory for storing files. The semantics of this method are such that it will return true if the directory exists at its completion. This can mean that the directory already existed prior to the call.

| Param Name    | Input Type                                                                                                                         |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| scope         | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| directoryName | <span class="text">text</span>                                                                                                     |

### MakeFullPath

<div block-type = "component_method" component-selector = "File" method-selector = "MakeFullPath" id = "file-makefullpath"></div>

Return Type : <span class="text">text</span>

Converts the scope and path into a single string for other components.

| Param Name | Input Type                                                                                                                         |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| scope      | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| path       | <span class="text">text</span>                                                                                                     |

### MoveFile

<div block-type = "component_method" component-selector = "File" method-selector = "MoveFile" id = "file-movefile"></div>

Return Type : <span class="boolean">boolean</span>

Move a file from one location to another.

| Param Name   | Input Type                                                                                                                         |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| fromScope    | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| fromFileName | <span class="text">text</span>                                                                                                     |
| toScope      | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| toFileName   | <span class="text">text</span>                                                                                                     |

### ReadFrom

<div block-type = "component_method" component-selector = "File" method-selector = "ReadFrom" id = "file-readfrom"></div>

Return Type : <span class="void">Void</span>

Reads text from a file in storage. Prefix the filename with / to read from a specific file on the SD card. for instance /myFile.txt will read the file /sdcard/myFile.txt. To read assets packaged with an application (also works for the Companion) start the filename with // (two slashes). If a filename does not start with a slash, it will be read from the applications private storage (for packaged apps) and from /sdcard/AppInventor/data for the Companion.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| fileName   | <span class="text">text</span> |

### RemoveDirectory

<div block-type = "component_method" component-selector = "File" method-selector = "RemoveDirectory" id = "file-removedirectory"></div>

Return Type : <span class="boolean">boolean</span>

Remove a directory from the file system. If recursive is true, then everything is removed. If recursive is false, only the directory is removed and only if it is empty.

| Param Name    | Input Type                                                                                                                         |
| :------------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| scope         | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |
| directoryName | <span class="text">text</span>                                                                                                     |
| recursive     | <span class="boolean">boolean</span>                                                                                               |

### SaveFile

<div block-type = "component_method" component-selector = "File" method-selector = "SaveFile" id = "file-savefile"></div>

Return Type : <span class="void">Void</span>

Saves text to a file. If the filename begins with a slash (/) the file is written to the sdcard. For example writing to /myFile.txt will write the file to /sdcard/myFile.txt. If the filename does not start with a slash, it will be written in the programs private data directory where it will not be accessible to other programs on the phone. There is a special exception for the AI Companion where these files are written to /sdcard/AppInventor/data to facilitate debugging. Note that this block will overwrite a file if it already exists. If you want to add content to a file use the append block.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |
| fileName   | <span class="text">text</span> |

## Block Properties

---

### Scope

<div block-type = "component_set_get" component-selector = "File" property-selector = "Scope" property-type = "get" id = "get-file-scope"></div>

<div block-type = "component_set_get" component-selector = "File" property-selector = "Scope" property-type = "set" id = "set-file-scope"></div>

Indicates the current scope for operations such as ReadFrom and SaveFile.

| Param Name | IO Type                                                                                                                            |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| Scope      | <span class="com.google.appinventor.components.common.FileScopeEnum">com.google.appinventor.components.common.FileScopeEnum</span> |

### Scope Options

| Name    | Description        | Block                                                                                                |
| :------ | :----------------- | :--------------------------------------------------------------------------------------------------- |
| App     | Option for App     | <div block-type = "helper" helper-name = "FileScope App" id = "helper-file-scope-app"></div>         |
| Asset   | Option for Asset   | <div block-type = "helper" helper-name = "FileScope Asset" id = "helper-file-scope-asset"></div>     |
| Cache   | Option for Cache   | <div block-type = "helper" helper-name = "FileScope Cache" id = "helper-file-scope-cache"></div>     |
| Legacy  | Option for Legacy  | <div block-type = "helper" helper-name = "FileScope Legacy" id = "helper-file-scope-legacy"></div>   |
| Private | Option for Private | <div block-type = "helper" helper-name = "FileScope Private" id = "helper-file-scope-private"></div> |
| Shared  | Option for Shared  | <div block-type = "helper" helper-name = "FileScope Shared" id = "helper-file-scope-shared"></div>   |

## Component

---

### File

<div block-type = "component_component_block" component-selector = "File" id = "component-file"></div>

Component File.

Return Type : <span class="component">component</span>

