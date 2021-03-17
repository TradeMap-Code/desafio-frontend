import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    overflow-x: hidden;
`

export const ButtonGoBack = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px 30px;

    button {
        width: 7.5rem;
        color: #FFFFFF;
        background: #8663bc;
        outline: 0;
        cursor: pointer;
        border-radius: 5px;
        padding: 10px;
        font-size: 1rem;
    }
` 

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-bottom: 2rem;
`