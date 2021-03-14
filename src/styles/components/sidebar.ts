import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  position: relative;
  height: 0rem;
  width: 12rem;
  z-index: 1;

  aside.app-sidebar {
    height: 100%;
    width: 12rem;
    padding: 24px 18px;
    background: linear-gradient(329.54deg, ${(props) => props.theme.colors.background} 0%, ${(props) => props.theme.colors.sidebar} 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    position:fixed;
  }
  aside.app-sidebar img {
    width: 100%;
    margin-bottom: 1.6rem;
  }
  aside.app-sidebar a {
    width: 100%;
    height: 38px;
    border: 0;
    background: ${(props) => props.theme.colors.button};
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.textButton};
    margin-top: 0.2rem;
  }
  aside.app-sidebar a svg {
    stroke: ${(props) => props.theme.colors.textButton} !important;
    fill: ${(props) => props.theme.colors.textButton} !important;
  }
  aside.app-sidebar a span{
    width: 80%;
    margin-left: 0.4rem;
    font-size: 16px;
  }
  aside.app-sidebar a:hover,
  aside.app-sidebar button:hover {
    background: ${(props) => props.theme.colors.buttonHover};
  }

  @media (max-width: 900px)  {
    height: 5rem;
    width: 0rem;
    aside.app-sidebar {
      height: 5rem;
      width: 100%;
      flex-direction: row;
      align-items: center;
      padding: 8px 6px;
      column-gap: 0.6rem;
    }

    aside.app-sidebar img {
      width: 7.2rem;
      margin-bottom: 0rem;
    }
  }
`
