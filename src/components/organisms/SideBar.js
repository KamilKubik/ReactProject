import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoIcon from 'assets/icons/logo.svg';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  height: 100vh;
  width: 150px;
  background-color: ${({sideBarColor, theme}) => theme[sideBarColor]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.p`
  display: block;
  width: 65px;
  height: 65px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  margin-bottom: 10vh;
`;

const ButtonsWrapper = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LogoutWrapper = styled(ButtonIcon)`
  margin-top: auto;
`;

const SideBar = ({ pageType }) => (
  <StyledWrapper sideBarColor={pageType}>
    <LogoWrapper />
    <ButtonsWrapper>
      <ul>
        <ButtonIcon exact as={NavLink} to="/" activeclass='active' icon={penIcon} />
      </ul>
      <ul>
        <ButtonIcon as={NavLink} to="/twitters" activeclass='active' icon={twitterIcon} />
      </ul>
      <ul>
        <ButtonIcon as={NavLink} to="articles" activeclass='active' icon={bulbIcon} />
      </ul>
    </ButtonsWrapper>
    <LogoutWrapper>
      <ButtonIcon as={NavLink} to="/login" activeclass='active' icon={logoutIcon} />
    </LogoutWrapper>
  </StyledWrapper>
);

SideBar.propTypes = {
  pageType: PropTypes.oneOf(['note', 'twitter', 'article'])
};

SideBar.defaultProps = {
  pageType: 'note'
};

export default SideBar;
