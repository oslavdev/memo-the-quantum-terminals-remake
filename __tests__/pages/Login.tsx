import React from 'react'
import 'cross-fetch/polyfill'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/app/config/apollo'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/UI/config/theme'
import Login from "@/pages/Login"
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import { ModalProvider } from '@/context/confirmModal'
import { ErrorhandleProvider } from '@/context/error'
import { StartGameProvider } from '@/context/startGame'
import { MusicManagerContextProvider } from '@/context/music'
import State from '@/app/context/state/State'
import Modals from '@/fragments/Modals'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/react-testing';
import { loginMutation } from "@/app/graphql/mutations/login";

describe("Login page", () =>{

    const state = {};
    let dispatch = jest.fn();

    it("Integration test", async ()=>{

        const mount = (

            <ApolloProvider client={client}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                    <State.Provider value={{ state, dispatch }}>
                    <ModalProvider>
                        <ErrorhandleProvider>
                        <StartGameProvider>
                            <MusicManagerContextProvider>
                            <Modals>
                             <Login/>
                        </Modals>
                        </MusicManagerContextProvider>
                    </StartGameProvider>
                    </ErrorhandleProvider>
                </ModalProvider>
                </State.Provider>
                    </ThemeProvider>
                </BrowserRouter>
            </ApolloProvider>
  
        )


        render(mount)

        expect(screen).toMatchSnapshot()

        expect(screen.getByText("Login")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("E-mail")).toHaveValue("")
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Password")).toHaveValue("")

        userEvent.click(screen.getByText('Login'))

        expect(screen.getByText("Submitting")).toBeInTheDocument()
        expect(screen).toMatchSnapshot()

 
        
    })

});


