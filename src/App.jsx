import { Router } from './routes/router'
import { GlobalStyle } from './styles/GlobalStyle'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App