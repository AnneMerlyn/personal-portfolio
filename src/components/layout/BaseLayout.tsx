'use client';

import { useState } from 'react';
import NavBar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [darkMode, setDarkMode] = useState(true);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="bg-slate-50 px-4 md:px-10 lg:px-40 flex flex-col dark:bg-gray-900 min-h-screen">
                <NavBar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    mobileNavOpen={mobileNavOpen}
                    setMobileNavOpen={setMobileNavOpen}
                />

                {children}

                <Footer github="https://github.com/AnneMerlyn" />
            </div>
        </div>
    );
}
