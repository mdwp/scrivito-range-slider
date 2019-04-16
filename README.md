# Scrivito Range Slider
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A range slider React component/Scrivito widget for the Scrivito CMS.

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```shell
$ npm install scrivito-range-slider
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```js
import "scrivito-range-slider";
```

Also add this line to your index.scss:

```scss
@import "~react-input-range/lib/css/index.css"
```

## Features
For demonstration purposes I've setup a widget configuration form to create conversions calcutators, like km to miles, kilograms to pounds and so on. Just put in the factor in the form, enter labels and descriptions and you will get a range slider which works as a conversion calculator. You can also use it as a price calculator.

## Widget properties

In the widget properties you can set:
- Title e.g. "Miles to Kilometers"
- Minimum e.g. 1
- Maximum e.g. 100
- Base entity e.g. Miles
- Target entity e.g. Kilometers
- Factor e.g. 1.609344