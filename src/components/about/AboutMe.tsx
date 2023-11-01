import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCogs,
    faBriefcase,
    faBook,
    faGlobeAmericas,
    faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import SkillBar from '@/components/skill/SkillBar';
import ProjectCarousel from '@/components/project/ProjectCarousel';
import LanguageItem from '@/components/skill/LanguageItem';
import ExperienceTimeline from '@/components/skill/ExperienceTimeline';
import '../../styles/customStyles.css';
import proj1 from '../../../public/projectone.jpeg';

const AboutMe: React.FC = () => {
    const skills = [
        { skill: 'React', proficiency: 90 },
        { skill: 'Node.js', proficiency: 80 },
        // Add more skills here
    ];

    const languages = [
        { language: 'English', proficiency: 'Fluent', flag: 'us' },
        { language: 'Deutsch', proficiency: 'Beginner', flag: 'de' },
        // Add more languages here
    ];

    const projects = [
        {
            name: 'Project One',
            description: 'This is a brief description of Project One.',
            imageSrc: proj1,
            technologies: ['React', 'Node.js'], // Add relevant technologies
            liveDemoLink: 'https://project-one.com',
            githubRepoLink: 'https://github.com/project-one',
        },
        {
            name: 'Project Two',
            description: 'This is a brief description of Project Two.',
            imageSrc: proj1,
            technologies: ['Angular', 'Firebase'], // Add relevant technologies
            liveDemoLink: 'https://project-two.com',
            githubRepoLink: 'https://github.com/project-two',
        },
        // Add more projects here
    ];

    return (
        <div className="about-me-section pt-0 md:p-4 mt-0">
            {/* Personal Background */}
            <p className="text-gray-600 dark:text-gray-300 font-serif transition-font">
                I am originally from the Philippines but currently work remotely
                based in Germany. When I&apos;m not engrossed in coding, I can
                often be found at the beach, waiting patiently for the
                sunset.....
            </p>

            {/* Technical Skills */}
            <div className="mt-4">
                <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400">
                    <FontAwesomeIcon icon={faCogs} className="mr-2" /> Skills:
                </h4>
                {skills.map((skill, index) => (
                    <SkillBar
                        key={index}
                        skill={skill.skill}
                        proficiency={skill.proficiency}
                    />
                ))}
            </div>

            {/* Professional Experience */}
            {/* <ExperienceTimeline /> */}

            {/* Personal Interests */}
            <div className="mt-4">
                <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400">
                    <FontAwesomeIcon icon={faBook} className="mr-2" /> Personal
                    Interests:
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-serif mt-2">
                    Besides coding, I love hiking, capturing nature through my
                    lens,..
                </p>
            </div>

            {/* Languages Spoken */}
            <div className="mt-4">
                <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400">
                    <FontAwesomeIcon icon={faGlobeAmericas} className="mr-2" />{' '}
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
            </div>

            {/* Personal Projects */}
            <div className="mt-4 flex flex-col w-full">
                <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400 mb-4">
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />{' '}
                    Personal Projects:
                </h4>
                <div className="flex justify-center items-center">
                    <ProjectCarousel projects={projects} />
                </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
                <a
                    href="[Link to your Resume or Contact Form]"
                    className="bg-pink-500 text-white px-6 py-2 rounded-pill hover:bg-pink-600 transition-all duration-300 shadow-md"
                >
                    Let&apos;s Connect
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
