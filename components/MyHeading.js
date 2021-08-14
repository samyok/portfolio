import {Heading} from "@chakra-ui/react";

export default function MyHeading({children, ...props}) {
    return <Heading letterSpacing={'-0.05em'} as="h1" size="4xl" fontWeight={700} {...props}>{children}</Heading>
}
