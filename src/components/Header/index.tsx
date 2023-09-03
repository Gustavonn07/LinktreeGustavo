import { styled } from "styled-components";

type PropsHeader = {
    imagem: string,
    textoAux: string
}

const Header = ({imagem, textoAux}: PropsHeader) => {

    return (
        <>
            <HeaderContainer>
                <Imagem
                    src={imagem}
                    alt={textoAux}
                />
            </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 30vh;
    position: relative;
    z-index: 100;
`

const Imagem = styled.img`
    position: absolute;
    width: 7rem;
    height: 7rem;
    border-radius: 100rem;
    bottom: -2rem;
    right: 50%;
    box-shadow: 0 1rem 1.5rem #00000060;
    border: .5rem solid #656565e1;
    transform: translateX(50%);
    z-index: 100;
`

export default Header;