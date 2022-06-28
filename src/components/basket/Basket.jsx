import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti"
import { BasketMenu } from "../basket-menu/BasketMenu"
import { BasketBadge } from "../basket-badge/BasketBadge"
import { calcTotalPrice } from "../../utils"
import "./Basket.css"

export const Basket = () => {
    const [basketVisible, setBasketVisible] = useState(false)
    const items = useSelector(state => state.basket.itemsInBasket)
    const totalPrice = calcTotalPrice(items)
    const navigate = useNavigate()

    const handleClick = useCallback(() => {
        setBasketVisible(false)
        navigate("/order")
    }, [navigate])

    return (
        <div className='basket'>
            <BasketBadge quantity={items.length} />
            <TiShoppingCart size={25} className="basket-icon" onClick={() => setBasketVisible(!basketVisible)} />

            {totalPrice > 0 ?
                <span className='basket_total-price'>{totalPrice}</span> : null}
            {basketVisible && <BasketMenu items={items} onClick={handleClick} />}
        </div>
    )
}
