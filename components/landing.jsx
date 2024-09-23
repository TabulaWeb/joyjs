'use client'
import dynamic from 'next/dynamic';

const Marquee = dynamic(() => import('./marquee'), { srr: false });
const Header = dynamic(() => import('./header'));
const Devider = dynamic(() => import('./devider'));
const FirstSection = dynamic(() => import('./landing/first-section'));
const Idea = dynamic(() => import('./landing/idea'));
const IdeaDescription = dynamic(() => import('./landing/idea-description'));
const Program = dynamic(() => import('./landing/program'));
const Info = dynamic(() => import('./landing/info'));
const InfoContact = dynamic(() => import('./landing/info-contact'));
const Location = dynamic(() => import('./landing/location'));
const Organiser = dynamic(() => import('./landing/organiser'));
const Comics = dynamic(() => import('./landing/comics'));
const Community = dynamic(() => import('./landing/community'));
const Partners = dynamic(() => import('./landing/partners'));
const Questions = dynamic(() => import('./landing/questions'));
const Footer = dynamic(() => import('./landing/footer'));

export default async function Landing () {
	return (
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
	)
}