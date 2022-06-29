import { Link } from 'react-router-dom'
import { Basket } from '../basket/Basket'
import { UserLogo } from "../user-logo/UserLogo"
import "./Header.css"

export const Header = () => {
    return (
        <div className='header'>

            <div className="wrapper">

                <div className='logo-title-wrapper'>
                    <Link to="/" className='header_store-title'>GameStore.kz</Link>
                </div>
                <div className="wrapper header_basket-btn-wrapper" >
                    <div className='logo-user_wrapper'>
                        <UserLogo size={25} /></div>
                    <div><Basket /></div>

                </div>

            </div>

        </div>
    )
}



