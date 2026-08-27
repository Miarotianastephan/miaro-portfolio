/* 
    Nodes modules
*/
import { motion } from "motion/react"

/* 
    Components
*/
import { Button } from "@/components/ui/Button";

/* 
    Hooks 
*/
import { useState } from "react";

/* 
Assets
*/
import { SparkleIcon, MailIcon } from 'lucide-react';
import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { ContactDialog } from "@/components/ContactDialog";

export const Header = () => {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <motion.div className="space-y-2"
                initial={{ x:-20, opacity:0 }}
                animate={{ x:0, opacity:1 }}
            >
                <div className="flex items-center gap-2 text-primary font-semibold tracking-tight">
                    <SparkleIcon size={20}/>

                    <p>Full Stack Orchestrator</p>
                </div>

                <h1 className="text-5xl font-bold tracking-tight text-on-background md-text-7xl">
                    Miarotiana <span className="text-primary">Ramanantsoa</span>
                </h1>

                <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                    I am a passionate Full Stack Developer with a strong focus on building scalable and efficient web applications. With expertise in both front-end and back-end technologies, I strive to create seamless user experiences while ensuring robust functionality. My goal is to contribute to innovative projects that make a positive impact in the digital world.
                </p>
            </motion.div>
            <motion.div className="flex gap-4"
                initial={{ x:20 , opacity:0 }}
                animate={{ x:0 , opacity:1 }}
            >
                <Button 
                    onClick={() => {setDialogOpen(true)}}
                >
                    <MailIcon/>
                    Let's connect
                </Button> 

                <ContactDialog open={dialogOpen} onOpen={() => {
                    setDialogOpen(false)
                }}/>

                <div className="flex gap-2">
                    <Button 
                        variant='secondary' 
                        size='icon'
                        asChild
                    >
                        <a href="https://github.com/Miarotianastephan" target="_blank" aria-label="miarotiana ramanantsoa's GitHub">
                            <GithubIcon/>
                        </a>
                    </Button>
                    <Button 
                        variant='secondary' 
                        size='icon'
                        asChild
                    >
                        <a href="https://www.linkedin.com/in/ramanantsoa-sam/" target="_blank" aria-label="miarotiana ramanantsoa's LinkedIn">
                            <LinkedinIcon/>
                        </a>
                    </Button>
                </div>
            </motion.div>
        </header>
    )
}