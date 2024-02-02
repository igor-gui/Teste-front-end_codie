import styled from "styled-components";
import whitePokeball from "@/public/images/white-pokeball.svg";
import Link from "next/link";


export default function NavBar() {
    return (
        <Menu>
            <Link href={'/'} className="goHome">
                <img src={whitePokeball.src} alt="white pokeball" />
                <h5>Centro Pokémon</h5>
            </Link>

            <nav>
                <Link href={'/whoarewe'} className="who">Quem somos</Link>
                <Link href={''} className="schedule">Agendar consulta</Link>
            </nav>
        </Menu>
    );
}



const Menu = styled.div`
        font-family: 'Inter', sans-serif;
        height: 104px;
        width: 100%;
        background-color: #ffffff;

        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        
        .goHome{
            text-decoration: none;
            background-color: #E40F0F;
            height: 61px;
            width: 259px;
            border-radius: 50px;
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            padding-left: 10px;
            padding-right: 10px;
            color: #ffffff;
            font-family: Inter;
            h5 {
                font-size: 20px;
                font-weight: 600;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: left;
    
            }
            img {
                width: 50px;
            }
      }
      nav {
        display: flex;
        gap: 15px;
      }
      nav a {
        text-decoration: none;
      }
      .who {
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          text-align: left;
          font-family: Inter;
          color: #000000;

          display: flex;
          align-items: center;
          justify-content: center;

      }
      .schedule {
          height: 42px;
          width: 172px;
          border-radius: 30px;
          background-color: #E40F0F;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #ffffff; 
          font-family: Inter;
          font-size: 14px;
          font-weight: 700;
          text-align: left;



      }
    `;