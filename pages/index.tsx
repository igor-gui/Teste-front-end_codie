import pokemonhero from "@/public/images/pokemon-hero.jpg"
import styled from "styled-components"

export default function Home() {
  return (
    <Main>
      <img className="pokeImg" src={pokemonhero.src}></img>
    </Main>
  )
};

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  .pokeImg {
    width: 100%;
  }
`
