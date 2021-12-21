<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# TextToSpeech

The TextToSpeech component speaks a given text aloud. You can set the pitch and the rate of speech.

You can also set a language by supplying a language code. This changes the pronunciation of words, not the actual language spoken. For example, setting the language to French and speaking English text will sound like someone speaking English (en) with a French accent.

You can also specify a country by supplying a country code. This can affect the pronunciation. For example, British English (GBR) will sound different from US English (USA). Not every country code will affect every language.

The languages and countries available depend on the particular device, and can be listed with the AvailableLanguages and AvailableCountries properties.

---

## Designer Properties

---

### Country

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Country       | countries   |               |

### Language

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Language      | languages   |               |

### Pitch

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Pitch         | float       | 1.0           |

### SpeechRate

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| SpeechRate    | float       | 1.0           |

## Events

---

### AfterSpeaking

<div block-type = "component_event" component-selector = "TextToSpeech" event-selector = "AfterSpeaking" id = "texttospeech-afterspeaking"></div>

Event to raise after the message is spoken. The result will be true if the message is spoken successfully, otherwise it will be false.

| Param Name | IO Type                              | Getter Block                                                                                                | Setter Block                                                                                                |
| :--------- | :----------------------------------- | :---------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| result     | <span class="boolean">boolean</span> | <div block-type = "getter" variable-name = result id = "param-get-texttospeech-afterspeaking-result"></div> | <div block-type = "setter" variable-name = result id = "param-set-texttospeech-afterspeaking-result"></div> |

### BeforeSpeaking

<div block-type = "component_event" component-selector = "TextToSpeech" event-selector = "BeforeSpeaking" id = "texttospeech-beforespeaking"></div>

Event to raise when Speak is invoked, before the message is spoken.

## Methods

---

### Speak

<div block-type = "component_method" component-selector = "TextToSpeech" method-selector = "Speak" id = "texttospeech-speak"></div>

Return Type : <span class="void">Void</span>

Speaks the given message.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| message    | <span class="text">text</span> |

## Block Properties

---

### AvailableCountries

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "AvailableCountries" property-type = "get" id = "get-texttospeech-availablecountries"></div>

List of the country codes available on this device for use with TextToSpeech. Check the Android developer documentation under supported languages to find the meanings of these abbreviations.

| Param Name         | IO Type                        |
| :----------------- | :----------------------------- |
| AvailableCountries | <span class="list">list</span> |

### AvailableLanguages

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "AvailableLanguages" property-type = "get" id = "get-texttospeech-availablelanguages"></div>

List of the languages available on this device for use with TextToSpeech. Check the Android developer documentation under supported languages to find the meanings of these abbreviations.

| Param Name         | IO Type                        |
| :----------------- | :----------------------------- |
| AvailableLanguages | <span class="list">list</span> |

### Country

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "Country" property-type = "get" id = "get-texttospeech-country"></div>

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "Country" property-type = "set" id = "set-texttospeech-country"></div>

Country code to use for speech generation. This can affect the pronounciation. For example, British English (GBR) will sound different from US English (USA). Not every country code will affect every language.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Country    | <span class="text">text</span> |

### Language

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "Language" property-type = "get" id = "get-texttospeech-language"></div>

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "Language" property-type = "set" id = "set-texttospeech-language"></div>

Sets the language for TextToSpeech. This changes the way that words are pronounced, not the actual language that is spoken. For example setting the language to and speaking English text with sound like someone speaking English with a French accent.

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| Language   | <span class="text">text</span> |

### Pitch

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "Pitch" property-type = "get" id = "get-texttospeech-pitch"></div>

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "Pitch" property-type = "set" id = "set-texttospeech-pitch"></div>

Sets the Pitch for TextToSpeech The values should be between 0 and 2 where lower values lower the tone of synthesized voice and greater values raise it.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| Pitch      | <span class="number">number</span> |

### Result

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "Result" property-type = "get" id = "get-texttospeech-result"></div>

Returns \`true

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Result     | <span class="boolean">boolean</span> |

### SpeechRate

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "SpeechRate" property-type = "get" id = "get-texttospeech-speechrate"></div>

<div block-type = "component_set_get" component-selector = "TextToSpeech" property-selector = "SpeechRate" property-type = "set" id = "set-texttospeech-speechrate"></div>

Sets the SpeechRate for TextToSpeech. The values should be between 0 and 2 where lower values slow down the pitch and greater values accelerate it.

| Param Name | IO Type                            |
| :--------- | :--------------------------------- |
| SpeechRate | <span class="number">number</span> |

## Component

---

### TextToSpeech

<div block-type = "component_component_block" component-selector = "TextToSpeech" id = "component-texttospeech"></div>

Component TextToSpeech.

Return Type : <span class="component">component</span>

