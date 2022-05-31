import Styled from 'styled-components';
import axios from 'axios';
import { useContext } from 'react';

import UserContext from '../contexts/UserContext';

export default function HabitToday({ habit }) {
    // Logic
    const { habits, setHabits, userData, doneCount, setDoneCount, API } = useContext(UserContext);
    
    const markDoneUndone = () => {
        console.log(doneCount, habits)
        const action = (!habit.done) ? "check" : "uncheck";
        const config = { 
            headers: { 
                Authorization: `Bearer ${userData.token}`
            }
        }
        const promise = axios.post(`${API}/habits/${habit.id}/${action}`, {}, config)
        promise.then(r => {
            setDoneCount(0);
            const promise = axios.get(`${API}/habits/today`, config)
            promise.then(r => {
                    setHabits([...r.data]);
                    for(let i = 0; i < r.data.length; i++) {
                        if(r.data[i].done === true) {
                            setDoneCount(doneCount + 1)
                        };
                    }
            })
            promise.catch(e => console.log(e))
        })
        promise.catch(e => console.log(e))
        console.log(doneCount, habits)
    }
    
    // UI
    return (
        <HabitS done={habit.done} onClick={markDoneUndone}>
        <div>
            <h3>{habit.name}</h3>
            <p>Streak: {habit.currentSequence}</p>
            <p>Highest streak: {habit.highestSequence}</p>
        </div>
        <ion-icon name="checkbox"></ion-icon>
    </HabitS>
    )
    
}

const HabitS = Styled.div`
    font-family: Lexend Deca, sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    height: 94px;
    background-color: white;
    border-radius: 10px;
    padding: 0 10px;
    margin: 10px 0;

    h3 {
        margin: 10px 0;
        font-size: 20px;
    }
    p {
        font-size: 12px;
        margin-bottom: 4px;
    }

    ion-icon {
        font-size: 50px;
        color: ${props => (props.done) ? "#8FC549" : "#e5e5e5"};
    }
`;