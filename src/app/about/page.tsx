'use client';
import AboutMe from '@/components/about/AboutMe';
import Head from 'next/head';

export default function AboutMePage() {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <section>
                <AboutMe />
            </section>
        </>
    );
}
