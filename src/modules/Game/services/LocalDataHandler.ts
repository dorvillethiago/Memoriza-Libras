import store from '@/store.ts';
import { add, reset } from "@/modules/Game/states/combo.ts"

function getUserScore(): number {
    const userScore = localStorage.getItem('score');
    return userScore ? parseInt(userScore, 10) : 0;
}

function resetUserScore() {
    store.dispatch(reset())
}

function updateUserScore(score: number) {
    localStorage.setItem('score', score.toString())
}

function handleUserCombo() {
    store.dispatch(add())
    if (store.getState().combo > getUserScore()) {
        localStorage.setItem('score', (getUserScore()+1).toString())
    }
}

export { updateUserScore, handleUserCombo, getUserScore, resetUserScore }