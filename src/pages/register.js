import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

import User from '../models/user';

export default function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirm, setConfirm] = useState("");
    const [msgError, setmsgError] = useState("");

    const firebaseRegister = async () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(firebaseSuccess)
            .catch(firebaseError);
    };
    const firebaseSuccess = () => {
        setmsgError("");
        const newUser = new User(userName, email, pass)
        const requestOption = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        };
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
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor={"username"}>Username:
                    <input type={"text"} name={"username"} onChange={(e) => { setUserName(e.target.value) }} required /><br></br>
                </label><br></br>
                <label htmlFor={"email"}>Email:
                    <input type={"text"} name={"email"} onChange={(e) => { setEmail(e.target.value) }} required /><br></br>
                </label><br></br>
                <label htmlFor={"pass"}>Password:
                    <input type={"password"} name={"pass"} onChange={(e) => { setPass(e.target.value) }} required /><br></br>
                </label><br></br>
                <label htmlFor={"confirm"}>Confirm Password:
                    <input type={"password"} name={"confirm"} onChange={(e) => { setConfirm(e.target.value) }} required /><br></br>
                </label><br></br>
                <h1>{msgError}</h1>
                <button type={"submit"}>Sign Up</button>
            </form>

        </div>
    )
}
