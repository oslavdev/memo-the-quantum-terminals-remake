import { MockedProvider, MockedResponse } from '@apollo/react-testing'

import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorhandleProvider } from '@/context/error'
import Modals from '@/components/modals-context'
import { MusicManagerContextProvider } from '@/context/music'
import State from '@/context/state'
import { ThemeProvider } from 'styled-components'
import { client } from '@/app/config/apollo'
import { theme } from '@/components/UI/config/theme'

interface MountProps {
  children: React.ReactNode
  state: object
  dispatch: object
  mocks: ReadonlyArray<MockedResponse>
}

const Mount: React.FC<MountProps> = ({ children, state, dispatch, mocks }) => {
  return (
    <ApolloProvider client={client}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <State.Provider value={{ state, dispatch }}>
                <ErrorhandleProvider>
                    <MusicManagerContextProvider>
                      <Modals>{children}</Modals>
                    </MusicManagerContextProvider>
                </ErrorhandleProvider>
            </State.Provider>
          </ThemeProvider>
        </BrowserRouter>
      </MockedProvider>
    </ApolloProvider>
  )
}

export default Mount
