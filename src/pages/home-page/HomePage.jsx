import React, { useEffect } from 'react'
import { GAMES } from "../../constance/data-games"
import { GameItem } from "../../components/game-item/GameItem"
import { useDispatch, useSelector } from 'react-redux'
import "./HomePage.css"


export const HomePage = () => {

    useEffect(() => {

    }, [])

    return (
        <>
            <div className='home-page'>

                {GAMES.map(game => (<GameItem game={game} key={game.id} />))}
            </div>
        </>

    )
}
