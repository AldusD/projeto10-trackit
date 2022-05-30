import Styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import Header from "./Header";
import Form from "./Form";

export default function SignupPage() {
    // Logic
    const [form, setForm] = useState({
        name: "",
        password: "",
        email: "",
        image: ""
    });
    const updateForm = (field, value) => {
        setForm({
            ...form,
            [field] : value
        });
    }

    const navigate = useNavigate();
    const submit = e => {
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{...form});
        promise.then(r => {
            alert("you have successfully registered!");
        })
        promise.catch(e => console.log(e))
        console.log(form)
        navigate("/");
    }    

    // UI
    return (
        <>
            <Header />
            <SignupPageS>
                <Form>
                    <input 
                        value={form.email} 
                        onChange={e => {updateForm(e.target.name, e.target.value)}} 
                        placeholder="your email"
                        type="email"
                        name="email"
                        required></input>
                            
                    <input 
                        value={form.password} 
                        onChange={e => {updateForm(e.target.name, e.target.value)}} 
                        placeholder="your password"
                        type="password"
                        name="password"
                        required></input>
                    <input 
                        value={form.username} 
                        onChange={e => {updateForm(e.target.name, e.target.value)}} 
                        placeholder="your name"
                        type="username"
                        name="name"
                        required></input>
                    <input 
                        value={form.profile} 
                        onChange={e => {updateForm(e.target.name, e.target.value)}} 
                        placeholder="A link to your profile photo"
                        name="image"
                        required></input>
                    <button onClick={submit}>Sign Up!</button>
                </Form>
                    <Link to="/">
                        <button className="minor-button" >Go back</button>
                    </Link>
            </SignupPageS>
        </>
    );
}

const SignupPageS = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;

    .minor-button{
        margin-bottom: 14px;
        background-color: white;
        border: none;
        color: #52B6FF;
    }
`;
