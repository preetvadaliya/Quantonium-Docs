<!--
  Copyright © 2021-2021 Quantonium, All rights reserved
  Released under the GPL License, Version 3.0
-->

# Clock

Non-visible component that provides the instant in time using the internal clock on the phone. It can fire a timer at regularly set intervals and perform time calculations, manipulations, and conversions.

Methods to convert an instant to text are also available. Acceptable patterns are empty string, MM/DD/YYYY HH:mm:ss a, or MMM d, yyyyHH:mm. The empty string will provide the default format, which is "MMM d, yyyy HH:mm:ss a" for FormatDateTime "MMM d, yyyy" for FormatDate. To see all possible format, please see [here](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

---

## Designer Properties

---

### TimerAlwaysFires

| Property Name    | Editor Type | Default Value |
| :--------------- | :---------- | :------------ |
| TimerAlwaysFires | boolean     | True          |

### TimerEnabled

| Property Name | Editor Type | Default Value |
| :------------ | :---------- | :------------ |
| TimerEnabled  | boolean     | True          |

### TimerInterval

| Property Name | Editor Type          | Default Value |
| :------------ | :------------------- | :------------ |
| TimerInterval | non_negative_integer | 1000          |

## Events

---

### Timer

<div block-type = "component_event" component-selector = "Clock" event-selector = "Timer" id = "clock-timer"></div>

The Timer event runs when the timer has gone off.

## Methods

---

### AddDays

<div block-type = "component_method" component-selector = "Clock" method-selector = "AddDays" id = "clock-adddays"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time some days after the given instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| quantity   | <span class="number">number</span>               |

### AddDuration

<div block-type = "component_method" component-selector = "Clock" method-selector = "AddDuration" id = "clock-addduration"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time some duration after the argument

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| quantity   | <span class="number">number</span>               |

### AddHours

<div block-type = "component_method" component-selector = "Clock" method-selector = "AddHours" id = "clock-addhours"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time some hours after the given instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| quantity   | <span class="number">number</span>               |

### AddMinutes

<div block-type = "component_method" component-selector = "Clock" method-selector = "AddMinutes" id = "clock-addminutes"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time some minutes after the given instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| quantity   | <span class="number">number</span>               |

### AddMonths

<div block-type = "component_method" component-selector = "Clock" method-selector = "AddMonths" id = "clock-addmonths"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time some months after the given instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| quantity   | <span class="number">number</span>               |

### AddSeconds

<div block-type = "component_method" component-selector = "Clock" method-selector = "AddSeconds" id = "clock-addseconds"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time some seconds after the given instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| quantity   | <span class="number">number</span>               |

### AddWeeks

<div block-type = "component_method" component-selector = "Clock" method-selector = "AddWeeks" id = "clock-addweeks"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns An instant in time some weeks after the given instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| quantity   | <span class="number">number</span>               |

### AddYears

<div block-type = "component_method" component-selector = "Clock" method-selector = "AddYears" id = "clock-addyears"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time some years after the given instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| quantity   | <span class="number">number</span>               |

### DayOfMonth

<div block-type = "component_method" component-selector = "Clock" method-selector = "DayOfMonth" id = "clock-dayofmonth"></div>

Return Type : <span class="number">number</span>

Returns the day of the month (1-31) from the instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### Duration

<div block-type = "component_method" component-selector = "Clock" method-selector = "Duration" id = "clock-duration"></div>

Return Type : <span class="number">number</span>

Returns duration, which is milliseconds elapsed between instants.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| start      | <span class="InstantInTime">InstantInTime</span> |
| end        | <span class="InstantInTime">InstantInTime</span> |

### DurationToDays

<div block-type = "component_method" component-selector = "Clock" method-selector = "DurationToDays" id = "clock-durationtodays"></div>

Return Type : <span class="number">number</span>

Converts the duration to the number of days.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| duration   | <span class="number">number</span> |

### DurationToHours

<div block-type = "component_method" component-selector = "Clock" method-selector = "DurationToHours" id = "clock-durationtohours"></div>

Return Type : <span class="number">number</span>

Converts the duration to the number of hours.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| duration   | <span class="number">number</span> |

### DurationToMinutes

<div block-type = "component_method" component-selector = "Clock" method-selector = "DurationToMinutes" id = "clock-durationtominutes"></div>

Return Type : <span class="number">number</span>

Converts the duration to the number of minutes.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| duration   | <span class="number">number</span> |

### DurationToSeconds

<div block-type = "component_method" component-selector = "Clock" method-selector = "DurationToSeconds" id = "clock-durationtoseconds"></div>

Return Type : <span class="number">number</span>

Converts the duration to the number of seconds.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| duration   | <span class="number">number</span> |

### DurationToWeeks

<div block-type = "component_method" component-selector = "Clock" method-selector = "DurationToWeeks" id = "clock-durationtoweeks"></div>

Return Type : <span class="number">number</span>

Converts the duration to the number of weeks.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| duration   | <span class="number">number</span> |

### FormatDate

<div block-type = "component_method" component-selector = "Clock" method-selector = "FormatDate" id = "clock-formatdate"></div>

Return Type : <span class="text">text</span>

Text representing the date of an instant in the specified pattern

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| pattern    | <span class="text">text</span>                   |

### FormatDateTime

<div block-type = "component_method" component-selector = "Clock" method-selector = "FormatDateTime" id = "clock-formatdatetime"></div>

Return Type : <span class="text">text</span>

Returns text representing the date and time of an instant in the specified pattern

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |
| pattern    | <span class="text">text</span>                   |

### FormatTime

<div block-type = "component_method" component-selector = "Clock" method-selector = "FormatTime" id = "clock-formattime"></div>

Return Type : <span class="text">text</span>

Text representing the time of an instant

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### GetMillis

<div block-type = "component_method" component-selector = "Clock" method-selector = "GetMillis" id = "clock-getmillis"></div>

Return Type : <span class="number">number</span>

Returns the instant in time measured as milliseconds since 1970.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### Hour

<div block-type = "component_method" component-selector = "Clock" method-selector = "Hour" id = "clock-hour"></div>

Return Type : <span class="number">number</span>

Returns the hour of the day (0-23) from the instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### MakeDate

<div block-type = "component_method" component-selector = "Clock" method-selector = "MakeDate" id = "clock-makedate"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time specified by year, month, date in UTC. Valid values for the month field are 1-12 and 1-31 for the day field.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| year       | <span class="number">number</span> |
| month      | <span class="number">number</span> |
| day        | <span class="number">number</span> |

### MakeInstant

<div block-type = "component_method" component-selector = "Clock" method-selector = "MakeInstant" id = "clock-makeinstant"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time specified by MM/dd/YYYY hh:mm:ss or MM/dd/YYYY or hh:mm.

| Param Name | Input Type                     |
| :--------- | :----------------------------- |
| from       | <span class="text">text</span> |

### MakeInstantFromMillis

<div block-type = "component_method" component-selector = "Clock" method-selector = "MakeInstantFromMillis" id = "clock-makeinstantfrommillis"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time specified by the milliseconds since 1970 in UTC.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| millis     | <span class="number">number</span> |

### MakeInstantFromParts

<div block-type = "component_method" component-selector = "Clock" method-selector = "MakeInstantFromParts" id = "clock-makeinstantfromparts"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time specified by year, month, date, hour, minute, second in UTC.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| year       | <span class="number">number</span> |
| month      | <span class="number">number</span> |
| day        | <span class="number">number</span> |
| hour       | <span class="number">number</span> |
| minute     | <span class="number">number</span> |
| second     | <span class="number">number</span> |

### MakeTime

<div block-type = "component_method" component-selector = "Clock" method-selector = "MakeTime" id = "clock-maketime"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns an instant in time specified by hour, minute, second in UTC.

| Param Name | Input Type                         |
| :--------- | :--------------------------------- |
| hour       | <span class="number">number</span> |
| minute     | <span class="number">number</span> |
| second     | <span class="number">number</span> |

### Minute

<div block-type = "component_method" component-selector = "Clock" method-selector = "Minute" id = "clock-minute"></div>

Return Type : <span class="number">number</span>

Returns the minute of the hour (0-59) from the instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### Month

<div block-type = "component_method" component-selector = "Clock" method-selector = "Month" id = "clock-month"></div>

Return Type : <span class="number">number</span>

Returns the month of the year represented as a number from 1 to 12).

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### MonthName

<div block-type = "component_method" component-selector = "Clock" method-selector = "MonthName" id = "clock-monthname"></div>

Return Type : <span class="text">text</span>

Returns the name of the month from the instant, e.g., January, February, March...

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### Now

<div block-type = "component_method" component-selector = "Clock" method-selector = "Now" id = "clock-now"></div>

Return Type : <span class="InstantInTime">InstantInTime</span>

Returns the current instant in time read from phone's clock.

### Second

<div block-type = "component_method" component-selector = "Clock" method-selector = "Second" id = "clock-second"></div>

Return Type : <span class="number">number</span>

Returns the second of the minute (0-59) from the instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### SystemTime

<div block-type = "component_method" component-selector = "Clock" method-selector = "SystemTime" id = "clock-systemtime"></div>

Return Type : <span class="number">number</span>

Returns the phone's internal time.

### Weekday

<div block-type = "component_method" component-selector = "Clock" method-selector = "Weekday" id = "clock-weekday"></div>

Return Type : <span class="number">number</span>

Returns the day of the week represented as a number from 1 (Sunday) to 7 (Saturday).

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### WeekdayName

<div block-type = "component_method" component-selector = "Clock" method-selector = "WeekdayName" id = "clock-weekdayname"></div>

Return Type : <span class="text">text</span>

Returns the name of the day of the week from the instant.

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

### Year

<div block-type = "component_method" component-selector = "Clock" method-selector = "Year" id = "clock-year"></div>

Return Type : <span class="number">number</span>

The year

| Param Name | Input Type                                       |
| :--------- | :----------------------------------------------- |
| instant    | <span class="InstantInTime">InstantInTime</span> |

## Block Properties

---

### TimerAlwaysFires

<div block-type = "component_set_get" component-selector = "Clock" property-selector = "TimerAlwaysFires" property-type = "get" id = "get-clock-timeralwaysfires"></div>

<div block-type = "component_set_get" component-selector = "Clock" property-selector = "TimerAlwaysFires" property-type = "set" id = "set-clock-timeralwaysfires"></div>

Will fire even when application is not showing on the screen if true

| Param Name       | IO Type                              |
| :--------------- | :----------------------------------- |
| TimerAlwaysFires | <span class="boolean">boolean</span> |

### TimerEnabled

<div block-type = "component_set_get" component-selector = "Clock" property-selector = "TimerEnabled" property-type = "get" id = "get-clock-timerenabled"></div>

<div block-type = "component_set_get" component-selector = "Clock" property-selector = "TimerEnabled" property-type = "set" id = "set-clock-timerenabled"></div>

Fires timer if true

| Param Name   | IO Type                              |
| :----------- | :----------------------------------- |
| TimerEnabled | <span class="boolean">boolean</span> |

### TimerInterval

<div block-type = "component_set_get" component-selector = "Clock" property-selector = "TimerInterval" property-type = "get" id = "get-clock-timerinterval"></div>

<div block-type = "component_set_get" component-selector = "Clock" property-selector = "TimerInterval" property-type = "set" id = "set-clock-timerinterval"></div>

Interval between timer events in ms

| Param Name    | IO Type                            |
| :------------ | :--------------------------------- |
| TimerInterval | <span class="number">number</span> |

## Component

---

### Clock

<div block-type = "component_component_block" component-selector = "Clock" id = "component-clock"></div>

Component Clock.

Return Type : <span class="component">component</span>

