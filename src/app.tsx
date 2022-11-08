import * as React from 'react'
import * as ReactRouter from 'react-router-dom'
import * as path from '@/app/config/paths'

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
                  <ReactRouter.Routes>
                    <ReactRouter.Route path={path.pathLobby()} element={<PrivateRoute/>}>
                          <ReactRouter.Route path={path.pathLobby()} element={<Lobby/>}/>
                    </ReactRouter.Route>
                    <ReactRouter.Route path={path.pathMemo()} element={<PrivateRoute/>}>
                          <ReactRouter.Route path={path.pathMemo()} element={<Memo/>}/>
                    </ReactRouter.Route>
                    <ReactRouter.Route path={path.pathRegister()} element={<PublicRoute/>}>
                          <ReactRouter.Route path={path.pathRegister()} element={<Register/>}/>
                    </ReactRouter.Route>
                    <ReactRouter.Route path={path.pathLogin()} element={<PublicRoute/>}>
                          <ReactRouter.Route path={path.pathLogin()} element={<Login/>}/>
                    </ReactRouter.Route>
                    <ReactRouter.Route path={path.pathHome()} element={<PublicRoute/>}>
                          <ReactRouter.Route path={path.pathHome()} element={<Menu/>}/>
                    </ReactRouter.Route>
                    <ReactRouter.Route path={path.pathActivationSent()} element={<PublicRoute/>}>
                          <ReactRouter.Route path={path.pathActivationSent()} element={<ActivationSent/>}/>
                    </ReactRouter.Route>
                    <ReactRouter.Route path={path.pathActivation()} element={<PublicRoute/>}>
                          <ReactRouter.Route path={path.pathActivation()} element={<Activation/>}/>
                    </ReactRouter.Route>
                    <ReactRouter.Route path={'/unknown-error'} element={<Wrong/>}/>
                    <ReactRouter.Route path={'/not-found'} element={<NotFoundPage/>}/>
                    <ReactRouter.Route path="*" element={<NotFoundPage/>} />
                  </ReactRouter.Routes>
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
