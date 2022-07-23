import {
  Container,
  FieldsContainer,
  ActionsContainer,
  BottomActionContainer,
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Textfield from "../../components/TextField";

function SignIn({ navigation }: any) {
  return (
    <Container>
      <Header text="Sign in" />

      <FieldsContainer>
        <Textfield
          onChange={() => {}}
          text="Email"
          value={""}
          placeholder="Enter email..."
        />
        <Textfield
          onChange={() => {}}
          text="Password"
          value={""}
          placeholder="Enter password..."
        />
      </FieldsContainer>

      <ActionsContainer>
        <Button
          background="#f4a15d"
          text="Login"
          textColor="#fff"
          onPress={() => {}}
        />
        <Button
          background="#fff"
          text="Forgot password?"
          textColor="#999999"
          onPress={() => navigation.navigate("ForgotPassword")}
          isBold
        />
      </ActionsContainer>

      <BottomActionContainer>
        <Button
          borderColor="#999999"
          background="#fff"
          text="Sign up"
          textColor="#999999"
          onPress={() => navigation.navigate("SignUp")}
        />
      </BottomActionContainer>
    </Container>
  );
}

export default SignIn;
