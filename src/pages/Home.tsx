
/* 
    Components
*/
import { About } from "@/components/About"
import { Header } from "@/components/Header"


export const Home = () => {

    return (
        <div className="flex flex-col gap-12">
            <Header />
            <About />
        </div>
    )
}