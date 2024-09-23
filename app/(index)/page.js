import FirstSection from '@/components/landing/first-section'
import Devider from '@/components/devider'
import Idea from '@/components/landing/idea'
import IdeaDescription from '@/components/landing/idea-description'
import Program from '@/components/landing/program'
import Info from '@/components/landing/info'
import InfoContact from '@/components/landing/info-contact'
import Location from '@/components/landing/location'
import Organiser from '@/components/landing/organiser'
import Comics from '@/components/landing/comics'
import Community from '@/components/landing/community'
import Partners from '@/components/landing/partners'
import Questions from '@/components/landing/questions'

export default function Index() {
	return (
		<>
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
		</>
	)
}