import {useEffect, useState} from "react";
import {chakra, Flex} from "@chakra-ui/react";
import MyHeading from "../components/MyHeading";
import styles from "../styles/animatedBlink.module.css";

const HEADING_TEXTS_AND_COLORS = [
    {
        text: 'code',
        color: 'pink.500'
    },
    {
        text: 'teach',
        color: 'blue.500'
    },
    {
        text: 'design',
        color: 'green.500',
    },
    {
        text: "tutor",
        color: 'purple.500'
    }
].map(a => ({...a, text: a.text + Array(25).fill(' ').join('')}))
const totalLetters = HEADING_TEXTS_AND_COLORS
    .map(a => a.text.length * 2)
    .reduce((a, b) => a + b);

export function AnimatedText({wordChangedCallback}) {

    const [currentIndex, setCurrentIndex] = useState(0)


    useEffect(() => {
        const loop = setInterval(() => {
            setCurrentIndex(pv => {
                return (pv + 1) % totalLetters
            })
        }, 55);

        return () => {
            clearInterval(loop);
        }
    }, [])
    let word = getLettersFromNumber(currentIndex, wordChangedCallback);

    return <Flex py={20} justifyContent={"center"} alignItems={'center'} px={[2, 5]}>
        <MyHeading size={'3xl'} textAlign={'center'}>
            I <chakra.span
            color={word.color}>{word.text}</chakra.span>
        </MyHeading>
        <MyHeading display={['none', 'block']}>
            <chakra.span color={word.color} mt={-9} mr={-50} display={'block'} className={styles.blink}>_</chakra.span>
        </MyHeading>
        <MyHeading display={['block', 'none']}>
            <chakra.span color={word.color} mt={-9} display={'block'} className={styles.blink} mb={-30} fontWeight={400}>|</chakra.span>
        </MyHeading>
    </Flex>
}

function getLettersFromNumber(index, wordChangedCallback) {

    let wordIndex = 0;
    while (wordIndex < HEADING_TEXTS_AND_COLORS.length) {
        // get first wordIndex words and sum them
        let cSum = HEADING_TEXTS_AND_COLORS
            .filter((_, i) => i <= wordIndex)
            .map(a => a.text.length * 2)
            .reduce((a, b) => a + b)
        if (cSum > index) break;
        wordIndex++;
    }

    let letterIndex = index - (wordIndex > 0 ? HEADING_TEXTS_AND_COLORS
        .map(a => a.text.length * 2)
        .reduce((a, v, i) => i < wordIndex ? a + v : a) : 0);
    if (letterIndex === 0) wordChangedCallback(wordIndex);

    let currentWord = HEADING_TEXTS_AND_COLORS[wordIndex].text;
    // https://www.desmos.com/calculator/zdkieeur3y
    let showLetters = currentWord.length - Math.abs(letterIndex - currentWord.length);
    return {
        color: HEADING_TEXTS_AND_COLORS[wordIndex].color,
        text: HEADING_TEXTS_AND_COLORS[wordIndex].text.substr(0, showLetters)
    }
}
