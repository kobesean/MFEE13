import React, { useState } from 'react'
import ButtonOne from './components/ButtonOne'
import ButtonTwo from './components/ButtonTwo'

function App() {
  const [appData, setAppData] = useState('App')

  const [childData, setChildData] = useState('')

  return (
    <>
      <h1>App: {childData}</h1>
      <ButtonOne textData={appData} />

      <ButtonTwo setChildData={setChildData} />
    </>
  )
}

export default App
