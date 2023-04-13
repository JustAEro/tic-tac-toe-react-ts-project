import cross from "../assets/cross-svgrepo-com.svg"
import zero from "../assets/circle-svgrepo-com.svg"
import { useState } from "react";

type CellProps = {
    isTurnX: boolean;
    index: number;
    getCellData: (index: number, owner: string) => void;
    isWinner: string;
};

export function Cell({ isTurnX, index, getCellData, isWinner } : CellProps){
    const [owner, setOwner] = useState("");

    const handleCellClick = () => {
        if (isWinner) {
            return;
        }
        if (!owner) {
            let nextOwner: string;
            if (isTurnX) {
                nextOwner = "X";   
            }
            else {
                nextOwner = "0";
            }
            setOwner(nextOwner);
            getCellData(index, nextOwner);
        }
    }

    return (
        <button onClick={handleCellClick} className="flex flex-col justify-center items-center border-solid border-2 border-black hover:bg-blue-300">
            { owner && <img src={ owner === "X" ? cross : zero } className="logo" alt={ owner === "X" ? "cross" : "zero" }></img> }
        </button>
    );
}