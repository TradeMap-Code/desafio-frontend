import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  #page-main {
    display: flex;
    min-height: 100vh;
  }

  #page-main main {
    width: 700px;
    margin: 64px auto;
    padding: 1rem;
    background: ${(props) => props.theme.colors.backgroundText};
    border-radius: 4px;
  }

  #page-main main h2 {
    font-size: 2.6rem;
    border-bottom: 3px solid ${(props) => props.theme.colors.button};
    margin-bottom: 0.6rem;
  }
 
  @media (max-width: 900px)  {
    #page-main main {
      width: 100%;
      margin: 80px 0px 0px 0px;
      padding: 1rem;
      background: ${(props) => props.theme.colors.backgroundText};
      border-radius: 4px;
    }
  }

`
