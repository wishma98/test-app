import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiRoutes from "../constants/api-routes";
import oogeInstance from "./ooge-caompany-api";
import { kbsGetAllStorebyCompanyId } from "../service/store.service";

const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("useFetch:::", query);

  //   const options = {
  //     method: "GET",
  //     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //     params: {
  //       ...query,
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": process.env.RAPID_API_KEY,
  //       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //     },
  //   };

  //   const options = {
  //     method: "POST",
  //     url: "https://linkedin-jobs-search.p.rapidapi.com/",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": "48eeef54eemsh844baf0105e2fc0p15b629jsn177a66bb67cd",
  //       "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
  //     },
  //     data: { ...query },
  //   };

  const options = {
    method: "GET",
    url: "https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates",
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": "48eeef54eemsh844baf0105e2fc0p15b629jsn177a66bb67cd",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };

  const body = {
    method: "GET",
    url: `http://localhost:9005/${ApiRoutes.GET_STORE_BY_COMPANY_ID}/${query}`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI2N2MzZDkxNzNmZjE5M2ZmYTc3NDgiLCJjb21wYW55SWQiOiI2NDI2N2MzZDkxNzNmZjE5M2ZmYTc3NDUiLCJ1c2VyTmFtZSI6ImluZm9AYmFsYWppLmNvbSIsImZpcnN0TmFtZSI6bnVsbCwibGFzdE5hbWUiOm51bGwsInVzZXJUeXBlIjoiQlVTSU5FU1MiLCJpYXQiOjE2ODA1OTAwMjksImV4cCI6MTY4MzE4MjAyOX0.NSssmPYZNGg3xDrn5lu4G2sediwoipSE8xR2Nnx6cvcBearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDI2N2MzZDkxNzNmZjE5M2ZmYTc3NDgiLCJjb21wYW55SWQiOiI2NDI2N2MzZDkxNzNmZjE5M2ZmYTc3NDUiLCJ1c2VyTmFtZSI6ImluZm9AYmFsYWppLmNvbSIsImZpcnN0TmFtZSI6bnVsbCwibGFzdE5hbWUiOm51bGwsInVzZXJUeXBlIjoiQlVTSU5FU1MiLCJpYXQiOjE2ODA1OTAwMjksImV4cCI6MTY4MzE4MjAyOX0.NSssmPYZNGg3xDrn5lu4G2sediwoipSE8xR2Nnx6cvc`,
    },
  };

  //   const kbsGetAllStorebyCompanyId = async (companyId) => {
  //     console.log("companyId:::", companyId, ApiRoutes.GET_STORE_BY_COMPANY_ID);
  //     oogeInstance.get(`${ApiRoutes.GET_STORE_BY_COMPANY_ID}/${companyId}`);
  //   };

  const fetchData = async () => {
    setIsLoading();
    try {
      //   const res = await axios.request(body);
      // 'sss'
      let res = await kbsGetAllStorebyCompanyId(query);
      console.log("response:::", res);
      if (res && res.data && res.data.status) {
        setData([res.data.data]);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData().catch("useEffect ===> error", console.error);
  }, []);

  const reFresh = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, reFresh };
};
export default useFetch;
// export const kbsGetAllStorebyCompanyId = async (companyId) => {
//   oogeInstance.get(`${ApiRoutes.GET_STORE_BY_COMPANY_ID}/${companyId}`);
// };
