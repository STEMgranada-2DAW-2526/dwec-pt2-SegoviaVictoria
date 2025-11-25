import { createContext } from "react"

export const GameContext = createContext()

export default function GameProvider ( {children} ) {
    return (
        <>
        <GameContext.Provider value={value}>
        {children}
        </GameContext.Provider>
        </>
    )
}