type ReloadPageButtonProps = {
    text: string;
};

export function ReloadPageButton({ text }: ReloadPageButtonProps) {
    const handleReload = () => window.location.reload()

    return (
        <button className="bg-orange-400" onClick={handleReload}>{text}</button>
    );
}