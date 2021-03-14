import { useEffect, useState } from 'react';
import Information from '../Information';
import Chart from 'react-apexcharts';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './style.css';

function LineChart({ stocks, favorites, setFavorites }) {
    const [selectValue, setSelectValue] = useState('PETR4');
    const [stock, setStock] = useState();
    const [dataTable, setDataTable] = useState();
    const [price, setPrice] = useState(true);
    const [variation, setVariation] = useState(true);
    const [active, setActive] = useState(true);

    useEffect(() => {
        const active = stocks.filter((item) => {
            return item.stock === selectValue;
        });

        stocks = active;
        setDataTable(stocks);

    }, [selectValue, stocks]);

    useEffect(() => {
        if (selectValue !== null) {
            setStock({
                options: {
                    chart: {
                        id: "basic-bar",
                        toolbar: {
                            show: false,
                            autoSelected: ""
                        }
                    },
                    title: {
                        text: stocks[0].company,
                        align: 'left',
                        style: {
                            color: "#c9d1d9"
                        }
                    },
                    xaxis: {
                        labels: {
                            show: false,
                        },
                    },
                    theme: {
                        monochrome: {
                            enabled: true,
                            color: "#0000ff",
                        },
                    },
                    tooltip: {
                        x: {
                            show: false,
                        },
                        marker: {
                            show: false,
                        },
                    },
                },
                series: [
                    {
                        name: stocks[0].stock,
                        data: stocks[0].chart,
                    },
                ],
            });
        };
    }, [selectValue, stocks]);

    function handleOrderPrice() {
        setPrice(!price);
        if (price === true) {
            stocks.sort((a, b) => b.price - a.price);
        } else {
            stocks.sort((a, b) => a.price - b.price);
        }

        setSelectValue(stocks[0].stock);
        setDataTable(stocks);
    };

    function handleOrderVariation() {
        setVariation(!variation);

        if (variation === true) {
            stocks.sort((a, b) => b.variation - a.variation);
        } else {
            stocks.sort((a, b) => a.variation - b.variation);
        }

        setSelectValue(stocks[0].stock);
        setDataTable(stocks);
    };


    function handleFavorite() {
        setActive(!active);
        let arr = [];
        if (active === true) {
            setFavorites([...favorites, dataTable[0]]);
            arr = favorites;
        } else {
            arr = favorites.filter(function (item) {
                return item !== dataTable[0];
            });
            setFavorites(arr);
        };
    };

    return (
        <div>
            <div className="select__content">
                <select name="actives"
                    id="actives"
                    className="select__input"
                    onChange={({ target }) => {
                        setSelectValue(target.value)
                        setActive(!active)
                    }}>

                    <option value="selected" disabled selected>Selecione o ativo</option>
                    {stocks.map((active) => (
                        <option key={active.company}
                            value={active.stock}>
                            {active.stock} - {active.company}
                        </option>
                    ))}
                </select>
            </div>
            <div className="btn__group">
                <button onClick={handleOrderPrice}>
                    {price ? 'Ordenar por maior Preço' : 'Ordenar por menor Preço'} {price ? <FiArrowUp /> : <FiArrowDown />}
                </button>
                <button onClick={handleOrderVariation}>
                    {variation ? 'Ordenar por maior Variação' : 'Ordenar por menor Variação'} {variation ? <FiArrowUp /> : <FiArrowDown />}
                </button>
            </div>
            {dataTable && <Information stock={dataTable} />}
            {stock && <Chart
                options={stock.options}
                series={stock.series}
                type="line"
                height="300px"
                className="chart__content"
            />}
            <button className="btn__fav" onClick={handleFavorite}>{active ? 'Adicionar Favorito' : 'Remover Favorito'} {active ? <AiFillHeart className="btn__icon" /> : <AiOutlineHeart className="btn__icon" />}</button>
        </div>
    );
};

export default LineChart;