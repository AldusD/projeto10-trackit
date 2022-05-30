import Styled from 'styled-components';

import trackIt from '../assets/TrackIt-logo-white.png';

export default function UserHeader({ user }) {
    return (
        <>
            <Header>
                <img id="logo" src={trackIt} alt="trackit" />
                <img id="user" src={user} alt="you" />
            </Header>
            <Space></Space>
        </>
    );
}

const Header = Styled.div`
    display: flex;
    height: 70px;
    background-color: #126BA5;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 8px #000000C0;


    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;

    #logo {
        height: 30px;
        margin-left: 10px;
    }
    #user {
        height: 50px;
        width: 50px;
        margin-right: 10px;
        border-radius: 30px;
    }
`;

const Space = Styled.div`
    height: 70px;
`;