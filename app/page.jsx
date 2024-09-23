'use client'
import React, { useEffect, useState } from 'react'
import Loading from './components/loading'

// import dynamic from 'next/dynamic'
// const Marquee = dynamic(() => import('./components/marquee'), { suspense: true });
// const Header = dynamic(() => import('./components/header'), { suspense: true });
// const Devider = dynamic(() => import('./components/devider'), { suspense: true });
// const FirstSection = dynamic(() => import('./components/landing/first-section'), { suspense: true });
// const Idea = dynamic(() => import('./components/landing/idea'), { suspense: true });
// const IdeaDescription = dynamic(() => import('./components/landing/idea-description'), { suspense: true });
// const Program = dynamic(() => import('./components/landing/program'), { suspense: true });
// const Info = dynamic(() => import('./components/landing/info'), { suspense: true });
// const InfoContact = dynamic(() => import('./components/landing/info-contact'), { suspense: true });
// const Location = dynamic(() => import('./components/landing/location'), { suspense: true });
// const Organiser = dynamic(() => import('./components/landing/organiser'), { suspense: true });
// const Comics = dynamic(() => import('./components/landing/comics'), { suspense: true });
// const Community = dynamic(() => import('./components/landing/community'), { suspense: true });
// const Partners = dynamic(() => import('./components/landing/partners'), { suspense: true });
// const Questions = dynamic(() => import('./components/landing/questions'), { suspense: true });
// const Footer = dynamic(() => import('./components/landing/footer'), { suspense: true });

import Marquee from './components/marquee'
import Header from './components/header'
import Devider from './components/devider'
import FirstSection from './components/landing/first-section'
import Idea from './components/landing/idea'
import IdeaDescription from './components/landing/idea-description'
import Program from './components/landing/program'
import Info from './components/landing/info'
import InfoContact from './components/landing/info-contact'
import Location from './components/landing/location'
import Organiser from './components/landing/organiser'
import Comics from './components/landing/comics'
import Community from './components/landing/community'
import Partners from './components/landing/partners'
import Questions from './components/landing/questions'
import Footer from './components/landing/footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearInterval(timeout)
  }, [])

  return (
    isLoading 
      ? <Loading />
      : <>
          <Marquee />
          <Header />
          <main>
            <FirstSection/>
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
          <Footer />
        </>
  )
}
