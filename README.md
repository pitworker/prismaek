# Prismaek [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A fork of Michael Sterpka's [`prismaek`](https://www.npmjs.com/package/prismaek) package with ES6 formatting.

Generate color complements, shades, tints, and tones. Convert between color spaces.

# Install

```
$ npm install @pitworker/prismaek
```

# Usage

To produce complements, use the provided `harmonies` functions.

See [Harmonies](#Harmonies).

```js
import { Harmonies } from "@pitworker/prismaek";

const hsv = { h: 153, s: 0.737, v: 0.596 };
/* hue: 153 deg, saturation: 73.7%, value: 59.6% */

const complementary = Harmonies.complementary(hsv);
/* [ { h: 153, s: 0.737, v: 0.596 }, { h: 333, s: 0.737, v: 0.596 } ] */
```

![complementary](https://user-images.githubusercontent.com/15038724/118057317-92f8f480-b340-11eb-8a3d-5d3d1ba686ca.png)

```js
const triadic = Harmonies.triadic(hsv);
/* [ { h: 153, s: 0.737, v: 0.596 },
     { h: 273, s: 0.737, v: 0.596 },
     { h: 33, s: 0.737, v: 0.596 } ] */
```

![triadic](https://user-images.githubusercontent.com/15038724/118057439-d9e6ea00-b340-11eb-9638-2ae4cd9ce2be.png)

```js
const analagous = Harmonies.analagous(hsv);
/* [ { h: 153, s: 0.737, v: 0.596 },
     { h: 183, s: 0.737, v: 0.596 },
     { h: 213, s: 0.737, v: 0.596 },
     { h: 243, s: 0.737, v: 0.596 } ] */
```

![analagous](https://user-images.githubusercontent.com/15038724/118057897-c5572180-b341-11eb-91c3-6f4516ad66ad.png)

To explicitly change between color spaces, use the conversion utilities.

See [Utilities](#Utilities).

```js
import { Utils } from "@pitworker/prismaek");

const rgb = { r: 75, g: 21, b: 156 };

const hsv = Utils.rgb2HSV(rgb);
/* { h: 264, s: 0.865, v: 0.612 } */
```

Validate color spaces

```js
const hsvSpace = Utils.isHSV(hsv);
/* true */

const badHSV = { h: 361, s: 1.001, v: -0.001 };

const notHsvSpace = Utils.isHSV(badHSV);
/* false */
```

Get the color space of a color, using `cspace`.

```js
const color = { h: 312, s: 0.431, l: 0.213 };

const colorSpace = Utils.cspace(color);
/* "hsl" */
```

Dynamically transform color spaces using `xspace`.

```js
const colors = [
  { r: 75, g: 21, b: 156 },
  "#4b159c",
  { h: 264, s: 0.865, v: 0.612 },
  { h: 264, s: 0.763, l: 0.347 },
];

const rgbColors = colors.map((color) => Utils.xspace(color, "rgb"));
/* [ { r: 75, g: 21, b: 156 },
     { r: 75, g: 21, b: 156 },
     { r: 75, g: 21, b: 156 },
     { r: 75, g: 21, b: 156 } ] */
```

# API

## Harmonies

```
harmonyName (base [, format])

- base: <Object> | <String> Base color.

- format: <String> Output color space, defaulting to "hsv".

- Returns: <Array<<Object> | <String>> The generated harmony, including the base color.
```

_Generates mathematically proven color harmonies._

```js
import { Harmonies } from "@pitworker/prismaek";

Harmonies.complementary({ r: 40, g: 102, b: 106 }, "hex");

Harmonies.complementary("#009197");
```

## Effects

```
effectName (base [, format] [, step] [, count])

- base: <Object> | <String> | <Array> Base color, or array of colors.

- format: <String> Output color space, defaulting to "hex".

- step <Number> Step size when generating the effect, a number between 0 and 1. Default is 0.10, or 10%.

- count <Number> Iteration count, defaulting to 5.

- Returns: <Array<<Object> | <String>> The generated effect, including base color.
```

_Generates a color scheme based on popular effects._

```js
import { Effects } from "@pitworker/prismaek";

Effects.shade("#ee0a97", "rgb", 0.05, 10);

Effects.tint({ r: 40, g: 65, b: 106 }, "hex");

Effects.tone({ h: 359, s: 0.102, l: 0.696 });
```

# Utilities

## xspace

```
xspace (color, map)

- color <Object> | <String> Base color.

- map <String> Color space to convert to.

- Returns: <Object> | <String> The converted color.
```

_Converts between supported color spaces._

```js
import { Utils } from "@pitworker/prismaek";

Utils.xspace("#ee0a97", "rgb"); // { r: 238, g: 10, b: 151 }
```

## cspace

```
cspace (color)

- color <Object> | <String> Base color.

- Returns <String> color space.
```

_Returns the color space of a color or null._

```js
import { Utils } from "@pitworker/prismaek";

Utils.cspace("#d5186c"); // "hex"

Utils.cspace({ h: 251, s: 0.891, v: 0.668 }); // "hsv"

Utils.cspace({ foo: "bar" }); // null
```

## \<from-space>2\<TO-SPACE>

```
<from-space>2<TO-SPACE> (color)

- color <Object> | <String> Base color.

- Returns <Object> | <String> The converted color.
```

_Useful when explicity converting from one color space to another._

```js
import { Utils } from "@pitworker/prismaek";

const hex = Utils.rgb2Hex({ r: 163, g: 189, b: 254 }); // #a3bdfe

Utils.hex2RGB(hex); // { r: 163, g: 189, b: 254 }
```
