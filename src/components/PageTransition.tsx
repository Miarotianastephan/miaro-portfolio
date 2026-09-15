/* 
    Nodes modules
*/
import { motion } from "motion/react"

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
        >
            {children}
        </motion.div>
    )
}