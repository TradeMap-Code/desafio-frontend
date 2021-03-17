import styled from 'styled-components';

export const Container = styled.div`
  display:flex;

  margin: auto;
  width: 90%;
`;

export const Content = styled.div`
  width: 90%;

  margin: 20px auto;

  align-items: center;
  align-content: center;

  border: 1px solid;
  border-radius: 10px;

  padding: 20px;
`;

export const OrderBar = styled.div`
 display: flex;
  svg {
    margin-left: 10px;
    margin-right: 20px;
  }
`;

export const ChartContainer = styled.div`
  display: inline-block;
  width: 31%;
  margin: 10px 10px;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
`;

export const Chart = styled.div`
  padding: 10px;
  width: 100%;
`;

export const StockInfoContainer = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom:5px
`;

export const StockInfo = styled.p`
  margin-left:10px;
`;
