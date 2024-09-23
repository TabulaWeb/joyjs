'use client'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react'
import Loading from './landing/loading';

const Marquee = dynamic(() => import('./marquee'), { srr: false });
const Header = dynamic(() => import('./header'), { srr: false });
const Devider = dynamic(() => import('./devider'), { srr: false });
const FirstSection = dynamic(() => import('./landing/first-section'), { srr: false });
const Idea = dynamic(() => import('./landing/idea'), { srr: false });
const IdeaDescription = dynamic(() => import('./landing/idea-description'), { srr: false });
const Program = dynamic(() => import('./landing/program'), { srr: false });
const Info = dynamic(() => import('./landing/info'), { srr: false });
const InfoContact = dynamic(() => import('./landing/info-contact'), { srr: false });
const Location = dynamic(() => import('./landing/location'), { srr: false });
const Organiser = dynamic(() => import('./landing/organiser'), { srr: false });
const Comics = dynamic(() => import('./landing/comics'), { srr: false });
const Community = dynamic(() => import('./landing/community'), { srr: false });
const Partners = dynamic(() => import('./landing/partners'), { srr: false });
const Questions = dynamic(() => import('./landing/questions'), { srr: false });
const Footer = dynamic(() => import('./landing/footer'), { srr: false });



export default function Landing () {
  const [isClient, setIsClient] = useState(true)
 
  useEffect(() => {
    setIsClient(false)
  }, [])

	return (
    isClient
      ? <Loading />
      : <div>
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
	)
}