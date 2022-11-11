import { ImageContainer } from "./styles";

export const Image = ({ img }) => (
  <ImageContainer>{<img src={img} alt=""></img>}</ImageContainer>
);
