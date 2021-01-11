import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-spinkit';

const SpinnerStyled = styled(Spinner)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const LoadingSpinner = () => (
    <SpinnerStyled name="pacman" />
)


export default LoadingSpinner;