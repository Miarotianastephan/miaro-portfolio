/* 
    Assests
*/
import face from '@/assets/miaro_face_w_bg.png';
import full from '@/assets/miaro_full_w_bg.png';

export const About = () => {
    return (
        <main className="h-screen w-full flex items-center justify-center">
            <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-2">
                {/* section 1 */}
                <div className="flex flex-col justify-between p-6 col-span-1 row-span-1 rounded-4xl bg-primary-container text-primary text-2xl font-semibold tracking-tight">
                    
                    <div className="flex justify-between items-start">
                        <img    
                            className='w-28 h-28 object-cover rounded-xl'
                            src={full} alt="miarotiana's avatar" 
                        />

                        <div className="flex flex-col gap-2 items-end">
                            <span className="text-sm">Based in </span>
                            <span className="text-xl">Antananarivo, Madagascar</span>
                        </div>
                    </div>
                    
                    Solving complex problems through <br/> elegant codebases.
                </div>

                <div className="p-6 col-span-1 row-span-1 rounded-4xl bg-surface-dim">
                    <div className="flex text-xl text-on-surface-variant justify-between items-center font-semibold tracking-tight">
                        <span>Featured projects</span>
                        <span>View All</span>
                    </div>
                </div>
                
                {/* section 2 */}
                <div className="grid col-span-full grid-cols-3 grid-rows-1 gap-2">
                    <div className="p-6 text-xl font-semibold tracking-tight col-span-1 rounded-4xl bg-surface-dim-bright">
                        Experience
                    </div>

                    <div className="p-6 text-xl font-semibold tracking-tight col-span-1 rounded-4xl bg-surface-dim-bright">
                        Academic Path
                    </div>

                    <div className="p-6 text-xl font-semibold text-on-primary tracking-tight col-span-1 rounded-4xl bg-primary">
                        My Stacks
                    </div>
                </div>
            </div>
        </main>
    )
}