import React from 'react';

import { VictoryAxis, VictoryChart, VictoryContainer, VictoryLabel, VictoryLine } from 'victory';
 
type ChartProps = {
  chart: number[];
  stock: string;
  price: number;
  variation: number;
}

const Chart: React.FC<ChartProps> = ({ chart, price, variation }) => {

  return (
    <VictoryChart height={300} width={450}
      containerComponent={<VictoryContainer responsive={false}/>}
    >
      <VictoryLabel text={`${price} | ${variation}`} x={225} y={30} textAnchor="middle"/>
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