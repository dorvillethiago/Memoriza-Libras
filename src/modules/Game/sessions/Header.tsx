import BackArrow from "../components/BackArrow.tsx";
import {motion} from "framer-motion";

export default function Header() {
    
    return (
        <motion.header
            initial={{ y: 100, opacity: 0}}
            animate={{ y: 0, opacity: 100}}
            className={`w-full p-6 flex-col`}>
            <BackArrow/>
        </motion.header>
    )
}