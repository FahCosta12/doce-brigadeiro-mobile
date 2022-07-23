import { Container, Dot, Text } from "./styles";

interface IHeader {
  text: string;
}

const Header = ({ text }: IHeader) => {
  return (
    <Container>
      <Dot />
      <Dot />
      <Dot />
      <Text>{text}</Text>
      <Dot />
      <Dot />
      <Dot />
    </Container>
  );
};

export default Header;
