import { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header.js';

export default function LoginPage() {
    // Logic
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // UI
    return (
        <LoginPageS>
            <Header />
            <Form>
                <input 
                    value={email} 
                    onChange={e => {setEmail(e.target.value)}} 
                    placeholder="your email"
                    type="email"></input>
                        
                <input 
                    value={password} 
                    onChange={e => {setPassword(e.target.value)}} 
                    placeholder="your password"
                    type="password"></input>
                <button>Login</button>
            </Form>
            <Link to="/cadastro">
                <p>Not registered yet? sign up here!</p>
            </Link>
        </ LoginPageS>
    );
}

const LoginPageS = Styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;

    p {
        text-align: center;
        font-size: 14px;
        color: #52B6FF;
        text-decoration: underline;
    }

`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        font-family: inherit;
        width: 304px;
        height: 46px;
        border: 1px solid #D4D4D4;
        border-radius: 6px;
        margin: 4px 0;
        
        font-size: 20px;
        color: #444;
    }
    
    input::placeholder {
        color: #DBDBDB;

    }

    button {
        font-family: inherit;
        width: 304px;
        height: 46px;
        background-color: #52B6FF;
        border: none;
        border-radius: 6px;
        margin-bottom: 24px;

        font-size: 22px;
        color: white;
    }
`;