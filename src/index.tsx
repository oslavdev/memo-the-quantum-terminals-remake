import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { ApolloProvider } from '@apollo/client'
import App from '@/app'
import { BrowserRouter } from 'react-router-dom'
import { client } from '@/app/config/apollo'

const rootNode = document.getElementById('root')
const component = (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)


ReactDOM.render(component, rootNode);
rootNode.dispatchEvent(new Event('rendered'))
