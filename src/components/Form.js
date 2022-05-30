import Styled from "styled-components";

export default function Form(props) {
    return (
        <FormS>
            {props.children}
        </FormS>
    );
}

const FormS = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        font-family: inherit;
        width: 304px;
        height: 46px;
        border: 1px solid #D4D4D4;
        border-radius: 6px;
        margin: 4px 0;
        
        font-size: 20px;
        color: #444;
    }
    
    input::placeholder {
        color: #DBDBDB;

    }

    button {
        font-family: inherit;
        width: 304px;
        height: 46px;
        background-color: #52B6FF;
        border: none;
        border-radius: 6px;
        margin-bottom: 24px;

        font-size: 22px;
        color: white;
    }
`;
