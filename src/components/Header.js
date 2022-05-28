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
    margin: 34px 0; 

    img {
        width: 180px;
    }
`;