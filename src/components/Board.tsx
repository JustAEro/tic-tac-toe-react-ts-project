import { Cell } from "./Cell";
import { useState } from "react";
import { RestartGameButton } from "./RestartGameButton";

export function Board() {
    const [isTurnX, setIsTurnX] = useState(true);
    const [winner, setWinner] = useState("");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [winCells, setWinCells] = useState(Array(3).fill(-1));

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
                setWinCells([indexA, indexB, indexC]);
                return "X";
            }
            else if ( cells[indexA] === "0" && cells[indexB] === "0" && cells[indexC] === "0") {
                setWinCells([indexA, indexB, indexC]);
                return "0";
            }
        }
        
        if (cells.indexOf("") === -1) {
            return "Draw";
        }
        return "";
    }

    const handleChangeCellData = (index: number, owner: string) => {
        const nextCells = [...cells];
        nextCells[index] = owner;

        setCells(nextCells);

        const winStatus: string = checkWin(nextCells);

        setWinner(winStatus);

        if (!winStatus) {
            setIsTurnX(prev => !prev);
        }
    }


    return (
        <>
            { !winner && (isTurnX ? 
                            <h1 className="text-3xl font-bold">The next turn is: X</h1> :
                            <h1 className="text-3xl font-bold">The next turn is: 0</h1>
                            ) }

            { winner && (winner==="Draw" ? 
                          <h1 className="text-3xl font-bold">Draw</h1> : 
                          <h1 className="text-3xl font-bold">The winner is: {winner}</h1>) }

            <div className="grid grid-cols-3 grid-rows-3 w-96 h-96">
                { cells.map( (cell, index) => {
                    return <Cell 
                            key={index} 
                            isTurnX={isTurnX} 
                            index={index} 
                            handleChangeCellData={handleChangeCellData}
                            winner={winner}
                            isWinCell={ winCells.indexOf(index) === -1 ? false : true}
                            />                    
                    } )  
                }
            </div>

            {winner && <RestartGameButton text="Restart game" /> }
        </>
    );
}