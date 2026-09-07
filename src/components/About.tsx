/* 
    Assests
*/
// import face from '@/assets/miaro_face_w_bg.png';
import full from '@/assets/miaro_full_w_bg.png';
import {
    Docker,
    NodeJs,
    PostgreSQL,
    React,
    TypeScript,
} from '@/assets/TechStackIcons';

export const About = () => {
    const stackBadges = [
        { id: 'react', content: <React className="h-8 w-8" />, bg: '' },
        { id: 'node', content: <NodeJs className="h-8 w-8" />, bg: '' },
        { id: 'ts', content: <TypeScript className="h-8 w-8" />, bg: '' },
        { id: 'postgres', content: <PostgreSQL className="h-8 w-8" />, bg: '' },
        { id: 'docker', content: <Docker className="h-8 w-8" />, bg: '' },
    ];

    return (
        <main className="max-h-max w-full flex items-center justify-center">
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
                {/* section 1 */}
                <div className="flex flex-col justify-between p-6 col-span-1 row-span-1 rounded-4xl bg-primary-container text-on-primary-container text-lg lg:text-2xl font-semibold tracking-tight selection:text-tertiary selection:bg-surface-container">
                    
                    <div className="flex justify-between items-start">
                        <img    
                            className='w-18 h-18 lg:w-28 lg:h-28 object-cover rounded-xl'
                            src={full} alt="miarotiana's avatar" 
                        />

                        <div className="flex flex-col gap-2 items-end  tracking-tighter leading-relaxed">
                            <span className="text-sm">Based in </span>
                            <span className="text-lg">Antananarivo, Madagascar</span>
                        </div>
                    </div>
                    
                    <p>
                        Solving complex problems through <br/> elegant codebases.
                    </p>
                </div>

                <div className="p-6 col-span-1 row-span-1 rounded-4xl bg-surface-dim">
                    <div className="flex flex-col gap-4 text-xl text-on-surface-variant justify-between font-semibold tracking-tight">
                        
                        <div className="w-full flex justify-between gap-2 items-center">
                            <span>Featured projects</span>
                            <span className="cursor-pointer">View All</span>
                        </div>

                        <div className="flex flex-col flex-1 border-2 border-secondary-fixed-dim rounded-2xl p-4 font-normal tracking-tight text-lg justify-center">
                            <span>miaro-portfolio</span>
                            <span className="max-w-lg text-sm">My Personal Portfolio that showcases my work and skills.</span>
                            <span className="text-xs text-on-surface-variant self-end bg-amber-50 rounded-2xl px-2 py-1">personal</span>
                        </div>

                        <div className="flex flex-col flex-1 border-2 border-secondary-fixed-dim rounded-2xl p-4 font-normal tracking-tight text-lg justify-center">
                            <span>tracklinks</span>
                            <span className="max-w-xs text-sm">A simple link management tool. It helps to track links used in various platforms.</span>
                            <span className="text-xs text-on-surface-variant self-end bg-amber-50 rounded-2xl px-2 py-1">profesional</span>
                        </div>
                    </div>
                </div>
                
                {/* section 2 */}
                <div className="grid col-span-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-4">
                    <div className="flex flex-col gap-2 p-6 text-xl font-semibold tracking-tight col-span-1 rounded-4xl bg-surface-dim-bright">
                        Experience

                        <div className="max-h-max flex flex-col border border-secondary-fixed-dim rounded-2xl p-4 font-normal tracking-tight text-lg justify-center">
                            <div className="flex justify-between items-start">
                                <div className="max-w-40 flex flex-col text-sm gap-2">
                                    <span className="font-semibold tracking-tighter">Full Stack JS Developer & Lead Cloud Engineer</span>
                                    <span>VICTUS</span>
                                </div>
                                <div className="text-xs text-on-surface-variant border border-primary rounded-2xl px-2 py-1">Nov.2025 - Jul.2026</div>
                            </div>
                            <span className="text-sm text-on-surface-variant self-end border-b cursor-pointer hover:font-semibold transition-all duration-200">See Details</span>
                        </div>

                        <div className="max-h-max flex flex-col border border-secondary-fixed-dim rounded-2xl p-4 font-normal tracking-tight text-lg justify-center">
                            <div className="flex justify-between items-start">
                                <div className="max-w-40 flex flex-col text-sm gap-2">
                                    <span className="font-semibold tracking-tighter">Backend Developer</span>
                                    <span>Logic RDV, HelloSoins</span>
                                </div>
                                <div className="text-xs text-on-surface-variant border border-primary rounded-2xl px-2 py-1">Jan.2025 - Sept.2025</div>
                            </div>
                            <span className="text-sm text-on-surface-variant self-end border-b cursor-pointer hover:font-semibold transition-all duration-200">See Details</span>
                        </div>
                        
                    </div>

                    <div className="max-h-max flex flex-col gap-2 p-6 text-xl font-semibold tracking-tight col-span-1 rounded-4xl bg-surface-dim-bright">
                        <span className="">
                            Academic Path
                        </span>

                        <div className="max-h-max flex flex-col border border-secondary-fixed-dim rounded-2xl p-4 font-normal tracking-tight text-sm justify-center">
                            <span className="font-semibold">Master 1 – Ingénierie Informatique</span>
                            <span>IT-University</span>
                            <span className="text-on-surface-variant self-end">2024-2025</span>
                        </div>
                        <div className="max-h-max flex flex-col border border-secondary-fixed-dim rounded-2xl p-4 font-normal tracking-tight text-sm justify-center">
                            <span className="font-semibold">Bachelor 3 – Informatique</span>
                            <span>IT-University</span>
                            <span className="text-on-surface-variant self-end">2021-2024</span>
                        </div>

                    </div>

                    <div className="flex flex-col gap-4 p-6 text-xl font-semibold text-on-primary tracking-tight col-span-1 rounded-4xl bg-primary">
                        <span>My Stacks</span>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {stackBadges.map(({ id, content, bg }) => (
                                <div
                                    key={id}
                                    className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl ${bg}`}
                                >
                                    {content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}