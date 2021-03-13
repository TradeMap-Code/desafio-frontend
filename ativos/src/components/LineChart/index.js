import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import * as S from './styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const LineChart = ({ item }) => {
    const [favorite, setFavorite] = useState(false);

    const data = {
        labels: ['','','','','','','','','','','','','','','','','',''],
        datasets: [
            {
                label: item.stock,
                data: item.chart,
                backgroundColor: ['rgba(75, 192, 192, 0.8)'],
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
        setFavorite(!favorite);
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
                    {favorite ? <StarIcon color='primary' onClick={handleFavorite} />
                    :
                    <StarBorderIcon color='primary' onClick={handleFavorite} />
                    }
                </S.IconFavorite>
            </S.Infos>
        </S.Wrapper>
    );
}

export default LineChart;
