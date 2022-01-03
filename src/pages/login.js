import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { navigate } from 'gatsby';

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msgError, setMsgError] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        firebaseAuth();
    }

    const firebaseAuth = () => {
        signInWithEmailAndPassword(auth,email,pass)
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
        <div>
        <form onSubmit={onSubmit}>
            <label htmlFor={"email"}>Email:
                <input type={"text"} name={"email"} onChange={(e) => { setEmail(e.target.value) }} required /><br></br>
            </label><br></br>
            <label htmlFor={"pass"}>Password:
                <input type={"password"} name={"pass"} onChange={(e) => { setPass(e.target.value) }} required /><br></br>
            </label><br></br>
            <h1>{msgError}</h1>
            <button type={"submit"}>Log in</button>
        </form>

    </div>
    )
}
