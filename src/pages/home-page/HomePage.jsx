import React from 'react'
import { useDispatch } from 'react-redux'
import { useAuth } from "../../hooks/use-auth"
import { removeUser } from '../../store/slice/userSlice'
import { GAMES } from "../../constance/data-games"
import { GameItem } from "../../components/game-item/GameItem"
import "./HomePage.css"
import { Link } from 'react-router-dom'

export const HomePage = () => {

    return (
        <>
            <div className='home-page'>

                {GAMES.map(game => (<GameItem game={game} key={game.id} />))}
            </div>
        </>

    )
}
