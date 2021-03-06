<!--
  Copyright © 2013-2021 MIT, All rights reserved
  Released under the Apache License, Version 2.0
  http://www.apache.org/licenses/LICENSE-2.0
-->

# Color Blocks

---

### How do colors work in App Inventor?
Internally, App Inventor stores each color as a single number. When you use [make color](#make-color) and take in a list as an argument, internally this list is then converted using App Inventor’s color scheme and stored as a number. If you knew the numbers for the colors, you could even specify what color you wanted something to be by just setting its Color property to a specific number. If you want to see a chart of colors to numbers, check out [this page](http://appinventor.mit.edu/explore/app-inventor-color-chart).

### Black

<div id = "color_black" type = "ai-2-block"></div>

### White

<div id = "color_white" type = "ai-2-block"></div>

### Red

<div id = "color_red" type = "ai-2-block"></div>

### Pink

<div id = "color_pink" type = "ai-2-block"></div>

### Orange

<div id = "color_orange" type = "ai-2-block"></div>

### Yellow

<div id = "color_yellow" type = "ai-2-block"></div>

### Green

<div id = "color_green" type = "ai-2-block"></div>

### Cyan

<div id = "color_cyan" type = "ai-2-block"></div>

### Blue

<div id = "color_blue" type = "ai-2-block"></div>

### Magenta

<div id = "color_magenta" type = "ai-2-block"></div>

### Light Gray

<div id = "color_light_gray" type = "ai-2-block"></div>

### Gray

<div id = "color_gray" type = "ai-2-block"></div>

### Dark Gray

<div id = "color_dark_gray" type = "ai-2-block"></div>

### Basic Color Blocks

![Placeholder](http://ai2.appinventor.mit.edu/reference/blocks/images/colors/colorblock.gif){ align=right }

These are basic color blocks. It has a small square shape and has a color in the middle that represents the color stored internally in this block.

If you click on the color in the middle, a pop-up appears on the screen with a table of 70 colors that you can choose from. Clicking on a new color will change the current color of your basic color block.

Each basic color block that you drag from the Colors drawer to the Blocks Editor screen will display a table with the same colors when clicked.

### Make Color

#### Without Alpha
<div id = "color_make_color" type = "ai-2-default-block"></div>

#### With Alpha
<div id = "color_make_color_with_alpha" type = "ai-2-default-block"></div>

make color takes in a list of 3 or 4 numbers. These numbers in this list represent values in an RGB code. RGB codes are used to make colors on the Internet. An RGB color chart is available [here](https://sites.google.com/view/metricrat-ai2/scraps/android-and-html-colour-codes). This first number in this list represents the R value of the code. The second represents the G. The third represents the B. The fourth value is optional and represents the alpha value or how saturated the color is. The default alpha value is 100. Experiment with different values and see how the colors change using this block.

### Split Color

<div id = "color_split_color" type = "ai-2-block"></div>

split color does the opposite of make color. It takes in a color: a color block, variable holding a color, or property from one of the components representing a color and returns a list of the RGB values in that color’s RGB code.
