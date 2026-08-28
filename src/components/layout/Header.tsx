'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet"

export interface MenuLink {
  href: string;
  label: string;
}

export const Header = () => {

  const [hasHeaderStyle, setHasHeaderStyle] = useState(false);
  const [open, setOpen] = useState(false);

  const MenuLinks: MenuLink[] = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setHasHeaderStyle(window.scrollY >= 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])


  return (
    <header 
      className={`w-full fixed transition-all duration-300 h-15 flex items-center px-4 z-50 ${hasHeaderStyle ? 'h-17 backdrop-blur-sm  shadow-sm shadow-white/10' : 'border-transparent'}`}>
      <div className="w-full max-w-4xl mx-auto flex justify-between items-center">

        <a href="#hero" className="text-stone-100 text-lg font-bold">LuisPv</a>

        <div className="hidden md:flex">
          <nav className="flex gap-4">
              {
                MenuLinks.map(link => (
                  <a key={link.href} href={link.href} className="list-none text-stone-300 hover:text-white text-sm">{ link.label }</a>
                ))
              }
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="cursor-pointer">
              <Image 
                src="/menu.svg" 
                alt="Icono abrir menú" 
                width={20} 
                height={20}
              />
            </SheetTrigger>

            <SheetContent side="top" className="bg-black/80 backdrop-blur-xs border-b border-stone-800  [&>button]:text-white">
              <SheetTitle className="sr-only">
                Menú principal
              </SheetTitle> 
              <nav className="flex flex-col items-center justify-center mt-16">
                  {
                    MenuLinks.map(link => (
                      <a key={link.href} href={link.href} className="text-stone-300 w-full text-center list-none py-2 hover:text-white" onClick={() => setOpen(false)}>{ link.label }</a>
                    ))
                  }
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}