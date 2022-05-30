import Styled from "styled-components";
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <MenuS>
            <Link to="/habitos">
                <button className="blue" >Habits</button>
            </Link>
            <Link to="/hoje">
                <button className="round" >Today</button>
            </Link>
            <Link to="/historico" >
                <button className="blue" >History</button>
            </Link>
        </MenuS>
    );
}

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