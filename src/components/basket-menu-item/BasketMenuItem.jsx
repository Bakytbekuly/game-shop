import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useDispatch } from "react-redux"
import { deleteItemFromBasket } from '../../store/slice/basket'
import "./BasketMenuItem.css"

export const BasketMenuItem = ({ game }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteItemFromBasket(game.id));
    };

    return (
        <div className='basket-menu-item'>
            <span className='basket-menu-item_title'>{game.title}</span>
            <div className='basket-menu-item_price'>
                <span>{game.price} tg</span>
                <MdDeleteForever
                    size={18}
                    className="basket-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    )
}
