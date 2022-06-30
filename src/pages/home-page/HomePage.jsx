import React from 'react'
import { GameItem } from "../../components/game-item/GameItem"
import { useSelector } from 'react-redux'

import "./HomePage.css"


export const HomePage = () => {
    const products = useSelector(state => state.products.products)
    console.log(products);

    return (
        <>
            <div className='home-page'>

                {(products || []).map(game => (<GameItem game={game} key={game.id} />))}
            </div>
        </>

    )
}
