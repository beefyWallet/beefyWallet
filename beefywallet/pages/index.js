import { useEffect } from "react";
import Dashboard from "./app/Dashboard";
import axios from "axios";
export default function Home() {
//   let repliesUrl =
//     "http://beefy-wallet-api.herokuapp.com/beefy_wallet_api/transactions/";
// 
//   let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5OTI5ODcyLCJqdGkiOiJmYTE4MGFhODc2Y2E0YzQxYTkwZGZlMmRkZTVmM2VlOSIsInVzZXJfaWQiOjJ9.WtwI_ZCIfGtx7A0YWsx9xxABE5UqdP9gFDWRYTX2vuY'
//   // let repliesUrl =
//   //   "https://gofarm-api.herokuapp.com/api/v1/farms/";
//   useEffect(() => {
//     const config = {headers: {'Authorization': 'Bearer ' + token}};
//     axios.get(repliesUrl, config).then((res)=>{
//       console.log(res);
// 
//     })
//   },[]);

  return <Dashboard />;
}
