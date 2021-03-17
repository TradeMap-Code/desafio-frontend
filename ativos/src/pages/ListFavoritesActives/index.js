import React from 'react';
import { useHistory } from 'react-router';

import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

import * as S from './styles';

const ListFavoritesActives = () => {
    const history = useHistory();

    let list;
    if (localStorage.getItem('favorites')) {
        list = JSON.parse(localStorage.getItem('favorites'));
    };

    const goBack = () => {
        history.push("/");
    };

    return (
        <S.Wrapper>
            <Header title='Lista de ativos favoritos' />
            <S.ButtonGoBack>
                <button onClick={goBack}>Voltar</button>
            </S.ButtonGoBack>
            <S.Container>
                {list && list.map((item, index) => {
                    return <LineChart key={index} item={item} />
                })}
            </S.Container>
        </S.Wrapper>
    );
}

export default ListFavoritesActives;
