<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# BluetoothClient

Bluetooth client component

---

## Designer Properties

---

### CharacterEncoding

| Property Name     | Editor Type | Default Value |
| :---------------- | :---------- | :------------ |
| CharacterEncoding | string      | UTF-8         |

### DelimiterByte

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| DelimiterByte | non_negative_integer | 0             |

### DisconnectOnError

| Property Name     | Editor Type | Default Value |
| :---------------- | :---------- | :------------ |
| DisconnectOnError | boolean     | False         |

### HighByteFirst

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| HighByteFirst | boolean     | False         |

### Secure

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| Secure        | boolean     | True          |

## Events

---

### BluetoothError

<div block-type = "component_event" component-selector = "BluetoothClient" event-selector = "BluetoothError" id = "bluetoothclient-bluetootherror"></div>

The BluetoothError event is no longer used. Please use the Screen.ErrorOccurred event instead.

| Param Name   | IO Type                        | Getter Block                                                                                                                | Setter Block                                                                                                                |
| :----------- | :----------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| functionName | <span class="text">text</span> | <div block-type = "getter" variable-name = functionName id = "param-get-bluetoothclient-bluetootherror-functionname"></div> | <div block-type = "setter" variable-name = functionName id = "param-set-bluetoothclient-bluetootherror-functionname"></div> |
| message      | <span class="text">text</span> | <div block-type = "getter" variable-name = message id = "param-get-bluetoothclient-bluetootherror-message"></div>           | <div block-type = "setter" variable-name = message id = "param-set-bluetoothclient-bluetootherror-message"></div>           |

## Methods

---

### BytesAvailableToReceive

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "BytesAvailableToReceive" id = "bluetoothclient-bytesavailabletoreceive"></div>

Return Type : <span class="number">number</span>

Returns an estimate of the number of bytes that can be received without blocking

### Connect

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "Connect" id = "bluetoothclient-connect"></div>

Return Type : <span class="boolean">boolean</span>

Connect to the Bluetooth device with the specified address and the Serial Port Profile (SPP). Returns true if the connection was successful.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| address    | <span class="text">text</span> |

### ConnectWithUUID

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ConnectWithUUID" id = "bluetoothclient-connectwithuuid"></div>

Return Type : <span class="boolean">boolean</span>

Connect to the Bluetooth device with the specified address and UUID. Returns true if the connection was successful.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| address    | <span class="text">text</span> |
| uuid       | <span class="text">text</span> |

### Disconnect

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "Disconnect" id = "bluetoothclient-disconnect"></div>

Return Type : <span class="void">Void</span>

Disconnect from the connected Bluetooth device.

### IsDevicePaired

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "IsDevicePaired" id = "bluetoothclient-isdevicepaired"></div>

Return Type : <span class="boolean">boolean</span>

Checks whether the Bluetooth device with the specified address is paired.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| address    | <span class="text">text</span> |

### ReceiveSigned1ByteNumber

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ReceiveSigned1ByteNumber" id = "bluetoothclient-receivesigned1bytenumber"></div>

Return Type : <span class="number">number</span>

Receive a signed 1-byte number from the connected Bluetooth device.

### ReceiveSigned2ByteNumber

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ReceiveSigned2ByteNumber" id = "bluetoothclient-receivesigned2bytenumber"></div>

Return Type : <span class="number">number</span>

Receive a signed 2-byte number from the connected Bluetooth device.

### ReceiveSigned4ByteNumber

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ReceiveSigned4ByteNumber" id = "bluetoothclient-receivesigned4bytenumber"></div>

Return Type : <span class="number">number</span>

Receive a signed 4-byte number from the connected Bluetooth device.

### ReceiveSignedBytes

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ReceiveSignedBytes" id = "bluetoothclient-receivesignedbytes"></div>

Return Type : <span class="list">list</span>

Receive multiple signed byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

| Param Name    | Input Type                         |
| :------------ | :--------------------------------- |
| numberOfBytes | <span class="number">number</span> |

### ReceiveText

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ReceiveText" id = "bluetoothclient-receivetext"></div>

Return Type : <span class="text">text</span>

Receive text from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

| Param Name    | Input Type                         |
| :------------ | :--------------------------------- |
| numberOfBytes | <span class="number">number</span> |

### ReceiveUnsigned1ByteNumber

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ReceiveUnsigned1ByteNumber" id = "bluetoothclient-receiveunsigned1bytenumber"></div>

Return Type : <span class="number">number</span>

Receive an unsigned 1-byte number from the connected Bluetooth device.

### ReceiveUnsigned2ByteNumber

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ReceiveUnsigned2ByteNumber" id = "bluetoothclient-receiveunsigned2bytenumber"></div>

Return Type : <span class="number">number</span>

Receive a unsigned 2-byte number from the connected Bluetooth device.

### ReceiveUnsigned4ByteNumber

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ReceiveUnsigned4ByteNumber" id = "bluetoothclient-receiveunsigned4bytenumber"></div>

Return Type : <span class="number">number</span>

Receive a unsigned 4-byte number from the connected Bluetooth device.

### ReceiveUnsignedBytes

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "ReceiveUnsignedBytes" id = "bluetoothclient-receiveunsignedbytes"></div>

Return Type : <span class="list">list</span>

Receive multiple unsigned byte values from the connected Bluetooth device. If numberOfBytes is less than 0, read until a delimiter byte value is received.

| Param Name    | Input Type                         |
| :------------ | :--------------------------------- |
| numberOfBytes | <span class="number">number</span> |

### Send1ByteNumber

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "Send1ByteNumber" id = "bluetoothclient-send1bytenumber"></div>

Return Type : <span class="void">Void</span>

Send a 1-byte number to the connected Bluetooth device.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| number     | <span class="text">text</span> |

### Send2ByteNumber

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "Send2ByteNumber" id = "bluetoothclient-send2bytenumber"></div>

Return Type : <span class="void">Void</span>

Send a 2-byte number to the connected Bluetooth device.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| number     | <span class="text">text</span> |

### Send4ByteNumber

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "Send4ByteNumber" id = "bluetoothclient-send4bytenumber"></div>

Return Type : <span class="void">Void</span>

Send a 4-byte number to the connected Bluetooth device.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| number     | <span class="text">text</span> |

### SendBytes

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "SendBytes" id = "bluetoothclient-sendbytes"></div>

Return Type : <span class="void">Void</span>

Send a list of byte values to the connected Bluetooth device.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| list       | <span class="list">list</span> |

### SendText

<div block-type = "component_method" component-selector = "BluetoothClient" method-selector = "SendText" id = "bluetoothclient-sendtext"></div>

Return Type : <span class="void">Void</span>

Send text to the connected Bluetooth device.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| text       | <span class="text">text</span> |

## Block Properties

---

### AddressesAndNames

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "AddressesAndNames" property-type = "get" id = "get-bluetoothclient-addressesandnames"></div>

The addresses and names of paired Bluetooth devices

| Param Name        | IO Type                        |
| :---------------- | :----------------------------- |
| AddressesAndNames | <span class="list">list</span> |

### Available

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "Available" property-type = "get" id = "get-bluetoothclient-available"></div>

Whether Bluetooth is available on the device

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Available  | <span class="boolean">boolean</span> |

### CharacterEncoding

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "CharacterEncoding" property-type = "get" id = "get-bluetoothclient-characterencoding"></div>

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "CharacterEncoding" property-type = "set" id = "set-bluetoothclient-characterencoding"></div>

Sets the character encoding to use when sending and receiving text. The default value is \`"UTF-8"

| Param Name        | IO Type                        |
| :---------------- | :----------------------------- |
| CharacterEncoding | <span class="text">text</span> |

### DelimiterByte

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "DelimiterByte" property-type = "get" id = "get-bluetoothclient-delimiterbyte"></div>

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "DelimiterByte" property-type = "set" id = "set-bluetoothclient-delimiterbyte"></div>

Sets the delimiter byte to use when passing a negative number for the numberOfBytes parameter when calling ReceiveText, ReceiveSignedBytes, or ReceiveUnsignedBytes. Those functions will continue to read bytes until they encounter the value specified here. The default delimiter is 0, the null byte.

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| DelimiterByte | <span class="number">number</span> |

### DisconnectOnError

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "DisconnectOnError" property-type = "get" id = "get-bluetoothclient-disconnectonerror"></div>

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "DisconnectOnError" property-type = "set" id = "set-bluetoothclient-disconnectonerror"></div>

Disconnects BluetoothClient automatically when an error occurs.

| Param Name        | IO Type                              |
| :---------------- | :----------------------------------- |
| DisconnectOnError | <span class="boolean">boolean</span> |

### Enabled

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "Enabled" property-type = "get" id = "get-bluetoothclient-enabled"></div>

Whether Bluetooth is enabled

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Enabled    | <span class="boolean">boolean</span> |

### HighByteFirst

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "HighByteFirst" property-type = "get" id = "get-bluetoothclient-highbytefirst"></div>

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "HighByteFirst" property-type = "set" id = "set-bluetoothclient-highbytefirst"></div>

Returns \`true

| Param Name    | IO Type                              |
| :------------ | :----------------------------------- |
| HighByteFirst | <span class="boolean">boolean</span> |

### IsConnected

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "IsConnected" property-type = "get" id = "get-bluetoothclient-isconnected"></div>

On devices with API level 14 (LEVEL\_ICE\_CREAM\_SANDWICH) or higher, this property returned is accurate. But on old devices with API level lower than 14, it may not return the current state of connection(e.g., it might be disconnected but you may not know until you attempt to read/write the socket.

| Param Name  | IO Type                              |
| :---------- | :----------------------------------- |
| IsConnected | <span class="boolean">boolean</span> |

### Secure

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "Secure" property-type = "get" id = "get-bluetoothclient-secure"></div>

<div block-type = "component_set_get" component-selector = "BluetoothClient" property-selector = "Secure" property-type = "set" id = "set-bluetoothclient-secure"></div>

Whether to invoke SSP (Simple Secure Pairing), which is supported on devices with Bluetooth v2.1 or higher. When working with embedded Bluetooth devices, this property may need to be set to False. For Android 2.0-2.2, this property setting will be ignored.

| Param Name | IO Type                              |
| :--------- | :----------------------------------- |
| Secure     | <span class="boolean">boolean</span> |

## Component

---

### BluetoothClient

<div block-type = "component_component_block" component-selector = "BluetoothClient" id = "component-bluetoothclient"></div>

Component BluetoothClient.

Return Type : <span class="component">component</span>

