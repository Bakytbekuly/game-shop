import React from 'react'
import { calcTotalPrice } from '../../utils'
import { Button } from "../button/Button"
import { BasketMenuItem } from '../basket-menu-item/BasketMenuItem'
import "./BasketMenu.css"


export const BasketMenu = ({ items, onClick }) => {
    return (
        <div className='basket-menu'>
            <div className="basket-menu_games-list">
                {
                    items.length > 0 ? items.map(game => <BasketMenuItem key={game.title} game={game} />) : "Корзина пуста"
                }
            </div>
            {
                items.length > 0 ?
                    <div className='basket-menu_arrange'>
                        <div className='basket-menu_total-price'>
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)} tg</span>
                        </div>
                        <Button type="primary" size="m" onClick={onClick}>Оформить заказ</Button>
                    </div>
                    : null
            }
        </div>
    )
}
