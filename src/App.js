import Styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import "./assets/reset.css";
import LoginPage from './components/LoginPage.js';
import SignupPage from './components/SignupPage';

export default function App() {
    // State variables
    const [userData, setUserData] = useState([]);

    return (
        <BrowserRouter>
        <AppS>
            <Routes>
                <Route path="/" element={<LoginPage userData={userData} setUserData={setUserData} />} />
                <Route path="/cadastro" element={<SignupPage />} />
            </Routes>
        </AppS>
        </BrowserRouter>
    );
}

const AppS = Styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;700&family=Playball&display=swap');

    font-family: Lexend Deca, sans-serif;
`;