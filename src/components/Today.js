import Styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import UserContext from '../contexts/UserContext';
import UserHeader from "./UserHeader";
import Menu from "./Menu";
import HabitToday from "./HabitToday";

export default function Today() {
    const { userData, habits, setHabits, doneCount, setDoneCount, API } = useContext(UserContext);
    
    // Logic 
    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }
    useEffect(() => {
        const promise = axios.get(`${API}/habits/today`, config)
        promise.then(r => {
            setHabits([...r.data]);
        })
        promise.catch(e => console.log(e))
    },[])
    
    //UI
    return (
        <TodayS>
            <UserHeader user={userData.image} />
            <h1>data</h1>
            <p>estagio habitos</p>
            {habits.map((h, i) => <HabitToday key={i} habit={h} /> )}
            <Menu />
        </TodayS>
    )
}

const TodayS = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;