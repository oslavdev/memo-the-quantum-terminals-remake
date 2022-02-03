import { ApolloProvider } from '@apollo/client'
import { client } from '@/app/config/apollo'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/UI/config/theme'
import { ModalProvider } from '@/context/confirmModal'
import { ErrorhandleProvider } from '@/context/error'
import { StartGameProvider } from '@/context/startGame'
import { MusicManagerContextProvider } from '@/context/music'
import State from '@/app/context/state/State'
import Modals from '@/fragments/Modals'
import { MockedProvider } from '@apollo/react-testing'

interface MountProps {
  children: React.ReactNode
  state: any
  dispatch: any
  mocks: any[]
}

const Mount: React.FC<MountProps> = ({ children, state, dispatch, mocks }) => {
  return (
    <ApolloProvider client={client}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <State.Provider value={{ state, dispatch }}>
              <ModalProvider>
                <ErrorhandleProvider>
                  <StartGameProvider>
                    <MusicManagerContextProvider>
                      <Modals>{children}</Modals>
                    </MusicManagerContextProvider>
                  </StartGameProvider>
                </ErrorhandleProvider>
              </ModalProvider>
            </State.Provider>
          </ThemeProvider>
        </BrowserRouter>
      </MockedProvider>
    </ApolloProvider>
  )
}

export default Mount
