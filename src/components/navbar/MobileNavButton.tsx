type MobileNavButtonProps = {
    onClick: () => void;
};

export const MobileNavButton: React.FC<MobileNavButtonProps> = ({
    onClick,
}) => (
    <button
        onClick={onClick}
        className="bg-pink-500 dark:bg-pink-400 text-white p-2 rounded"
    >
        ☰
    </button>
);
