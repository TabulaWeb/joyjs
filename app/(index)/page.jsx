'use client'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loading from './loading'

const Marquee = dynamic(() => import('../../components/marquee'));
const Header = dynamic(() => import('../../components/header'));
const Devider = dynamic(() => import('../../components/devider'));
const FirstSection = dynamic(() => import('../../components/landing/first-section'));
const Idea = dynamic(() => import('../../components/landing/idea'));
const IdeaDescription = dynamic(() => import('../../components/landing/idea-description'));
const Program = dynamic(() => import('../../components/landing/program'));
const Info = dynamic(() => import('../../components/landing/info'));
const InfoContact = dynamic(() => import('../../components/landing/info-contact'));
const Location = dynamic(() => import('../../components/landing/location'));
const Organiser = dynamic(() => import('../../components/landing/organiser'));
const Comics = dynamic(() => import('../../components/landing/comics'));
const Community = dynamic(() => import('../../components/landing/community'));
const Partners = dynamic(() => import('../../components/landing/partners'));
const Questions = dynamic(() => import('../../components/landing/questions'));
const Footer = dynamic(() => import('../../components/landing/footer'));

// import Marquee from './components/marquee'
// import Header from './components/header'
// import Devider from './components/devider'
// import FirstSection from './components/landing/first-section'
// import Idea from './components/landing/idea'
// import IdeaDescription from './components/landing/idea-description'
// import Program from './components/landing/program'
// import Info from './components/landing/info'
// import InfoContact from './components/landing/info-contact'
// import Location from './components/landing/location'
// import Organiser from './components/landing/organiser'
// import Comics from './components/landing/comics'
// import Community from './components/landing/community'
// import Partners from './components/landing/partners'
// import Questions from './components/landing/questions'
// import Footer from './components/landing/footer'

export default function Home() {
  return (
    <Suspense
      fallback={<Loading />}
    >
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
    </Suspense>
  )
}
