/* 
    Components
*/
import { ProjectCard } from '@/components/ProjectCard'

/* 
Assets
*/
// import face from '@/assets/miaro_face_w_bg.png';

export const Realisation = () => {
    const projects = [
        {
            title: 'miaro-portfolio',
            description: 'My Personal Portfolio that showcases my work and skills.',
            imageAlt: "miaro-portfolio preview",
            projectUrl: '#',
            githubUrl: 'https://www.linkedin.com/in/ramanantsoa-sam/',
        },
        {
            title: 'my-tube-downloader',
            description: 'Why trying to find a youtube video downloader and having trouble with multiple ads when I can build my own tools so NO More Ads and I can get an entire playlist whith just one "click".',
            imageAlt: "own-tube-to-mp3 preview",
            projectUrl: '#',
            githubUrl: 'https://www.linkedin.com/in/ramanantsoa-sam/',
        },
        {
            title: 'tracklinkS',
            description: 'As backend oriented developper I build this fullstack mini project to help me testing all my API Endpoints, so it test it all for me without data compromise.',
            imageAlt: "tracklinks preview",
            projectUrl: '#',
            githubUrl: 'https://www.linkedin.com/in/ramanantsoa-sam/',
        },
        {
            title: 'ino-sakafo',
            description: 'Always building something that can be used in my everyday routing, it gives you a thousand idea of meals to prepare so you just "check it and cook it".',
            imageAlt: "ino sakafo preview",
            projectUrl: '#',
            githubUrl: 'https://www.linkedin.com/in/ramanantsoa-sam/',
        },
    ]

    return (
        <div className="flex min-h-screen w-full items-center justify-center px-2 py-2 md:px-6 md:py-8 lg:px-8">
            <div className="grid h-full w-full max-w-6xl grid-cols-1 gap-4 bg-surface md:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        index={index}
                        title={project.title}
                        description={project.description}
                        imageAlt={project.imageAlt}
                        projectUrl={project.projectUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </div>
    )
}