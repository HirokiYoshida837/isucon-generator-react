import {NextPage} from "next";
import {TenantName} from "./_components/tenant-name";
import styled from "styled-components";
import {ContestName} from "./_components/contest-name";
import Link from "next/link";
import Head from "next/head";

const Page: NextPage = () => {

  return (
    <>
      <Head>
        <title>ISUCON12 予選 : コンテスト名・テナント名ジェネレーター</title>
      </Head>

      <Container>

        <h1>
          ISUCON12 予選 : コンテスト名・テナント名ジェネレーター
        </h1>

        <p>
          ISUCON12予選のデータ生成に利用されている処理のReact移植版です
          <br/>
          <Link href={'https://github.com/isucon/isucon12-qualify/blob/main/data/rand.go'} target={'_blank'}
                rel="nofollow noopener noreferrer">
            元実装はこちら
          </Link>
        </p>


        <TenantName/>
        <ContestName/>
      </Container>

    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center; // centers in the flex direction and the default flex-direction is row
  flex-flow: column;
  align-items: center; // centers perpendicular to the flex direction
  //height: 100vh; // 100% view height
  width: 100vw; // 100% view width
  position: absolute; // so it goes behind the current content

`;

export default Page
