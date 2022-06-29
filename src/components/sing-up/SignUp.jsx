import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { Form } from "../form/Form"
import { setUser } from "../../store/slice/userSlice"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUp.css"

export const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister = (email, password) => {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate("/")
            })
            .catch(console.error)
    }
    return (
        <div>
            <Form
                title="register"
                handleClick={handleRegister}
            />
        </div>
    )
}
