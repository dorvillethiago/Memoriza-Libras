import ButtonRedirect from "../components/ButtonRedirect.tsx";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import {getWindowDimensions} from "../../../utils/getWindowDimensions.ts";

export default function ButtonSequence() {

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
            className={`flex flex-col gap-8`}>
            <ButtonRedirect mobile={windowDimensions.width < 400}
                            page={""}
                            title={"JOGAR"}/>
            <ButtonRedirect mobile={windowDimensions.width < 400}
                            page={""}
                            title={"COMO JOGAR"}/>
            <ButtonRedirect mobile={windowDimensions.width < 400}
                            page={"/credits"}
                            title={"CRÉDITOS"}/>
        </motion.div>
    )
}