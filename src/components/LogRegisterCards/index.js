import React from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'

import "bootstrap/dist/css/bootstrap.min.css"
import "../../css/LoginRegister.css"


export default function LogRegisterCards(props) {

    const msgError = props.msgError;
    const onSubmit = props.onSubmit;
    const title = props.title;

    const login = title === "Log In"

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Card className='card'>
                <Card.Body>
                    <h2 className='text-center mb-4'>{title}</h2>
                    <Form onSubmit={onSubmit}>
                        {!login && <Form.Label>Username:</Form.Label>}
                        {!login && <Form.Control type="username" name="username" onChange={(e) => { props.setUserName(e.target.value) }} required />}
                        <Form.Label >Email:</Form.Label>
                        <Form.Control type="email" name="email" onChange={(e) => { props.setEmail(e.target.value) }} required />
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="pass" onChange={(e) => { props.setPass(e.target.value) }} required />
                        {!login && <Form.Label>Confirm Password:</Form.Label>}
                        {!login && <Form.Control type="password" name="confirm" onChange={(e) => { props.setConfirm(e.target.value) }} required />}
                        <br></br>
                        {msgError !== "" && <Alert variant="danger">{msgError}</Alert>}
                        <Button className="w-100" type="submit">{title}</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
