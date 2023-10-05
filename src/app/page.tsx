'use client';

import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaWordpress } from 'react-icons/fa';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import devan from '../../public/test.jpeg';
import React from 'react';
import '../styles/customStyles.css';
import Typewriter from 'typewriter-effect';

export default function Home() {
    const [darkMode, setDarkMode] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState('home');

    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className="bg-white px-4 md:px-10 lg:px-40 dark:bg-gray-900">
                <section className="min-h-screen flex flex-col justify-between">
                    <nav className="py-10 mb-12 flex justify-between dark:text-white">
                        <div>
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
                    <div className="flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto gap-6 mt-8 md:gap-9">
                        <div className="shadow-md bg-gradient-to-b from-pink-300 to-lavender-300 rounded-full w-40 h-40 relative overflow-hidden md:w-64 md:h-64 md:flex-none">
                            <Image
                                src={devan}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex-grow  text-center md:text-left space-y-5 mt-6 md:mt-0">
                            <p className="text-xl font-semi-bold bg-pink-200 dark:bg-pink-400 inline-block rounded-sm px-1 py-0.5 dark:text-gray-200">
                                Hey there, I'm
                            </p>

                            <div className="text-4xl py-1 text-pink-500 font-semibold dark:text-pink-400 md:text-5xl font-mono">
                                <Typewriter
                                    options={{
                                        strings: ['Anne Martinez'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </div>
                            <h3 className="text-2xl py-1 text-gray-600 dark:text-white md:text-3xl font-light">
                                Software Developer
                            </h3>
                            <p className="text-md py-3 leading-7 text-gray-700 dark:text-gray-200 md:text-lg">
                                I build things with code. I have had the chance
                                to work with some great teams. Over time, I have
                                picked up skills in both front-end and back-end
                                areas, especially with C# and React. Although I
                                have learned a lot, I am continually eager to
                                dive into new areas and expand my skills. Have
                                an idea or just want to talk tech? Reach out; I
                                am always up for a chat or a new challenge.
                            </p>
                        </div>
                    </div>
                    <div className="text-xl md:text-2xl flex flex-wrap items-center justify-center gap-2 py-3 text-gray-700 dark:text-gray-400">
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
                        <a
                            href="https://your-wordpress-site-url.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWordpress size={24} />{' '}
                            {/* You can adjust the size as needed */}
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
}
