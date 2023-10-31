import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaWordpress } from 'react-icons/fa';
import { SocialLinkProps } from '@/types';

const SocialLinks: React.FC<SocialLinkProps> = ({
    linkedin,
    github,
    wordpress,
}) => (
    <div className="text-xl md:text-2xl flex flex-wrap items-center justify-center gap-2 py-3 text-gray-700 dark:text-gray-400">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
        </a>
        <a href={wordpress} target="_blank" rel="noopener noreferrer">
            <FaWordpress size={24} />
        </a>
    </div>
);

export default SocialLinks;
