'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

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
    { href: '#technologies', label: 'Tecnologías' },
    { href: '#education', label: 'Educación' },
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
      className={`w-full fixed transition-all duration-300 h-15 flex items-center px-4 z-50 ${hasHeaderStyle ? 'h-17 backdrop-blur-sm  shadow-sm shadow-blue-500/60' : 'border-transparent'}`}>
      <div className="w-full max-w-4xl mx-auto flex justify-between items-center">

        <a href="#hero" className="text-blue-400 text-lg font-bold">LuisPv</a>

        <div className="hidden md:flex">
          <nav className="flex gap-4">
              {
                MenuLinks.map(link => (
                  <a key={link.href} href={link.href} className="list-none text-white hover:text-blue-400 text-sm">{ link.label }</a>
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

            <SheetContent side="top" className="bg-white/10 backdrop-blur-xs border-b border-blue-950  [&>button]:text-white">
              <SheetTitle className="sr-only">
                Menú principal
              </SheetTitle> 
              <nav className="flex flex-col items-center justify-center mt-16">
                  {
                    MenuLinks.map(link => (
                      <a key={link.href} href={link.href} className="text-white w-full text-center list-none py-2 hover:text-blue-400" onClick={() => setOpen(false)}>{ link.label }</a>
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