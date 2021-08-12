import 'tailwindcss/tailwind.css'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'
import PropTypes from 'prop-types'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import HeadHtml from '../src/context/headHtml'
import { useState } from 'react'
export default function MyApp(props) {
  const [name, setName] = useState('ww')
  const { Component, pageProps } = props
  const Layout = Component.Layout || DefaultLayout
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <React.Fragment>
      <HeadHtml title={'Beefy Wallet'}></HeadHtml>
      <ThemeProvider theme={theme}>
        <Layout setName={setName} name={name}>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

const DefaultLayout = ({ children }) => <>{children}</>
