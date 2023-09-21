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
            className={`flex flex-col gap-8 items-center`}>
            {windowDimensions.width > 730 &&
            <div className={`flex items-center gap-8 flex-col`}>
                <div className={`flex flex-row gap-8`}>
                    <ButtonRedirect page={"/game"}
                                    title={"JOGAR"}/>
                    <ButtonRedirect page={""}
                                    title={"TUTORIAL"}/>
                </div>
                <ButtonRedirect page={"/credits"}
                                title={"CRÉDITOS"}/>
            </div>
            }
            {windowDimensions.width <= 730 &&
                <div className={`flex items-center gap-8 flex-col`}>
                    <ButtonRedirect mobile={true}
                                    page={"/game"}
                                    title={"JOGAR"}/>
                    <ButtonRedirect mobile={true}
                                    page={""}
                                    title={"TUTORIAL"}/>
                    <ButtonRedirect mobile={true}
                                    page={"/credits"}
                                    title={"CRÉDITOS"}/>
                </div>
            }
        </motion.div>
    )
}