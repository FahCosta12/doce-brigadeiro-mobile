import { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import {
  Container,
  Title,
  Text,
  HeaderContainer,
  ActionsContainer,
} from "./styles";

function ForgotPassword({ navigation }: any) {
  const [email, setEmail] = useState<string>("");

  return (
    <Container>
      <HeaderContainer>
        <Title>Password Reset</Title>
        <Text>
          Enter your e-mail address and we'll send you instructions on how to
          reset your password.
        </Text>
      </HeaderContainer>

      <TextField
        onChange={(value: any) => setEmail(value.target.value)}
        text="E-mail"
        value={email}
        placeholder="Enter E-mail..."
      />

      <ActionsContainer>
        <Button
          background="#f4a15d"
          onPress={() => {}}
          text="Submit"
          textColor="#000"
        />

        <Button
          background="#fff"
          onPress={() => navigation.navigate("SignIn")}
          text="Cancel"
          textColor="#777777"
        />
      </ActionsContainer>
    </Container>
  );
}

export default ForgotPassword;
