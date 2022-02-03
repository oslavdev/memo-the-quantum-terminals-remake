import React, { Suspense, useContext, useReducer } from 'react'
import {Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import PrivateRoute from '@/HOC/Routes/PrivateRoute'
import PublicRoute from '@/HOC/Routes/PublicRoute'
import * as path from '@/app/config/paths'
import State from '@/app/context/state/State'
import reducer from '@/app/reducers/root'
import { theme } from '@/UI/config/theme'

/* Games */
import Memo from '@/pages/Game/Memo' // memorize paths

/* Pages */
import Login from '@/pages/Login'
import Menu from '@/pages/Menu'
import Register from '@/pages/Register'
import Lobby from '@/pages/Lobby'
import NotFoundPage from '@/pages/NotFoundPage'
import ActivationSent from '@/pages/ActivationSent'
import Activation from '@/pages/Activate'

/* Context */
import { ModalProvider } from '@/context/confirmModal'
import { ErrorhandleProvider } from '@/context/error'
import { StartGameProvider } from '@/context/startGame'
import { MusicManagerContextProvider } from '@/context/music'
import Loading from '@/UI/Loading/Loading'
import LayoutMenu from '@/components/Layout/Layout_menu'
import { Box } from '@/UI/Boxes/Box'
/* Fragments */
import Modals from '@/fragments/Modals'

/** Pages */
import Terminals from '@/pages/Terminals'
import Wrong from './components/Wrong'

function LoadingFallback(){
  return(
    <LayoutMenu logo={false}>
    <Box position="absolute" top="50%" center>
      <Loading />
    </Box>
  </LayoutMenu>
  )
}

const App = () => {
  const initialState = useContext(State)
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeProvider theme={theme}>
    <Suspense fallback={<LoadingFallback/>}>
        <State.Provider value={{ state, dispatch }}>
          <ModalProvider>
            <ErrorhandleProvider>
              <StartGameProvider>
                <MusicManagerContextProvider>
                <Modals>
                  <Routes>

                  <Route path={path.pathLobby()} element={<PrivateRoute/>}>
                        <Route element={<Lobby/>}/>
                  </Route>

                  <Route path={path.pathTerminals()} element={<PrivateRoute/>}>
                        <Route element={<Terminals/>}/>
                  </Route>

                  <Route path={path.pathTerminal('memo')} element={<PrivateRoute/>}>
                        <Route element={<Memo/>}/>
                  </Route>

                  <Route path={path.pathRegister()} element={<PublicRoute/>}>
                        <Route element={<Register/>}/>
                  </Route>

                  <Route path={path.pathLogin()} element={<PublicRoute/>}>
                        <Route element={<Login/>}/>
                  </Route>

                  <Route path={path.pathHome()} element={<PublicRoute/>}>
                        <Route element={<Menu/>}/>
                  </Route>

                  <Route path={path.pathActivationSent()} element={<PublicRoute/>}>
                        <Route element={<ActivationSent/>}/>
                  </Route>

                  <Route path={path.pathActivation()} element={<PublicRoute/>}>
                        <Route element={<Activation/>}/>
                  </Route>

                     <Route path={'/unknown-error'} element={<Wrong/>}/>
                    <Route path={'/not-found'} element={<NotFoundPage/>}/>
                    <Route path="*" element={<NotFoundPage/>} />
                  </Routes>
                </Modals>
                </MusicManagerContextProvider>
              </StartGameProvider>
            </ErrorhandleProvider>
          </ModalProvider>
        </State.Provider>
      </Suspense>
     </ThemeProvider>
  )
}

export default App
