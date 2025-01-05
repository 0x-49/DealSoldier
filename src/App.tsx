import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
      <Router>
        <HomePage />
      </Router>
    </ThemeProvider>
  )
}

export default App
