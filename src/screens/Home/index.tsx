import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import { ActivityIndicator, ScrollView, TextInput } from "react-native";

import Header from "../../components/Header";
import { useCountries } from "../../contexts/CountriesContext";
import { StackList } from "../Stack";

import {
  Button,
  ButtonText,
  Card,
  CardTitle,
  Container,
  Detail,
  DetailRow,
  Flag,
  Input,
  Row,
  Text,
} from "./styles";

type ScreenProps = NativeStackNavigationProp<StackList, "Home">;

export default function Home(): JSX.Element {
  const [filter, setFilter] = useState("");

  const { countries, getCountries, error, isLoading } = useCountries();

  const countriesFiltered = getCountries(filter);

  const navigation = useNavigation<ScreenProps>();

  const openScreenCountry = (id: string) => {
    navigation.navigate("Country", {
      id,
    });
  };

  return (
    <Container>
      <Header title="Rest Countries" />
      <Row>
        <Text>{`Lista de Países (${countriesFiltered.length})`}</Text>
        {error && (
          <Text
            style={{
              color: "red",
            }}
          >
            {error}
          </Text>
        )}
        {isLoading && <ActivityIndicator size="large" color="#05267b" />}
      </Row>
      <Row>
        <ScrollView horizontal>
          {countriesFiltered &&
            countriesFiltered.map((country, index) => {
              return (
                <Card key={`${country.ccn3}.${index.toString()}`}>
                  <CardTitle>
                    {country.translations.por.common} {country.flag}
                  </CardTitle>
                  <Flag source={{ uri: country.flags.png }} />
                  <DetailRow>
                    <Detail>Capital: </Detail>
                    {country.capital && <Detail>{country.capital[0]}</Detail>}
                  </DetailRow>
                  <DetailRow>
                    <Detail>Região: </Detail>
                    <Detail>{country.region}</Detail>
                  </DetailRow>
                  <Button onPress={() => openScreenCountry(country.ccn3)}>
                    <ButtonText>Visualizar</ButtonText>
                  </Button>
                </Card>
              );
            })}
        </ScrollView>
      </Row>
      {countries.length > 0 && (
        <>
          <Row>
            <Text>Filtro por Nome: </Text>
          </Row>
          <Row>
            <Input value={filter} onChangeText={(text) => setFilter(text)} />
          </Row>
        </>
      )}
    </Container>
  );
}
