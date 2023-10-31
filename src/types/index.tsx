import { StaticImageData } from 'next/image';

export type BlogPostProps = {
    title: string;
    content: string;
    date: string;
    tags: string[];
};

export type NavBarProps = {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    activeTab: string;
    setActiveTab: (value: string) => void;
    mobileNavOpen: boolean;
    setMobileNavOpen: (value: boolean) => void;
};

export type MobileNavButtonProps = {
    onClick: () => void;
};

export type ProfileProps = {
    imageSrc: StaticImageData;
    name: string;
    jobTitle: string;
    description: string;
};

export type SocialLinkProps = {
    linkedin: string;
    github: string;
    wordpress: string;
};
