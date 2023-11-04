'use client';
import Head from 'next/head';
import devan from '../../public/profile.jpeg';
import '../styles/customStyles.css';
import Profile from '@/components/profile/Profile';
import SocialLinks from '@/components/social/SocialLinks';

export default function Home() {
    return (
        <>
            <Head>
                <title>Anne Martinez - Software Developer</title>
                <meta
                    name="description"
                    content="Discover the work of Anne Martinez, a software developer committed to building functional and effective digital solutions."
                />
            </Head>
            <section className="py-1">
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

                <div className="mt-10 text-center">
                    <SocialLinks
                        // linkedin="https://www.linkedin.com/in/anne-merlyn-martinez/"
                        github="https://github.com/AnneMerlyn"
                        // wordpress="https://your-wordpress-site-url.com"
                    />
                </div>
            </section>
        </>
    );
}
