import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Navigation from "./navigation/Navigation";

const CUSTOM_THEME = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#E9E9E9" },
};
const App = () => {
  return <Navigation />;
};

export default App;
