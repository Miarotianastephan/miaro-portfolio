/* 
    Nodes modules
*/
import { useMemo } from 'react';
import { motion } from "motion/react"

/* 
    Components
*/
import { Button } from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/github';

/* 
    Types
*/
type ProjectCardProps = {
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
    projectUrl?: string;
    githubUrl?: string;
    className?: string;
    index?: number;
}

export const ProjectCard = ({
    title,
    description,
    imageSrc,
    imageAlt = 'project preview',
    projectUrl,
    githubUrl,
    className = '',
    index = 0,
}: ProjectCardProps) => {
    const animationPresets = [
        {
            initial: { x: -35, y: 18, opacity: 0, rotate: -3 },
            animate: { x: 0, y: 0, opacity: 1, rotate: 0 },
            transition: { duration: 0.45, delay: 0.08 + index * 0.05 },
        },
        {
            initial: { x: 30, y: -12, opacity: 0, rotate: 2 },
            animate: { x: 0, y: 0, opacity: 1, rotate: 0 },
            transition: { duration: 0.5, delay: 0.12 + index * 0.06 },
        },
        {
            initial: { y: 26, opacity: 0, scale: 0.97 },
            animate: { y: 0, opacity: 1, scale: 1 },
            transition: { duration: 0.52, delay: 0.1 + index * 0.07 },
        },
        {
            initial: { x: -22, y: -20, opacity: 0, rotate: 4 },
            animate: { x: 0, y: 0, opacity: 1, rotate: 0 },
            transition: { duration: 0.48, delay: 0.14 + index * 0.08 },
        },
    ] as const;

    const animation = useMemo(() => {

        const randomBias = Math.floor(Math.random() * animationPresets.length);
        return animationPresets[(index + randomBias) % animationPresets.length];
    }, [index]);

    return (
        <motion.div
            className={`flex min-h-75 flex-col justify-between rounded-2xl bg-surface-dim-bright p-5 shadow-sm ring-1 ring-black/5 tracking-tight ${className}`}
            initial={animation.initial}
            animate={animation.animate}
            transition={animation.transition}
        >
            <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-40 w-full rounded-xl border border-black/5 object-cover shadow-md md:h-40 md:min-w-50 md:w-max"
                    />
                ) : (
                    <div className="flex h-40 w-full items-center justify-center rounded-xl border border-black/5 bg-surface text-sm text-on-surface-variant shadow-md md:h-40 md:min-w-50 md:w-max">
                        {imageAlt}
                    </div>
                )}

                <span className="flex h-full max-h-40 flex-col gap-2 md:max-w-full md:justify-between">
                    <h2 className="text-lg font-semibold md:text-xl">{title}</h2>
                    <h3 className="text-sm md:text-base">{description}</h3>
                </span>
            </div>

            {(projectUrl || githubUrl) && (
                <div className="mt-4 flex items-center gap-2 border-t pt-3">
                    {projectUrl && (
                        <Button
                            className="mt-2"
                            variant='secondary'
                            size='iconSmall'
                            asChild
                        >
                            <a href={projectUrl} target="_blank" rel="noreferrer" aria-label={`${title} project link`}>
                                <ArrowUpRight />
                            </a>
                        </Button>
                    )}

                    {githubUrl && (
                        <Button
                            className="mt-2 bg-on-surface text-on-primary hover:opacity-95"
                            variant='secondary'
                            size='iconSmall'
                            asChild
                        >
                            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`${title} GitHub link`}>
                                <GithubIcon />
                            </a>
                        </Button>
                    )}
                </div>
            )}
        </motion.div>
    )
}
