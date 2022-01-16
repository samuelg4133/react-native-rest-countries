export type ICountry = {
  name: {
    common: string;
  };
  ccn3: string;
  capital: Array<string>;
  flag: string;
  flags: {
    png: string;
  };
  population: number;
  region: string;
  subregion: string;
  translations: {
    por: {
      official: string;
      common: string;
    };
  };
  area: number;
  independent: boolean;
};

export type ICountries = ICountry[];

export type IError = {
  status: number;
  message: string;
};
