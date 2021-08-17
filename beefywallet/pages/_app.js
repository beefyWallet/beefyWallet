import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import theme from "../src/theme";
import ApiDataContextProvider from "../src/context/apiData";
import Welcome from "./welcome";
// import BeefyWalletAdmin from "../src/context/BeefyWalletAdmin";
import SignIn from "./app/login";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import HeadHtml from "../src/context/headHtml";
import dynamic from "next/dynamic";
const BeefyWalletAdminn = dynamic(
  () => import("../src/context/BeefyWalletAdmin"),
  { ssr: false }
);
export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    var token = localStorage.getItem("access_token");
  }

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

  if (Component.name == "SignIn") {
    return (
      <ThemeProvider theme={theme}>
        <SignIn />
      </ThemeProvider>
    );
  }
  if (Component.name == "SignUp") {
    return (
      <ThemeProvider theme={theme}>
        <SignUp />
      </ThemeProvider>
    );
  }
  return (
    <React.Fragment>
      <HeadHtml title={"Beefy Wallet"} />
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {token ? (
          <ApiDataContextProvider>
            <BeefyWalletAdminn setThemeMode={setThemeMode}>
              <Component {...pageProps} />
            </BeefyWalletAdminn>
          </ApiDataContextProvider>
        ) : (
          <Welcome />
        )}
      </ThemeProvider>
    </React.Fragment>
  );
  //   return (
  //     <React.Fragment>
  //       <HeadHtml title={"Beefy Wallet"} />
  //       <ThemeProvider theme={theme}>
  //         <CssBaseline />
  //
  //         {token ? (
  //           <ApiDataContextProvider>
  //             <BeefyWalletAdmin setThemeMode={setThemeMode}>
  //               <Component {...pageProps} />
  //             </BeefyWalletAdmin>
  //           </ApiDataContextProvider>
  //         ) : (
  //           <SignIn />
  //         )}
  //       </ThemeProvider>
  //     </React.Fragment>
  //   );
  // return (
  //   <React.Fragment>
  //     <Head>
  //       <title>My page</title>
  //       <meta
  //         name="viewport"
  //         content="minimum-scale=1, initial-scale=1, width=device-width"
  //       />
  //     </Head>
  //     <ThemeProvider theme={theme}>
  //       {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
  //       <CssBaseline />
  //       <Component {...pageProps} />
  //     </ThemeProvider>
  //   </React.Fragment>
  // );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
