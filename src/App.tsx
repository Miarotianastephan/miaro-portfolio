/* 
  NOde modules
*/

/* 
  Custom modules 
*/
// import { cn } from '@/lib/utils';

/* 
  Hooks
*/
// import { useEffect, useState } from "react";

/* 
  Components
*/
import { Header } from '@/components/Header';
import { About } from '@/components/About';

/* 
  Assets
*/

export const App = () => {

  return (
    <div className="min-h-screen bg-background text-on-background font-sans p-4 selection:bg-primary-container selection:text-on-primary-container md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <Header />

        <About />
      </div>
    </div>
  )
}

export default App
