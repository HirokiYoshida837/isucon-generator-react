import {CharcoalProvider, SSRProvider} from '@charcoal-ui/react'
import React, {FC, ReactNode} from 'react'
import {prefersColorScheme, themeSelector} from '@charcoal-ui/styled'
import {dark, light} from '@charcoal-ui/theme'


export const AppProvider: FC<{ children: ReactNode }> = ({children}) => {

  return (
    <>
      <SSRProvider>
        <CharcoalProvider
          themeMap={{
            ':root': light,
            [themeSelector('light')]: light,
            [themeSelector('dark')]: dark,
            [prefersColorScheme('dark')]: dark,
          }}
        >
          {children}
        </CharcoalProvider>
      </SSRProvider>
    </>
  )
}
