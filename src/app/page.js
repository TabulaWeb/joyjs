'use client'
import { Suspense } from 'react';
import dynamic from 'next/dynamic'
import Loading from './loading';

const Marquee = dynamic(() => import('./components/marquee'));
const Header = dynamic(() => import('./components/header'));
const Devider = dynamic(() => import('./components/devider'));
const FirsSection = dynamic(() => import('./components/landing/home'));
const Idea = dynamic(() => import('./components/landing/idea'));
const IdeaDescription = dynamic(() => import('./components/landing/idea-description'));
const Program = dynamic(() => import('./components/landing/program'));
const Info = dynamic(() => import('./components/landing/info'));
const InfoContact = dynamic(() => import('./components/landing/info-contact'));
const Location = dynamic(() => import('./components/landing/location'));
const Organiser = dynamic(() => import('./components/landing/organiser'));
const Comics = dynamic(() => import('./components/landing/comics'));
const Community = dynamic(() => import('./components/landing/community'));
const Partners = dynamic(() => import('./components/landing/partners'));
const Questions = dynamic(() => import('./components/landing/questions'));
const Footer = dynamic(() => import('./components/landing/footer'));

export default function Home() {
  return (
    <Suspense fallback={<Loading/>}>
      <Marquee />
      <Header />
      <main>
        <FirsSection/>
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
