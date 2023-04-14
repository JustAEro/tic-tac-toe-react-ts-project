type RestartGameButtonProps = {
    text: string;
};

const handleRestart = () => {
    window.location.reload();
}


export function RestartGameButton({ text }: RestartGameButtonProps) {
    return (
        <button 
        className="bg-orange-400 p-4 rounded-md text-xl hover:shadow-md hover:shadow-orange-500" 
        onClick={handleRestart}>
            {text}
        </button>
    );
}