import styled from "styled-components/native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const Container = styled.View`
  width: ${width - 40}px;
`;

export const Input = styled.TextInput`
  border: 1px solid #dddddd;
  height: 45px;
  border-radius: 5px;
  padding-left: 10px;
`;

export const Text = styled.Text`
  padding-bottom: 10px;
`;
