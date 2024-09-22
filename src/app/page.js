'use client'
import { Suspense } from 'react';
import dynamic from 'next/dynamic'
import Loading from './loading';

const Marquee = dynamic(() => import('./components/marquee'), {
  loading: () => <Loading/>,
});
const Header = dynamic(() => import('./components/header'), {
  loading: () => <Loading/>,
});
const Devider = dynamic(() => import('./components/devider'), {
  loading: () => <Loading/>,
});
const FirsSection = dynamic(() => import('./components/landing/home'), {
  loading: () => <Loading/>,
});
const Idea = dynamic(() => import('./components/landing/idea'), {
  loading: () => <Loading/>,
});
const IdeaDescription = dynamic(() => import('./components/landing/idea-description'), {
  loading: () => <Loading/>,
});
const Program = dynamic(() => import('./components/landing/program'), {
  loading: () => <Loading/>,
});
const Info = dynamic(() => import('./components/landing/info'), {
  loading: () => <Loading/>,
});
const InfoContact = dynamic(() => import('./components/landing/info-contact'), {
  loading: () => <Loading/>,
});
const Location = dynamic(() => import('./components/landing/location'), {
  loading: () => <Loading/>,
});
const Organiser = dynamic(() => import('./components/landing/organiser'), {
  loading: () => <Loading/>,
});
const Comics = dynamic(() => import('./components/landing/comics'), {
  loading: () => <Loading/>,
});
const Community = dynamic(() => import('./components/landing/community'), {
  loading: () => <Loading/>,
});
const Partners = dynamic(() => import('./components/landing/partners'), {
  loading: () => <Loading/>,
});
const Questions = dynamic(() => import('./components/landing/questions'), {
  loading: () => <Loading/>,
});
const Footer = dynamic(() => import('./components/landing/footer'), {
  loading: () => <Loading/>,
});

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
