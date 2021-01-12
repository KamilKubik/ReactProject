import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import SideBar from 'components/organisms/SideBar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: '/Organisms/SideBar',
  component: SideBar,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
};

export const SideBarComponent = () => (
  <>
    <GlobalStyle />
    <SideBar />
  </>
);
