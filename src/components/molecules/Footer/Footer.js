import styled from 'styled-components';


const FooterWrapper = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 1.5rem;
    border-top: 1px solid #eee;
`

const Footer = () => (
    <FooterWrapper className="footer">
        <div className="content has-text-centered">
            <p>
                <strong>Pokedex</strong> by k.nawolski@gmail.com
            </p>
        </div>
    </FooterWrapper>
)
export default Footer;