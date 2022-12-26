import { Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { IconType } from "react-icons";

type WideIconButtonProps = {
  href: string;
  icon: IconType;
  label: string;
};
const WideIconButton = ({ icon, label, href }: WideIconButtonProps): JSX.Element => {
  const GRID_COLOR = useColorModeValue("rgba(0, 0, 0, 0.05)", "rgba(255, 255, 255, 0.025)");
  const [hovered, setHovered] = useState(false);
  const onClick = () => {
    window.open(href, "_blank");
  };

  const IconComponent = icon;
  return (
    <Flex
      alignItems={"center"}
      border={`1px solid ${GRID_COLOR}`}
      bg={useColorModeValue("background", "backgroundDark")}
      px={2}
      py={2}
      my={2}
      mx={4}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      cursor={"pointer"}
      borderRadius={40}>
      <IconComponent
        size={24}
        style={{
          margin: 4,
        }}
      />
      <Text fontSize={"lg"} display={["none", "inline-block"]} pl={1} pr={3}>
        <Link variant={hovered ? "highlighted-hover" : "highlighted"} href={`#:~:text=${label}`}>
          {label}
        </Link>
      </Text>
    </Flex>
  );
};

export default WideIconButton;
