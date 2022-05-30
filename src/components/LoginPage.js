import { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from './Header.js';
import Form from './Form.js';

const STATUS_UNAUTHORIZED = 401;
const STATUS_NOT_FOUND = 422;

export default function LoginPage({ userData, setUserData }) {
    // State Variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [chances, setChances] = useState(4);
    const [userNotFound, setUsernotfound] = useState(false);
    
    // Logic
    if (chances === 0) {
        window.location.reload();
    }
    const login = e => {
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", 
        {
            email,
            password
        })
        promise.then(r => {
            setUserData({...r})
        })
        promise.catch(e => {
            if(e.response.status === STATUS_NOT_FOUND) {
                setUsernotfound(true);
                setChances(4);
            }
            if(e.response.status === STATUS_UNAUTHORIZED) {
                setChances(chances - 1);
                setUsernotfound(false);
            }
        })
    }
    console.log(userData)
    // UI
    return (
        <>
            <Header />
            <LoginPageS>
                <Form>
                    <input 
                        value={email} 
                        onChange={e => {setEmail(e.target.value)}} 
                        placeholder="your email"
                        type="email"
                        name="email"></input>
                        {(userNotFound) ? <ErrorMessage>Email not Found :/</ErrorMessage> : <></>}
                            
                    <input 
                        value={password} 
                        onChange={e => {setPassword(e.target.value)}} 
                        placeholder="your password"
                        type="password"
                        name="password"></input>
                        {(chances === 4) ? <></> : <ErrorMessage>Incorrect Password, {chances} left</ErrorMessage>}
                    <button onClick={login}>Login</button>
                </Form>
                <Link to="/cadastro">
                    <p>Not registered yet? sign up here!</p>
                </Link>
            </ LoginPageS>
        </>
    );
}

const LoginPageS = Styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    margin-top: 220px;

    p {
        text-align: center;
        font-size: 14px;
        color: #52B6FF;
        text-decoration: underline;
    }

`;

const ErrorMessage = Styled.span`
    color: red;
    margin: 6px 0;

`;