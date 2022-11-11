import { Container } from "./styles";
import logo from "../../assets/logo.png";
import brand from "../../assets/brand.png";

export const Header = () => (
  <Container>
    <div>
      <img src={logo} alt=""></img>
      <img src={brand} alt="tinkin"></img>
    </div>
  </Container>
);
