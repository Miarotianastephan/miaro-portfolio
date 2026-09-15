/* 
  Router
*/
import { Routes, Route, useLocation, useNavigate, BrowserRouter } from "react-router"

/* 
  Components
*/
import NavBar from '@/components/ui/NavBar';
import { Home } from "@/pages/Home";

/* 
    Nodes modules
*/
import { AnimatePresence } from "motion/react"
import { MoreAbout } from "@/pages/MoreAbout";
import { Realisation } from "@/pages/Realisation";
import { Stacks } from "@/pages/Stacks";
import { PageTransition } from "@/components/PageTransition";


export const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return(
    <div className="min-h-screen bg-background text-on-background font-sans p-4 selection:bg-primary-container selection:text-on-primary-container md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        
        <NavBar onNavigate={(href) => navigate(href)} />
        
        <AnimatePresence mode="wait">
          <Routes  location={location} key={location.pathname}>
            <Route path='/' element={
              <PageTransition>
                <Home />
              </PageTransition>
            }/>

            <Route path='/more-about' element={
              <PageTransition>
                <MoreAbout />
              </PageTransition>
            }/>

            <Route path='/realisation' element={
              <PageTransition>
                <Realisation />
              </PageTransition>
            }/>

            <Route path='/stacks' element={
              <PageTransition>
                <Stacks />
              </PageTransition>
            }/>
          </Routes>
        </AnimatePresence>

      </div>
    </div>
  )
  
}

export default App
