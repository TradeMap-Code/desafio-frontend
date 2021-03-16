import { useEffect, useState } from "react";
import Information from "../Information";
import Chart from "react-apexcharts";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./style.css";

function LineChart({ stocks, favorites, setFavorites }) {
    const [selectValue, setSelectValue] = useState("PETR4");
    const [stock, setStock] = useState();
    const [dataTable, setDataTable] = useState();
    const [price, setPrice] = useState(true);
    const [variation, setVariation] = useState(true);
    const [currentIsFav, setCurrentIsFav] = useState(false);

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
                            autoSelected: "",
                        },
                    },
                    title: {
                        text: stocks[0].company,
                        align: "left",
                        style: {
                            color: "#c9d1d9",
                        },
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
        }
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
    }

    function handleOrderVariation() {
        setVariation(!variation);

        if (variation === true) {
            stocks.sort((a, b) => b.variation - a.variation);
        } else {
            stocks.sort((a, b) => a.variation - b.variation);
        }

        setSelectValue(stocks[0].stock);
        setDataTable(stocks);
    }

    useEffect(() => {
        if (favorites.filter((obj) => obj.stock === selectValue).length > 0) {
            setCurrentIsFav(true);
        } else {
            setCurrentIsFav(false);
        }
    }, [selectValue, favorites]);

    function handleFavorite() {
        if (favorites.filter((obj) => obj.stock === selectValue).length > 0) {
            setCurrentIsFav(false);
            setFavorites(favorites.filter((fav) => fav !== dataTable[0]));
        } else {
            setCurrentIsFav(true);
            setFavorites([...favorites, dataTable[0]]);
        };
    };

    return (
        <div>
            <div className="select__content">
                <select
                    name="actives"
                    id="actives"
                    className="select__input"
                    onChange={({ target }) => {
                        setSelectValue(target.value);
                    }}
                >
                    <option value="selected" disabled selected>
                        Selecione o ativo
          </option>
                    {stocks.map((active) => (
                        <option key={active.company} value={active.stock}>
                            {active.stock} - {active.company}
                        </option>
                    ))}
                </select>
            </div>
            <div className="btn__group">
                <button onClick={handleOrderPrice}>
                    {price ? "Ordenar por maior Preço" : "Ordenar por menor Preço"}
                    {price ? <FiArrowUp /> : <FiArrowDown />}
                </button>
                <button onClick={handleOrderVariation}>
                    {variation ? "Ordenar por maior Variação" : "Ordenar por menor Variação"}
                    {variation ? <FiArrowUp /> : <FiArrowDown />}
                </button>
            </div>
            {dataTable && <Information stock={dataTable} />}
            {stock && (
                <Chart
                    options={stock.options}
                    series={stock.series}
                    type="line"
                    height="300px"
                    className="chart__content"
                />
            )}
            <button className="btn__fav" onClick={handleFavorite}>
                {currentIsFav ? "Remover Favorito" : "Adiconar Favorito"}
                {currentIsFav ? <AiFillHeart className="btn__icon" /> : <AiOutlineHeart className="btn__icon" />}
            </button>
        </div>
    );
}

export default LineChart;
