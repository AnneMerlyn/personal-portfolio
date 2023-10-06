'use client';

import devan from '../../public/test.jpeg';
import React from 'react';
import '../styles/customStyles.css';
import NavBar from '@/components/navbar/Navbar';
import Profile from '@/components/profile/Profile';
import SocialLinks from '@/components/social/SocialLinks';
import BlogPost from '@/components/blog/BlogPost';

const blogPosts = [
    {
        id: 1,
        title: 'Introduction to React',
        content:
            'React is a JavaScript library for building user interfaces. It was developed by Facebook and has a vibrant ecosystem. With React, you can easily build reusable component-based UIs.',
        date: 'October 05, 2023',
        tags: ['React', 'Frontend'],
    },
    {
        id: 2,
        title: 'Why Next.js is Awesome',
        content:
            'Next.js provides a great developer experience with features like static site generation and server-side rendering. Building React apps with Next.js ensures better performance and SEO optimization.',
        date: 'October 06, 2023',
        tags: ['Nextjs', 'Frontend'],
    },
    {
        id: 3,
        title: 'My First Blog Post',
        content: 'This is the content of my first blog post...',
        date: 'October 07, 2023',
        tags: ['React', 'Frontend'],
    },
    {
        id: 4,
        title: 'Another Great Post',
        content: 'This is another great blog post...',
        date: 'October 08, 2023',
        tags: ['Nextjs', 'Frontend'],
    },
    // ... add more blog posts as needed
];

export default function Home() {
    const [darkMode, setDarkMode] = React.useState(true);
    const [activeTab, setActiveTab] = React.useState('home');
    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
    const [displayedPosts, setDisplayedPosts] = React.useState(
        blogPosts.slice(0, 2)
    ); // Initially showing the first 2 posts

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
                <section className="min-h-screen flex flex-col justify-between">
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
                            {' '}
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
                        </>
                    )}
                    {activeTab === 'blog' && (
                        <div className="py-1">
                            {displayedPosts.map((post) => (
                                <BlogPost
                                    key={post.id}
                                    title={post.title}
                                    content={post.content}
                                    date={post.date}
                                    tags={post.tags}
                                />
                            ))}

                            {displayedPosts.length < blogPosts.length && ( // Condition to check if there are more posts
                                <button
                                    onClick={loadMorePosts}
                                    className="bg-pink-500 text-white py-2 px-4 rounded-full mt-6 hover:bg-pink-600 transition-colors duration-300"
                                >
                                    Load More
                                </button>
                            )}
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
