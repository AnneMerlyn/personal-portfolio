import React from 'react';

interface LanguageItemProps {
    language: string;
    proficiency: string;
    flag: string; // Assuming this is a URL to an image of the flag
}

const LanguageItem: React.FC<LanguageItemProps> = ({
    language,
    proficiency,
    flag,
}) => {
    return (
        <div className="flex items-center my-2 ">
            <span className="text-gray-600 dark:text-gray-300">
                {language} - {proficiency}
            </span>
        </div>
    );
};

export default LanguageItem;
