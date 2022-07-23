import { StatusBar } from "react-native";
import React from "react";
import Routes from "./src/routes";

function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Routes />
    </>
  );
}

export default App;
