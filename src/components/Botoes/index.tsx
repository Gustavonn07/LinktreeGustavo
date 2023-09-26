import { styled } from "styled-components"

type PropsBotoes = {
    texto: string,
    link: string
}

const Botoes = ({ texto, link }: PropsBotoes) => {

    return (
        <>
            <BTN href={link}>
                {texto}
            </BTN>
        </>
    );
};

const BTN = styled.a`
    width: 60%;
    padding: .8rem;
    height: 3.5rem;
    border-radius: .2rem;
    background-color: #d2d2d4;
    cursor: pointer;
    box-shadow: 0 .6rem 1.2rem #00000010;
    transition: all .2s;
    text-align: center;
    color: #434343;
    font-size: 1.6rem;

    &:hover,
    &:focus {
        box-shadow: 0 1rem 1.5rem #00000050;
        transform: scale(1.02) translateY(-2px);
    }

    &:active {
        box-shadow: 0 .8rem 1.4rem #00000030;
        transform: scale(1.01) translateY(-1px);
    }
`

export default Botoes;