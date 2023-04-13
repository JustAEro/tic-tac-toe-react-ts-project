import { Cell } from "./Cell";
import { useState } from "react";
import { ReloadPageButton } from "./ReloadPageButton";

export function Board() {
    const [isTurnX, setIsTurnX] = useState(true);
    const [isWinner, setIsWinner] = useState("");
    const [cells, setCells] = useState(Array(9).fill(""));

    const checkWin = (cells: Array<string>) => {
        const winLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < winLines.length; i++){
            const [indexA, indexB, indexC] = winLines[i];

            if (cells[indexA] === "X" && cells[indexB] === "X" && cells[indexC] === "X") {
                return "X";
            }
            else if ( cells[indexA] === "0" && cells[indexB] === "0" && cells[indexC] === "0") {
                return "0";
            }
        }
        
        if (cells.indexOf("") === -1) {
            return "Draw";
        }
        return "";
    }

    const getCellData = (index: number, owner: string) => {
        console.log(index, owner);
        
        const nextCells = [...cells];
        nextCells[index] = owner;

        setCells(nextCells);

        console.log(nextCells);
        const winStatus: string = checkWin(nextCells);

        setIsWinner(winStatus);

        if (!winStatus) {
            setIsTurnX(prev => !prev);
        }
    }


    return (
        <>
            { isWinner && (isWinner==="Draw" ? <h1>Draw</h1> : <h1>The winner is: {isWinner}</h1>) }

            <div className="grid grid-cols-3 grid-rows-3 w-96 h-96">
                { cells.map( (cell, index) => {
                        return <Cell 
                                key={index} 
                                isTurnX={isTurnX} 
                                index={index} 
                                getCellData={getCellData}
                                isWinner={isWinner}
                                />
                            } )  
                }
            </div>

            {isWinner && <ReloadPageButton text="Restart game" /> }
        </>
    );
}