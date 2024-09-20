import { Suspense, lazy } from 'react';
import { Loading } from './loading';

const Marquee = lazy(() => import('./components/marquee'));
const Header = lazy(() => import('./components/header'));
const Devider = lazy(() => import('./components/devider'));
const FirsSection = lazy(() => import('./components/landing/home'));
const Idea = lazy(() => import('./components/landing/idea'));
const IdeaDescription = lazy(() => import('./components/landing/idea-description'));
const Program = lazy(() => import('./components/landing/program'));
const Info = lazy(() => import('./components/landing/info'));
const InfoContact = lazy(() => import('./components/landing/info-contact'));
const Location = lazy(() => import('./components/landing/location'));
const Organiser = lazy(() => import('./components/landing/organiser'));
const Comics = lazy(() => import('./components/landing/comics'));
const Community = lazy(() => import('./components/landing/community'));
const Partners = lazy(() => import('./components/landing/partners'));
const Questions = lazy(() => import('./components/landing/questions'));
const Footer = lazy(() => import('./components/landing/footer'));
export default function Home() {
  return (
    <>
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
    </>
  )
}
