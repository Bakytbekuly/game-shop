import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillPersonCheckFill } from "react-icons/bs"
import { BsFillPersonDashFill } from 'react-icons/bs'
import { useAuth } from '../../hooks/use-auth'
import { AuthRegButton } from '../auth-reg-button/AuthRegButton'
import { logoOnOff, basketOff } from "../../store/slice/openClose"

export const UserLogo = ({ size }) => {
    const dispatch = useDispatch()
    const popover = useSelector(state => state.openClose.logoPopover)
    const { isAuth } = useAuth()
    console.log(popover);
    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(logoOnOff())
        dispatch(basketOff())
    }

    return (
        <div onClick={(e) => handleClick(e)}>
            {isAuth ? <BsFillPersonCheckFill size={size} /> : <BsFillPersonDashFill size={size} />}
            {popover ? <AuthRegButton /> : null}
        </div>
    )
}
