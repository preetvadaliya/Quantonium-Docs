<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# WebViewer

Component for viewing Web pages. The Home URL can be specified in the Designer or in the Blocks Editor. The view can be set to follow links when they are tapped, and users can fill in Web forms. Warning: This is not a full browser. For example, pressing the phone's hardware Back key will exit the app, rather than move back in the browser history.

You can use the WebViewer.WebViewString property to communicate between your app and Javascript code running in the Webviewer page. In the app, you get and set WebViewString. In the WebViewer, you include Javascript that references the window.AppInventor object, using the methoods and _setWebViewString(text)_.

For example, if the WebViewer opens to a page that contains the Javascript command  
_document.write("The answer is" + window.AppInventor.getWebViewString());_  
and if you set WebView.WebVewString to "hello", then the web page will show  
_The answer is hello_.  
And if the Web page contains Javascript that executes the command  
_window.AppInventor.setWebViewString("hello from Javascript")_,  
then the value of the WebViewString property will be  
_hello from Javascript_.

---

## Designer Properties

---

### FollowLinks

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| FollowLinks   | boolean     | True          |

### HomeUrl

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| HomeUrl       | string      |               |

### IgnoreSslErrors

| Property Name   | Editor Type | Default Value |
| :-------------- | :---------- | :------------ |
| IgnoreSslErrors | boolean     | False         |

### PromptforPermission

| Property Name       | Editor Type | Default Value |
| :------------------ | :---------- | :------------ |
| PromptforPermission | boolean     | True          |

### UsesLocation

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| UsesLocation  | boolean     | False         |

### Visible

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Visible       | visibility  | True          |

## Events

---

### BeforePageLoad

<div block-type = "component_event" component-selector = "WebViewer" event-selector = "BeforePageLoad" id = "webviewer-beforepageload"></div>

When a page is about to load this event is run.

| Param Name | IO Type                        | Getter Block                                                                                        | Setter Block                                                                                        |
| :--------- | :----------------------------- | :-------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| url        | <span class="text">text</span> | <div block-type = "getter" variable-name = url id = "param-get-webviewer-beforepageload-url"></div> | <div block-type = "setter" variable-name = url id = "param-set-webviewer-beforepageload-url"></div> |

### ErrorOccurred

<div block-type = "component_event" component-selector = "WebViewer" event-selector = "ErrorOccurred" id = "webviewer-erroroccurred"></div>

When an error occurs this event is run.

| Param Name  | IO Type                            | Getter Block                                                                                                       | Setter Block                                                                                                       |
| :---------- | :--------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| errorCode   | <span class="number">number</span> | <div block-type = "getter" variable-name = errorCode id = "param-get-webviewer-erroroccurred-errorcode"></div>     | <div block-type = "setter" variable-name = errorCode id = "param-set-webviewer-erroroccurred-errorcode"></div>     |
| description | <span class="text">text</span>     | <div block-type = "getter" variable-name = description id = "param-get-webviewer-erroroccurred-description"></div> | <div block-type = "setter" variable-name = description id = "param-set-webviewer-erroroccurred-description"></div> |
| failingUrl  | <span class="text">text</span>     | <div block-type = "getter" variable-name = failingUrl id = "param-get-webviewer-erroroccurred-failingurl"></div>   | <div block-type = "setter" variable-name = failingUrl id = "param-set-webviewer-erroroccurred-failingurl"></div>   |

### PageLoaded

<div block-type = "component_event" component-selector = "WebViewer" event-selector = "PageLoaded" id = "webviewer-pageloaded"></div>

When a page is finished loading this event is run.

| Param Name | IO Type                        | Getter Block                                                                                    | Setter Block                                                                                    |
| :--------- | :----------------------------- | :---------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| url        | <span class="text">text</span> | <div block-type = "getter" variable-name = url id = "param-get-webviewer-pageloaded-url"></div> | <div block-type = "setter" variable-name = url id = "param-set-webviewer-pageloaded-url"></div> |

### WebViewStringChange

<div block-type = "component_event" component-selector = "WebViewer" event-selector = "WebViewStringChange" id = "webviewer-webviewstringchange"></div>

When the JavaScript calls AppInventor.setWebViewString this event is run.

| Param Name | IO Type                        | Getter Block                                                                                                 | Setter Block                                                                                                 |
| :--------- | :----------------------------- | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| value      | <span class="text">text</span> | <div block-type = "getter" variable-name = value id = "param-get-webviewer-webviewstringchange-value"></div> | <div block-type = "setter" variable-name = value id = "param-set-webviewer-webviewstringchange-value"></div> |

## Methods

---

### CanGoBack

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "CanGoBack" id = "webviewer-cangoback"></div>

Return Type : <span class="boolean">boolean</span>

Returns true if the WebViewer can go back in the history list.

### CanGoForward

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "CanGoForward" id = "webviewer-cangoforward"></div>

Return Type : <span class="boolean">boolean</span>

Returns true if the WebViewer can go forward in the history list.

### ClearCaches

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "ClearCaches" id = "webviewer-clearcaches"></div>

Return Type : <span class="void">Void</span>

Clear WebView caches.

### ClearCookies

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "ClearCookies" id = "webviewer-clearcookies"></div>

Return Type : <span class="void">Void</span>

Clear WebView cookies.

### ClearLocations

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "ClearLocations" id = "webviewer-clearlocations"></div>

Return Type : <span class="void">Void</span>

Clear stored location permissions.

### GoBack

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "GoBack" id = "webviewer-goback"></div>

Return Type : <span class="void">Void</span>

Go back to the previous page in the history list. Does nothing if there is no previous page.

### GoForward

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "GoForward" id = "webviewer-goforward"></div>

Return Type : <span class="void">Void</span>

Go forward to the next page in the history list. Does nothing if there is no next page.

### GoHome

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "GoHome" id = "webviewer-gohome"></div>

Return Type : <span class="void">Void</span>

Loads the home URL page. This happens automatically when the home URL is changed.

### GoToUrl

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "GoToUrl" id = "webviewer-gotourl"></div>

Return Type : <span class="void">Void</span>

Load the page at the given URL.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| url        | <span class="text">text</span> |

### Reload

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "Reload" id = "webviewer-reload"></div>

Return Type : <span class="void">Void</span>

Reload the current page.

### RunJavaScript

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "RunJavaScript" id = "webviewer-runjavascript"></div>

Return Type : <span class="void">Void</span>

Run JavaScript in the current page.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| js         | <span class="text">text</span> |

### StopLoading

<div block-type = "component_method" component-selector = "WebViewer" method-selector = "StopLoading" id = "webviewer-stoploading"></div>

Return Type : <span class="void">Void</span>

Stop loading a page.

## Block Properties

---

### CurrentPageTitle

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "CurrentPageTitle" property-type = "get" id = "get-webviewer-currentpagetitle"></div>

Title of the page currently viewed

| Param Name       | IO Type                        |
| :--------------- | :----------------------------- |
| CurrentPageTitle | <span class="text">text</span> |

### CurrentUrl

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "CurrentUrl" property-type = "get" id = "get-webviewer-currenturl"></div>

URL of the page currently viewed. This could be different from the Home URL if new pages were visited by following links.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| CurrentUrl | <span class="text">text</span> |

### FollowLinks

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "FollowLinks" property-type = "get" id = "get-webviewer-followlinks"></div>

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "FollowLinks" property-type = "set" id = "set-webviewer-followlinks"></div>

Determines whether to follow links when they are tapped in the WebViewer. If you follow links, you can use GoBack and GoForward to navigate the browser history.

| Param Name  | IO Type                              |
| :---------- | :----------------------------------- |
| FollowLinks | <span class="boolean">boolean</span> |

### Height

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "Height" property-type = "get" id = "get-webviewer-height"></div>

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "Height" property-type = "set" id = "set-webviewer-height"></div>

Specifies the \`WebViewer\`'s vertical height, measured in pixels.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Height     | <span class="number">number</span> |

### HeightPercent

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "HeightPercent" property-type = "set" id = "set-webviewer-heightpercent"></div>

Specifies the vertical height of the WebViewer as a percentage of the height of the Screen.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| HeightPercent | <span class="number">number</span> |

### HomeUrl

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "HomeUrl" property-type = "get" id = "get-webviewer-homeurl"></div>

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "HomeUrl" property-type = "set" id = "set-webviewer-homeurl"></div>

URL of the page the WebViewer should initially open to. Setting this will load the page.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| HomeUrl    | <span class="text">text</span> |

### IgnoreSslErrors

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "IgnoreSslErrors" property-type = "get" id = "get-webviewer-ignoresslerrors"></div>

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "IgnoreSslErrors" property-type = "set" id = "set-webviewer-ignoresslerrors"></div>

Determine whether or not to ignore SSL errors. Set to true to ignore errors. Use this to accept self signed certificates from websites.

| Param Name      | IO Type                              |
| :-------------- | :----------------------------------- |
| IgnoreSslErrors | <span class="boolean">boolean</span> |

### PromptforPermission

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "PromptforPermission" property-type = "get" id = "get-webviewer-promptforpermission"></div>

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "PromptforPermission" property-type = "set" id = "set-webviewer-promptforpermission"></div>

If True, then prompt the user of the WebView to give permission to access the geolocation API. If False, then assume permission is granted.

| Param Name          | IO Type                              |
| :------------------ | :----------------------------------- |
| PromptforPermission | <span class="boolean">boolean</span> |

### Visible

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "Visible" property-type = "get" id = "get-webviewer-visible"></div>

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "Visible" property-type = "set" id = "set-webviewer-visible"></div>

Specifies whether the WebViewer should be visible on the screen. Value is true if the WebViewer is showing and false if hidden.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Visible    | <span class="boolean">boolean</span> |

### WebViewString

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "WebViewString" property-type = "get" id = "get-webviewer-webviewstring"></div>

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "WebViewString" property-type = "set" id = "set-webviewer-webviewstring"></div>

Gets the WebView's String, which is viewable through Javascript in the WebView as the window.AppInventor object

| Param Name    | IO Type                        |
| :------------ | :----------------------------- |
| WebViewString | <span class="text">text</span> |

### Width

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "Width" property-type = "get" id = "get-webviewer-width"></div>

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "Width" property-type = "set" id = "set-webviewer-width"></div>

Specifies the horizontal width of the \`WebViewer\`, measured in pixels.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Width      | <span class="number">number</span> |

### WidthPercent

<div block-type = "component_set_get" component-selector = "WebViewer" property-selector = "WidthPercent" property-type = "set" id = "set-webviewer-widthpercent"></div>

Specifies the horizontal width of the WebViewer as a percentage of the width of the Screen.

| Param Name   | IO Type                            |
| :----------- | :--------------------------------- |
| WidthPercent | <span class="number">number</span> |

## Component

---

### WebViewer

<div block-type = "component_component_block" component-selector = "WebViewer" id = "component-webviewer"></div>

Component WebViewer.

Return Type : <span class="component">component</span>

