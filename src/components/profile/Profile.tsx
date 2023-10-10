import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { StaticImageData } from 'next/image';

type ProfileProps = {
    imageSrc: StaticImageData;
    name: string;
    jobTitle: string;
    description: string;
};

const Profile: React.FC<ProfileProps> = ({
    imageSrc,
    name,
    jobTitle,
    description,
}) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center max-w-3xl mx-auto gap-6 mt-8 md:mt-28 md:gap-9">
            <div className="shadow-md bg-gradient-to-b from-pink-300 to-lavender-300 rounded-full w-40 h-40 relative overflow-hidden md:w-64 md:h-64 md:flex-none">
                <Image
                    src={imageSrc}
                    layout="fill"
                    objectFit="cover"
                    alt={name}
                />
            </div>
            <div className="flex-grow text-center md:text-left space-y-5 mt-6 md:mt-0">
                <p className="text-xl font-semi-bold bg-pink-200 dark:bg-pink-400 inline-block rounded-sm px-1 py-0.5 dark:text-gray-200">
                    Hey there, I&apos;m
                </p>
                <div className="text-4xl py-1 text-pink-500 font-semibold dark:text-pink-400 md:text-5xl font-mono">
                    <Typewriter
                        options={{
                            strings: [name],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <h3 className="text-2xl py-1 text-gray-600 dark:text-white md:text-3xl font-light">
                    {jobTitle}
                </h3>
                <p className="text-md py-3 leading-7 text-gray-700 dark:text-gray-200 md:text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Profile;
