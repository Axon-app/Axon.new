import React from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App