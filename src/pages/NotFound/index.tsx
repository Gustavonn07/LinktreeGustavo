import { styled } from "styled-components";
import { ReactNode } from "react";

type PropsNotFound = {
    children: ReactNode
}

const NotFound = ({ children }: PropsNotFound) => {

    return (
        <>
            <Container>
                <Heading>Opa, ocorreu um erro!</Heading>
                {children}
                <Footer>
                    Todos os direitos reservados &copy; Gustavo Nepomuceno 2023
                </Footer>
            </Container>
        </>
    );
}

const Container = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #5f5f5f;
    position: relative;
    

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
`

const Heading = styled.h1`
    color: #f2e9e9;
    margin-top: 20rem;
`

const Footer = styled.footer`
    position: absolute;
    bottom: 1.2rem;
    color: #f2e9e9;
`

export default NotFound;