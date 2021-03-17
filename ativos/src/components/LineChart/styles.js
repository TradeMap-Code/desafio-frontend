import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: #FFFFFF;
    width: 31.9rem;
    height: 290px;
    margin: 1.5rem 0;
    padding: 2px 0;
    border-radius: 10px;
`

export const Infos = styled.section`
    font-weight: bold;
    color: #8B8989;
    font-size: .9rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    margin-bottom: 10px;
`

export const ExchangeAndCountry = styled.article`
    margin-right: 20px; 
`

export const PriceAndVariation = styled.article`
    margin-left: 20px;
`

export const IconFavorite = styled.article`
    padding: 0 15px;
    cursor: pointer;
`
