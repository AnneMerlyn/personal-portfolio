'use client';

import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import devan from '../../public/test.jpeg';
import React from 'react';
import '../styles/customStyles.css';
import Typewriter from 'typewriter-effect';

export default function Home() {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <section className="min-h-screen">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="text-xl font-burtons dark:text-white text-pink-500">
                            Anne M
                        </h1>

                        <ul className="flex items-center">
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
                    <div className="flex items-center justify-center max-w-xl mx-auto gap-8">
                        <div className="flex-none shadow-md bg-gradient-to-b from-pink-300 to-lavender-300 rounded-full w-40 h-40 relative overflow-hidden md:w-64 md:h-64">
                            <Image
                                src={devan}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex-grow text-left space-y-5">
                            <p className="text-xl font-semi-bold bg-pink-200 dark:bg-pink-400 inline-block rounded-sm px-1 py-0.5 dark:text-gray-200">
                                Hello I'm
                            </p>

                            <div className="text-5xl py-1 text-pink-500 font-semibold dark:text-pink-400 md:text-6xl font-mono">
                                <Typewriter
                                    options={{
                                        strings: ['Anne M'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <h3 className="text-2xl py-1 text-gray-600 dark:text-white md:text-3xl font-light">
                                Software Developer
                            </h3>
                            <p className="text-md py-3 leading-7 text-gray-700 dark:text-gray-200 md:text-lg">
                                So yeah, I'm still brainstorming what to put as
                                my profile description. For now, let's keep it
                                this way. Just thinking about the best things to
                                say about myself. But kidding aside, this is a
                                placeholder.
                            </p>
                        </div>
                    </div>
                    <div className=" ml-12 text-2xl flex items-center justify-center gap-2 py-3 text-gray-700 dark:text-gray-400">
                        <a
                            href="https://www.linkedin.com/in/anne-merlyn-martinez/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            href="https://github.com/AnneMerlyn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
