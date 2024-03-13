import BaseLayout from '@/components/layout/BaseLayout';
import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Anne Martinez - Software Developer',
    description:
        'Discover the work of Anne Martinez, a software developer committed to building functional and effective digital solutions.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <BaseLayout>
                    {children}
                    <Analytics />
                </BaseLayout>
            </body>
        </html>
    );
}
