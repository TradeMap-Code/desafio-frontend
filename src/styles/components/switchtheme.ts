import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  .switch-theme {
    position: fixed;
    z-index: 2;
  }

  @media (max-width: 900px)  {
    .switch-theme {
      top: 12%;
    }
  }
`
