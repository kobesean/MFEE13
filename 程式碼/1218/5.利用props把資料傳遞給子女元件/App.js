import React from 'react'
import AppFunction from './components/AppFunction'
import AppClass from './components/AppClass'

function App() {
  return (
    <>
      <AppFunction initValue={99} />
      <AppClass initValue={88} />
    </>
  )
}

export default App
