import Styled from "styled-components";
import { useState, useContext } from "react";
import styledComponents from "styled-components";
import axios from "axios";

import UserContext from "../contexts/UserContext";

export default function NewHabit({setCreation}) {
    // Sv
    const [habit, setHabit] = useState("");
    const {userData} = useContext(UserContext);
    
    // logic
    const [daysStatus, setDaysStatus] = useState({
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false
    })
    console.log(daysStatus)

    const createHabit = () => {
        const arrDays = [
            daysStatus.sun,
            daysStatus.mon,
            daysStatus.tue,
            daysStatus.wed,
            daysStatus.thu,
            daysStatus.fri,
            daysStatus.sat
        ]
        const arrDaysHabit = [];
        for(let i = 0; i < arrDays.length; i++) {
            if(arrDays[i]) arrDaysHabit.push(i);
        }

        const config =  {headers: {
            Authorization: `Bearer ${userData.token}`
            }
        }
        const body = {
            name: habit,
            days: arrDaysHabit
        }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",body, config)
        promise.then(r => console.log(r))
        promise.catch(e => console.log(e, config, body))
    }

    // UI

    return (
        <Habit>
            <input placeholder="Habit's name" value={habit} onChange={e => setHabit(e.target.value)} ></input>
            <Days>
                <Day id="sun" selected={daysStatus.sun} onClick={() => setDaysStatus({
                    ...daysStatus,
                    sun: !daysStatus.sun
                })}>S</Day>
                <Day id="mon" selected={daysStatus.mon} onClick={() => setDaysStatus({
                    ...daysStatus,
                    mon: !daysStatus.mon
                })}>M</Day>
                <Day id="tue" selected={daysStatus.tue} onClick={() => setDaysStatus({
                    ...daysStatus,
                    tue: !daysStatus.tue
                })}>T</Day>
                <Day id="wed" selected={daysStatus.wed} onClick={() => setDaysStatus({
                    ...daysStatus,
                    wed: !daysStatus.wed
                })}>W</Day>
                <Day id="thu" selected={daysStatus.thu} onClick={() => setDaysStatus({
                    ...daysStatus,
                    thu: !daysStatus.thu
                })}>T</Day>
                <Day id="fri" selected={daysStatus.fri} onClick={() => setDaysStatus({
                    ...daysStatus,
                    fri: !daysStatus.fri
                })}>F</Day>
                <Day id="sat" selected={daysStatus.sat} onClick={() => setDaysStatus({
                    ...daysStatus,
                    sat: !daysStatus.sat
                })}>S</Day>
            </Days>
            <Buttons>
                <button id="cancel" onClick={() => setCreation(<></>)}>Cancel</button> 
                <button id="create" onClick={createHabit} >Create!</button>
            </Buttons>

        </Habit>
    )
}

const Habit = Styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 180px;
    width: 345px;
    border-radius: 12px;
    margin-bottom: 10px;

    position: relative;

    input {
        font-family: lexend deca, sans-serif;
        font-size: 20px;
        margin-top: 10px;
        width: 300px;
        height: 45px;
        border: 1px solid #DBDBDB;
        border-radius: 8px;
    }

    input::placeholder {
        font-size: 20px;
        font-family: inherit;
        color: #DBDBDB;
    }
`;

const Days = Styled.div`
    display: flex;
    width: 100%;
    margin: 10px 0 0 50px;
    span {
        box-sizing: border-box;
        color: #DBDBDB;
        width: 25px;
        height: 25px;
        padding-top: 6px; 
        text-align: center;
        border: 1px solid #DBDBDB;
        border-radius: 4px;
        margin: 0 2px;
    }
`;

const Day = Styled.span`
    background-color: ${props=> (props.selected) ? "#CFCFCF" : "white"};
    color: ${props=> (props.selected) ? "white" : "#DBDBDB"}!important;
`; 

const Buttons = Styled.div`
    display: flex;

    position: absolute;
    right:0;
    bottom: 10px; 

    button {
        border: none;
        width: 84px;
        height: 36px;
        margin-left: 10px;
        font-size: 14px;
    }

    #create {
        color: white;
        background-color: #52B6FF;
        border-radius: 10px;
        margin-right: 10px;
    }

    #cancel {
        color: #52B6FF;
        background-color: white;
    }
`;