import Head from 'next/head'

const HeadHtml = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
  )
}

export default HeadHtml
