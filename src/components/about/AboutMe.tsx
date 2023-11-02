import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCogs,
    faBriefcase,
    faBook,
    faGlobeAmericas,
    faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Contact from '@/components/contact/Contact';

import SkillBar from '@/components/skill/SkillBar';
import ProjectCarousel from '@/components/common/Carousel/ProjectList';
import PersonalInterestCarousel from '@/components/common/Carousel/PersonalInterest';
import LanguageItem from '@/components/skill/LanguageItem';
import ExperienceTimeline from '@/components/skill/ExperienceTimeline';
import '../../styles/customStyles.css';
import {
    skills,
    languages,
    projects,
    experiences,
    personalInterestsData,
} from '@/constants';

const AboutMe: React.FC<{ setActiveTab: (tab: string) => void }> = ({
    setActiveTab,
}) => {
    return (
        <div className="about-me-section pt-0 md:p-4 mt-0">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-600">
                    A little something about me
                </h1>
            </div>

            <p className="text-gray-600 dark:text-gray-300 font-serif transition-font">
                Hailing from the vibrant shores of the Philippines, my journey
                in the tech industry began as a curious endeavor into the world
                of coding. This curiosity quickly blossomed into a passionate
                career, leading me to where I am today: a dedicated software
                developer working remotely from the scenic landscapes of
                Germany. When I&apos;m not immersed in crafting elegant code
                solutions, you might find me indulging in my love for
                photography, capturing the serene sunsets and dynamic cityscapes
                that inspire my creative side. This balance between technology
                and art defines who I am, driving me to continuously explore the
                intersection of functionality and beauty in both my professional
                and personal life.
            </p>

            <div className="mt-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400">
                            <FontAwesomeIcon
                                icon={faBriefcase}
                                className="mr-2"
                            />
                            Notable Experiences:
                        </h4>
                    </div>
                    <ExperienceTimeline experiences={experiences} />
                </div>

                <div className="flex-1">
                    <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400">
                        <FontAwesomeIcon icon={faCogs} className="mr-2" />{' '}
                        Skills:
                    </h4>
                    {skills.map((skill, index) => (
                        <SkillBar
                            key={index}
                            skill={skill.skill}
                            proficiency={skill.proficiency}
                        />
                    ))}
                </div>

                <div className="flex-1">
                    <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400">
                        <FontAwesomeIcon
                            icon={faGlobeAmericas}
                            className="mr-2"
                        />
                        Languages Spoken:
                    </h4>
                    {languages.map((language, index) => (
                        <LanguageItem
                            key={index}
                            language={language.language}
                            proficiency={language.proficiency}
                            flag={language.flag}
                        />
                    ))}
                    <a
                        href="https://www.linkedin.com/in/anne-merlyn-martinez/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View my LinkedIn profile"
                        className="inline-flex items-center px-4 py-2 bg-linkedinBlue text-white dark:text-white font-bold rounded-md text-sm shadow-sm hover:bg-linkedinDark transition-all duration-300"
                    >
                        <p className=" text-gray-200 dark:text-white">
                            See more on LinkedIn
                        </p>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="ml-2 h-5 w-5 text-gray-200 dark:text-white"
                        />
                    </a>
                </div>
            </div>

            <div className="mt-4 flex flex-col w-full">
                <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400 mb-4">
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />{' '}
                    Personal Projects:
                </h4>
                <div className="flex justify-center items-center">
                    <ProjectCarousel projects={projects} />
                </div>
            </div>

            <div className="mt-4 flex flex-col w-full">
                <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400 mb-4">
                    <FontAwesomeIcon icon={faBook} className="mr-2" /> Personal
                    Interests:
                </h4>
                <div className="flex justify-center items-center">
                    <PersonalInterestCarousel
                        personalInterests={personalInterestsData}
                    />
                </div>
            </div>

            <div className="mt-8">
                <a
                    className="bg-pink-500 text-white px-6 py-2 rounded-pill hover:bg-pink-600 transition-all duration-300 shadow-md"
                    href="#contact"
                    onClick={() => setActiveTab('contact')}
                >
                    Let&apos;s Connect
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
