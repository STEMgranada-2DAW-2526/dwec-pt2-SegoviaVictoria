import { createContext, useReducer, useEffect } from "react"

export const GameContext = createContext()

export default function GameProvider({ children }) {

    const initialState = {
        wave: 1,
        multiplierPrice: 10,
        multiplierCount: 0,
        damageDealt: 0,
        waveGoal: 100,
        caramels: 20,
        damagePerShot: 1,
        autoShotsPerSecond: 1,
        upgrades: []
    }

    const [state, dispatch] = useReducer(handleDispatch, initialState)
    const value = { state, dispatch }

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({ type: 'AUTO_SHOOT' })
            dispatch({ type: 'NEXT_WAVE' })
        }, 1000);

        return () => { clearInterval(timer) }
    }, [])

    function handleDispatch(state, action) {
        let newState = { ...state }

        if (action.type == 'CLICK_SHOOT' && state.damageDealt < state.waveGoal) {
            newState = {
                ...state,
                damageDealt: state.damageDealt + state.damagePerShot
            }
        }

        else if (action.type == 'BUY_MULTIPLIER' && state.caramels >= state.multiplierPrice) {
            newState = {
                ...state,
                autoShotsPerSecond: state.autoShotsPerSecond + 1,
                multiplierPrice: state.multiplierPrice * 1.2,
                caramels: state.caramels - state.multiplierPrice
            }
        }

        else if (action.type == 'BUY_DAMAGE_UPGRADE_1') {
            const copyUpgrades = [...state.upgrades]
            let newCaramels = state.caramels

            if (!copyUpgrades.includes("canon") && !copyUpgrades.includes("lanza") && !copyUpgrades.includes("arbol")) {
                if (state.caramels >= 15) {
                    newCaramels -= 15
                    copyUpgrades.push("canon")
                }
            }

            newState = { ...state, caramels: newCaramels, upgrades: copyUpgrades, damagePerShot: state.damagePerShot + 2 }
        }

        else if (action.type == 'BUY_DAMAGE_UPGRADE_2') {
            const copyUpgrades = [...state.upgrades]
            let newCaramels = state.caramels

            if (copyUpgrades.includes("canon")) {
                if (state.caramels >= 30) {
                    newCaramels -= 30
                    copyUpgrades.push("lanza")
                }

            }
            newState = { ...state, caramels: newCaramels, upgrades: copyUpgrades, damagePerShot: state.damagePerShot + 5 }
        }

        else if (action.type == 'BUY_DAMAGE_UPGRADE_3') {
            const copyUpgrades = [...state.upgrades]
            let newCaramels = state.caramels

            if (copyUpgrades.includes("canon") && copyUpgrades.includes("lanza")) {
                if (state.caramels >= 50) {
                    newCaramels -= 50
                    copyUpgrades.push("arbol")
                }
            }
            newState = { ...state, caramels: newCaramels, upgrades: copyUpgrades, damagePerShot: state.damagePerShot + 10 }
        }

        if (action.type == 'NEXT_WAVE' && state.damageDealt >= state.waveGoal) {
            newState = {
                ...state,
                damageDealt: 0,
                caramels: state.caramels + 10,
                waveGoal: state.waveGoal * 1.1,
                wave: state.wave + 1
            }
        }
        
        if (action.type == 'AUTO_SHOOT') {
            newState = {
                ...state,
                damageDealt: state.damageDealt + state.autoShotsPerSecond
            }

        }

        console.log(state.upgrades)

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