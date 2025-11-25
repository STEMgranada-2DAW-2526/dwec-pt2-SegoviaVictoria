import { useContext } from "react"
import { GameContext } from "./GameContext"

export default function UpgradesBoard() {

    const { state, dispatch } = useContext(GameContext)

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px"}}>
                <div>
                    <p>Multiplicador ({Math.round(state.multiplierPrice)}🍬)</p>
                    <p>+1 disparos automaticos</p>
                    <button onClick={() => dispatch({ type: 'BUY_MULTIPLIER' })}>Comprar multiplicador</button>
                </div>
                <div>
                    <p>Cañón turrón (15🍬)</p>
                    <p>+2 disparos por clic</p>
                    <button onClick={() => dispatch({ type: 'BUY_DAMAGE_UPGRADE' })}>Comprar cañón</button>
                </div>
                <div>
                    <p>Renoslanzamisisles (30🍬)</p>
                    <p>+5 disparos por clic</p>
                    <button onClick={() => dispatch({ type: 'BUY_DAMAGE_UPGRADE' })}>Comprar lanzamisiles</button>
                </div>
                <div>
                    <p>Árbol de navidad Láser (50🍬)</p>
                    <p>+10 disparos por clic</p>
                    <button onClick={() => dispatch({ type: 'BUY_DAMAGE_UPGRADE' })}>Comprar láser</button>
                </div>
            </div>
        </>
    )
}