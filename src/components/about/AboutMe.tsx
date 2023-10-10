import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCogs,
    faBriefcase,
    faBook,
    faGlobeAmericas,
    faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/customStyles.css';

const AboutMe: React.FC = () => {
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
                <ul className="flex flex-wrap gap-2 mt-2">
                    {/* Replace with your actual skills */}
                    <li className="bg-pink-200 text-pink-500 dark:text-pink-400 px-2 py-1 rounded shadow-lg">
                        React
                    </li>
                    <li className="bg-pink-200 text-pink-500 dark:text-pink-400 px-2 py-1 rounded shadow-lg">
                        Node.js
                    </li>
                </ul>
            </div>

            {/* Professional Experience */}
            <div className="mt-4">
                <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />{' '}
                    Notable Experience:
                </h4>
                <ul className="list-disc list-inside mt-2 font-serif">
                    {/* Replace with your actual experiences */}
                    <li className="text-gray-600 dark:text-gray-300">
                        Associate Software Engineer II at OPTUM
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                        Software Engineer 1 at Kyocera
                    </li>
                </ul>
            </div>

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

                <ul className="list-disc list-inside mt-2 font-serif">
                    {/* Replace with languages you speak and your proficiency */}
                    <li className="text-gray-600 dark:text-gray-300">
                        English - Fluent
                    </li>
                    <li className="text-gray-600 dark:text-gray-300">
                        Deutsch - Beginner
                    </li>
                </ul>
            </div>

            {/*TBD*/}
            {/* Personal Projects */}
            {/* <div className="mt-4">
                <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400">
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />{' '}
                    Personal Projects:
                </h4>

                <div className="mt-2">
                    <div className="project-card mt-4">
                        <img
                            src="[Path_to_project_image]"
                            alt="[Project Name]"
                            className="w-full rounded shadow-md"
                        />
                        <h5 className="font-semibold mt-2  text-gray-600 dark:text-gray-300">
                            [Project Name]
                        </h5>
                        <p className="text-gray-600 dark:text-gray-300 font-serif mt-1">
                            [Short description of the project, technologies
                            used, the problem it solves, etc.]
                        </p>

                        <div className="mt-2 flex space-x-2">
                            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                                React
                            </span>
                            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                                Node.js
                            </span>
                        </div>

                        <div className="mt-2 flex space-x-2">
                            <a
                                href="[Live_Demo_Link]"
                                className="text-pink-500 dark:text-pink-400 hover:underline"
                            >
                                Live Demo
                            </a>
                            <a
                                href="[GitHub_Repo_Link]"
                                className="text-pink-500 dark:text-pink-400 hover:underline"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}

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
