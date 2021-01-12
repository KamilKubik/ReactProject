import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  height: 65px;
  width: 65px;
  background-image: url(${({ icon }) => icon});
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};
  border-radius: 15%;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
