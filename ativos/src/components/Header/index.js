import React from 'react';

import * as S from './styles';

const Header = (props) => {
    return (
        <S.Wrapper>
            <h1>{props.title}</h1>
        </S.Wrapper>
    );
}

export default Header;