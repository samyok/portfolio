import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading:
      '"Readex Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    body: 'Lato,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  colors: {
    pinkBkg: "#ECE4EE",
    pinkUnderline: "rgba(152, 7, 203, .25)",
    pinkPure: "#9807CB",
    pinkPureDark: "#6D0599",
    pinkUnderlineDark: "rgba(152, 7, 203, .85)",
    background: "#F0F0F0",
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
          _hover: {
            textDecoration: "none",
            "&::after": {
              transform: "scaleY(2.5)",
              opacity: 0.6,
            },
          },
          "&::after": {
            content: '" "',
            width: "calc(100% + .3em)",
            position: "absolute",
            bottom: "0.1em",
            left: "-.15em",
            height: "0.5em",
            background: colorMode === "light" ? "pinkUnderline" : "pinkUnderlineDark",
            borderRadius: "10em",
            zIndex: -1,
            transformOrigin: "bottom",
            transitionDuration: "100ms",
          },
        }),
      },
    },
  },
});

export default theme;
