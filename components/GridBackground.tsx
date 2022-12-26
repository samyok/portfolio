import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const GRID_SIZE = 120;
const GridBackground = (): JSX.Element => {
  const GRID_COLOR = useColorModeValue("rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.025)");
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const [offset, setOffset] = useState(windowWidth % GRID_SIZE);

  useEffect(() => {
    // on resize, update offset
    const handleResize = () => {
      setOffset(window.innerWidth % GRID_SIZE);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Box
      pos={"absolute"}
      top={0}
      left={0}
      zIndex={-1}
      width={"100%"}
      height={"100%"}
      minH={"100vh"}
      backgroundSize={`${GRID_SIZE}px ${GRID_SIZE}px`}
      backgroundPosition={`${offset / 2}px ${GRID_SIZE / 2}px`}
      backgroundImage={`linear-gradient(to right, ${GRID_COLOR} 1px, transparent 1px), linear-gradient(to bottom, ${GRID_COLOR} 1px, transparent 1px)`}
    />
  );
};

export default GridBackground;
