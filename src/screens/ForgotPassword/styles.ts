import styled from "styled-components/native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export const Container = styled.View`
  padding: 70px;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  width: ${width - 30}px;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 15px;
  width: ${width - 90}px;
  color: #777777;
  padding-top: 10px;
`;

export const ActionsContainer = styled.View`
  padding-top: 20px;
  height: 125px;
  justify-content: space-between;
`;
