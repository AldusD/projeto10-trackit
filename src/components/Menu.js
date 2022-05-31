import Styled from "styled-components";
import {Link} from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';

import UserContext from '../contexts/UserContext';

export default function Menu() {
    const { habits, doneCount } = useContext(UserContext);

    return (
        <>
            <Space></Space>
            <MenuS>
            <Link to="/habitos">
                <button className="blue" >Habits</button>
            </Link>
            <TodayRound>
                <Link to="/hoje">
                    <button className="round" >Today</button>
                    <div><CircularProgressbar value={( doneCount / habits.length) * 100 } /></div>
                </Link>
                
            </TodayRound>
            <Link to="/historico" >
                <button className="blue" >History</button>
            </Link>
        </MenuS>
        </>
    );
}

const Space = Styled.div`
    height: 100px;
`;

const MenuS = Styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    height: 70px;

    position: fixed;
    bottom: 0;
    right:0;
    width: 100%;

    Link {
        text-decoration: none;
    }

    button {
        font-size: 18px;
        border: none;
        background-color: inherit;
    }

    .round {
        box-sizing: border-box;
        background-color: #52B6FF;
        height: 80px;
        width: 80px;
        text-align: center;
        border-radius: 60px;
        padding-top: 8px;
        color: white;
        margin-bottom: 50px;
    }

    .blue {
        color: #52B6FF;
    }

`;

const TodayRound = Styled.div`
    display: flex;
    align-items: center;
    position: relative;

    div {
        box-sizing: border-box;
        background-color: #52B6FF00;
        height: 80px;
        width: 80px;
        text-align: center;
        border-radius: 60px;
        padding-top: 8px;
        color: white;
        margin-bottom: 50px;
        position: absolute;
        z-index: 1;
        bottom: 7%;
    }
`;