import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStye from '../theme/GlobalStyle';
import theme from '../theme/mainTheme';
import Topbar from './../components/molecules/Topbar/Topbar';
import Footer from './../components/molecules/Footer/Footer';

const MainTemplate = ({ children }) => (
    <>
        <GlobalStye />
        <ThemeProvider theme={theme}>
            <>
                <Topbar />
                {children}
                <Footer />
            </>
        </ThemeProvider>
    </>
)

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
}

export default MainTemplate;