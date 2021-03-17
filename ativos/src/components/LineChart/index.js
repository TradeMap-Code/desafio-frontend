import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import * as S from './styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const LineChart = ({ item }) => {
    const [iconFavorite, setIconFavorite] = useState(item.iconFavorite);    
    
    const data = {
        labels: ['','','','','','','','','','','','','','','','', '',''],
        datasets: [
            {
                label: item.stock,
                data: item.chart,
                backgroundColor: ['rgba(0, 151, 255, .8)'],
            }
        ]
    };
    
    const options = {
        title: {
            display: true,
            text: item.company,
        }
    };

    const handleFavorite = () => {
        if (item.iconFavorite === false) {
            setIconFavorite(!iconFavorite)
            item.iconFavorite = !item.iconFavorite
            favorites.push(item);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
           setIconFavorite(!iconFavorite)
           item.iconFavorite = false;
           const index = favorites.indexOf(item);
           if (index > -1) {
              favorites = favorites.filter(aux => aux.stock !== item.stock);
           };
           localStorage.setItem('favorites', JSON.stringify(favorites));
        };
    };

    return (
        <S.Wrapper>
            <section>
                <Line data={data} options={options} />
            </section>
            <S.Infos>
                <S.ExchangeAndCountry>{item.exchange} / {item.country}</S.ExchangeAndCountry>
                |
                <S.PriceAndVariation>{item.price} / {item.variation}%</S.PriceAndVariation>
                <S.IconFavorite>
                    {iconFavorite === true ? <StarIcon color='primary' onClick={handleFavorite} />
                    :
                    <StarBorderIcon color='primary' onClick={handleFavorite} />
                    }
                </S.IconFavorite>
            </S.Infos>
        </S.Wrapper>
    );
}

export default LineChart;
