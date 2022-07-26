import { Container, Text, Input } from "./styles";

interface ITextField {
  onChange: (value: any) => void;
  value: string;
  text: string;
  placeholder?: string;
  password?: boolean;
}

const Textfield = ({
  onChange,
  value,
  text,
  placeholder,
  password,
}: ITextField) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={password}
      />
    </Container>
  );
};

export default Textfield;
