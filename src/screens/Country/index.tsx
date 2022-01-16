import { RouteProp } from "@react-navigation/native";

import React from "react";
import { Image, ScrollView, Text } from "react-native";
import Header from "../../components/Header";
import { useCountries } from "../../contexts/CountriesContext";

import {
  Container,
  Detail,
  DetailRow,
  Divider,
  Flag,
  Prefix,
  Row,
  Title,
} from "./styles";

type Props = {
  route: RouteProp<{ params: { id: string } }>;
};

export default function Country({ route }: Props): JSX.Element {
  const { getCountry } = useCountries();
  const country = getCountry(route.params.id);

  return (
    <Container>
      <Header title={`${country.translations.por.common} - ${country.flag}`} />
      <ScrollView>
        <Row>
          <Title>
            {country.translations.por.official} - {country.name.common}
          </Title>
        </Row>
        <Row>
          <Flag
            source={{
              uri: country.flags.png,
            }}
          />
        </Row>
        <DetailRow>
          <Prefix>Capital: </Prefix>
          {country.capital && <Detail>{country.capital[0]}</Detail>}
        </DetailRow>
        <Divider />
        <DetailRow>
          <Prefix>Região: </Prefix>
          <Detail>{country.region}</Detail>
        </DetailRow>
        <Divider />
        <DetailRow>
          <Prefix>Subregião: </Prefix>
          <Detail>{country.subregion}</Detail>
        </DetailRow>
        <Divider />
        <DetailRow>
          <Prefix>População: </Prefix>
          <Detail>{`${country.population} hab.`}</Detail>
        </DetailRow>
        <Divider />
        <DetailRow>
          <Prefix>Área: </Prefix>
          <Detail>{`${country.area} km²`}</Detail>
        </DetailRow>
        <Divider />
        <DetailRow>
          <Prefix>País Independente?: </Prefix>
          <Detail>{country.independent ? "SIM" : "NÃO"}</Detail>
        </DetailRow>
      </ScrollView>
    </Container>
  );
}
