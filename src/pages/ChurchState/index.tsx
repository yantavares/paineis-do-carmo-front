import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "src/components/Item";
import SearchBar from "src/components/SearchBar";
import colors from "src/utils/colors";
import { Church, brazilianChurches } from "src/utils/mockData";
import { capitalize } from "src/utils/strings";
import {
  SearchBarContainer,
  SearchContainer,
  SearchHeader,
  SearchResult,
  SearchResultsContainer,
} from "../SearchPage/styles";
import axios from "axios";

const ChurchState = () => {
  const { state } = useParams();
  const [data, setData] = useState<Church[]>(null);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/churches/state/${state}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPaintings();
  }, [state]);

  return (
    <SearchContainer>
      <SearchHeader>
        Igrejas por Estado:{" "}
        <span style={{ color: colors.green }}> {translateState(state)}</span>
        <SearchBarContainer>
          <SearchBar
            placeHolder={`Busque por igrejas em ${capitalize(state)}`}
            showButtons={false}
          />
        </SearchBarContainer>
      </SearchHeader>

      <SearchResultsContainer>
        {data?.map((item: any, index: number) => (
          <SearchResult key={index}>
            <Item item={item} type={"churches"} fixedImgHeight />
          </SearchResult>
        ))}
      </SearchResultsContainer>
    </SearchContainer>
  );
};

const translateState = (sigla: string) => {
  switch (sigla) {
    case "AC":
      return "Acre";
    case "AL":
      return "Alagoas";
    case "AP":
      return "Amapá";
    case "AM":
      return "Amazonas";
    case "BA":
      return "Bahia";
    case "CE":
      return "Ceará";
    case "DF":
      return "Distrito Federal";
    case "ES":
      return "Espírito Santo";
    case "GO":
      return "Goiás";
    case "MA":
      return "Maranhão";
    case "MT":
      return "Mato Grosso";
    case "MS":
      return "Mato Grosso do Sul";
    case "MG":
      return "Minas Gerais";
    case "PA":
      return "Pará";
    case "PB":
      return "Paraíba";
    case "PR":
      return "Paraná";
    case "PE":
      return "Pernambuco";
    case "PI":
      return "Piauí";
    case "RJ":
      return "Rio de Janeiro";
    case "RN":
      return "Rio Grande do Norte";
    case "RS":
      return "Rio Grande do Sul";
    case "RO":
      return "Rondônia";
    case "RR":
      return "Roraima";
    case "SC":
      return "Santa Catarina";
    case "SP":
      return "São Paulo";
    case "SE":
      return "Sergipe";
    case "TO":
      return "Tocantins";
    default:
      return "";
  }
};
export default ChurchState;
