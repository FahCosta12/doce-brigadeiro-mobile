import { Action, ActionText } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

interface IButton {
  onPress: () => void; // Vai receber a ação do botão
  background: string; // Vai receber as strings
  textColor: string;
  text: string;
  borderColor?: string;
  isBold?: boolean;
  icon?: string | undefined;
}

const Button = ({
  onPress,
  background,
  textColor,
  text,
  borderColor,
  isBold,
  icon,
}: IButton) => {
  return (
    <Action onPress={onPress} color={background} borderColor={borderColor}>
      <ActionText color={textColor} isBold={isBold}>
        {icon ? (
          <Icon
            name={icon}
            size={20}
            color={textColor}
            style={{ marginRight: 15 }}
          />
        ) : (
          ""
        )}
        {text}
      </ActionText>
    </Action>
  );
};

export default Button;
