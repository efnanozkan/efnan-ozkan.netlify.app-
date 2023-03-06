import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <header className="flex justify-between px-10  md:px-16 py-5 bg-primary text-primary fixed w-full z-10">
            <section>
            <a href="/" className="font-monospace text-4xl font-bold text-white">
                Efnan Gülşen Özkan
            </a> 
            </section>
            <nav className="hidden md:block">
                <ul className="flex">
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#blog">Skills</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#resume -link" target="_blank" without rel="noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav
                className={!toggle ? "mobile-nav  left-[-100%]" : "mobile-nav left-0"}
            >
                <ul className="flex flex-col text-right px-5 my-10 ">
                    <li>
                        <a href="/#about">About</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#blog">Blog</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                    <li>
                        <a href="/#resume">Resume</a>
                    </li>
                </ul>
            </nav>

            {/* Toggle button */}
            <button onClick={handleToggle} className=" block md:hidden">
                {!toggle ? <AiOutlineMenu className="text-white" size={30} /> : <AiOutlineClose className="text-white" size={30} />}
            </button>
        </header>
    );
};

export default Header;