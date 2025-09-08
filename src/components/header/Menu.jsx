import { useEffect, useRef } from "react";

export const Menu = ({ isMenuVisible, handleMenuLinks } ) => {

    

    const links = [
        { href: "#about", text: "Sobre Mí" },
        { href: "#experience", text: "Experiencia" },
        { href: "#projects", text: "Proyectos" },
        { href: "#skills", text: "Habilidades" },
        { href: "#contact", text: "Contacto" },
    ];

    

    return (
        <nav className={`nav absolute w-screen text-center right-0 pt-14 md:initial md:pt-0 md:w-auto ${isMenuVisible ? 'top-0' : '-top-100'}`}>
            <ul className="nav-list md:flex">
                {
                    links.map(({href, text}) => (
                        <li key={href} className="nav-list-item md:pl-4" onClick={handleMenuLinks}>
                            <a href={href} className="block py-4 md:py-3">{text}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
  );
};