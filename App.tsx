import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { CountriesProvider } from "./src/contexts/CountriesContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <CountriesProvider>
        <Routes />
      </CountriesProvider>
    </NavigationContainer>
  );
}
