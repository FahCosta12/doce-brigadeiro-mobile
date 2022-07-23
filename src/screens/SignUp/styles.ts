import styled from "styled-components/native";
import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;

export const Container = styled.View`
  padding: 50px;
  align-items: center;
  height: ${height}px;
`;

export const FieldsContainer = styled.View`
  padding-top: 10px;
  height: 170px;
  justify-content: space-between;
`;

export const ActionsContainer = styled.View`
  height: 160px;
  justify-content: space-between;
  padding-top: 50px;
`;

export const BottomActionContainer = styled.View`
  position: absolute;
  bottom: 50;
`;
