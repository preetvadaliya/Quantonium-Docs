<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# PhoneCall

A non-visible component that makes a phone call to the number specified in the `PhoneNumber` property, which can be set either in the Designer or Blocks Editor. The component has a `MakePhoneCall` method, enabling the program to launch a phone call.

Often, this component is used with the `ContactPicker` component, which lets the user select a contact from the ones stored on the phone and sets the `PhoneNumber` property to the contact's phone number.

To directly specify the phone number (e.g., 650-555-1212), set the `PhoneNumber` property to a Text with the specified digits (e.g., "6505551212"). Dashes, dots, and parentheses may be included (e.g., "(650)-555-1212") but will be ignored; spaces may not be included.

---

## Designer Properties

---

### PhoneNumber

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| PhoneNumber   | string      |               |

## Events

---

### IncomingCallAnswered

<div block-type = "component_event" component-selector = "PhoneCall" event-selector = "IncomingCallAnswered" id = "phonecall-incomingcallanswered"></div>

Event indicating that an incoming phone call is answered. phoneNumber is the incoming call phone number.

| Param Name  | IO Type                        | Getter Block                                                                                                              | Setter Block                                                                                                              |
| :---------- | :----------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| phoneNumber | <span class="text">text</span> | <div block-type = "getter" variable-name = phoneNumber id = "param-get-phonecall-incomingcallanswered-phonenumber"></div> | <div block-type = "setter" variable-name = phoneNumber id = "param-set-phonecall-incomingcallanswered-phonenumber"></div> |

### PhoneCallEnded

<div block-type = "component_event" component-selector = "PhoneCall" event-selector = "PhoneCallEnded" id = "phonecall-phonecallended"></div>

Event indicating that a phone call has ended. If status is 1, incoming call is missed or rejected; if status is 2, incoming call is answered before hanging up; if status is 3, outgoing call is hung up. phoneNumber is the ended call phone number.

| Param Name  | IO Type                            | Getter Block                                                                                                        | Setter Block                                                                                                        |
| :---------- | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| status      | <span class="number">number</span> | <div block-type = "getter" variable-name = status id = "param-get-phonecall-phonecallended-status"></div>           | <div block-type = "setter" variable-name = status id = "param-set-phonecall-phonecallended-status"></div>           |
| phoneNumber | <span class="text">text</span>     | <div block-type = "getter" variable-name = phoneNumber id = "param-get-phonecall-phonecallended-phonenumber"></div> | <div block-type = "setter" variable-name = phoneNumber id = "param-set-phonecall-phonecallended-phonenumber"></div> |

### PhoneCallStarted

<div block-type = "component_event" component-selector = "PhoneCall" event-selector = "PhoneCallStarted" id = "phonecall-phonecallstarted"></div>

Event indicating that a phonecall has started. If status is 1, incoming call is ringing; if status is 2, outgoing call is dialled. phoneNumber is the incoming/outgoing phone number.

| Param Name  | IO Type                            | Getter Block                                                                                                          | Setter Block                                                                                                          |
| :---------- | :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| status      | <span class="number">number</span> | <div block-type = "getter" variable-name = status id = "param-get-phonecall-phonecallstarted-status"></div>           | <div block-type = "setter" variable-name = status id = "param-set-phonecall-phonecallstarted-status"></div>           |
| phoneNumber | <span class="text">text</span>     | <div block-type = "getter" variable-name = phoneNumber id = "param-get-phonecall-phonecallstarted-phonenumber"></div> | <div block-type = "setter" variable-name = phoneNumber id = "param-set-phonecall-phonecallstarted-phonenumber"></div> |

## Methods

---

### MakePhoneCall

<div block-type = "component_method" component-selector = "PhoneCall" method-selector = "MakePhoneCall" id = "phonecall-makephonecall"></div>

Return Type : <span class="void">Void</span>

Launches the default dialer app set to start a phone call usingthe number in the PhoneNumber property.

### MakePhoneCallDirect

<div block-type = "component_method" component-selector = "PhoneCall" method-selector = "MakePhoneCallDirect" id = "phonecall-makephonecalldirect"></div>

Return Type : <span class="void">Void</span>

Directly initiates a phone call using the number in the PhoneNumber property.

## Block Properties

---

### PhoneNumber

<div block-type = "component_set_get" component-selector = "PhoneCall" property-selector = "PhoneNumber" property-type = "get" id = "get-phonecall-phonenumber"></div>

<div block-type = "component_set_get" component-selector = "PhoneCall" property-selector = "PhoneNumber" property-type = "set" id = "set-phonecall-phonenumber"></div>

PhoneNumber property getter method.

| Param Name  | IO Type                        |
| :---------- | :----------------------------- |
| PhoneNumber | <span class="text">text</span> |

## Component

---

### PhoneCall

<div block-type = "component_component_block" component-selector = "PhoneCall" id = "component-phonecall"></div>

Component PhoneCall.

Return Type : <span class="component">component</span>

