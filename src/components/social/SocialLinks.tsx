import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
// import { FaWordpress } from 'react-icons/fa';
import { SocialLinkProps } from '@/types';

const SocialLinks: React.FC<SocialLinkProps> = ({ github }) => (
    <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-4 py-3">
            {/* <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
        >
            <AiFillLinkedin className="text-2xl md:text-3xl" />
            <span className="hidden sm:block">Connect on LinkedIn</span>
        </a> */}
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
                <AiFillGithub className="text-2xl md:text-3xl" />
                <span className="hidden sm:block">
                    Explore source in GitHub
                </span>
            </a>

            {/* <a
            href={wordpress}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 transition-colors duration-300"
        >
            <FaWordpress className="text-2xl md:text-3xl" />
            <span className="hidden sm:block">Visit My Blog</span>
        </a> */}
        </div>
        <div className="flex items-center justify-center text-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
            <span className="font-medium">© 2023</span>
        </div>
    </div>
);

export default SocialLinks;
