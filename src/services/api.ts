import axios from "axios";
import { API_TOKEN } from "../constants/env";

type getDataProps = {
  dataEndpoint: string;
  endpointParams: Record<string, any>;
  page: number;
};

export const getData = async (
  { dataEndpoint, endpointParams, page }: getDataProps = {
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
