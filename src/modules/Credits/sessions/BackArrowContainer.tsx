import BackArrow from "../components/BackArrow";
import { motion } from "framer-motion";
export default function BackArrowContainer() {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0}}
            animate={{ y: 0, opacity: 100}}
            className="p-6">
            <BackArrow/>
        </motion.div>
    )
}