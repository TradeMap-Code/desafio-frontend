import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background-color: gray;
  height: 70px;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-bottom: 20px;
  img {
    height: 40px;
    width: 40px;
    margin: 0 20px;
  }
  header {
    display: flex;
    flex: 1;
    align-items: center;
    align-content: space-between;
    nav {
      display: flex;
      flex: 1;
      align-items: center;
      > a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        margin-left: 32px;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
