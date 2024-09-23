import Marquee from '@/components/marquee'
import Header from '@/components/header'
import Footer from '@/components/landing/footer'

export default function IndexLayout({ children }) {
	return (
		<>
			<Marquee />
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}