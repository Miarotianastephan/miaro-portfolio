import { useState } from "react";
import {
    AnimatePresence,
    motion,
} from "motion/react";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { ExperienceCard } from "./ExperienceCard";
import { ExperienceDetailDialog } from "./ExperienceDetailDialog";

export type ProfessionalExperience = {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
    stack: string[];
    highlights: string[];
};

const experiences: ProfessionalExperience[] = [
    {
        id: "experience-1",
        company: "VICTUS",
        role: "Backend JS & AI Developer",
        period: "Nov 2025 — Jul 2026",
        description:
            "Building backend services, data synchronization and AI-powered solutions for production applications.",
        stack: [
            "Node.js",
            "Express",
            "NestJS",
            "AWS",
        ],
        highlights: [
            "Backend API development",
            "Multi-platform data synchronization",
            "Database architecture and optimization",
            "Cloud deployment and server management",
        ],
    },

    {
        id: "experience-2",
        company: "HELLOSOINS",
        role: "Backend & AI Developer — Full-Stack JS",
        period: "Jan 2025 — Sep 2025",
        description:
            "Developing scalable APIs and digital solutions for a healthcare platform.",
        stack: [
            "Node.js",
            "Express",
            "React",
            "MySQL",
        ],
        highlights: [
            "REST API development",
            "Scalable backend architecture",
            "Relational database design",
            "AI integration",
        ],
    },

    {
        id: "experience-3",
        company: "BANK",
        role: "Full-Stack Developer Intern",
        period: "Jul 2024 — Nov 2024",
        description:
            "Developing an internal financial management system and supporting its deployment.",
        stack: [
            "Symfony",
            "Twig",
            "Oracle",
        ],
        highlights: [
            "Financial workflow development",
            "Relational database design",
            "Application documentation",
            "User training",
        ],
    },
];

const slideVariants = {
    enter: (direction: number) => ({
        opacity: 0,
        x: direction > 0 ? 20 : -20,
    }),

    center: {
        opacity: 1,
        x: 0,
    },

    exit: (direction: number) => ({
        opacity: 0,
        x: direction > 0 ? -20 : 20,
    }),
};

export const ExperienceCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const [selectedExperience, setSelectedExperience] =
        useState<ProfessionalExperience | null>(null);

    const currentExperience = experiences[currentIndex];

    const goTo = (nextIndex: number, nextDirection: number) => {
        setDirection(nextDirection);

        setCurrentIndex(
            (nextIndex + experiences.length) %
                experiences.length,
        );
    };

    const goNext = () => {
        goTo(currentIndex + 1, 1);
    };

    const goPrevious = () => {
        goTo(currentIndex - 1, -1);
    };

    return (
        <>
            <div className="flex h-full min-h-[370px] flex-col">
                {/* Header */}
                <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] opacity-55">
                        Professional experience
                    </span>

                    <span
                        className="text-xs tabular-nums opacity-55"
                        aria-label={`Experience ${currentIndex + 1} of ${experiences.length}`}
                    >
                        {String(currentIndex + 1).padStart(2, "0")} /{" "}
                        {String(experiences.length).padStart(2, "0")}
                    </span>
                </div>

                {/* Carousel */}
                <div className="relative mt-6 flex-1 overflow-hidden">
                    <AnimatePresence
                        initial={false}
                        custom={direction}
                        mode="wait"
                    >
                        <motion.div
                            key={currentExperience.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.25,
                                ease: "easeOut",
                            }}
                            drag="x"
                            dragConstraints={{
                                left: 0,
                                right: 0,
                            }}
                            dragElastic={0.12}
                            onDragEnd={(_, info) => {
                                const offset = info.offset.x;
                                const velocity = info.velocity.x;

                                if (
                                    offset < -50 ||
                                    velocity < -500
                                ) {
                                    goNext();
                                }

                                if (
                                    offset > 50 ||
                                    velocity > 500
                                ) {
                                    goPrevious();
                                }
                            }}
                            className="absolute inset-0 cursor-grab active:cursor-grabbing"
                        >
                            <ExperienceCard
                                experience={currentExperience}
                                onDetails={() =>
                                    setSelectedExperience(
                                        currentExperience,
                                    )
                                }
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={goPrevious}
                            aria-label="Previous experience"
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                transition-colors
                                hover:bg-primary
                                hover:text-on-primary
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-current
                            "
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button
                            type="button"
                            onClick={goNext}
                            aria-label="Next experience"
                            className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                transition-colors
                                hover:bg-primary
                                hover:text-on-primary
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-current
                            "
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    <span className="text-xs opacity-45">
                        Swipe to navigate
                    </span>
                </div>
            </div>

            <ExperienceDetailDialog
                experience={selectedExperience}
                open={selectedExperience !== null}
                onClose={() =>
                    setSelectedExperience(null)
                }
            />
        </>
    );
};