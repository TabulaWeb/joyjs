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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timerId

    const removeLoader = () => {
      timerId = setTimeout(() => {
        setLoading(false)
      }, 1000)
    }

    window.addEventListener("load", removeLoader);

    return () => {
      window.removeEventListener("load", removeLoader)
      clearInterval(timerId)
    }
  }, []);

  return (
    <>
      <Loader active={loading} />
      <Marquee />
      <Header />
      <main>
        <Home loading={loading}/>
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
