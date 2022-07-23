import {
  Container,
  FieldsContainer,
  ActionsContainer,
  BottomActionContainer,
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Textfield from "../../components/TextField";
import React from "react";

function SignUp({ navigation }: any) {
  return (
    <Container>
      <Header text="Sign up" />

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
          text="Sign up"
          textColor="#fff"
          onPress={() => {}}
        />
      </ActionsContainer>

      <BottomActionContainer>
        <Button
          borderColor="#999999"
          background="#fff"
          text="Already have an account?"
          textColor="#999999"
          onPress={() => navigation.navigate("SignIn")}
        />
      </BottomActionContainer>
    </Container>
  );
}

export default SignUp;
