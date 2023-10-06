import React, { useState } from 'react';
import { BlogPostProps } from '../../types';

const BlogPost: React.FC<BlogPostProps> = ({ title, content, date, tags }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const readTime = Math.ceil(content.split(' ').length / 200);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOverlayClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="p-4 mb-6 border rounded shadow-sm hover:shadow-md transition-shadow duration-300">
            <h2
                className="text-2xl font-bold mb-2 text-pink-600 cursor-pointer"
                onClick={openModal}
            >
                {title}
            </h2>
            <div className="flex space-x-2 mt-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs uppercase bg-pink-200 text-pink-700 px-2 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-500 mb-4 italic mt-2">
                {date} · {readTime} min read
            </p>
            <p className="text-lg">{content}</p>

            {isModalOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={handleOverlayClick}
                >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-3/4 max-w-2xl">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4 text-pink-600">
                            {title}
                        </h2>
                        <div className="flex space-x-2 mt-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs uppercase bg-pink-200 text-pink-700 px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 mb-4 italic mt-2">
                            {date} · {readTime} min read
                        </p>
                        <p className="text-lg">{content}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPost;
