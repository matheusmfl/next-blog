import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#FFF",
  "--my-black": "#1a1a1a",
  "--papafam-brand": "#F7AB0A",
  "--my-red": "#DB4437",
  "--my-yellow": "#F4B400",
  "--my-green": "#0F9D58",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand*/
  "--brand-primary": props["--papafam-brand"],

  /* Default Button */
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--papafam-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* Stete */
  "--state-info-color": props["--papafam-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--papafam-brand"],
});
