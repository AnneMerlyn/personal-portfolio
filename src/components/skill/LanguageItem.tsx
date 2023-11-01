import React from 'react';
import { LanguageItemProps } from '@/types';

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
