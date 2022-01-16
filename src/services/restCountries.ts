import axios from "axios";

const restCountries = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export default restCountries;
