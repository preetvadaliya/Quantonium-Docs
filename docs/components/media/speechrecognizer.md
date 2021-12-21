<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# SpeechRecognizer

Component for using Voice Recognition to convert from speech to text

---

## Designer Properties

---

### UseLegacy

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| UseLegacy     | boolean     | True          |

## Events

---

### AfterGettingText

<div block-type = "component_event" component-selector = "SpeechRecognizer" event-selector = "AfterGettingText" id = "speechrecognizer-aftergettingtext"></div>

Simple event to raise after the SpeechRecognizer has recognized speech. If

| Param Name | IO Type                              | Getter Block                                                                                                         | Setter Block                                                                                                         |
| :--------- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| result     | <span class="text">text</span>       | <div block-type = "getter" variable-name = result id = "param-get-speechrecognizer-aftergettingtext-result"></div>   | <div block-type = "setter" variable-name = result id = "param-set-speechrecognizer-aftergettingtext-result"></div>   |
| partial    | <span class="boolean">boolean</span> | <div block-type = "getter" variable-name = partial id = "param-get-speechrecognizer-aftergettingtext-partial"></div> | <div block-type = "setter" variable-name = partial id = "param-set-speechrecognizer-aftergettingtext-partial"></div> |

### BeforeGettingText

<div block-type = "component_event" component-selector = "SpeechRecognizer" event-selector = "BeforeGettingText" id = "speechrecognizer-beforegettingtext"></div>

Simple event to raise when the \`SpeechRecognizer\` is invoked but before its activity is started.

## Methods

---

### GetText

<div block-type = "component_method" component-selector = "SpeechRecognizer" method-selector = "GetText" id = "speechrecognizer-gettext"></div>

Return Type : <span class="void">Void</span>

Asks the user to speak, and converts the speech to text. Signals the

### Stop

<div block-type = "component_method" component-selector = "SpeechRecognizer" method-selector = "Stop" id = "speechrecognizer-stop"></div>

Return Type : <span class="void">Void</span>

Function used to forcefully stop listening speech in cases where SpeechRecognizer cannot stop automatically. This function works only when the

## Block Properties

---

### Language

<div block-type = "component_set_get" component-selector = "SpeechRecognizer" property-selector = "Language" property-type = "get" id = "get-speechrecognizer-language"></div>

<div block-type = "component_set_get" component-selector = "SpeechRecognizer" property-selector = "Language" property-type = "set" id = "set-speechrecognizer-language"></div>

Suggests the language to use for recognizing speech. An empty string (the default) will use the system's default language. Language is specified using a \[language tag\](https://en.wikipedia.org/wiki/List\_of\_ISO\_639-1\_codes) with an optional region suffix, such as en or es-MX. The set of supported languages will vary by device.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Language   | <span class="text">text</span> |

### Result

<div block-type = "component_set_get" component-selector = "SpeechRecognizer" property-selector = "Result" property-type = "get" id = "get-speechrecognizer-result"></div>

Returns the last text produced by the recognizer.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Result     | <span class="text">text</span> |

### UseLegacy

<div block-type = "component_set_get" component-selector = "SpeechRecognizer" property-selector = "UseLegacy" property-type = "get" id = "get-speechrecognizer-uselegacy"></div>

<div block-type = "component_set_get" component-selector = "SpeechRecognizer" property-selector = "UseLegacy" property-type = "set" id = "set-speechrecognizer-uselegacy"></div>

If true, an app can retain their older behaviour.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| UseLegacy  | <span class="boolean">boolean</span> |

## Component

---

### SpeechRecognizer

<div block-type = "component_component_block" component-selector = "SpeechRecognizer" id = "component-speechrecognizer"></div>

Component SpeechRecognizer.

Return Type : <span class="component">component</span>

