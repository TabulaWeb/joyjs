'use client'
import dynamic from 'next/dynamic'
import React, { useEffect, useState, Suspense } from 'react'
import Loading from './loading'

const Marquee = dynamic(() => import('./components/marquee'), { suspense: true });
const Header = dynamic(() => import('./components/header'), { suspense: true });
const Devider = dynamic(() => import('./components/devider'), { suspense: true });
const FirstSection = dynamic(() => import('./components/landing/first-section'), { suspense: true });
const Idea = dynamic(() => import('./components/landing/idea'), { suspense: true });
const IdeaDescription = dynamic(() => import('./components/landing/idea-description'), { suspense: true });
const Program = dynamic(() => import('./components/landing/program'), { suspense: true });
const Info = dynamic(() => import('./components/landing/info'), { suspense: true });
const InfoContact = dynamic(() => import('./components/landing/info-contact'), { suspense: true });
const Location = dynamic(() => import('./components/landing/location'), { suspense: true });
const Organiser = dynamic(() => import('./components/landing/organiser'), { suspense: true });
const Comics = dynamic(() => import('./components/landing/comics'), { suspense: true });
const Community = dynamic(() => import('./components/landing/community'), { suspense: true });
const Partners = dynamic(() => import('./components/landing/partners'), { suspense: true });
const Questions = dynamic(() => import('./components/landing/questions'), { suspense: true });
const Footer = dynamic(() => import('./components/landing/footer'), { suspense: true });


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const eventLoaded = () => setIsLoading(false)
    window.addEventListener('load', eventLoaded)

    return () => window.removeEventListener('load', eventLoaded)
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
