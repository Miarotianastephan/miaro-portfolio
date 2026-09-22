import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import type { ProfessionalExperience } from "./ExperienceCarousel";

type ExperienceDetailDialogProps = {
    experience: ProfessionalExperience | null;
    open: boolean;
    onClose: () => void;
};

export const ExperienceDetailDialog = ({
    experience,
    open,
    onClose,
}: ExperienceDetailDialogProps) => {
    return (
        <AnimatePresence>
            {open && experience && (
                <motion.div
                    className="
                        fixed
                        inset-0
                        z-[200]
                        flex
                        items-center
                        justify-center
                        bg-scrim/30
                        px-4
                        py-6
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={onClose}
                >
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="experience-dialog-title"
                        className="
                            w-full
                            max-w-2xl
                            rounded-2xl
                            bg-surface
                            p-6
                            text-on-surface
                            shadow-xl
                            md:p-8
                        "
                        initial={{
                            opacity: 0,
                            y: 16,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 10,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <h2
                                    id="experience-dialog-title"
                                    className="text-2xl font-semibold tracking-tight"
                                >
                                    {experience.company}
                                </h2>

                                <p className="mt-1 text-sm opacity-60">
                                    {experience.role}
                                </p>

                                <p className="mt-2 text-xs opacity-50">
                                    {experience.period}
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close details"
                                className="
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    transition-colors
                                    hover:bg-surface-container
                                    focus:outline-none
                                    focus-visible:ring-2
                                    focus-visible:ring-current
                                "
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Description */}
                        <div className="mt-8">
                            <p className="text-sm leading-relaxed md:text-base">
                                {experience.description}
                            </p>
                        </div>

                        {/* Contributions */}
                        <div className="mt-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] opacity-50">
                                Contributions
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {experience.highlights.map((highlight) => (
                                    <li
                                        key={highlight}
                                        className="flex gap-3 text-sm leading-relaxed"
                                    >
                                        <span
                                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                            aria-hidden="true"
                                        />

                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stack */}
                        <div className="mt-8">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] opacity-50">
                                Stack
                            </h3>

                            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm">
                                {experience.stack.map((technology) => (
                                    <span
                                        key={technology}
                                        className="opacity-75"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};