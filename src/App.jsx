import { useState, useEffect } from 'react'

import { Marquee } from './components/marquee'
import { Header } from './components/header'
import { Devider } from './components/devider'

import { Loader } from './components/landing/loader'
import { Home } from './components/landing/home'
import { Idea } from './components/landing/idea'
import { IdeaDescription } from './components/landing/idea-description'
import { KeyWords } from './components/landing/key-words'
import { Program } from './components/landing/program/index'
import { Info } from './components/landing/info'
import { InfoContact } from './components/landing/info-contact'
import { Location } from './components/landing/location'
import { Organiser } from './components/landing/organiser'
import { Comics } from './components/landing/comics'
import { Community } from './components/landing/community'
import { Partners } from './components/landing/partners'
import { Questions } from './components/landing/questions'
import { Footer } from './components/landing/footer'

function App() {

  return (
    <>
      <Marquee />
      <Header />
      <main>
        <Home/>
        <Devider />
        <Idea />
        <IdeaDescription />
        <Program />
        <Info />
        <InfoContact />
        <Location/>
        <Organiser />
        <Comics />
        <Community />
        <Partners />
        <Questions />
      </main>
      {/* <KeyWords /> */}
      <Footer />
    </>
  )
}

export default App
