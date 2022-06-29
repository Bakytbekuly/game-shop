import React from 'react'
import { Link } from 'react-router-dom'
import { SignUp } from '../../components/sing-up/SignUp'
import "./RegisterPage.css"

export const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <SignUp />

            <p>
                Already have an account? <Link to="/login">Sign in</Link>

            </p>
        </div>
    )
}
