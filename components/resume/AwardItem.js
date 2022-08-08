import { Collapse, Text } from "@chakra-ui/react";

export const AwardItem = ({ item, selectedTags }) => {
  const isSelected = !item.tags || selectedTags.some((tag) => item.tags.includes(tag));

  if (isSelected) return <Text as={"span"}>{item.name}</Text>;
  else return null;
};
