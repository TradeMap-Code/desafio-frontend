import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'

import SwitchTheme from './components/SwitchTheme'

import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './hooks/usePersistedState'

import GlobalStyle from './styles/global'

function App(): ReactElement {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <SwitchTheme toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
