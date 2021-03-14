import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

  .chart {
    flex: 49%;
    padding: 20px;
  }

  .chart h3{
    margin-bottom: 0.4rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.button};
  }

  .chart .stock-information{
    display: flex;
    flex-direction: column;
  }

  .chart button{
    float: right;
    width: 3.6rem;
    height: 2.2rem;
    background: ${(props) => props.theme.colors.button};
    border: none;
    border-radius: 4px;
    font-size: 0px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .chart button:hover {
    background: ${(props) => props.theme.colors.buttonHover};
  }

  .chart button svg{
    stroke: ${(props) => props.theme.colors.textButton};
    fill: ${(props) => props.theme.colors.textButton};
  }

  @media (max-width: 900px)  {
    .chart {
      flex: 100%;
      padding: 20px;
    }
  }
`
