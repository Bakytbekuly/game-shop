import React from 'react'
import { Link } from 'react-router-dom'
import { Basket } from '../basket/Basket'
import "./Header.css"

export const Header = () => {
    return (
        <div className='header'>

            <div className="wrapper">
                <Link to="/" className='header_store-title'>GameStore.kz</Link>
            </div>
            <div className="wrapper header_cart-btn-wrapper" >
                <Basket />
            </div>
        </div>
    )
}
