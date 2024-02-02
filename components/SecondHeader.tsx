import Link from "next/link"
import styled from "styled-components";

export default function SecondHeader({ route }: { route: string }) {

    const routeName = () => {
        if (route === '/whoarewe') return "Quem Somos";
        if (route === '/schedule') return "Agendar Consulta";
    }
    const routeText = () => {
        if (route === '/whoarewe') return "A maior rede de tratamento pokémon."
        if (route === '/schedule') return "Recupere seus pokémons em 5 segundos"
    }

    return (
        <SencondHeaderStyle>
            <ul className="container">
                <li className="path">
                    <Link href={'/'}>Home</Link> <span /> &gt;
                    <h2>{routeName()}</h2>
                </li>
                <li className="title">
                    {routeName()}
                </li>
                <li className="text">
                    {routeText()}
                </li>
            </ul>
        </SencondHeaderStyle>
    )
}

const SencondHeaderStyle = styled.header`
    width: 100%;
    height: 187px;
    background-color: #E40F0F;
    color: #FFFFFF;
    
    
    .container {
        height: 100%;
        font-family: "Inter", "sans-serif";
        margin-left: 104px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .path {
        display: flex;
        gap: 2px;
        a {
        color: #FFFFFF;
        text-decoration: none;
            }
        }

        .text {
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            text-align: left;

        }

        .title {
            font-family: Inter;
            font-size: 32px;
            font-weight: 700;
            text-align: left;

        }
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    
    }
`