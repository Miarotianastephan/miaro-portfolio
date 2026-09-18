
/* 
    Components
*/
import { About } from "@/components/About"
import { Header } from "@/components/Header"


export const Home = () => {

    return (
        <div className="flex flex-col gap-12 px-2 md:px-6 lg:px-14">
            <Header />
            <About />
        </div>
    )
}