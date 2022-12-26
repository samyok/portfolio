import { Box, Heading, useColorModeValue, useToken } from "@chakra-ui/react";

const Highlighter = ({ color, opacity, ...props }) => (
  <svg
    width={"922"}
    height={"197"}
    viewBox={"0 0 922 197"}
    fill={"none"}
    xmlns={"http://www.w3.org/2000/svg"}
    {...props}>
    <path
      d={
        "M765.638 192.482C814.769 197.547 926.973 188.83 921.44 151.017C918.101 128.198 899.494 8.40373 797.638 17.1359C737.482 22.293 613.824 24.5611 549.516 17.1359C-17.3624 -48.3183 7.32759 102.72 1.6377 127.182C-11.4935 183.636 76.06 206.494 189.638 192.482C267.183 182.915 594.932 192.482 644.284 192.482C693.636 192.482 716.507 187.417 765.638 192.482Z"
      }
      fill={color}
      fillOpacity={opacity}
    />
  </svg>
);

const HighlightedHeader = ({ children, ...props }) => {
  const highlighterColor = useToken("colors", "pinkPure");
  const highlighterOpacity = useColorModeValue("0.10", "0.2");
  return (
    <Box {...props}>
      <Box pos={"relative"}>
        <Highlighter
          color={highlighterColor}
          opacity={highlighterOpacity}
          style={{
            position: "absolute",
            width: 600,
            top: "50%",
            left: -50,
            zIndex: -1,
            transform: "translateY(-50%)",
          }}
        />
        <Heading fontSize={[45, 72]}>{children}</Heading>
      </Box>
    </Box>
  );
};

export default HighlightedHeader;
