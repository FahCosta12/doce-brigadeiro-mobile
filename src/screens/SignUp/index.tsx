import { useState } from "react";
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

interface IFormUser {
  email: string;
  password: string;
}

function SignUp({ navigation }: any) {
  const [formUser, setFormUser] = useState<IFormUser>({} as IFormUser);

  const handleChangeFormUser = (name: string, value: string) => {
    setFormUser({ ...formUser, [name]: value });
  };
  return (
    <Container>
      <Header text="Sign up" />

      <FieldsContainer>
        <Textfield
          onChange={(value: any) =>
            handleChangeFormUser("email", value.target.value)
          }
          text="Email"
          value={formUser.email}
          placeholder="Enter email..."
        />
        <Textfield
          password={true}
          onChange={(value: any) =>
            handleChangeFormUser("password", value.target.value)
          }
          text="Password"
          value={formUser.password}
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
