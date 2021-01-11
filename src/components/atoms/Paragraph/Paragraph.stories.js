import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Paragraph from './Paragraph';

export default {
    title: 'Atoms/Paragraph',
    component: Paragraph
};

export const ParagraphComponent = () => (
    <>
        <GlobalStyle />
        <Paragraph>Paragraph</Paragraph>
    </>
);