/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import LinkIcon from 'assets/icons/link.svg';

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
    position: relative;
    padding: 15px 30px;
    background-color: ${({ cardColor, theme }) => cardColor ? theme[cardColor] : 'transparent'};

    ${({flex}) => flex && css`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `}
`;

const StyledParagraph = styled(Paragraph)`
    padding: 10px;
`;

const StyledAvatar = styled.img`
    height: 65px;
    width: 65px;
    position: absolute;
    right: 15px;
    top: 15px;
    border: 5px solid ${({theme}) => theme.twitter};
    border-radius: 50%;
`;

const StyledLinkButton = styled.a`
    display: block;
    height: 65px;
    width: 65px;
    background: white url(${LinkIcon}) no-repeat;
    border-radius: 50%;
    background-size: 60%;
    background-position: center;
    position: absolute;
    right: 15px;
    top: 15px;
    border: 5px solid ${({theme}) => theme.article};
`;

const Card = ({ cardType, title, created, twitterName, articleUrl, content }) => (
  <StyledWrapper>
    <InnerWrapper cardColor={cardType}>
        <Heading>{title}</Heading>
        <StyledParagraph>{created}</StyledParagraph>
        {cardType === 'twitter' && <StyledAvatar src={twitterName} />}
        {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
    </InnerWrapper>
    <InnerWrapper flex>
        <StyledParagraph>
            {content}
        </StyledParagraph>
        <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.defaultProps = {
    cardType: 'note',
    twitterName: null,
    articleUrl: null
};

Card.propTypes = {
    cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired
};

export default Card;
