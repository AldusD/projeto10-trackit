import Styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./assets/reset.css";
import LoginPage from './components/LoginPage.js';
import SignupPage from './components/SignupPage';

export default function App() {
    return (
        <BrowserRouter>
        <AppS>
            <Routes>
                <Route path="/" element={<LoginPage />} />
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