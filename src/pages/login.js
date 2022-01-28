import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { navigate } from 'gatsby';

import "../css/LoginRegister.css"

import LogRegisterCards from '../components/LogRegisterCards';

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msgError, setMsgError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        firebaseAuth();
    }

    const firebaseAuth = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(firebaseSuccess)
            .catch(firebaseError)

    }
    const firebaseSuccess = () => {
        setMsgError("");
        //TODO: Fetch a la db
        navigate("/home");
    }
    const firebaseError = (error) => {
        if (error.code === "auth/user-not-found") {
            setMsgError("El correo no existe");
            return;
        } else if (error.code === "auth/wrong-password") {
            setMsgError("La contraseña es incorrecta");
            return;
        }
    };
    return (
        <LogRegisterCards 
        msgError={msgError} 
        onSubmit={onSubmit} 
        title={"Log In"}
        setEmail={setEmail}
        setPass={setPass}  />
    )
}
