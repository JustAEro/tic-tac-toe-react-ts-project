import cross from "../assets/cross-svgrepo-com.svg"
import zero from "../assets/circle-svgrepo-com.svg"
import { useEffect, useState } from "react";

type CellProps = {
    isTurnX: boolean;
    index: number;
    handleChangeCellData: (index: number, owner: string) => void;
    winner: string;
    isWinCell: boolean;
};

export function Cell({ isTurnX, index, handleChangeCellData, winner, isWinCell } : CellProps){
    const [owner, setOwner] = useState("");

    const handleCellClick = () => {
        if (winner) {
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
            handleChangeCellData(index, nextOwner);
        }
    }

    return (
        <button onClick={handleCellClick} 
                className={`${ index === 0 ? "border-l-0 border-t-0" :
                               index === 2 ? "border-t-0 border-r-0" :
                               index === 6 ? "border-b-0 border-l-0" :
                               index === 8 ? "border-b-0 border-r-0" :
                               index % 3 === 0 ? "border-l-0" :
                               index % 3 === 2 ? "border-r-0" :
                               index >= 0 && index <= 2 ? "border-t-0" :
                               index >= 6 && index <= 8 && "border-b-0"
                            }
                            border-solid border-2 border-black flex flex-col justify-center items-center 
                            ${isWinCell ? "bg-orange-400" : 
                              winner ? "" : "hover:bg-blue-300"
                            }
                           `
                          }>
            { owner && <img src={ owner === "X" ? cross : zero } className="logo" alt={ owner === "X" ? "cross" : "zero" }></img> }
        </button>
    );
}