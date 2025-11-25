import { createContext, useReducer } from "react"

export const GameContext = createContext()

export default function GameProvider ( {children} ) {

    const initialState = {
        wave: 1,
        damageDealt: 0,
        waveGoal: 100,
        caramels: 20,
        damagePerShot: 1,
        upgrades: []
    }

    const [state, dispatch] = useReducer(handleDispatch, initialState)
    const value = {state, dispatch}

    function handleDispatch(state, action) {

    }

    return (
        <>
        <GameContext.Provider value={value}>
        {children}
        </GameContext.Provider>
        </>
    )
}