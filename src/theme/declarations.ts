const colors = {
  primary: {
    500: "#181817",
    400: "#666565",
    300: "#E2BEAE",
    200: "#9A9A9A",
    100: "#F8F8F7",
  },
  secondary: {
    200: "#563C2D",
    100: "#E85A1E",
  },

  white: "#FFFFFF",
};

/**
 * @param maxWidth max width of media query
 * @param minWidth max width of media query
 */

const customMediaQuery = (minWidth: number, maxWidth: number) =>
  `@media only screen and (min-width: ${minWidth}px)  and  (max-width: ${maxWidth}px)`;
const extraMediaQuery = (minWidth: number) =>
  `@media only screen and (min-width: ${minWidth}px)`;

interface Media {
  custom: (minWidth: number, maxWidth: number) => string;
  mobile: string;
  tablet: string;
  smallLaptop: string;
  largeLaptop: string;
  extraLargeLaptop: string;
}

const media: Media = {
  custom: customMediaQuery,
  /**
   * Mobile devices
   */
  mobile: customMediaQuery(250, 480),
  /**
   * iPads, Tablets
   */
  tablet: customMediaQuery(481, 768),
  /**
   * fairly large displays like small laptops
   */
  smallLaptop: customMediaQuery(769, 1024),
  /**
   * large laptops
   */
  largeLaptop: customMediaQuery(1025, 1200),
  /**
   * extra large laptops
   */
  extraLargeLaptop: extraMediaQuery(1201),
};

/**
 *
 * @param val  size as number(unitless)
 */

const customFontSize = (val: number) => `${val}em`;
const customRadius = (val: number) => `${val}px`;
const customSpacing = (val: number) => `${val}px`;
const customBorder = (pixel: string, color: string) =>
  `${pixel} solid ${color}`;
const circleBorder = () => `50%`;
const doubleSpacing = (verVal: number, horVal: number) =>
  `${verVal}px ${horVal}px`;

const fontSize = {
  custom: customFontSize,
  small: customFontSize(0.7),
  normal: customFontSize(1),
  heading: customFontSize(1.5),
  hero: customFontSize(2.5),
  navlink: customFontSize(0.4),
};

const spacing = {
  normal: customSpacing(16),
  medium: customSpacing(24),
  large: customSpacing(32),
  double: doubleSpacing,
  custom: customSpacing,
};

const fontFamily = {
  regular: "Avenir",
  avenirBlack: "AvenirBlack",
  avenirRoman: "AvenirRoman",
};

const borderRadius = {
  default: "5px",
  primary: "10px",
  custom: customRadius,
  round: circleBorder,
};

const border = {
  custom: customBorder,
  input: "1px solid #9a9a9a",
};

export { colors, media, fontSize, borderRadius, spacing, border, fontFamily };
