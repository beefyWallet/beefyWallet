import "tailwindcss/tailwind.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import HeadHtml from "../src/context/headHtml";
import BeefyWalletAdmin from "../src/context/BeefyWalletAdmin";
import SignIn from "./app/login";
import ApiDataContextProvider from "../src/context/apiData";
import Welcome from "./welcome";

export default function MyApp(props) {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    var token = localStorage.getItem("access_token");
  }
  const { Component, pageProps } = props;

  const [themeMode, setThemeMode] = React.useState("dark");
  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${themeMode})`);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <React.Fragment>
      <HeadHtml title={"Beefy Wallet"} />
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {token ? (
          <ApiDataContextProvider>
            <BeefyWalletAdmin setThemeMode={setThemeMode}>
              <Component {...pageProps} />
            </BeefyWalletAdmin>
          </ApiDataContextProvider>
        ) : (
          <SignIn />
        )}
      </ThemeProvider>
    </React.Fragment>
  );
  // switch (Component.name) {
  //   case "SignIn":
  //     return (
  //       <ThemeProvider theme={theme}>
  //         <SignIn />
  //       </ThemeProvider>
  //     );
  //   case "SignUp":
  //     <ThemeProvider theme={theme}>
  //       <SignUp />
  //     </ThemeProvider>;
  //   default:
  //     return (
  //       <React.Fragment>
  //         <HeadHtml title={"Beefy Wallet"} />
  //         <ThemeProvider theme={theme}>
  //           <CssBaseline />
  //           {token ? (
  //             <ApiDataContextProvider>
  //               <BeefyWalletAdmin setThemeMode={setThemeMode}>
  //                 <Component {...pageProps} />
  //               </BeefyWalletAdmin>
  //             </ApiDataContextProvider>
  //           ) : (
  //             <Welcome />
  //           )}
  //         </ThemeProvider>
  //       </React.Fragment>
  //     );
  // }
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
