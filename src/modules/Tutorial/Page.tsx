import {motion} from "framer-motion";
import BackArrow from "./components/BackArrow";

export default function Tutorial() {
    return (
        <div className={`flex w-screen flex-col items-center min-h-[700px]`} style={{ height: "100dvh" }}>
            <motion.header
                initial={{ y: 100, opacity: 0}}
                animate={{ y: 0, opacity: 100}}
                className={`w-full p-6 flex flex-row`}>
                <BackArrow/>
            </motion.header>
            <div className="h-full flex items-center justify-center">
                <iframe className="aspect-video w-[70vw]" src="https://www.youtube.com/embed/aLwaJNP8h_0" title="Tutorial do Memoriza Libras" allowFullScreen></iframe>
            </div>
        </div>
    )
}

    