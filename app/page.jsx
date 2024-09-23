'use client'
import React, { useEffect, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loading from './components/loading'

const Marquee = dynamic(() => import('./components/marquee'), { 
  suspense: true,
  loading: () => <Loading />
});
const Header = dynamic(() => import('./components/header'), { 
  suspense: true,
  loading: () => <Loading />
});
const Devider = dynamic(() => import('./components/devider'), { 
  suspense: true,
  loading: () => <Loading />
});
const FirstSection = dynamic(() => import('./components/landing/first-section'), { 
  suspense: true,
  loading: () => <Loading />
});
const Idea = dynamic(() => import('./components/landing/idea'), { 
  suspense: true,
  loading: () => <Loading />
});
const IdeaDescription = dynamic(() => import('./components/landing/idea-description'), { 
  suspense: true,
  loading: () => <Loading />
});
const Program = dynamic(() => import('./components/landing/program'), { 
  suspense: true,
  loading: () => <Loading />
});
const Info = dynamic(() => import('./components/landing/info'), { 
  suspense: true,
  loading: () => <Loading />
});
const InfoContact = dynamic(() => import('./components/landing/info-contact'), { 
  suspense: true,
  loading: () => <Loading />
});
const Location = dynamic(() => import('./components/landing/location'), {     
  suspense: true,
  loading: () => <Loading />
});
const Organiser = dynamic(() => import('./components/landing/organiser'), { 
  suspense: true,
  loading: () => <Loading />
});
const Comics = dynamic(() => import('./components/landing/comics'), { 
  suspense: true,
  loading: () => <Loading />
});
const Community = dynamic(() => import('./components/landing/community'), { 
  suspense: true,
  loading: () => <Loading />
});
const Partners = dynamic(() => import('./components/landing/partners'), { 
  suspense: true,
  loading: () => <Loading />
});
const Questions = dynamic(() => import('./components/landing/questions'), { 
  suspense: true,
  loading: () => <Loading />
});
const Footer = dynamic(() => import('./components/landing/footer'), { 
  suspense: true,
  loading: () => <Loading />
});

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
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000)

  //   return () => clearInterval(timeout)
  // }, [])

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
