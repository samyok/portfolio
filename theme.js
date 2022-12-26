import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const breakpoints = {
  sm: "700px",
  md: "1400px",
  lg: "1750px",
  xl: "1500px",
  "2xl": "1536px",
};

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading:
      '"Readex Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    body: 'Lato,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  styles: {
    global: (props) => ({
      body: {
        background: mode("background", "backgroundDark")(props),
      },
    }),
  },
  colors: {
    pinkBkg: "#ECE4EE",
    pinkUnderline: "rgba(152, 7, 203, .2)",
    pinkPure: "#9807CB",
    pinkPureDark: "#6D0599",
    pinkUnderlineDark: "rgba(152, 7, 203, .75)",
    background: "#F0F0F0",
    backgroundDark: "#1A1A1A",
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "500",
        lineHeight: ".6",
        letterSpacing: "-0.055em",
      },
    },
    Link: {
      variants: {
        highlighted: ({ colorMode }) => ({
          display: "inline-block",
          position: "relative",
          zIndex: 1,
          _hover: {
            textDecoration: "none",
            "&::after": {
              transform: "scaleY(3)",
              opacity: 0.5,
              bottom: "0.1em",
            },
          },
          _active: {
            textDecoration: "none",
          },
          "&::after": {
            content: '" "',
            width: "calc(100% + .2em)",
            position: "absolute",
            bottom: "0.2em",
            left: "-.1em",
            height: "0.4em",
            background: colorMode === "light" ? "pinkUnderline" : "pinkUnderlineDark",
            borderRadius: "10em",
            zIndex: -1,
            transformOrigin: "bottom",
            transitionDuration: "75ms",
          },
        }),
        "highlighted-hover": ({ colorMode }) => ({
          display: "inline-block",
          position: "relative",
          zIndex: 1,
          textDecoration: "none",
          _hover: {
            textDecoration: "none",
          },
          "&::after": {
            content: '" "',
            width: "calc(100% + .2em)",
            position: "absolute",
            left: "-.1em",
            height: "0.4em",
            background: colorMode === "light" ? "pinkUnderline" : "pinkUnderlineDark",
            borderRadius: "10em",
            zIndex: -1,
            transformOrigin: "bottom",
            transitionDuration: "75ms",
            transform: "scaleY(3)",
            opacity: 0.5,
            bottom: "0.1em",
          },
        }),
      },
    },
  },
});

export default theme;
