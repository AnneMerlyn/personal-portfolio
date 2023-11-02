'use client';

import devan from '../../public/profile.jpeg';
import React, { useState } from 'react'; // Use destructuring for useState
import '../styles/customStyles.css';
import NavBar from '@/components/navbar/Navbar';
import Profile from '@/components/profile/Profile';
import SocialLinks from '@/components/social/SocialLinks';
import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/constants';
import AboutMe from '@/components/about/AboutMe';
import Contact from '@/components/contact/Contact';

export default function Home() {
    // Use destructuring for useState
    const [darkMode, setDarkMode] = useState(true);
    const [activeTab, setActiveTab] = useState('home');
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [displayedPosts, setDisplayedPosts] = useState(blogPosts.slice(0, 2));

    const loadMorePosts = () => {
        const nextPosts = blogPosts.slice(
            displayedPosts.length,
            displayedPosts.length + 2
        );
        setDisplayedPosts((prevPosts) => [...prevPosts, ...nextPosts]);
    };

    return (
        <div className={darkMode ? 'dark' : ''}>
            <main className="bg-slate-50 px-4 md:px-10 lg:px-40 dark:bg-gray-900">
                <section className="min-h-screen flex flex-col">
                    <NavBar
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        mobileNavOpen={mobileNavOpen}
                        setMobileNavOpen={setMobileNavOpen}
                    />
                    {activeTab === 'home' && (
                        <>
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
                        </>
                    )}
                    {activeTab === 'blog' && (
                        <div className="py-1 md:py-10">
                            {displayedPosts.map((post) => (
                                <BlogPost
                                    key={post.id}
                                    title={post.title}
                                    content={post.content}
                                    date={post.date}
                                    tags={post.tags}
                                />
                            ))}
                            {displayedPosts.length < blogPosts.length && (
                                <button
                                    onClick={loadMorePosts}
                                    className="bg-pink-500 text-white py-2 px-4 rounded-full mt-6 hover:bg-pink-600 transition-colors duration-300"
                                >
                                    Load More
                                </button>
                            )}
                        </div>
                    )}
                    {activeTab === 'about' && (
                        <div className="py-1 md:py-10">
                            <AboutMe setActiveTab={setActiveTab} />
                        </div>
                    )}
                    {activeTab === 'contact' && (
                        <div className="py-1 md:py-10">
                            <Contact />
                        </div>
                    )}

                    <div className="mt-10 text-center">
                        <SocialLinks
                            // linkedin="https://www.linkedin.com/in/anne-merlyn-martinez/"
                            github="https://github.com/AnneMerlyn"
                            // wordpress="https://your-wordpress-site-url.com"
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}
