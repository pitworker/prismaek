"use strict";

import { Harmonies } from "../index.js";
//const { harmonies } = require("../index");

describe("Harmony", () => {
  test("complementary should return an array of complentary colors, defaulting to HSV.", () => {
    const { complementary } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { h: 251, s: 0.575, v: 0.416 },
      { h: 71, s: 0.575, v: 0.416 },
    ];
    const actual = complementary(base);

    expect(actual).toEqual(expected);
  });

  test("complementary should return an array of complentary colors, reformatting to the given color space.", () => {
    const { complementary } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { r: 56, g: 45, b: 106 },
      { r: 95, g: 106, b: 45 },
    ];
    const actual = complementary(base, "rgb");

    expect(actual).toEqual(expected);
  });

  test("complementary should throw when passed invalid arguments.", () => {
    const { complementary } = Harmonies;

    const badColor = null;
    expect(() => {
      complementary(badColor);
    }).toThrow();

    const goodColor = "#FFFFFF";
    const badFormat = "CMYK";
    expect(() => {
      complementary(goodColor, badFormat);
    }).toThrow();
  });

  test("splitComplementary should return an array of complentary colors, defaulting to HSV.", () => {
    const { splitComplementary } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { h: 251, s: 0.575, v: 0.416 },
      { h: 41, s: 0.575, v: 0.416 },
      { h: 101, s: 0.575, v: 0.416 },
    ];
    const actual = splitComplementary(base);

    expect(actual).toEqual(expected);
  });

  test("splitComplementary should return an array of complentary colors, reformatting to the given color space.", () => {
    const { splitComplementary } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { r: 56, g: 45, b: 106 },
      { r: 106, g: 87, b: 45 },
      { r: 64, g: 106, b: 45 },
    ];
    const actual = splitComplementary(base, "rgb");

    expect(actual).toEqual(expected);
  });

  test("splitComplementary should throw when passed invalid arguments.", () => {
    const { splitComplementary } = Harmonies;

    const badColor = null;
    expect(() => {
      splitComplementary(badColor);
    }).toThrow();

    const goodColor = "#FFFFFF";
    const badFormat = "CMYK";
    expect(() => {
      splitComplementary(goodColor, badFormat);
    }).toThrow();
  });

  test("triadic should return an array of complentary colors, defaulting to HSV.", () => {
    const { triadic } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { h: 251, s: 0.575, v: 0.416 },
      { h: 11, s: 0.575, v: 0.416 },
      { h: 131, s: 0.575, v: 0.416 },
    ];
    const actual = triadic(base);

    expect(actual).toEqual(expected);
  });

  test("triadic should return an array of complentary colors, reformatting to the given color space.", () => {
    const { triadic } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { r: 56, g: 45, b: 106 },
      { r: 106, g: 56, b: 45 },
      { r: 45, g: 106, b: 56 },
    ];
    const actual = triadic(base, "rgb");

    expect(actual).toEqual(expected);
  });

  test("triadic should throw when passed invalid arguments.", () => {
    const { triadic } = Harmonies;

    const badColor = null;
    expect(() => {
      triadic(badColor);
    }).toThrow();

    const goodColor = "#FFFFFF";
    const badFormat = "CMYK";
    expect(() => {
      triadic(goodColor, badFormat);
    }).toThrow();
  });

  test("tetradic should return an array of complentary colors, defaulting to HSV.", () => {
    const { tetradic } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { h: 251, s: 0.575, v: 0.416 },
      { h: 341, s: 0.575, v: 0.416 },
      { h: 71, s: 0.575, v: 0.416 },
      { h: 161, s: 0.575, v: 0.416 },
    ];
    const actual = tetradic(base);

    expect(actual).toEqual(expected);
  });

  test("tetradic should return an array of complentary colors, reformatting to the given color space.", () => {
    const { tetradic } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { r: 56, g: 45, b: 106 },
      { r: 106, g: 45, b: 64 },
      { r: 95, g: 106, b: 45 },
      { r: 45, g: 106, b: 87 },
    ];
    const actual = tetradic(base, "rgb");

    expect(actual).toEqual(expected);
  });

  test("tetradic should throw when passed invalid arguments.", () => {
    const { tetradic } = Harmonies;

    const badColor = null;
    expect(() => {
      tetradic(badColor);
    }).toThrow();

    const goodColor = "#FFFFFF";
    const badFormat = "CMYK";
    expect(() => {
      tetradic(goodColor, badFormat);
    }).toThrow();
  });

  test("analagous should return an array of complentary colors, defaulting to HSV.", () => {
    const { analagous } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { h: 251, s: 0.575, v: 0.416 },
      { h: 281, s: 0.575, v: 0.416 },
      { h: 311, s: 0.575, v: 0.416 },
      { h: 341, s: 0.575, v: 0.416 },
    ];
    const actual = analagous(base);

    expect(actual).toEqual(expected);
  });

  test("analagous should return an array of complentary colors, reformatting to the given color space.", () => {
    const { analagous } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { r: 56, g: 45, b: 106 },
      { r: 87, g: 45, b: 106 },
      { r: 106, g: 45, b: 95 },
      { r: 106, g: 45, b: 64 },
    ];
    const actual = analagous(base, "rgb");

    expect(actual).toEqual(expected);
  });

  test("analagous should throw when passed invalid arguments.", () => {
    const { analagous } = Harmonies;

    const badColor = null;
    expect(() => {
      analagous(badColor);
    }).toThrow();

    const goodColor = "#FFFFFF";
    const badFormat = "CMYK";
    expect(() => {
      analagous(goodColor, badFormat);
    }).toThrow();
  });

  test("stepSixty should return an array of complentary colors, defaulting to HSV.", () => {
    const { stepSixty } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { h: 251, s: 0.575, v: 0.416 },
      { h: 311, s: 0.575, v: 0.416 },
      { h: 11, s: 0.575, v: 0.416 },
      { h: 71, s: 0.575, v: 0.416 },
      { h: 131, s: 0.575, v: 0.416 },
      { h: 191, s: 0.575, v: 0.416 },
    ];
    const actual = stepSixty(base);

    expect(actual).toEqual(expected);
  });

  test("stepSixty should return an array of complentary colors, reformatting to the given color space.", () => {
    const { stepSixty } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { r: 56, g: 45, b: 106 },
      { r: 106, g: 45, b: 95 },
      { r: 106, g: 56, b: 45 },
      { r: 95, g: 106, b: 45 },
      { r: 45, g: 106, b: 56 },
      { r: 45, g: 95, b: 106 },
    ];
    const actual = stepSixty(base, "rgb");

    expect(actual).toEqual(expected);
  });

  test("stepSixty should throw when passed invalid arguments.", () => {
    const { stepSixty } = Harmonies;

    const badColor = null;
    expect(() => {
      stepSixty(badColor);
    }).toThrow();

    const goodColor = "#FFFFFF";
    const badFormat = "CMYK";
    expect(() => {
      stepSixty(goodColor, badFormat);
    }).toThrow();
  });

  test("analagousTight should return an array of complentary colors, defaulting to HSV.", () => {
    const { analagousTight } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { h: 251, s: 0.575, v: 0.416 },
      { h: 266, s: 0.575, v: 0.416 },
      { h: 281, s: 0.575, v: 0.416 },
      { h: 296, s: 0.575, v: 0.416 },
      { h: 311, s: 0.575, v: 0.416 },
      { h: 326, s: 0.575, v: 0.416 },
      { h: 341, s: 0.575, v: 0.416 },
    ];
    const actual = analagousTight(base);

    expect(actual).toEqual(expected);
  });

  test("analagousTight should return an array of complentary colors, reformatting to the given color space.", () => {
    const { analagousTight } = Harmonies;

    const base = { r: 56, g: 45, b: 106 };

    const expected = [
      { r: 56, g: 45, b: 106 },
      { r: 72, g: 45, b: 106 },
      { r: 87, g: 45, b: 106 },
      { r: 102, g: 45, b: 106 },
      { r: 106, g: 45, b: 95 },
      { r: 106, g: 45, b: 80 },
      { r: 106, g: 45, b: 64 },
    ];
    const actual = analagousTight(base, "rgb");

    expect(actual).toEqual(expected);
  });

  test("analagousTight should throw when passed invalid arguments.", () => {
    const { analagousTight } = Harmonies;

    const badColor = null;
    expect(() => {
      analagousTight(badColor);
    }).toThrow();

    const goodColor = "#FFFFFF";
    const badFormat = "CMYK";
    expect(() => {
      analagousTight(goodColor, badFormat);
    }).toThrow();
  });
});
