import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from "../../axios";
import { darkmagenta } from "color-name";

export const ApiDataContext = createContext();

const ApiDataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [moneySourceData, setmoneySourceData] = useState();
  const [transactionsData, setTransactionsData] = useState();
  const [quotesData, setquotesData] = useState();
  const [adsData, setAdsData] = useState();
  const [changeState, setChangeState] = useState();

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
  }, [changeState]);

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

  const addMoneySource = (data) => {
    const config = { headers: { Authorization: "Bearer " + token } };
    axios
      .post(
        moneySourcesUrl,
        {
          name: data.name,
          amount: data.amount,
        },
        config
      )
      .then((res) => {
        setChangeState(uuidv4());
      });
  };

  const addTransaction = (data) => {
    const config = { headers: { Authorization: "Bearer " + token } };
    try {
      axios
        .post(
          transactionsUrl,
          {
            value: data.value,
            transaction_type: data.transaction_type,
            note: data.note,
            category: data.category,
            money_source: data.money_source,
          },
          config
        )
        .then(
          (response) => {
            console.log(response);
            setChangeState(uuidv4());
          },
          (error) => {
            console.log(error);
            setChangeState(uuidv4());
          }
        );
    } catch {
      setChangeState(uuidv4());
    }

    // .then((res) => {
    //   setChangeState(uuidv4());
    // });
  };
  return (
    <ApiDataContext.Provider
      value={{
        isLoading,
        moneySourceData,
        transactionsData,
        quotesData,
        adsData,
        addMoneySource,
        addTransaction,
      }}
    >
      {props.children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataContextProvider;
