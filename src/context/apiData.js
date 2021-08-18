import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axiosInstance from "../../axios";
import { darkmagenta } from "color-name";

export const ApiDataContext = createContext();

const ApiDataContextProvider = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [moneySourceData, setmoneySourceData] = useState([]);
  const [transactionsData, setTransactionsData] = useState();
  const [quotesData, setquotesData] = useState();
  const [adsData, setAdsData] = useState();
  const [changeState, setChangeState] = useState();

  let adsUrl = "https://beefy-wallet-api.herokuapp.com/beefy_wallet_api/ads/";

  let moneySourcesUrl =
    "https://beefy-wallet-api.herokuapp.com/beefy_wallet_api/money_sources/";

  let transactionsUrl =
    "https://beefy-wallet-api.herokuapp.com/beefy_wallet_api/transactions/";

  let quotesUrl =
    "https://beefy-wallet-api.herokuapp.com/beefy_wallet_api/quotes/";

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
  };
  const DeleteTransaction = (data) => {
    let url = transactionsUrl + data + "/";
    const config = { headers: { Authorization: "Bearer " + token } };
    axios
      .delete(url, config)
      .then((response) => {
        setChangeState(uuidv4());
      })
      .catch((error) => {
        console.log(error.response);
        setChangeState(uuidv4());
      });
  };
  const DeleteMoneySource = (data) => {
    let url = moneySourcesUrl + data + "/";
    const config = { headers: { Authorization: "Bearer " + token } };
    axios
      .delete(url, config)
      .then((response) => {
        setChangeState(uuidv4());
      })
      .catch((error) => {
        console.log(error.response);
        setChangeState(uuidv4());
      });
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
        DeleteTransaction,
        DeleteMoneySource,
      }}
    >
      {props.children}
    </ApiDataContext.Provider>
  );
};

export default ApiDataContextProvider;
