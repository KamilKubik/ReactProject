import React from 'react';
import Globalstyle from 'theme/GlobalStyle';
import Heading from './Heading';

export default {
    title: 'Atoms/Heading',
    component: Heading
};

export const HeadingComponent = () => (
    <>
        <Globalstyle />
        <Heading>Heading</Heading>
    </>
);