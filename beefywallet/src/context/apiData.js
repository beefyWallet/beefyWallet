import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const ApiDataContext = createContext();

const ApiDataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [moneySourceData, setmoneySourceData] = useState();
  const [transactionsData, setTransactionsData] = useState();
  const [quotesData, setquotesData] = useState();
  const [adsData, setAdsData] = useState();
  let adsUrl = "http://beefy-wallet-api.herokuapp.com/beefy_wallet_api/ads/";

  let moneySourcesUrl =
    "http://beefy-wallet-api.herokuapp.com/beefy_wallet_api/money_sources/";

  let transactionsUrl =
    "http://beefy-wallet-api.herokuapp.com/beefy_wallet_api/transactions/";

  let quotesUrl =
    "http://beefy-wallet-api.herokuapp.com/beefy_wallet_api/quotes/";

  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    var token = localStorage.getItem("access_token");
  }
  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    const config = { headers: { Authorization: "Bearer " + token } };
    const moneySourcesDataAPI = await axios.get(moneySourcesUrl, config);
    setmoneySourceData(moneySourcesDataAPI.data);
    const transactionsDataAPI = await axios.get(transactionsUrl, config);
    setTransactionsData(transactionsDataAPI.data);
    const quotesDataAPI = await axios.get(quotesUrl, config);
    setquotesData(quotesDataAPI.data);
    const adsDataAPI = await axios.get(adsUrl, config);
    setAdsData(adsDataAPI.data);
    setLoading(false);
    console.log(isLoading);
  }

  return (
    <ApiDataContext.Provider
      value={{
        isLoading,
        moneySourceData,
        transactionsData,
        quotesData,
        adsData,
      }}
    >
      {props.children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataContextProvider;
