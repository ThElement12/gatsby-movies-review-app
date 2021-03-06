import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';


import User from '../models/user';

import LogRegisterCards from '../components/LogRegisterCards';


export default function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirm, setConfirm] = useState("");
    const [msgError, setmsgError] = useState("");

    const firebaseRegister = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(firebaseSuccess)
            .catch(firebaseError);
    };
    const firebaseSuccess = () => {
        setmsgError("");
        const newUser = new User(userName, email, pass)
        /* const requestOption = {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(newUser),
         };*/
        //TODO: Save user in database
    };
    const firebaseError = (error) => {
        if (error.code === "auth/email-already-in-use") {
            setmsgError("Hay una cuenta registrada con este correo");
            return;
        } else if (error.code === "auth/weak-password") {
            setmsgError("La contraseña es muy corta (al menos 6 caracteres)");
            return;
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (pass !== confirm) {
            setmsgError("Las contraseñas no coinciden");
        } else {
            firebaseRegister();
        }
    };


    return (
        <LogRegisterCards 
        msgError={msgError} 
        onSubmit={onSubmit} 
        title={"Sign Up"}
        setEmail={setEmail}
        setPass={setPass}
        setConfirm={setConfirm}
        setUserName={setUserName}
        />


    )
}
