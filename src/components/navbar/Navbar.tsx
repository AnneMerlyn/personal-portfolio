'use client';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { MobileNavButton } from '@/components/navbar/MobileNavButton';
import { NavBarProps } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar: React.FC<NavBarProps> = ({
    darkMode,
    setDarkMode,
    mobileNavOpen,
    setMobileNavOpen,
}) => {
    const pathname = usePathname();
    const mobileNavRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleDocumentClick = (event: { target: any }) => {
            if (
                mobileNavOpen &&
                mobileNavRef.current &&
                !mobileNavRef.current.contains(event.target)
            ) {
                setMobileNavOpen(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [mobileNavOpen, setMobileNavOpen]);

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
                        <Link
                            href="/contact"
                            className="bg-gradient-to-r from-pink-300 to-violet-300 text-white px-4 py-2 border-none rounded-md ml-4"
                        >
                            Hire Me
                        </Link>
                    </div>
                    {mobileNavOpen && (
                        <div
                            ref={mobileNavRef}
                            className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 p-2 rounded border shadow-lg flex flex-col"
                        >
                            <div className="flex flex-col text-center gap-1">
                                <Link
                                    href="/"
                                    className={`text-lg font-burtons dark:text-white hover:rounded hover:bg-pink-400 ${
                                        pathname === '/'
                                            ? 'font-bold bg-pink-500 rounded text-white'
                                            : 'text-pink-500 hover:text-white'
                                    }`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/blog"
                                    className={`text-lg font-burtons dark:text-white text-pink-500 hover:rounded hover:bg-pink-400 ${
                                        pathname === '/blog'
                                            ? 'font-bold bg-pink-500 rounded text-white'
                                            : 'text-pink-500 hover:text-white'
                                    }`}
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/about"
                                    className={`text-lg font-burtons dark:text-white text-pink-500 hover:rounded hover:bg-pink-400 ${
                                        pathname === '/about'
                                            ? 'font-bold bg-pink-500 rounded text-white'
                                            : 'text-pink-500 hover:text-white'
                                    }`}
                                >
                                    About Me
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex">
                    <Link
                        href="/"
                        className={`text-xl font-burtons dark:text-white text-pink-500 mx-4 ${
                            pathname === '/'
                                ? 'font-bold border-b-2 border-pink-600'
                                : ''
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/blog"
                        className={`text-xl font-burtons dark:text-white text-pink-500 mx-4 ${
                            pathname === '/blog'
                                ? 'font-bold border-b-2 border-pink-600'
                                : ''
                        }`}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/about"
                        className={`text-xl font-burtons dark:text-white text-pink-500 mx-4 ${
                            pathname === '/about'
                                ? 'font-bold border-b-2 border-pink-600'
                                : ''
                        }`}
                    >
                        About Me
                    </Link>
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
                        <Link
                            href="/contact"
                            className={`bg-gradient-to-r from-pink-300 to-violet-300 text-white px-4 py-2 border-none rounded-md ml-4 ${
                                pathname === '/contact'
                                    ? 'font-bold border-b-2 border-pink-600'
                                    : ''
                            }`}
                        >
                            Hire Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
