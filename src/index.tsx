import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from '@/app'
import { BrowserRouter } from 'react-router-dom'

const rootNode = document.getElementById('root')
const component = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
)


ReactDOM.render(component, rootNode);
rootNode.dispatchEvent(new Event('rendered'))
