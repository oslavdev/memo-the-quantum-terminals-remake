import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import Menu from '@/pages/Menu';

import { ThemeProvider } from 'styled-components'
import { theme } from '@/UI/config/theme'

/* Context */
import { ModalProvider } from '@/context/confirmModal'
import { ErrorhandleProvider } from '@/context/error'
import { StartGameProvider } from '@/context/startGame'
import { MusicManagerContextProvider } from '@/context/music'
import Modals from '@/fragments/Modals'

const mocks = []; 

export function CreateRenderWithProviders  ({children}){
    return(
        <ModalProvider>
        <ErrorhandleProvider>
          <StartGameProvider>
            <MusicManagerContextProvider>
            <Modals> 
              {children}
            </Modals>
            </MusicManagerContextProvider>
          </StartGameProvider>
        </ErrorhandleProvider>
      </ModalProvider>
    )
}

it('renders without error', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
        <CreateRenderWithProviders>
            <Menu/>
        </CreateRenderWithProviders>
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children).toContain('Login');
});