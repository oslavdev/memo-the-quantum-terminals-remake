import * as React from "react";
import * as ReactRouter from "react-router-dom";
import * as path from "@/app/config/paths";

import { ErrorhandleProvider } from "@/context/error";
import { LoadingFallback } from "@/components/loading-fallback";
import Memo from "@/pages/memo";
import Menu from "@/pages/menu";
import { ModalProvider } from "@/context/confirm-modal";
import Modals from "@/components/modals-context";
import { MusicManagerContextProvider } from "@/context/music";
import NotFoundPage from "@/pages/not-found";
import { StartGameProvider } from "@/context/start-game";
import { ThemeProvider } from "styled-components";
import Wrong from "@/components/something-wrong";
import { theme } from "@/components/UI/config/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingFallback />}>
        <ModalProvider>
          <ErrorhandleProvider>
            <StartGameProvider>
              <MusicManagerContextProvider>
                <Modals>
                  <ReactRouter.Routes>
                    <ReactRouter.Route
                      path={path.pathMemo()}
                      element={<Memo />}
                    />

                    <ReactRouter.Route
                      path={path.pathHome()}
                      element={<Menu />}
                    />

                    <ReactRouter.Route
                      path={"/unknown-error"}
                      element={<Wrong />}
                    />
                    <ReactRouter.Route
                      path={"/not-found"}
                      element={<NotFoundPage />}
                    />
                    <ReactRouter.Route path="*" element={<NotFoundPage />} />
                  </ReactRouter.Routes>
                </Modals>
              </MusicManagerContextProvider>
            </StartGameProvider>
          </ErrorhandleProvider>
        </ModalProvider>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default App;
