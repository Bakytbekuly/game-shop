import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti"
import { BasketMenu } from "../basket-menu/BasketMenu"
import { BasketBadge } from "../basket-badge/BasketBadge"
import { calcTotalPrice } from "../../utils"
import { basketOnOff, basketOff, logoOff } from "../../store/slice/openClose"
import "./Basket.css"

export const Basket = () => {
    const items = useSelector(state => state.basket.itemsInBasket)
    const popover = useSelector(state => state.openClose.basketPopover)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = useCallback((e) => {
        e.stopPropagation()
        dispatch(basketOff())
        dispatch(logoOff())
        navigate("/order")
    }, [navigate])

    const openClosePopover = (e) => {
        e.stopPropagation()
        console.log(popover);
        dispatch(basketOnOff())
        dispatch(logoOff())
    }

    return (
        <div className='basket'>
            <BasketBadge quantity={items.length} />
            <TiShoppingCart size={25} className="basket-icon" onClick={(e) => openClosePopover(e)} />

            {popover && <BasketMenu items={items} onClick={(e) => handleClick(e)} />}
        </div>
    )
}
