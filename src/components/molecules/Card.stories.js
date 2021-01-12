import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Card from './Card';

export default {
    title: 'Molecules/Card',
    component: Card
};

export const CardComponent = () => (
    <>
        <GlobalStyle />
        <Card/>
    </>
)

export const CardComponent1 = () => (
    <>
        <GlobalStyle />
        <Card cardType='twitter'/>
    </>
)

export const CardComponent2 = () => (
    <>
        <GlobalStyle />
        <Card cardType='article'/>
    </>
)