import React, { createContext, useEffect, useMemo, useState } from "react";
import { ICountries, ICountry, IError } from "../types/RestCountriesResponse";
import { useContext } from "react";
import restCountries from "../services/restCountries";
import { AxiosError } from "axios";

type CountriesContextData = {
  countries: ICountries;
  error: string | null;
  getCountry: (id: string) => ICountry;
  getCountries: (id: string) => ICountries;
  isLoading: boolean;
};

const CountriesContext = createContext({} as CountriesContextData);

export const CountriesProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState([] as ICountries);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  function compare(a: ICountry, b: ICountry): number {
    if (a.translations.por.common < b.translations.por.common) {
      return -1;
    }

    if (a.translations.por.common > b.translations.por.common) {
      return 1;
    }

    return 0;
  }

  const getCountry = (id: string) => {
    const country = countries.filter((c) => c.ccn3 === id);
    return country[0];
  };

  const getCountries = (value?: string) => {
    if (value && value.length > 0) {
      return countries.filter((country) =>
        country.translations.por.common.includes(value)
      );
    }

    return countries;
  };

  useEffect(() => {
    setLoading(true);
    restCountries
      .get<ICountries>("/all")
      .then((response) => {
        setCountries(response.data.sort(compare));
        setError(null);
      })
      .catch((reason: AxiosError<IError>) =>
        setError(reason.response?.data.message || null)
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const countriesContextProps = useMemo(() => {
    return {
      countries,
      error,
      getCountry,
      getCountries,
      isLoading,
    };
  }, [error, isLoading]);

  return (
    <CountriesContext.Provider value={countriesContextProps}>
      {children}
    </CountriesContext.Provider>
  );
};

export function useCountries(): CountriesContextData {
  const context = useContext(CountriesContext);

  if (!context) {
    throw new Error("useCountries must be used within an CountriesProvider");
  }

  return context;
}
