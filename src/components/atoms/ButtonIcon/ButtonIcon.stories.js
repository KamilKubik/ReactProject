import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg'


const YellowBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    background-color: ${({theme}) => theme.note};
`


export default {
    title: 'Atoms/ButtonIcon',
    component: ButtonIcon,
    decorators:  [(Story) => <YellowBackground><Story/></YellowBackground>]
};

export const BulbButton = () => (
    <>
        <GlobalStyle />
        <ButtonIcon icon={bulbIcon} active/>
    </>
);

export const LogoutButton = () => (
    <>
        <GlobalStyle />
        <ButtonIcon icon={logoutIcon}/>
    </>
);

export const PenButton = () => (
    <>
        <GlobalStyle />
        <ButtonIcon icon={penIcon}/>
    </>
);

export const PlusButton = () => (
    <>
        <GlobalStyle />
        <ButtonIcon icon={plusIcon}/>
    </>
);

export const TwitterButton = () => (
    <>
        <GlobalStyle />
        <ButtonIcon icon={twitterIcon}/>
    </>
);