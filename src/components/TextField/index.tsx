import { Container, Text, Input } from "./styles";

interface ITextField {
  onChange: () => void;
  value: string;
  text: string;
  placeholder?: string;
}

const Textfield = ({ onChange, value, text, placeholder }: ITextField) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Input onChange={onChange} value={value} placeholder={placeholder} />
    </Container>
  );
};

export default Textfield;
