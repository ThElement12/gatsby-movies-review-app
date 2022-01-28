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
        /*<div className='d-flex align-items-center justify-content-center'>
            <Card className='card'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Register</h2>
                    <Form onSubmit={onSubmit}>
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="username" name="username" onChange={(e) => { setUserName(e.target.value) }} required />
                        <Form.Label >Email:</Form.Label>
                        <Form.Control type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} required />
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="pass" onChange={(e) => { setPass(e.target.value) }} required />
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control type="password" name="confirm" onChange={(e) => { setConfirm(e.target.value) }} required />
                        <br></br>
                        {msgError !== "" && <Alert variant="danger">{msgError}</Alert>}
                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>*/
}
