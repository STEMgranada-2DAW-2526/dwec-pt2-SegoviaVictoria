import { useContext } from "react"
import { GameContext } from "./GameContext"

export default function Game() {

    const { state, dispatch } = useContext(GameContext)

    return (
        <>
            <div>
                <h3>Daño: {state.damageDealt} / {state.waveGoal}</h3>
                <h3>Caramelos: {state.caramels}</h3>
                <h3>Oleada: {state.wave}</h3>
            </div>
            <div>
                <button className="disparar" onClick={() => dispatch({type: 'CLICK_SHOOT'})}>🏹</button>
            </div>
        </>
    )
}