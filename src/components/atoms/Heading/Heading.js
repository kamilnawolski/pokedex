import styled from 'styled-components';

const Heading = styled.h3`
    font-size: ${({theme, big}) => (big ? theme.fontSize.xl : theme.fontSize.l)};
    font-weight: ${({theme}) => theme.bold};
    text-transform: ${({upper}) => (upper ? 'uppercase' : 'none')};
`   

export default Heading;