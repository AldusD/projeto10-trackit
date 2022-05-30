import Styled from "styled-components";
import logo from '../assets/logo-all.png';
export default function Header() {
    return (
        <Logo>
            <img src={logo} alt="logo" />
        </Logo>
    );
}

const Logo = Styled.div`
    display: flex;
    justify-content: center;
    margin-top: 34px 0; 

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;

    img {
        width: 180px;
    }
`;