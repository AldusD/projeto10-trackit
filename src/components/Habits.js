import { useEffect, useState, useContext} from 'react';
import Styled from "styled-components";
import axios from 'axios';

import NewHabit from './newHabit';
import UserHeader from "./UserHeader";
import Menu from "./Menu";
import UserContext from '../contexts/UserContext';

export default function Habits() {
    // SV
    const [creation, setCreation] = useState(<></>) 
    const {userData, allHabits, setAllHabits, API } = useContext(UserContext);
    
    // logic
    useEffect(() => {
        const promise = axios.get(`${API}/habits`, {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        })
        promise.then(r => {
            console.log(r)
            setAllHabits(r.data)
        })
        promise.catch(e => console.log(e))
    },[])


    // UI
    return(

        <HabitsS>
            <UserHeader user={userData.image} />
            <Title>
                <h2>My habits</h2>
                <button onClick={() => setCreation(<NewHabit setCreation={setCreation} />)}>+</button>
            </Title>   
                {creation}
            {(allHabits.length === 0) ? <p>You don't have any habits, start an habit, start Tracking It!</p> : <></> }
            <Menu />
        </HabitsS>
    );
}

const HabitsS =Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        color: #666;
        font-size 18px;
    }
`;

const Title = Styled.div`
    display: flex;
    width: 100%; 
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin: 20px 0;
    
    h2 {
        color: #126BA5;
        font-size: 22px;
    }

    button {
        height: 40px;
        width: 40px;
        background-color: #52B6FF;
        color: white;
        font-size: 28px;
        border: none;
        border-radius: 14px;
    }

`;