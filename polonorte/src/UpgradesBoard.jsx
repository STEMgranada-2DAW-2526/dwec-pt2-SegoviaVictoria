import { useContext } from "react"
import { GameContext } from "./GameContext"

export default function UpgradesBoard() {

    const {state, dispatch} = useContext(GameContext)

    return (
        <>
            <div>
                <p>Multiplicador</p>
                <button>Multiplicador </button>
            </div>
            <div>
                <p>Cañón turron (15🍬)</p>
                <p>+2 disparos automaticos</p>
                <button onClick={() => dispatch ({type: 'BUY_DAMAGE_UPGRADE'})}>Comprar cañon</button>
            </div>
        </>
    )
}