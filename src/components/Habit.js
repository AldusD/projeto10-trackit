import Styled from 'styled-components';

export default function Habit({habit}) {
    return (
        <HabitS done={habit.done}>
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
        color: ${props => (props.done) ? "green" : "#e5e5e5"};
    }
`;