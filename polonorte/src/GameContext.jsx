import { createContext, useReducer } from "react"

export const GameContext = createContext()

export default function GameProvider({ children }) {

    const initialState = {
        wave: 1,
        damageDealt: 0,
        waveGoal: 100,
        caramels: 20,
        damagePerShot: 1,
        upgrades: []
    }

    const [state, dispatch] = useReducer(handleDispatch, initialState)
    const value = { state, dispatch }

    function handleDispatch(state, action) {
        let newState = { ...state }

        if (action.type == 'CLICK_SHOOT') {
            newState = {
                ...state,
                damageDealt: state.damageDealt + state.damagePerShot
            }
        }

        if (state.damageDealt == state.waveGoal) {
            newState = {
                ...state,
                damageDealt: 0,
                waveGoal: state.waveGoal * 1.1
            }
        }

        return newState
    }

    return (
        <>
            <GameContext.Provider value={value}>
                {children}
            </GameContext.Provider>
        </>
    )
}