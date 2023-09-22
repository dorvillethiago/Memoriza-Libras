import MainPictureAndText from "../components/MainPictureAndText";
import {motion} from "framer-motion";
import { Letter } from "../letterUtils";
import {useEffect, useState} from "react";
import {getWindowDimensions} from "../../../utils/getWindowDimensions.ts";

interface MainPictureAndTextProps {
    letter: Letter
}

export default function MainPictureContainer({letter}: MainPictureAndTextProps) {

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
        initial={{ y: 100, opacity: 0}}
        animate={{ y: 0, opacity: 100}}
        className="w-full flex justify-center px-10">
            <MainPictureAndText letter={letter} mobile={windowDimensions.width < 690}/>
        </motion.div>
    )
}