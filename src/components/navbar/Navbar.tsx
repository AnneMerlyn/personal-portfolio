import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { MobileNavButton } from '@/components/navbar/MobileNavButton';

type NavBarProps = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    activeTab: string;
    setActiveTab: (value: string) => void;
    mobileNavOpen: boolean;
    setMobileNavOpen: (value: boolean) => void;
};

export const NavBar: React.FC<NavBarProps> = ({
    darkMode,
    setDarkMode,
    activeTab,
    setActiveTab,
    mobileNavOpen,
    setMobileNavOpen,
}) => {
    return (
        <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md">
            <nav className="py-4 mb-0 md:py-4 md:mb-2 flex justify-between dark:text-white">
                <div className="md:hidden flex items-center justify-between w-full">
                    <MobileNavButton
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    />
                    <div className="flex items-center">
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkMode)}
                            className="cursor-pointer text-2xl dark:text-white text-gray-800 ml-4"
                            aria-label="Toggle dark mode"
                        ></BsFillMoonStarsFill>
                        <a
                            className="bg-gradient-to-r from-pink-300 to-violet-300 text-white px-4 py-2 border-none rounded-md ml-4"
                            href="#"
                        >
                            Hire Me
                        </a>
                    </div>
                    {mobileNavOpen && (
                        <div className="absolute top-16 left-0 w-1/3 items-center bg-white dark:bg-gray-800 p-2 rounded border shadow-lg flex flex-col">
                            {/* Links */}
                            <div className="flex flex-col gap-1">
                                <a
                                    href="#home"
                                    onClick={() => setActiveTab('home')}
                                    className={`text-lg font-burtons dark:text-white text-pink-500 ${
                                        activeTab === 'home'
                                            ? 'font-bold border-b-2 border-pink-600'
                                            : ''
                                    }`}
                                >
                                    Home
                                </a>
                                <a
                                    href="#blog"
                                    onClick={() => setActiveTab('blog')}
                                    className={`text-lg font-burtons dark:text-white text-pink-500 ${
                                        activeTab === 'blog'
                                            ? 'font-bold border-b-2 border-pink-600'
                                            : ''
                                    }`}
                                >
                                    Blog
                                </a>
                                <a
                                    href="#about"
                                    onClick={() => setActiveTab('about')}
                                    className={`text-lg font-burtons dark:text-white text-pink-500 ${
                                        activeTab === 'about'
                                            ? 'font-bold border-b-2 border-pink-600'
                                            : ''
                                    }`}
                                >
                                    About Me
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex">
                    <a
                        href="#home"
                        onClick={() => setActiveTab('home')}
                        className={`text-xl font-burtons dark:text-white text-pink-500 mx-4 ${
                            activeTab === 'home'
                                ? 'font-bold border-b-2 border-pink-600'
                                : ''
                        }`}
                    >
                        Home
                    </a>
                    <a
                        href="#blog"
                        onClick={() => setActiveTab('blog')}
                        className={`text-xl font-burtons dark:text-white text-pink-500 mx-4 ${
                            activeTab === 'blog'
                                ? 'font-bold border-b-2 border-pink-600'
                                : ''
                        }`}
                    >
                        Blog
                    </a>
                    <a
                        href="#about"
                        onClick={() => setActiveTab('about')}
                        className={`text-xl font-burtons dark:text-white text-pink-500 mx-4 ${
                            activeTab === 'about'
                                ? 'font-bold border-b-2 border-pink-600'
                                : ''
                        }`}
                    >
                        About Me
                    </a>
                </div>
                <ul className="hidden md:flex items-center">
                    <li>
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkMode)}
                            className="cursor-pointer text-2xl dark:text-white text-gray-800"
                            aria-label="Toggle dark mode"
                        ></BsFillMoonStarsFill>
                    </li>
                    <li>
                        <a
                            className="bg-gradient-to-r from-pink-300 to-violet-300 text-white px-4 py-2 border-none rounded-md ml-4"
                            href="#"
                        >
                            Hire Me
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
