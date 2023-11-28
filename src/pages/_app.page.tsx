import type {AppProps} from 'next/app'
import Head from 'next/head'
import {AppProvider} from "@/components/AppProvider";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>ISUCONジェネレーター</title>
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp
