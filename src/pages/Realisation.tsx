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
            description: 'My Personal Portfolio that showcases my work and skills. I just keep it simple and smart <KISS/>',
            imageAlt: "miaro-portfolio preview",
            projectUrl: 'https://miaro-portfolio-ten.vercel.app/',
            githubUrl: 'https://github.com/Miarotianastephan/miaro-portfolio',
        },
        {
            title: 'utrace "your colis tracker"',
            description: 'A personal platform that help client/seller to have a dashboard to tracks their packaging from the shipping to delivery status. Each client can handle his own packaging and validate the transfer by his self',
            imageAlt: "utrace",
            projectUrl: 'https://utrace.vercel.app/',
            githubUrl: 'https://github.com/Miarotianastephan/u-trace',
        },
        {
            title: 'tracklinkS',
            description: 'As backend oriented developper I build this fullstack mini project to help me testing all my API Endpoints, so it test it all for me without data compromise.',
            imageAlt: "tracklinks preview",
            projectUrl: '#',
            githubUrl: 'https://github.com/Miarotianastephan/tracklinks-backend',
        },
        {
            title: 'intra-sys-emp',
            description: 'Full-stack HR web application that I developed for my last enterprise. It is designed to give each employee to have their monthly dashboard to motivate them and giving the Lead HR a ranking system to class each other by their productivity',
            imageAlt: "sys-emp preview",
            projectUrl: '#',
            githubUrl: 'https://github.com/Miarotianastephan/sys-emp',
        },
        // {
        //     title: 'my-tube-downloader',
        //     description: 'Why trying to find a youtube video downloader and having trouble with multiple ads when I can build my own tools so NO More Ads and I can get an entire playlist whith just one "click".',
        //     imageAlt: "own-tube-to-mp3 preview",
        //     projectUrl: '#',
        //     githubUrl: 'https://www.linkedin.com/in/ramanantsoa-sam/',
        // },
        // {
        //     title: 'ino-sakafo',
        //     description: 'Always building something that can be used in my everyday routing, it gives you a thousand idea of meals to prepare so you just "check it and cook it".',
        //     imageAlt: "ino sakafo preview",
        //     projectUrl: '#',
        //     githubUrl: 'https://www.linkedin.com/in/ramanantsoa-sam/',
        // },
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