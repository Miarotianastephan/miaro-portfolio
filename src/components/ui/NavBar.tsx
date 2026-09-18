/* 
  Node modules
*/
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* 
  Types
*/
import type { NavBarProps, NavItem } from "@/types";

/* 
  Navlinks
*/
import { NAV_ITEMS } from "@/constants/index";
import { useLocation } from "react-router";
const DEFAULT_ITEMS: NavItem[] = NAV_ITEMS

/* 
  Assets
*/
import { DownloadIcon } from "@/components/ui/download";
import { Button } from "./Button";
import { MailIcon } from "lucide-react";


export default function NavBar({
  items = DEFAULT_ITEMS,
  onNavigate,
}: NavBarProps) {
  const location = useLocation();
  const activeIndex = items.findIndex((item) => item.href === location.pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (href: string) => {
    setMobileOpen(false);
    onNavigate?.(href);
  };

  return (
    <>
      {/* DESKTOP — pill nav bar */}
      <div className="hidden md:flex">
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1 rounded-full bg-neutral-100/50 backdrop-blur-xs p-2 w-fit mx-auto shadow-sm"
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.href}
                onClick={() => handleSelect(item.href)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill-desktop-animate"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>
        
        <div className="flex gap-4 items-center rounded-full bg-neutral-100/50 backdrop-blur-xs p-2 shadow-sm text-sm mx-auto">
            <Button
                className="rounded-full bg-white"
                variant='secondary'
                size='iconSmall'
                asChild
            >
                <a href="" target="_blank" rel="noreferrer" aria-label={`Miarotiana Ramanantsoa Resume download link`}>
                    <DownloadIcon />
                </a>
            </Button>
            {/* <span className="">| Download resume</span> */}
        </div>

      </div>

      {/* MOBILE — burger trigger                                           */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 backdrop-blur-lg">
        <span className="text-sm font-semibold text-neutral-900">portfolio.miaro</span>
        <span className="flex gap-1">

          <Button
              className="rounded-full bg-white"
              variant='secondary'
              size='iconSmall'
              asChild
          >
              <a href="" target="_blank" rel="noreferrer" aria-label={`Miarotiana Ramanantsoa Resume download link`}>
                  <DownloadIcon />
              </a>
          </Button>
          
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-full bg-neutral-100"
          >
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              className="h-0.5 w-5 origin-center rounded-full bg-neutral-900"
            />

            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="h-0.5 w-5 rounded-full bg-neutral-900"
            />

            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="h-0.5 w-5 origin-center rounded-full bg-neutral-900"
            />

          </button>
        </span>
      </div>


      {/* MOBILE — animated side menu + backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
            />

            {/* Side panel */}
            <motion.aside
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 35 }}
              className="fixed right-0 top-0 z-40 h-full w-[75%] max-w-xs bg-background shadow-xl md:hidden flex flex-col pt-24 px-8"
            >
              <motion.ul
                className="flex flex-col gap-1"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                  },
                  closed: {},
                }}
              >
                {items.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.li
                      key={item.href}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: 24 },
                      }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <button
                        onClick={() => handleSelect(item.href)}
                        className={`w-full text-left py-3 text-2xl font-medium transition-colors ${
                          isActive
                            ? "text-neutral-900"
                            : "text-neutral-400 hover:text-neutral-700"
                        }`}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
