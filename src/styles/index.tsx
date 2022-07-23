import { createGlobalStyle } from "styled-components";
import { palette } from "./palette";

const Colors = createGlobalStyle`
  :root {
    --primary-color: ${palette.primaryColor};
    --secondary-color: ${palette.secondaryColor};
    
    --primary-text-color: ${palette.primaryTextColor};
    --secondary-text-color: ${palette.secondaryTextColor};
    
    --error-color: ${palette.errorColor};
    --warning-color: ${palette.warningColor};
    --success-color: ${palette.successColor};
    --info-color: ${palette.infoColor};
    
    --theme-light-color: ${palette.themeLightColor};
    --theme-dark-color: ${palette.themeDarkColor};
  }
`;

export default Colors;
