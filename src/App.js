import * as React from 'react'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import Main from './hoc/Main'
import Content from './containers/Content'
import Navigation from './containers/Navigation'

function App() {
  library.add(fab)

  return (
    <Main>
      <Navigation />
      <Content />
    </Main>
  )
}

export default App
