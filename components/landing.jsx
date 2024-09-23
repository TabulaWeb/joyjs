'use client'
import React, { Suspense, lazy } from 'react'
import Loading from './landing/loading';

const Marquee = lazy(() => import('./marquee'));
const Header = lazy(() => import('./header'))
const Devider = lazy(() => import('./devider'))
const FirstSection = lazy(() => import('./landing/first-section'))
const Idea = lazy(() => import('./landing/idea'))
const IdeaDescription = lazy(() => import('./landing/idea-description'))
const Program = lazy(() => import('./landing/program'))
const Info = lazy(() => import('./landing/info'))
const InfoContact = lazy(() => import('./landing/info-contact'))
const Location = lazy(() => import('./landing/location'))
const Organiser = lazy(() => import('./landing/organiser'))
const Comics = lazy(() => import('./landing/comics'))
const Community = lazy(() => import('./landing/community'))
const Partners = lazy(() => import('./landing/partners'))
const Questions = lazy(() => import('./landing/questions'))
const Footer = lazy(() => import('./landing/footer'))

export default function Landing () {
	return (
    <Suspense fallback={<Loading/>}>
      <div>
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
      </div>
    </Suspense>
	)
}