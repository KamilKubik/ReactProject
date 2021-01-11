import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 0;
    margin: 0;
    background-color: ${({theme}) => theme.primary || '#ffd82b'};
    border: none;
    border-radius: 50px;
    height: 47px;
    width: 220px;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 16px;

    ${({secondary}) => (
        secondary && css`
            background-color: #e6e6e6;
            height: 30px;
            width: 105px;
            font-weight: 300;
            font-size: 10px;
        `
    )}
`

export default Button;