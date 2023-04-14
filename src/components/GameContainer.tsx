import React, { ReactNode } from 'react';

type GameContainerProps = {
    children?: React.ReactNode
}

export function GameContainer({ children } : GameContainerProps){
    return (
        <div className="min-w-screen min-h-screen flex flex-col justify-center items-center gap-y-7">
            {children}
        </div>
    );
}