import React from 'react'
import { BsSearch } from "react-icons/bs"
import "./Search.css"

export const Search = () => {
    return (
        <div className='search'>
            <input type="text" className='input_search' />
            <button className='input_submit'>
                <BsSearch size={25} />
            </button>
        </div>
    )
}
