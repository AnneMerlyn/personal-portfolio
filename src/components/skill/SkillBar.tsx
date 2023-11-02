import React, { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
    skill: string;
    proficiency: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, proficiency }) => {
    const [isVisible, setIsVisible] = useState(false);
    const barRef = useRef<HTMLDivElement>(null);

    const onScroll = () => {
        if (barRef.current) {
            const top = barRef.current.getBoundingClientRect().top;
            if (top <= window.innerHeight) {
                setIsVisible(true);
                window.removeEventListener('scroll', onScroll);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        onScroll(); // Trigger a check on mount
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="my-2" ref={barRef}>
            <div className="flex justify-between">
                <span className="text-gray-700 dark:text-gray-300">
                    {skill}
                </span>
            </div>
            <div className="w-full md:w-3/4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className={`bg-pink-500 h-2.5 rounded-full transition-all duration-1000 ease-in-out ${
                        isVisible ? 'w-full' : 'w-0'
                    }`}
                    style={{ maxWidth: `${proficiency}%` }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;
