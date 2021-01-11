/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Storybook Knobs',
  decorators: [withKnobs],
};

// export default {
//   title: 'components/Button',
//   component: Button,
// }

export const Primary = () => {

  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };

  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return (
    <>
      <GlobalStyle />
      <Button color={value}>{text('Label', 'Save / Close')}</Button>
    </>
  )

}



export const Secondary = () => <Button secondary>Remove</Button>