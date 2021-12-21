<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Web

Non-visible component that provides functions for HTTP GET, POST, PUT, and DELETE requests.

---

## Designer Properties

---

### AllowCookies

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| AllowCookies  | boolean     | false         |

### ResponseFileName

| Property Name    | Editor Type | Default Value |
| :--------------- | :---------- | :------------ |
| ResponseFileName | string      |               |

### SaveResponse

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| SaveResponse  | boolean     | false         |

### Timeout

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| Timeout       | non_negative_integer | 0             |

### Url

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Url           | string      |               |

## Events

---

### GotFile

<div block-type = "component_event" component-selector = "Web" event-selector = "GotFile" id = "web-gotfile"></div>

Event indicating that a request has finished.

| Param Name   | IO Type                            | Getter Block                                                                                             | Setter Block                                                                                             |
| :----------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| url          | <span class="text">text</span>     | <div block-type = "getter" variable-name = url id = "param-get-web-gotfile-url"></div>                   | <div block-type = "setter" variable-name = url id = "param-set-web-gotfile-url"></div>                   |
| responseCode | <span class="number">number</span> | <div block-type = "getter" variable-name = responseCode id = "param-get-web-gotfile-responsecode"></div> | <div block-type = "setter" variable-name = responseCode id = "param-set-web-gotfile-responsecode"></div> |
| responseType | <span class="text">text</span>     | <div block-type = "getter" variable-name = responseType id = "param-get-web-gotfile-responsetype"></div> | <div block-type = "setter" variable-name = responseType id = "param-set-web-gotfile-responsetype"></div> |
| fileName     | <span class="text">text</span>     | <div block-type = "getter" variable-name = fileName id = "param-get-web-gotfile-filename"></div>         | <div block-type = "setter" variable-name = fileName id = "param-set-web-gotfile-filename"></div>         |

### GotText

<div block-type = "component_event" component-selector = "Web" event-selector = "GotText" id = "web-gottext"></div>

Event indicating that a request has finished.

| Param Name      | IO Type                            | Getter Block                                                                                                   | Setter Block                                                                                                   |
| :-------------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| url             | <span class="text">text</span>     | <div block-type = "getter" variable-name = url id = "param-get-web-gottext-url"></div>                         | <div block-type = "setter" variable-name = url id = "param-set-web-gottext-url"></div>                         |
| responseCode    | <span class="number">number</span> | <div block-type = "getter" variable-name = responseCode id = "param-get-web-gottext-responsecode"></div>       | <div block-type = "setter" variable-name = responseCode id = "param-set-web-gottext-responsecode"></div>       |
| responseType    | <span class="text">text</span>     | <div block-type = "getter" variable-name = responseType id = "param-get-web-gottext-responsetype"></div>       | <div block-type = "setter" variable-name = responseType id = "param-set-web-gottext-responsetype"></div>       |
| responseContent | <span class="text">text</span>     | <div block-type = "getter" variable-name = responseContent id = "param-get-web-gottext-responsecontent"></div> | <div block-type = "setter" variable-name = responseContent id = "param-set-web-gottext-responsecontent"></div> |

### TimedOut

<div block-type = "component_event" component-selector = "Web" event-selector = "TimedOut" id = "web-timedout"></div>

Event indicating that a request has timed out.

| Param Name | IO Type                        | Getter Block                                                                            | Setter Block                                                                            |
| :--------- | :----------------------------- | :-------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| url        | <span class="text">text</span> | <div block-type = "getter" variable-name = url id = "param-get-web-timedout-url"></div> | <div block-type = "setter" variable-name = url id = "param-set-web-timedout-url"></div> |

## Methods

---

### BuildRequestData

<div block-type = "component_method" component-selector = "Web" method-selector = "BuildRequestData" id = "web-buildrequestdata"></div>

Return Type : <span class="text">text</span>

Converts a list of two-element sublists, representing name and value pairs, to a string formatted as application/x-www-form-urlencoded media type, suitable to pass to PostText.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| list       | <span class="list">list</span> |

### ClearCookies

<div block-type = "component_method" component-selector = "Web" method-selector = "ClearCookies" id = "web-clearcookies"></div>

Return Type : <span class="void">Void</span>

Clears all cookies for this Web component.

### Delete

<div block-type = "component_method" component-selector = "Web" method-selector = "Delete" id = "web-delete"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP DELETE request using the Url property and retrieves the response. If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file. If the SaveResponse property is false, the GotText event will be triggered.

### Get

<div block-type = "component_method" component-selector = "Web" method-selector = "Get" id = "web-get"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP GET request using the Url property and retrieves the response. If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file. If the SaveResponse property is false, the GotText event will be triggered.

### HtmlTextDecode

<div block-type = "component_method" component-selector = "Web" method-selector = "HtmlTextDecode" id = "web-htmltextdecode"></div>

Return Type : <span class="text">text</span>

Decodes the given HTML text value. HTML character entities such as &amp;, &lt;, &gt;, &apos;, and &quot; are changed to &, <, >, ', and ". Entities such as &#xhhhh, and &#nnnn are changed to the appropriate characters.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| htmlText   | <span class="text">text</span> |

### JsonObjectEncode

<div block-type = "component_method" component-selector = "Web" method-selector = "JsonObjectEncode" id = "web-jsonobjectencode"></div>

Return Type : <span class="text">text</span>

Returns the value of a built-in type (i.e., boolean, number, text, list, dictionary) in its JavaScript Object Notation representation. If the value cannot be represented as JSON, the Screen's ErrorOccurred event will be run, if any, and the Web component will return the empty string.

| Param Name | Input Type                   |
| :--------- | :--------------------------- |
| jsonObject | <span class="any">any</span> |

### JsonTextDecode

<div block-type = "component_method" component-selector = "Web" method-selector = "JsonTextDecode" id = "web-jsontextdecode"></div>

Return Type : <span class="any">any</span>

Decodes the given JSON encoded value to produce a corresponding AppInventor value. A JSON list \`\[x, y, z\]\` decodes to a list \`(x y z)\`, A JSON object with key A and value B, (denoted as \`

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| jsonText   | <span class="text">text</span> |

### JsonTextDecodeWithDictionaries

<div block-type = "component_method" component-selector = "Web" method-selector = "JsonTextDecodeWithDictionaries" id = "web-jsontextdecodewithdictionaries"></div>

Return Type : <span class="any">any</span>

Decodes the given JSON encoded value to produce a corresponding App Inventor value. A JSON list \[x, y, z\] decodes to a list (x y z). A JSON Object with name A and value B, denoted as \\

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| jsonText   | <span class="text">text</span> |

### PatchFile

<div block-type = "component_method" component-selector = "Web" method-selector = "PatchFile" id = "web-patchfile"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP PATCH request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| path       | <span class="text">text</span> |

### PatchText

<div block-type = "component_method" component-selector = "Web" method-selector = "PatchText" id = "web-patchtext"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP PATCH request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |

### PatchTextWithEncoding

<div block-type = "component_method" component-selector = "Web" method-selector = "PatchTextWithEncoding" id = "web-patchtextwithencoding"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP PATCH request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |
| encoding   | <span class="text">text</span> |

### PostFile

<div block-type = "component_method" component-selector = "Web" method-selector = "PostFile" id = "web-postfile"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP POST request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| path       | <span class="text">text</span> |

### PostText

<div block-type = "component_method" component-selector = "Web" method-selector = "PostText" id = "web-posttext"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |

### PostTextWithEncoding

<div block-type = "component_method" component-selector = "Web" method-selector = "PostTextWithEncoding" id = "web-posttextwithencoding"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP POST request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |
| encoding   | <span class="text">text</span> |

### PutFile

<div block-type = "component_method" component-selector = "Web" method-selector = "PutFile" id = "web-putfile"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP PUT request using the Url property and data from the specified file.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| path       | <span class="text">text</span> |

### PutText

<div block-type = "component_method" component-selector = "Web" method-selector = "PutText" id = "web-puttext"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using UTF-8 encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The responseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |

### PutTextWithEncoding

<div block-type = "component_method" component-selector = "Web" method-selector = "PutTextWithEncoding" id = "web-puttextwithencoding"></div>

Return Type : <span class="void">Void</span>

Performs an HTTP PUT request using the Url property and the specified text.  
The characters of the text are encoded using the given encoding.  
If the SaveResponse property is true, the response will be saved in a file and the GotFile event will be triggered. The ResponseFileName property can be used to specify the name of the file.  
If the SaveResponse property is false, the GotText event will be triggered.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |
| encoding   | <span class="text">text</span> |

### UriDecode

<div block-type = "component_method" component-selector = "Web" method-selector = "UriDecode" id = "web-uridecode"></div>

Return Type : <span class="text">text</span>

Decodes the encoded text value so that the values aren't URL encoded anymore.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |

### UriEncode

<div block-type = "component_method" component-selector = "Web" method-selector = "UriEncode" id = "web-uriencode"></div>

Return Type : <span class="text">text</span>

Encodes the given text value so that it can be used in a URL.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |

### XMLTextDecode

<div block-type = "component_method" component-selector = "Web" method-selector = "XMLTextDecode" id = "web-xmltextdecode"></div>

Return Type : <span class="any">any</span>

Decodes the given XML string to produce a dictionary structure. See the App Inventor documentation on "Other topics, notes, and details" for information.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| XmlText    | <span class="text">text</span> |

### XMLTextDecodeAsDictionary

<div block-type = "component_method" component-selector = "Web" method-selector = "XMLTextDecodeAsDictionary" id = "web-xmltextdecodeasdictionary"></div>

Return Type : <span class="any">any</span>

Decodes the given XML into a set of nested dictionaries that capture the structure and data contained in the XML. See the help for more details.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| XmlText    | <span class="text">text</span> |

## Block Properties

---

### AllowCookies

<div block-type = "component_set_get" component-selector = "Web" property-selector = "AllowCookies" property-type = "get" id = "get-web-allowcookies"></div>

<div block-type = "component_set_get" component-selector = "Web" property-selector = "AllowCookies" property-type = "set" id = "set-web-allowcookies"></div>

Whether the cookies from a response should be saved and used in subsequent requests. Cookies are only supported on Android version 2.3 or greater.

| Param Name   | IO Type                              |
| :----------- | :----------------------------------- |
| AllowCookies | <span class="boolean">boolean</span> |

### RequestHeaders

<div block-type = "component_set_get" component-selector = "Web" property-selector = "RequestHeaders" property-type = "get" id = "get-web-requestheaders"></div>

<div block-type = "component_set_get" component-selector = "Web" property-selector = "RequestHeaders" property-type = "set" id = "set-web-requestheaders"></div>

The request headers, as a list of two-element sublists. The first element of each sublist represents the request header field name. The second element of each sublist represents the request header field values, either a single value or a list containing multiple values.

| Param Name     | IO Type                        |
| :------------- | :----------------------------- |
| RequestHeaders | <span class="list">list</span> |

### ResponseFileName

<div block-type = "component_set_get" component-selector = "Web" property-selector = "ResponseFileName" property-type = "get" id = "get-web-responsefilename"></div>

<div block-type = "component_set_get" component-selector = "Web" property-selector = "ResponseFileName" property-type = "set" id = "set-web-responsefilename"></div>

The name of the file where the response should be saved. If SaveResponse is true and ResponseFileName is empty, then a new file name will be generated.

| Param Name       | IO Type                        |
| :--------------- | :----------------------------- |
| ResponseFileName | <span class="text">text</span> |

### SaveResponse

<div block-type = "component_set_get" component-selector = "Web" property-selector = "SaveResponse" property-type = "get" id = "get-web-saveresponse"></div>

<div block-type = "component_set_get" component-selector = "Web" property-selector = "SaveResponse" property-type = "set" id = "set-web-saveresponse"></div>

Whether the response should be saved in a file.

| Param Name   | IO Type                              |
| :----------- | :----------------------------------- |
| SaveResponse | <span class="boolean">boolean</span> |

### Timeout

<div block-type = "component_set_get" component-selector = "Web" property-selector = "Timeout" property-type = "get" id = "get-web-timeout"></div>

<div block-type = "component_set_get" component-selector = "Web" property-selector = "Timeout" property-type = "set" id = "set-web-timeout"></div>

The number of milliseconds that a web request will wait for a response before giving up. If set to 0, then there is no time limit on how long the request will wait.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Timeout    | <span class="number">number</span> |

### Url

<div block-type = "component_set_get" component-selector = "Web" property-selector = "Url" property-type = "get" id = "get-web-url"></div>

<div block-type = "component_set_get" component-selector = "Web" property-selector = "Url" property-type = "set" id = "set-web-url"></div>

The URL for the web request.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Url        | <span class="text">text</span> |

## Component

---

### Web

<div block-type = "component_component_block" component-selector = "Web" id = "component-web"></div>

Component Web.

Return Type : <span class="component">component</span>

