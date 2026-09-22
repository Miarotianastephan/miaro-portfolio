/* 
    Nodes modules
*/
import { motion } from "motion/react"
import { useState } from "react";

/* 
Components
*/
import { ContactDialog } from "@/components/ContactDialog"
import { Button } from "@/components/ui/Button";
import { ExperienceCarousel } from "@/components/professional-experience/ExperienceCarousel";

/* 
    Hooks 
*/

/* 
Assets
*/
import { MailIcon } from 'lucide-react';
import full_pc from '@/assets/miaro_pc_w_bg.png';
import face from '@/assets/miaro_face_w_bg.png';

export const MoreAbout = () => {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <div className="flex min-h-screen w-full items-center justify-center px-2 py-2 md:py-8 md:px-6 lg:px-8">
            <div className="grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[260px_auto_auto]">
                <motion.div
                    className="flex flex-col justify-between rounded-2xl p-5 md:col-span-1 md:row-span-1 bg-primary text-on-primary tracking-tight "
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <span className="flex justify-between items-center">
                        <h1 className="text-7xl font-semibold md:text-8xl">+3</h1>
                        <img    
                                className='w-18 h-18 md:w-28 md:h-28 object-cover rounded-xl'
                                src={face} alt="miarotiana's avatar" 
                        />
                    </span>
                    <p className="mt-2 text-sm md:text-base">Years of experiences.</p>
                </motion.div>

                <motion.div
                    className="flex flex-col gap-6 justify-between rounded-2xl bg-surface-dim-bright p-5 md:col-span-2 md:row-span-1 text-right"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.45 }}
                >
                    <span>
                        <h1 className="text-lg font-semibold md:text-xl">More about me and my experiences</h1>
                        <p className="mt-3 text-sm md:text-base">
                            These are some of my professional and educational series.
                        </p>
                        <p className="mt-2 text-sm md:text-base">Enjoy it, and why not <b>contact me now.</b></p>
                    </span>

                    <span>
                        <Button 
                            variant={"secondary"}
                            onClick={() => {setDialogOpen(true)}}
                        >
                            <MailIcon/>
                            Let's connect
                        </Button> 
                    </span>

                    <ContactDialog open={dialogOpen} onOpen={() => {
                        setDialogOpen(false)
                    }}/>
                </motion.div>

                {/* Section du bento pour le caroussel des experiences pro */}
                <motion.div
                    className="rounded-2xl p-5 md:col-span-2 md:row-span-1 bg-primary-container text-on-primary-container"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <ExperienceCarousel />
                </motion.div>

                <motion.div
                    className="flex items-center justify-center rounded-2xl p-5 md:col-span-1 md:row-span-1 bg-surface-dim"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.55 }}
                >
                    <img    
                            className='w-18 h-18 md:w-40 md:h-40 object-cover rounded-xl'
                            src={full_pc} alt="miarotiana's avatar" 
                    />
                </motion.div>

                {/* A boucler pour factoriser le code */}
                <motion.div
                    className="md:min-h-62.5 flex flex-col justify-between rounded-2xl bg-surface-dim-bright p-5 md:col-span-1 md:row-span-1"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span>
                        <h1 className="text-lg font-semibold md:text-xl">Master 1</h1>
                        <p className="mt-3 text-sm md:text-base">
                            Master 1, science and engineering
                        </p>
                    </span>
                    <p className="mt-2 text-sm md:text-base">IT University - 2025</p>
                </motion.div>

                <motion.div
                    className="max-h-62.5 flex flex-col justify-between rounded-2xl bg-surface-dim-bright p-5 md:col-span-1 md:row-span-1"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.65 }}
                >
                    <span>
                        <h1 className="text-lg font-semibold md:text-xl">Licence</h1>
                        <p className="mt-3 text-sm md:text-base">
                            Application Development and Application Programmation Degree's
                        </p>
                    </span>
                    <p className="mt-2 text-sm md:text-base">IT University - 2024</p>
                 </motion.div>

                <motion.div
                    className="max-h-62.5 flex flex-col justify-between rounded-2xl bg-surface-dim-bright p-5 md:col-span-1 md:row-span-1"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <span>
                        <h1 className="text-lg font-semibold md:text-xl">Scientific Bac</h1>
                        <p className="mt-3 text-sm md:text-base">
                            Bachelor's Scientific Degree
                        </p>
                    </span>
                    <p className="mt-2 text-sm md:text-base">2021</p>
                </motion.div>

            </div>
        </div>
    )
}