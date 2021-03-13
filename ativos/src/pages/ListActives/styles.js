import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    overflow-x: hidden;
`

export const Filters = styled.section`
    width: 90%;
    padding: 30px;

    display: flex;
    justify-content: flex-end;

    label {
        font-size: 1.6rem;
        font-weight: bold;
    }

    select {
        width: 8rem;
        padding: 8px;
        margin: 0 10px;
        border-radius: 6px;
        font-size: 1rem;
        outline: 0;
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-bottom: 2rem;
`
