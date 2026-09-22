import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import type { ProfessionalExperience } from "./ExperienceCarousel";

type ExperienceCardProps = {
    experience: ProfessionalExperience;
    onDetails: () => void;
};

export const ExperienceCard = ({
    experience,
    onDetails,
}: ExperienceCardProps) => {
    return (
        <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{
                duration: 0.25,
                ease: "easeOut",
            }}
            className="flex h-full min-h-max flex-col justify-between"
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                        {experience.company}
                    </h2>

                    <p className="mt-1 text-sm opacity-60">
                        {experience.role}
                    </p>
                </div>

                <span className="shrink-0 text-xs opacity-55">
                    {experience.period}
                </span>
            </div>

            {/* Description */}
            <div className="mt-8 max-w-2xl">
                <p className="text-sm leading-relaxed md:text-base">
                    {experience.description}
                </p>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-end justify-between gap-6">
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs opacity-60">
                    {experience.stack.map((technology, index) => (
                        <span key={technology}>
                            {technology}
                            {index < experience.stack.length - 1 && (
                                <span className="ml-3 opacity-50">·</span>
                            )}
                        </span>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={onDetails}
                    className="
                        group
                        inline-flex
                        shrink-0
                        items-center
                        gap-1
                        border-b
                        border-current
                        pb-1
                        text-xs
                        font-semibold
                        tracking-tight
                        transition-transform
                        duration-200
                        hover:translate-x-1
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-current
                    "
                >
                    View details
                    <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </button>
            </div>
        </motion.div>
    );
};