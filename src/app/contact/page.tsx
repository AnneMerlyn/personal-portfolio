'use client';

import Contact from '@/components/contact/Contact';
import Head from 'next/head';

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <section>
                <Contact />
            </section>
        </>
    );
}
