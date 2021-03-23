import React from 'react'
import Cel from './Elements/Cel'
import Cenovnik from './Elements/Cenovnik'
import Chat from './Elements/Chat'
import Futer from './Elements/Futer'
import Kontakt from './Elements/Kontakt'
import Navigation from './Elements/Navigation'
import TypographyText from './Elements/TypographyText'

function App() {


  return (
    <div className='container-fluid'>
      <Navigation/>
      <TypographyText/>
      <Cel/>
      <Cenovnik id='mission'/>
      <Kontakt/>
      <Futer/>
      <Chat/>
    </div>
  )
}

export default App
