import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
    min-height: 380px;
    box-shadow: 0px 10px 30px -10px hsla(0, 0%, 0%, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
    padding: 15px 30px;
    background-color: ${({yellow, theme}) => yellow ? theme.primary : 'white'};

    ${({flex}) => flex && css`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `}
`;

const StyledParagraph = styled(Paragraph)`
    padding: 10px;
`;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
        <Heading>Hello Kamil!</Heading>
        <StyledParagraph>3 Days</StyledParagraph>
    </InnerWrapper>
    <InnerWrapper flex>
        <StyledParagraph>
        Elit consequat voluptate aute veniam culpa cillum. Esse culpa
        reprehenderit nisi voluptate ullamco sit. Pariatur voluptate eiusmod nulla
        qui ut ad qui.
        </StyledParagraph>
        <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;
