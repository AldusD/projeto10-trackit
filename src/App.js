import Styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import "./assets/reset.css";
import "./assets/bg.css"
import LoginPage from './components/LoginPage.js';
import SignupPage from './components/SignupPage';
import Today from './components/Today';
import UserContext from "./contexts/UserContext";
import Habits from './components/Habits';

export default function App() {
    const API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";
    // State variables
    const [userData, setUserData] = useState([]);
    const [habits, setHabits] = useState([])
    const [allHabits, setAllHabits] = useState([]);
    const [doneCount, setDoneCount] = useState(0);

    return (
        <UserContext.Provider value={
                                    {userData, setUserData, 
                                    habits, setHabits, 
                                    allHabits, setAllHabits,
                                    doneCount, setDoneCount,
                                    API}}>
            <BrowserRouter>
                <AppS>
                    <Routes>    
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/cadastro" element={<SignupPage />} />
                            <Route path="/hoje" element={<Today />} />
                            <Route path="/habitos" element={<Habits />} />
                    </Routes>
                </AppS>
            </BrowserRouter>
        </UserContext.Provider>
        
    );
}

const AppS = Styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;700&family=Playball&display=swap');
    font-family: Lexend Deca, sans-serif;
`;