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
        <header className="md:min-h-screen flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
            <motion.div className="space-y-4 md:space-y-8"
                initial={{ x:-20, opacity:0 }}
                animate={{ x:0, opacity:1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="flex items-center gap-2 text-primary font-semibold tracking-tight">
                    <SparkleIcon size={20}/>

                    <p>Product Developer</p>
                </div>

                <h1 className="text-5xl font-bold tracking-tight text-on-background md-text-7xl">
                    Miarotiana <span className="text-primary">Ramanantsoa</span>
                </h1>
                {/* 

                */}
                <div className="text-3xl md:text-5xl flex flex-col gap-12 text-on-secondary-container max-w-max leading-tighter tracking-tight">
                    <span>
                        I turn ideas into digital products
                    </span>
                    <span className="text-tertiary">
                        Fullstack Javascript & Typescript developer<br/>
                        building reliable systems and thoughtful interfaces.
                    </span>
                </div>
            </motion.div>
            <motion.div className="flex gap-4 "
                initial={{ x:20 , opacity:0 }}
                animate={{ x:0 , opacity:1 }}
                transition={{ duration: 0.55 }}
            >
                <Button 
                    className=""
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