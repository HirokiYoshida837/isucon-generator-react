import React, {useCallback, useEffect, useState} from 'react';
import {fakeCompetitionName} from "@generators/isucon12q"

import {Button, IconButton, TextField} from "@charcoal-ui/react";
import styled from "styled-components";

export const ContestName: React.FC = (props) => {


  const [cname, setCname] = useState<string>('')
  useEffect(() => {
    setCname(fakeCompetitionName())
  }, [])

  const clickHandler = useCallback(() => {
    setCname(fakeCompetitionName())
  }, [])


  return (
    <Container>

      <TextField showLabel={true} label="コンテスト名" placeholder="コンテスト名" contentEditable={false}
                 value={cname}
                 suffix={
                   <IconButton
                     icon={'Inline/Images'} size="M" onClick={() => copyToClipBoard(cname)}
                     title={'copy to clipboard'}
                   />
                 }
      />

      <br/>

      <Button variant={'Primary'} onClick={clickHandler}>
        再生成する！
      </Button>

    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin: 1rem;
  width: 600px;
`;

const copyToClipBoard = (txt: string) => {
  navigator.clipboard.writeText(txt);
}
