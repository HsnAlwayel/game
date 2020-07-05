import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
    
  }
`;

const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const HeroImage = styled.div`
img {
  display: block;
  width: 50%;
  width: 300px;
  height: 180px;
}
`
export { GlobalStyle, HeroImage };