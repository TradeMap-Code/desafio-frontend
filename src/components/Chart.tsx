import React from 'react';

import { VictoryAxis, VictoryChart, VictoryContainer, VictoryLabel, VictoryLine } from 'victory';
 
type ChartProps = {
  chart: number[];
  stock: string;
  price: number;
  variation: number;
}

const Chart: React.FC<ChartProps> = ({ chart, price, variation }) => {

  const numberOfVariationDigits = variation.toString().length;
  const numberOfPriceDigits = price.toString().length;

  return (
    <VictoryChart height={300} width={450}
      containerComponent={<VictoryContainer responsive={false}/>}
    >
      <VictoryLabel
        text={price}
        style={{ fill: 'green' }}
        x={240 - (3 * numberOfPriceDigits)} y={30}
        textAnchor="middle"
      />
      <VictoryLabel
        text=" | "
        x={250} y={30}
        textAnchor="middle"
      />
      <VictoryLabel
        text={`${variation} %`}
        style={{ fill: variation > 0 ? 'green' : 'red' }}
        x={260 + (3 * numberOfVariationDigits)} y={30}
        textAnchor="middle"
      />
      <VictoryAxis dependentAxis />
      <VictoryLine
        style={{
          data: { stroke: '#303c6c' },
          parent: { border: "1px solid #ccc"}
        }}
        data={chart}
      />
    </VictoryChart>
  );
};

export default Chart;