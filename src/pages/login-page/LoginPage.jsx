import React from 'react'
import { Link } from 'react-router-dom'
import { Signin } from '../../components/sign-in/Signin'
import "./LoginPage.css"

export const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Signin />
            <p>
                Or <Link to="/register">register</Link>
            </p>

        </div>
    )
}
