'use client';

import NavBar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { useState } from 'react';

export const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [darkMode, setDarkMode] = useState(true);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <html lang="en">
            <body className={inter.className}>
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
            </body>
        </html>
    );
}
