import { useState } from "react";
import { Menu } from "./Menu";


export const Header = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const handleMenuLinks = () => {
        setIsMenuVisible(false)
    }

    return (
        <header className="header w-full flex items-center md:justify-between bg-blue-900 px-4 text-white fixed z-99">
            <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
                <div className="z-9" onClick={handleMenuLinks}>
                    <a href="#hero">LuisPv</a>
                </div>

                <Menu isMenuVisible={isMenuVisible} handleMenuLinks={handleMenuLinks} />

                <div className="hamburger-icon-container cursor-pointer h-5 flex items-center md:hidden" onClick={() => setIsMenuVisible(!isMenuVisible)}>
                    <span className={`hamburger-icon ${isMenuVisible ? 'open' : '' }`}></span>
                </div>
            </div>
        </header>
    );
};