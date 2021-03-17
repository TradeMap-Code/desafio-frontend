import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import stocks from '../../stocks.json';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

import * as S from './styles';

const ListActives = () => {  
    let newListActives = [];
    let listActives = {};
    
    for (let aux of stocks) {
        listActives = {
            ...aux,
            iconFavorite: false
        }
        newListActives.push(listActives)
    };        
    
    const [list, setList] = useState(newListActives);
    const [filter, setFilter] = useState("");
    const history = useHistory();

    useEffect(() => {
        let orderedList = list.sort(orderByPriceOrVariation);
        setList(orderedList);
    }, [filter]);

    const orderByPriceOrVariation = (a, b) => {
        if (filter === "preco") {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
        } else if (filter === "variacao") {
            if (a.variation < b.variation) return -1;
            if (a.variation > b.variation) return 1;
            return 0;
        }
    };

    const goToListFavorites = () => {
        history.push("/actives/favorites");
    };
    
    return (
        <S.Wrapper>
            <Header title='Lista de Ativos'/>
            <S.Filters>
                <div>
                    <label>
                        Filtrar por:
                        <select
                            value={filter}
                            onChange={e => setFilter(e.target.value)}
                        >
                            <option value="" defaultValue disabled>Selecione...</option>
                            <option value="preco">Preço</option>
                            <option value="variacao">Variação</option>
                        </select>
                    </label>
                    <button onClick={goToListFavorites}>Lista de ativos favoritos</button>
                </div>
            </S.Filters>
            <S.Container>
                {list.map((item) => {
                    return <LineChart key={item.stock} item={item} />
                })}
            </S.Container>
        </S.Wrapper>
    );
}

export default ListActives;
