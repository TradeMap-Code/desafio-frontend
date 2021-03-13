import { useEffect, useState } from 'react';
import Information from '../Information';
import Chart from 'react-apexcharts';
import './style.css';

function LineChart({ stocks }) {
    const [selectValue, setSelectValue] = useState('PETR4');
    const [stock, setStock] = useState(null);
    const [dataTable, setDataTable] = useState();

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

    return (
        <div>
            <div className="select__content">
                <select name="actives" id="actives" className="select__input" onChange={({ target }) => setSelectValue(target.value)}>
                    <option disabled value="selected" selected>Selecione o ativo</option>
                    {stocks.map((active) => (
                        <option key={active.company}
                            value={active.stock}>
                            {active.stock} - {active.company}
                        </option>
                    ))}
                </select>
            </div>
            {dataTable && <Information stock={dataTable} />}
            {stock && <Chart
                options={stock.options}
                series={stock.series}
                type="line"
                height="300px"
                className="chart__content"
            />}
        </div>
    );
};

export default LineChart;