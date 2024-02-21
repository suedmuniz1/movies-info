import axios from "axios";
import { API_TOKEN } from "../../constants/env";

export type ItemType = "movie" | "tv";

type GetDataProps = {
  dataEndpoint: string;
  endpointParams?: Record<string, any>;
  page?: number;
  language?: string;
};

export const getData = async (
  { dataEndpoint, endpointParams, page, language }: GetDataProps = {
    dataEndpoint: "",
    endpointParams: {},
    page: 1,
    language: "en",
  }
) => {
  return await axios
    .get(dataEndpoint, {
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
        accept: "application/json",
      },
      params: {
        page: page,
        language: language === "en" ? "en-US" : "pt-BR",
        ...endpointParams,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getDataById = async (
  id: string | undefined,
  itemType: ItemType,
  language: string
) => {
  if (!id) return;

  return await axios
    .get(`https://api.themoviedb.org/3/${itemType}/${id}`, {
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
        accept: "application/json",
      },
      params: {
        language: language === "en" ? "en-US" : "pt-BR",
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getWatchProvidersByMovieId = async (
  id: string | undefined,
  itemType: ItemType,
  language: string
) => {
  if (!id) return;

  const getCountryCode = (language: string) => {
    return language === "en" ? "US" : "BR";
  };

  const results: Record<string, any> = await axios
    .get(`https://api.themoviedb.org/3/${itemType}/${id}/watch/providers`, {
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
        accept: "application/json",
      },
    })
    .then((response) => {
      return response?.data?.results[getCountryCode(language)]?.flatrate ?? [];
    });

  return results;
};