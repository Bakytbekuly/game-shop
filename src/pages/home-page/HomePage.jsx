import React from 'react'
import { GAMES } from "../../constance/data-games"
import { GameItem } from "../../components/game-item/GameItem"
import "./HomePage.css"

export const HomePage = () => {

    return (
        <div className='home-page'>
            {GAMES.map(game => (<GameItem game={game} key={game.id} />))}
        </div>
    )
}
