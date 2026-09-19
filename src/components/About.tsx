/* 
    Node modules
*/
import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

/* 
    Components
*/
import { ContactDialog } from "@/components/ContactDialog";

/* 
    Assets
*/
import full from '@/assets/miaro_full_w_bg.png';
import {
    Nest,
    GitHub,
    Express,
    NodeJs,
    PostgreSQL,
    React as ReactIcon,
    TypeScript,
} from '@/assets/TechStackIcons';


const processSteps = [
    {
        id: 'discover',
        label: 'Discover',
        description: 'Understand the problem.',
    },
    {
        id: 'design',
        label: 'Design',
        description: 'Shape the right solution.',
    },
    {
        id: 'build',
        label: 'Build',
        description: 'Turn ideas into working code.',
    },
    {
        id: 'test',
        label: 'Test',
        description: 'Iterate and improve continuously.',
    },
    {
        id: 'ship',
        label: 'Ship',
        description: 'Bring the product to production.',
    },
];


const stackBadges = [
    {
        id: 'react',
        label: 'React',
        content: <ReactIcon className="h-10 w-10" />,
    },
    {
        id: 'typescript',
        label: 'TypeScript',
        content: <TypeScript className="h-10 w-10" />,
    },
    {
        id: 'node',
        label: 'Node.js',
        content: <NodeJs className="h-10 w-10" />,
    },
    {
        id: 'express',
        label: 'Express',
        content: (
            <Express/>
        ),
    },
    {
        id: 'nestjs',
        label: 'NestJS',
        content: (
            <Nest/>
        ),
    },
    {
        id: 'postgresql',
        label: 'PostgreSQL',
        content: <PostgreSQL className="h-10 w-10" />,
    },
    {
        id: 'github',
        label: 'GitHub',
        content: (
            <GitHub className='h-10 w-10'/>
        ),
    },
];


const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};


const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: 'easeOut',
        },
    },
};


export const About = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <main className="min-h-screen w-full flex items-center justify-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.15,
                }}
                className="
                    grid
                    w-full
                    grid-cols-1
                    gap-4
                    md:grid-cols-12
                    md:auto-rows-[minmax(240px,auto)]
                "
            >

                {/* =====================================================
                    01 — LOCATION
                    Desktop: 4 / 12
                ====================================================== */}

                <motion.article
                    variants={cardVariants}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="
                        group
                        col-span-1
                        flex
                        min-h-75
                        flex-col
                        justify-between
                        rounded-4xl
                        bg-primary-container
                        p-6
                        text-on-primary-container

                        md:col-span-5
                        lg:col-span-4
                    "
                >
                    <div className="flex items-start justify-between gap-6">

                        <img
                            className="
                                h-20
                                w-20
                                rounded-2xl
                                object-cover

                                md:h-24
                                md:w-24
                            "
                            src={full}
                            alt="Miarotiana's avatar"
                        />

                        <div className="text-right tracking-tight">
                            <span className="block text-xs opacity-70">
                                Based in
                            </span>

                            <span className="block text-sm font-medium md:text-base">
                                Antananarivo, Madagascar
                            </span>
                        </div>

                    </div>


                    <div>
                        <span
                            className="
                                mb-2
                                block
                                text-xs
                                uppercase
                                tracking-[0.18em]
                                opacity-60
                            "
                        >
                            Availability
                        </span>

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-base
                                font-medium
                                tracking-tight
                            "
                        >
                            <motion.span
                                aria-hidden="true"
                                className="w-2 h-2 bg-primary rounded-full"
                                animate={{
                                    scale: [1, 1.35, 1],
                                    boxShadow: [
                                        "0px 0px 0px bg-blue-500",
                                        "0px 0px 8px bg-blue-800",
                                        "0px 0px 0px bg-blue-500"
                                    ]
                                }}
                                transition={{
                                    duration: 0.9, // duree de l'animation
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 2, // entre chaque repetition
                                    delay: 2 // attente avant debut animation
                                }}
                            />

                            <span>
                                Open to collaborations
                            </span>
                        </div>
                    </div>
                </motion.article>


                {/* =====================================================
                    02 — PROCESS
                    Desktop: 8 / 12
                ====================================================== */}

                <motion.article
                    variants={cardVariants}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="
                        col-span-1
                        flex
                        min-h-75
                        flex-col
                        justify-around
                        rounded-4xl
                        bg-surface-dim
                        p-6
                        text-on-surface-variant

                        md:col-span-7
                        lg:col-span-8
                    "
                >

                    <div className="flex items-center justify-between gap-4">

                        <span className="text-lg font-semibold tracking-tight">
                            How I make it work?
                        </span>

                        <span
                            className="
                                text-xs
                                uppercase
                                tracking-[0.18em]
                                opacity-50
                            "
                        >
                            Process
                        </span>

                    </div>


                    <div className="overflow-x-auto pb-1">

                        <div className="flex min-w-155 items-start">

                            {processSteps.map((step, index) => {

                                const active = activeStep === index;

                                return (
                                    <div
                                        key={step.id}
                                        className="flex flex-1 items-start"
                                    >

                                        <button
                                            type="button"
                                            onMouseEnter={() =>
                                                setActiveStep(index)
                                            }
                                            onFocus={() =>
                                                setActiveStep(index)
                                            }
                                            className="
                                                group/step
                                                flex
                                                min-w-0
                                                flex-col
                                                text-left
                                            "
                                        >

                                            <span
                                                className="
                                                    mb-3
                                                    text-xs
                                                    opacity-45
                                                "
                                            >
                                                0{index + 1}
                                            </span>


                                            <motion.span
                                                animate={{
                                                    opacity: active
                                                        ? 1
                                                        : 0.58,
                                                    y: active ? -2 : 0,
                                                }}
                                                transition={{
                                                    duration: 0.2,
                                                }}
                                                className="
                                                    whitespace-nowrap
                                                    text-sm
                                                    font-semibold
                                                    tracking-tight

                                                    md:text-base
                                                "
                                            >
                                                {step.label}
                                            </motion.span>


                                            <motion.span
                                                animate={{
                                                    opacity: active
                                                        ? 1
                                                        : 0.42,
                                                }}
                                                transition={{
                                                    duration: 0.2,
                                                }}
                                                className="
                                                    mt-2
                                                    max-w-30
                                                    text-xs
                                                    leading-relaxed
                                                "
                                            >
                                                {step.description}
                                            </motion.span>

                                        </button>


                                        {index < processSteps.length - 1 && (
                                            <div
                                                className="
                                                    mx-3
                                                    mt-5.5
                                                    h-px
                                                    flex-1
                                                    bg-secondary-fixed-dim
                                                "
                                                aria-hidden="true"
                                            />
                                        )}

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </motion.article>


                {/* =====================================================
                    03 — PROJECTS
                    Desktop: 3 / 12
                ====================================================== */}

                <motion.article
                    variants={cardVariants}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="
                        col-span-1
                        flex
                        min-h-62.5
                        flex-col
                        justify-between
                        rounded-4xl
                        bg-surface-dim-bright
                        p-6
                        text-on-surface-variant

                        md:col-span-4
                        lg:col-span-3
                    "
                >

                    <span className="text-sm font-semibold tracking-tight">
                        Projects shipped
                    </span>


                    <div>

                        <span
                            className="
                                block
                                text-7xl
                                font-semibold
                                leading-none
                                tracking-[-0.07em]

                                md:text-8xl
                            "
                        >
                            15+
                        </span>


                        <span
                            className="
                                mt-3
                                block
                                text-sm
                                opacity-60
                            "
                        >
                            personal, academic & professional
                        </span>

                    </div>

                </motion.article>


                {/* =====================================================
                    04 — STACK
                    Desktop: 5 / 12
                ====================================================== */}

                <motion.article
                    variants={cardVariants}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="
                        col-span-1
                        flex
                        min-h-62.5
                        flex-col
                        justify-between
                        rounded-4xl
                        bg-primary
                        p-6
                        text-on-primary

                        md:col-span-5
                        lg:col-span-5
                    "
                >

                    <div className="flex items-center justify-between gap-4">

                        <span className="text-lg font-semibold tracking-tight">
                            My stack
                        </span>

                        <span
                            className="
                                text-xs
                                uppercase
                                tracking-[0.18em]
                                opacity-60
                            "
                        >
                            Core tools
                        </span>

                    </div>


                    <div
                        className="
                            grid
                            grid-cols-2
                            gap-3
                            sm:grid-cols-4
                            md:grid-cols-4
                            md:gap-2
                        "
                    >

                        {stackBadges.map(
                            ({ id, label, content }) => (
                                <motion.div
                                    key={id}
                                    whileHover={{
                                        scale: 1.06,
                                        y: -2,
                                    }}
                                    transition={{
                                        duration: 0.18,
                                    }}
                                    title={label}
                                    className="
                                        flex
                                        h-12
                                        md:h-18
                                        items-center
                                        justify-center
                                        shadow-sm
                                        text-on-primary-container
                                    "
                                >
                                    {content}
                                </motion.div>
                            ),
                        )}

                    </div>

                </motion.article>


                {/* =====================================================
                    05 — CTA
                    Desktop: 4 / 12
                ====================================================== */}

                <motion.article
                    variants={cardVariants}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="
                        col-span-1
                        flex
                        min-h-62.5
                        flex-col
                        justify-between
                        rounded-4xl
                        bg-surface-dim
                        p-6
                        text-on-surface-variant

                        md:col-span-3
                        lg:col-span-4
                    "
                >

                    <span
                        className="
                            text-sm
                            uppercase
                            tracking-[0.18em]
                            opacity-50
                        "
                    >
                        Let's work together
                    </span>


                    <div>

                        <h2
                            className="
                                max-w-sm
                                text-3xl
                                font-semibold
                                leading-tight
                                tracking-[-0.04em]

                                md:text-4xl
                            "
                        >
                            Have an idea worth building?
                        </h2>


                        <button
                            onClick={() => {setDialogOpen(true)}}
                            type="button"
                            className="
                                mt-6
                                inline-flex
                                items-center
                                border-b
                                border-secondary-fixed-dim
                                pb-1
                                text-sm
                                font-semibold
                                tracking-tight
                                transition-transform
                                duration-200
                                hover:translate-x-1
                            "
                        >
                            Let's talk ↗
                        </button>
</div>
                </motion.article>

                        <ContactDialog open={dialogOpen} onOpen={() => {
                            setDialogOpen(false)
                        }}/>
            </motion.div>
        </main>
    );
};