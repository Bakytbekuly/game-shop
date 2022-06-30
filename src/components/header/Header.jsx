import { Link } from 'react-router-dom'
import { Basket } from '../basket/Basket'
import { UserLogo } from "../user-logo/UserLogo"
import { Search } from "../search/Search"
import { ButtonCatalog } from "../button-catalog/ButtonCatalog"
import { SiUbisoft } from "react-icons/si"
import "./Header.css"

export const Header = () => {
    return (
        <div className='header'>

            <div className="wrapper">
                <div className='header-left-content'>
                    <div className='logo-title-wrapper '>
                        <Link to="/" className='header_store-title'>
                            <SiUbisoft size={40} />
                        </Link>
                    </div>
                    <div className='header-button-catalog'>
                        <Link to="/catalog"><ButtonCatalog /></Link>

                    </div>
                </div>


                <div className="header_basket-btn-wrapper header-right-content" >

                    <div className='search-wrapper'>
                        <Search placeholder="Введите название игры" />
                    </div>
                    <div className='logo-user_wrapper'>
                        <UserLogo size={25} /></div>
                    <div className='basket-icon-wrapper'>
                        <Basket />
                    </div>

                </div>

            </div>

        </div>
    )
}



