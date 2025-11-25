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

        if (action.type == 'CLICK_SHOOT' && state.damageDealt < state.waveGoal) {
            newState = {
                ...state,
                damageDealt: state.damageDealt + state.damagePerShot
            }
        }

        else if (action.type == 'AUTO_SHOOT') {

        }

        else if (action.type == 'BUY_MULTIPLIER') {

        }

        else if (action.type == 'BUY_DAMAGE_UPGRADE') {
            
        }

        else if (action.type == 'NEXT_WAVE' && state.damageDealt == state.waveGoal) {
            newState = {
                ...state,
                damageDealt: 0,
                waveGoal: state.waveGoal * 1.1,
                wave: state.wave +1
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