'use client';

import { useState } from 'react';
import NavBar from '../navbar/Navbar';

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [darkMode, setDarkMode] = useState(true);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className="bg-slate-50 px-4 md:px-10 lg:px-40 dark:bg-gray-900 min-h-screen flex flex-col">
                <NavBar
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    mobileNavOpen={mobileNavOpen}
                    setMobileNavOpen={setMobileNavOpen}
                />

                {children}
            </main>
        </div>
    );
}
