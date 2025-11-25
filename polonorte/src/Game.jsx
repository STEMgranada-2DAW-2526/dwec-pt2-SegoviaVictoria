import { useContext } from "react"
import { GameContext } from "./GameContext"

export default function Game () {

    const { state } = useContext(GameContext)

    return (
        <>
        <h3>{state.damageDealt} / {state.waveGoal}</h3>
        </>
    )
}