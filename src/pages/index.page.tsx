import type {NextPage} from 'next'
import React from "react";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>ISUCONジェネレーター.React</title>
      </Head>

      <h1>
        ISUCONジェネレーター
      </h1>

      <p>
        ISUCONのベンチーマーカや初期データの生成に利用されている処理のTypeScript/Reactに移植実装です。
      </p>

      <ul>
        <li>
          <Link href={'/isucon12q'}>
            isucon12予選
          </Link>
        </li>
      </ul>
    </>
  )
}
export default Home


