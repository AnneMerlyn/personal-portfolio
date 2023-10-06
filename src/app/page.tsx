'use client';

import devan from '../../public/test.jpeg';
import React from 'react';
import '../styles/customStyles.css';
import NavBar from '@/components/navbar/Navbar';
import Profile from '@/components/profile/Profile';
import SocialLinks from '@/components/social/SocialLinks';

export default function Home() {
    const [darkMode, setDarkMode] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState('home');
    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className="bg-white px-4 md:px-10 lg:px-40 dark:bg-gray-900">
                <section className="min-h-screen flex flex-col justify-between">
                    <NavBar
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        mobileNavOpen={mobileNavOpen}
                        setMobileNavOpen={setMobileNavOpen}
                    />
                    <Profile
                        imageSrc={devan}
                        name="Anne Martinez"
                        jobTitle="Software Developer"
                        description="I build things with code. I have had the chance
                        to work with some great teams. Over time, I have
                        picked up skills in both front-end and back-end
                        areas, especially with C# and React. Although I
                        have learned a lot, I am continually eager to
                        dive into new areas and expand my skills. ... always up for a chat or a new challenge."
                    />

                    <SocialLinks
                        linkedin="https://www.linkedin.com/in/anne-merlyn-martinez/"
                        github="https://github.com/AnneMerlyn"
                        wordpress="https://your-wordpress-site-url.com"
                    />
                </section>
            </main>
        </div>
    );
}
