import styled from "styled-components"

export default function Footer() {
    return (
        <Rodape>
            Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.
        </Rodape>
    )
}

const Rodape = styled.footer`
    background-color: #1D1D1D;
    box-sizing: border-box;
    
    width: 100%;
    height: 72px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;

`