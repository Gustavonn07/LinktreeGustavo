import { styled } from "styled-components";

const Footer = () => {

    return (
        <>
            <Copy>Todos os direitos reservados &copy; Gustavo Nepomuceno 2023</Copy>
        </>
    );
};

const Copy = styled.h4`
    position: relative;
    top: -76vh;
    z-index: 100;
    text-align: center;
    font-size: 1rem;
    color: #cecece;
`

export default Footer;
