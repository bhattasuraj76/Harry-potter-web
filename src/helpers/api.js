import axios from "axios";
import { urls } from "./urls";

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return headers;
};

const makeRequest = async (url, method, data = null, headers) => {
  let response = "";
  try {
    if (method === "POST" || method === "PUT" || method === "DELETE") {
      response = await axios({
        method,
        url,
        data,
        headers,
      });
    }
    if (method === "GET") {
      response = await axios({
        method,
        url,
        params: data,
        headers,
      });
    }
  } catch (e) {
    console.log(Object.entries(e));
  }
  return response;
};

export const fetchCharacters = () => {
  return makeRequest(urls.characters, "GET", null, getHeaders()).then(
    (res) => res.data
  );
};

export const fetchCharacterDetail = (slug) => {
  const url = urls.characterDetail.replace(":slug", slug);
  return makeRequest(url, "GET", null, getHeaders()).then((res) => res.data);
};
