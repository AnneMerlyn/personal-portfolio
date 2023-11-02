import React from 'react';
import { ExperienceTimelineProps } from '@/types';

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
    experiences,
}) => {
    return (
        <div className="experience-timeline mt-4">
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
