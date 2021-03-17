import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    overflow-x: hidden;
`

export const Filters = styled.section`
    width: 100%;
    padding: 10px 30px;

    div {
        display: flex;
        justify-content: space-between;
    
        label {
            font-size: 1.6rem;
            font-weight: bold;
            color: #f9f9f9;
            text-shadow: 2px 2px black;
        }

        select {
            width: 8rem;
            padding: 8px;
            margin: 0 10px;
            border-radius: 6px;
            font-size: 1rem;
            outline: 0;
        }

        button {
            color: #FFFFFF;
            background: #8663bc;
            outline: 0;
            cursor: pointer;
            border-radius: 5px;
            font-size: 1rem;
            padding: 10px;
        }
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-bottom: 2rem;
`
