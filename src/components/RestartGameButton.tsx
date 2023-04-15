type RestartGameButtonProps = {
    text: string;
    handleRestart: () => void;
};

export function RestartGameButton({ text, handleRestart }: RestartGameButtonProps) {
    return (
        <button 
        className="bg-orange-400 p-4 rounded-md text-xl hover:shadow-md hover:shadow-orange-500" 
        onClick={handleRestart}>
            {text}
        </button>
    );
}