import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import React from "react";
import Routes from "./src/routes";
import theme from "./src/styles";

function App() {
  return (
    /* fragmento */
    <>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
