'use client';
import BlogPost from '@/components/blog/BlogPost';
import { blogPosts } from '@/constants';
import { useState } from 'react';

export default function BlogPage() {
    const [displayedPosts, setDisplayedPosts] = useState(blogPosts.slice(0, 2));

    const loadMorePosts = () => {
        const nextPosts = blogPosts.slice(
            displayedPosts.length,
            displayedPosts.length + 2
        );
        setDisplayedPosts((prevPosts) => [...prevPosts, ...nextPosts]);
    };

    return (
        <>
            <section>
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
            </section>
        </>
    );
}
