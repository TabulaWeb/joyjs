'use client'
import React, { useState, useEffect, Suspense, lazy } from 'react'
import Loading from './landing/loading';

// import dynamic from 'next/dynamic';
// const Marquee = dynamic(() => import('./marquee'), { srr: false });
// const Header = dynamic(() => import('./header'), { srr: false });
// const Devider = dynamic(() => import('./devider'), { srr: false });
// const FirstSection = dynamic(() => import('./landing/first-section'), { srr: false });
// const Idea = dynamic(() => import('./landing/idea'), { srr: false });
// const IdeaDescription = dynamic(() => import('./landing/idea-description'), { srr: false });
// const Program = dynamic(() => import('./landing/program'), { srr: false });
// const Info = dynamic(() => import('./landing/info'), { srr: false });
// const InfoContact = dynamic(() => import('./landing/info-contact'), { srr: false });
// const Location = dynamic(() => import('./landing/location'), { srr: false });
// const Organiser = dynamic(() => import('./landing/organiser'), { srr: false });
// const Comics = dynamic(() => import('./landing/comics'), { srr: false });
// const Community = dynamic(() => import('./landing/community'), { srr: false });
// const Partners = dynamic(() => import('./landing/partners'), { srr: false });
// const Questions = dynamic(() => import('./landing/questions'), { srr: false });
// const Footer = dynamic(() => import('./landing/footer'), { srr: false });
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
  const [isClient, setIsClient] = useState(true)
 
  useEffect(() => {
    setIsClient(false)
  }, [])

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