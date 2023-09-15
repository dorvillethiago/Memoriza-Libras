import { useState, useEffect } from 'react';
import Logo from "../components/Logo.tsx";
import { motion } from "framer-motion";
import {getWindowDimensions} from "../../../utils/getWindowDimensions.ts";

export default function LogoContainer() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <motion.div
            className={`cursor-pointer`}
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 100}}>
            <Logo mobile={windowDimensions.width < 730}/>
        </motion.div>
    )
}