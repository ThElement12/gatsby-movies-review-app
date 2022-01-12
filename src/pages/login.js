import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { navigate } from 'gatsby';

import { Card, Form, Button, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/LoginRegister.css"

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
        console.log(error)
        if (error.code === "auth/user-not-found") {
            setMsgError("El correo no existe");
            return;
        } else if (error.code === "auth/wrong-password") {
            setMsgError("La contraseña es incorrecta");
            return;
        }
    };
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Card className='card'>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    <Form onSubmit={onSubmit}>
                        <Form.Label >Email:</Form.Label>
                        <Form.Control type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} required />
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="pass" onChange={(e) => { setPass(e.target.value) }} required />
                        <br></br>
                        {msgError !== "" && <Alert variant="danger">{msgError}</Alert>}
                        <Button className="w-100" type="submit">Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
