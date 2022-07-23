import Button from "../../components/Button";
import { Container, Image, ActionsContainer } from "./styles";
const logo = "../../../assets/Logo.jpg";

function Login({ navigation }: any): JSX.Element {
  return (
    <Container>
      <Image source={require("../../../assets/Logo.jpg")} />
      <ActionsContainer>
        <Button
          background="#f4a15d"
          textColor="#000"
          onPress={() => navigation.navigate("SignUp")}
          text="Sign Up"
          icon="silverware"
        />
        <Button
          borderColor="#862924"
          background="#fff"
          textColor="#862924"
          onPress={() => navigation.navigate("SignIn")}
          text="Sign In"
        />
      </ActionsContainer>
    </Container>
  );
}

export default Login;
