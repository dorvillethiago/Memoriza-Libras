import MainPictureAndText from "../components/MainPictureAndText";
import {motion} from "framer-motion";
import { Letter } from "../letterUtils";

interface MainPictureAndTextProps {
    letter: Letter
}

export default function MainPictureContainer({letter}: MainPictureAndTextProps) {
    return (
        <motion.div 
        initial={{ y: 100, opacity: 0}}
        animate={{ y: 0, opacity: 100}}
        className="w-full flex justify-center px-10">
            <MainPictureAndText letter={letter}/>
        </motion.div>
    )
}