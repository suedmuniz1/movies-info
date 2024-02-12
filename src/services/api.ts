import axios from "axios";
import { API_TOKEN } from "../constants/env";

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
      console.log(response.data);
      return response.data;
    });
};

export const getMovieDataById = async (id: string | undefined) => {
  if (!id) return;

  return await axios
    .get(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
        accept: "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const getSerieDataById = async (id: string | undefined) => {
  if (!id) return;

  return await axios
    .get(`https://api.themoviedb.org/3/tv/${id}`, {
      headers: {
        authorization: `Bearer ${API_TOKEN}`,
        accept: "application/json",
      },
    })
    .then((response) => {
      return response.data;
    });
};
