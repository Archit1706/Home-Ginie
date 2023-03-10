import React from "react";
import { TbHomeDollar } from "react-icons/tb";

const Navbar = () => {
    return (
        <header className="text-white bg-gray-800 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <a href="/" className="mr-5 hover:text-gray-300 text-xl">
                        Home
                    </a>
                    <a
                        href="/gallery"
                        className="mr-5 hover:text-gray-300 text-xl"
                    >
                        Gallery
                    </a>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
                    <TbHomeDollar className="w-10 h-10 text-white p-2" />

                    <span className="ml-3 text-2xl">Home Ginie</span>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <button className="inline-flex items-center bg-white text-gray-800 shadow-sm hover:bg-gray-600 hover:text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition duration-500 font-bold">
                        Login
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
