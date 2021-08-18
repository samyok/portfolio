import {useState} from "react";
import {Box, chakra, Flex, SlideFade, Tag, TagCloseButton, TagLabel, useDisclosure} from "@chakra-ui/react";
import MyHeading from "./MyHeading";
import {Card} from "./card";

export function Project({projSection}) {
    const [selectedTags, setSelectedTags] = useState([]);

    const tagControl = useDisclosure({defaultIsOpen: true});

    const {isOpen, onToggle} = useDisclosure({
        defaultIsOpen: !projSection.collapsible
    })

    let tags = [...new Set(projSection.data.map(b => b.tags).flat())]
    return <Box>
        <Flex alignItems={'center'} justifyContent={'center'} mx={[2, 5, 20]} pt={20}
              pb={2}>
            <MyHeading display={'inline'}
                       px={3}
                       py={2}
                       borderRadius={10}
                // bg={'white'}
                       size={'2xl'}>{projSection.title}</MyHeading>
        </Flex>
        <chakra.p px={[2, 5, 20]} textAlign={'center'} py={2} color={'gray.700'}>{projSection.details}</chakra.p>
        <SlideFade offsetY={'20px'} animateOpacity in={tagControl.isOpen}>
            <Flex mb={12} px={[2, 5, 20]} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
                {
                    tags.map(a =>
                        <Tag key={"tag:" + a}
                             size="md"
                             colorScheme="blackAlpha"
                             bg={selectedTags.includes(a) ? 'rgba(0,0,0,0.3)' : undefined}
                             color={selectedTags.includes(a) ? 'white' : undefined}
                             _hover={{
                                 cursor: "pointer",
                                 bg: "rgba(0,0,0,0.1)"
                             }}
                             onClick={() => {
                                 window?.umami?.trackEvent(`tag.${a}.click`, "tag")
                                 setSelectedTags(p => {
                                     let pv = [...p];
                                     if (pv.includes(a)) {
                                         pv.splice(pv.indexOf(a), 1);
                                     } else {
                                         pv.push(a);
                                     }
                                     return pv;
                                 })
                             }}
                             mr={2} mt={2}>
                            <TagLabel fontWeight={'extrabold'}>{a}</TagLabel>
                            {selectedTags.includes(a) && <TagCloseButton/>}
                        </Tag>)
                }
            </Flex>
        </SlideFade>
        <Flex flexWrap={'wrap'} justifyContent={'center'}>
            {projSection.data.map(project =>
                <Card
                    filterTags={selectedTags}
                    collapsible={projSection.collapsible ?? false}
                    project={project}
                    key={JSON.stringify(project)}
                />)}
        </Flex>

    </Box>
}
