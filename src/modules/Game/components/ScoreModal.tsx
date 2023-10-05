import {useSelector} from 'react-redux';
import {RootState} from "@/store.ts";
import "@utils/Animations.css"

import {handleCloseModal} from "@/modules/Game/services/UserInteract.ts";
import React from "react";

export default function ScoreModal() {
    const modals = useSelector((state: RootState) => state.modals)
    const handleOutterModalClick = (event:  React.MouseEvent) => {
        if (event.target instanceof HTMLElement && event.target.id == 'background') {
            handleCloseModal();
        }
    };

    function getUserScore(): number {
        const userScore = localStorage.getItem('score');
        return userScore ? parseInt(userScore, 10) : 0;
    }

    if (modals.includes('score')) {
        return (
            <div
                id="background"
                onClick={(e) => handleOutterModalClick(e)}
                style={ModalBackground}
                className="px-10 appear absolute w-screen h-screen bg-[rgba(255, 0, 0, 0.5)] z-30 flex items-center justify-center">
                <div className="cartoon-shadow fade-in bg-primary p-14 rounded-md z-40 flex flex-col gap-5 items-center">
                    <h1 className="text-background font-black text-3xl">PONTUAÇÃO</h1>
                    <div className="flex gap-2 items-center">
                        <p className="text-background font-semibold">Sua pontuação máxima é</p>
                        <h3 className="text-background font-black text-2xl">{getUserScore()}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

const ModalBackground = {
    backgroundColor: 'rgba(0,0,0,0.5)', // Red color with 50% opacity
};