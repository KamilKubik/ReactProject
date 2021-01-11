import React from 'react';
// import GlobalStyle from 'theme/GlobalStyle';
// import { withKnobs, text, select } from '@storybook/addon-knobs';
import GlobalStyle from 'theme/GlobalStyle';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const Normal = () => (
    <>
        <GlobalStyle />
        <Input placeholder='login' />
    </>
)
export const Search = () => (
    <>
        <GlobalStyle />
        <Input placeholder='search' search/>
    </>
)