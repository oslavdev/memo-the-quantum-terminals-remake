import * as React from 'react'
import * as path from '@/app/config/paths'

import {Route, Routes} from 'react-router-dom'

import Activation from '@/pages/activate'
import ActivationSent from '@/pages/activation-sent'
import { ErrorhandleProvider } from '@/context/error'
import { LoadingFallback } from '@/components/loading-fallback'
import Lobby from '@/pages/lobby'
import Login from '@/pages/login'
import Memo from '@/pages/memo'
import Menu from '@/pages/menu'
import { ModalProvider } from '@/context/confirm-modal'
import Modals from '@/components/modals-context'
import { MusicManagerContextProvider } from '@/context/music'
import NotFoundPage from '@/pages/not-found'
import PrivateRoute from '@/components/private-route'
import PublicRoute from '@/components/public-route'
import Register from '@/pages/register'
import { StartGameProvider } from '@/context/start-game'
import {ThemeProvider} from 'styled-components'
import Wrong from '@/components/something-wrong'
import { theme } from '@/components/UI/config/theme'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <React.Suspense fallback={<LoadingFallback/>}>
          <ModalProvider>
            <ErrorhandleProvider>
              <StartGameProvider>
                <MusicManagerContextProvider>
                <Modals>
                  <Routes>
                    <Route path={path.pathLobby()} element={<PrivateRoute/>}>
                          <Route path={path.pathLobby()} element={<Lobby/>}/>
                    </Route>
                    <Route path={path.pathMemo()} element={<PrivateRoute/>}>
                          <Route path={path.pathMemo()} element={<Memo/>}/>
                    </Route>
                    <Route path={path.pathRegister()} element={<PublicRoute/>}>
                          <Route path={path.pathRegister()} element={<Register/>}/>
                    </Route>
                    <Route path={path.pathLogin()} element={<PublicRoute/>}>
                          <Route path={path.pathLogin()} element={<Login/>}/>
                    </Route>
                    <Route path={path.pathHome()} element={<PublicRoute/>}>
                          <Route path={path.pathHome()} element={<Menu/>}/>
                    </Route>
                    <Route path={path.pathActivationSent()} element={<PublicRoute/>}>
                          <Route path={path.pathActivationSent()} element={<ActivationSent/>}/>
                    </Route>
                    <Route path={path.pathActivation()} element={<PublicRoute/>}>
                          <Route path={path.pathActivation()} element={<Activation/>}/>
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
      </React.Suspense>
     </ThemeProvider>
  )
}

export default App
