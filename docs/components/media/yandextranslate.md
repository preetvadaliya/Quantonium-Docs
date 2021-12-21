<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# YandexTranslate

Use this component to translate words and sentences between different languages. This component needs Internet access, as it will request translations to the Yandex.Translate service. Specify the source and target language in the form source-target using two letter language codes. So"en-es" will translate from English to Spanish while "es-ru" will translate from Spanish to Russian. If you leave out the source language, the service will attempt to detect the source language. So providing just "es" will attempt to detect the source language and translate it to Spanish.

This component is powered by the Yandex translation service. See http://api.yandex.com/translate/ for more information, including the list of available languages and the meanings of the language codes and status codes.

Note: Translation happens asynchronously in the background. When the translation is complete, the "GotTranslation" event is triggered.

---

## Designer Properties

---

### ApiKey

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| ApiKey        | string      | DEFAULT       |

## Events

---

### GotTranslation

<div block-type = "component_event" component-selector = "YandexTranslate" event-selector = "GotTranslation" id = "yandextranslate-gottranslation"></div>

Event triggered when the Yandex.Translate service returns the translated text. This event also provides a response code for error handling. If the responseCode is not 200, then something went wrong with the call, and the translation will not be available.

| Param Name   | IO Type                        | Getter Block                                                                                                                | Setter Block                                                                                                                |
| :----------- | :----------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| responseCode | <span class="text">text</span> | <div block-type = "getter" variable-name = responseCode id = "param-get-yandextranslate-gottranslation-responsecode"></div> | <div block-type = "setter" variable-name = responseCode id = "param-set-yandextranslate-gottranslation-responsecode"></div> |
| translation  | <span class="text">text</span> | <div block-type = "getter" variable-name = translation id = "param-get-yandextranslate-gottranslation-translation"></div>   | <div block-type = "setter" variable-name = translation id = "param-set-yandextranslate-gottranslation-translation"></div>   |

## Methods

---

### RequestTranslation

<div block-type = "component_method" component-selector = "YandexTranslate" method-selector = "RequestTranslation" id = "yandextranslate-requesttranslation"></div>

Return Type : <span class="void">Void</span>

By providing a target language to translate to (for instance, 'es' for Spanish, 'en' for English, or 'ru' for Russian), and a word or sentence to translate, this method will request a translation to the Yandex.Translate service. Once the text is translated by the external service, the event GotTranslation will be executed. Note: Yandex.Translate will attempt to detect the source language. You can also specify prepending it to the language translation. I.e., es-ru will specify Spanish to Russian translation.

| Param Name            | Input Type                     |
| :-------------------- | :----------------------------- |
| languageToTranslateTo | <span class="text">text</span> |
| textToTranslate       | <span class="text">text</span> |

## Block Properties

---

### ApiKey

<div block-type = "component_set_get" component-selector = "YandexTranslate" property-selector = "ApiKey" property-type = "set" id = "set-yandextranslate-apikey"></div>

Set the API Key to use with Yandex. You do not need to set this if you are using the MIT system because MIT has its own key builtin. If set, the key provided here will be used instead

| Param Name | IO Type                        |
| :--------- | :----------------------------- |
| ApiKey     | <span class="text">text</span> |

## Component

---

### YandexTranslate

<div block-type = "component_component_block" component-selector = "YandexTranslate" id = "component-yandextranslate"></div>

Component YandexTranslate.

Return Type : <span class="component">component</span>

