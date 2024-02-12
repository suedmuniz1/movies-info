import axios from "axios";
import { API_TOKEN } from "../../constants/env";

type ItemType = "movie" | "tv";

type GetDataProps = {
  dataEndpoint: string;
  endpointParams?: Record<string, any>;
  page?: number;
};

export const getData = async (
  { dataEndpoint, endpointParams, page }: GetDataProps = {
    dataEndpoint: "",
    endpointParams: {},
    page: 1,
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
        language: "en-US",
        ...endpointParams,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getDataById = async (
  id: string | undefined,
  itemType: ItemType
) => {
  if (!id) return;

  return await axios
    .get(`https://api.themoviedb.org/3/${itemType}/${id}`, {
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
        accept: "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
};
