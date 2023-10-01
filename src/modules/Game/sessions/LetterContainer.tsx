import LetterButton from "../components/LetterButton"
import { motion } from "framer-motion";
import { Alphabet } from "../letterUtils.ts";
import { useEffect, useState } from "react";
import { getWindowDimensions } from "@utils/getWindowDimensions.ts";
import { useSelector } from 'react-redux'
import { RootState } from '@/store.ts';

export default function LetterContainer() {

    const letter = useSelector((state: RootState) => state.letter)

    const AlphabetList = Alphabet.split('')

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0}}
            animate={{ y: 0, opacity: 50}}
            className={`flex flex-wrap justify-center my-8 ${windowDimensions.width <= 689 ? 'mx-2 gap-[5px] max-w-[500px]' : 'mx-8 gap-[10px] max-w-[700px]'}`}>
            {AlphabetList.map((char: string, index: number) =>
                <LetterButton mobile={windowDimensions.width <= 689} key={index} letter={char} onClick={() => console.log({letter})}/>
            )}
        </motion.div>
    )
}