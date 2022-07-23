import styled from "styled-components/native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

interface IAction {
  color: string;
  borderColor?: string;
  isBold?: boolean;
}

export const Action = styled.TouchableOpacity<IAction>`
  background-color: ${(props) => props.color};
  width: ${width - 45}px;
  height: 45px;
  border-radius: 300px;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${(props) => (props.borderColor ? props.borderColor : props.color)};
`;

export const ActionText = styled.Text<IAction>`
  color: ${(props) => props.color};
  font-size: 15px;
  text-transform: uppercase;
  fort-weight: ${(props) => (props.isBold ? "bold" : "normal")};
`;
