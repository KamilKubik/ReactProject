/* eslint-disable react/prop-types */
import React from 'react';
import SideBar from 'components/organisms/SideBar';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import styled from 'styled-components';

const StyledCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 85px;
    padding: 25px 25px 0 25px;
`;

const StyledHeader = styled.div`
    margin: 25px;
    text-transform: capitalize;
`;

const StyledHeading = styled(Heading)`
    padding: 15px 0;
`;

const UserTemplate = ({ children, pageType }) => (
  <>
    <SideBar pageType={pageType} />
    <StyledHeader>
        <Input placeholder='search' search />
        <StyledHeading big>{pageType}</StyledHeading>
        <Paragraph>6 Notes</Paragraph>
    </StyledHeader>
    <StyledCardsWrapper>{children}</StyledCardsWrapper>
  </>
);

export default UserTemplate;
