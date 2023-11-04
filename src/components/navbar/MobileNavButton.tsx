import { MobileNavButtonProps } from '@/types';

export const MobileNavButton: React.FC<MobileNavButtonProps> = ({
    onClick,
}) => (
    <button
        onClick={onClick}
        className="bg-pink-500 dark:bg-pink-400 text-white py-2 px-4 rounded"
    >
        ☰
    </button>
);
