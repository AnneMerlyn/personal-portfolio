import React from 'react';

interface Experience {
    title: string;
    company: string;
    duration: string;
}

interface ExperienceTimelineProps {
    experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
    experiences,
}) => {
    return (
        <div className="experience-timeline mt-4">
            <h4 className="font-bold text-lg text-pink-500 dark:text-pink-400">
                {/* Icon and Title */}
                Notable Experience:
            </h4>
            <ul className="list-disc list-inside mt-2 font-serif">
                {experiences.map((experience, index) => (
                    <li
                        key={index}
                        className="text-gray-600 dark:text-gray-300"
                    >
                        {experience.title} at {experience.company} -{' '}
                        {experience.duration}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceTimeline;
