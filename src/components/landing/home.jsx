import styled from '@emotion/styled'
import ImageLoft from '../../assets/image/loft.png'
import ImageSmile from '../../assets/image/smile.png'
import ImageCode from '../../assets/image/code.png'
import ImageMascot from '../../assets/image/mascot.png'
import ImageCamera from '../../assets/image/camera.png'

export const Home = () => {
	return <Main className='container'>
		<Description>
			Велком на первый в Пскове Frontend Meetup!
			4 доклада от крутых спикеров, нетворкинг<br/>
			<span>и пиво</span>
		</Description>

		<Content>
			<IconLoft
				src={ImageLoft}
				alt='loft logo'
			/>
			<IconSmile 
				src={ImageSmile}
				alt='smile'
			/>
			<IconCode 
				src={ImageCode}
				alt='code'
			/>
			<IconMascot 
				src={ImageMascot}
				alt='mascot'
			/>
			<IconCamera 
				src={ImageCamera}
				alt='camera'
			/>
			<Title><span>Joy</span> <span>.JS</span></Title>
		</Content>
	</Main>
}

const Main = styled.section``

const Description = styled.h2`
	font-family: 'Unbounded-Light';
	font-weight: 400;
	max-width: 500px;
	line-height: 25.2px;
	margin-bottom: 75px;
	font-size: 18px;

	& span {
		opacity: 0.5;
	}

	@media screen and (max-width: 1024px) {
		max-width: 400px;
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		margin-bottom: 117px;
	}
`

const Content = styled.div`
	position: relative;
	margin-bottom: 290px;

	@media screen and (max-width: 600px) {
		margin-bottom: 140px;
	}
`

const Title = styled.h1`
	font-family: 'YapariTrial-SemiBold';
	font-size: 15.7vw;

	@media screen and (min-width: 1400px) {
		font-size: 223px;
	}

	@media screen and (max-width: 1024px) {
		display: block;
		margin: 0 auto;
		width: min-content;
		font-size: 27vw;
		text-align: left;
	}

	@media screen and (max-width: 600px) {
		width: auto;
		font-size: 30vw;
	}
`

const IconLoft = styled.img`
	position: absolute;
	top: 63%;
	left: 0;

	@media screen and (max-width: 1024px) {
		top: 25%;
		transform: rotate(-30deg);
	}

	@media screen and (max-width: 600px) {
		top: -30%;
		left: inherit;
		right: -5%;
		transform: rotate(10deg);
	}
`

const IconSmile = styled.img`
	position: absolute;
	left: 18.5%;
	top: -5px;

	@media screen and (max-width: 1024px) {
		top: 5%;
		left: 43%;
	}

	@media screen and (max-width: 600px) {
		top: -27%;
		left: 0;
	}
`

const IconCode = styled.img`
	width: 120px;
	position: absolute;
	transform: rotate(30deg);
	left: 41%;
	top: 28%;

	@media screen and (max-width: 1024px) {
		top: 15%;
		left: inherit;
		right: 10%;
	}

	@media screen and (max-width: 600px) {
		top: inherit;
		bottom: 5%;
		right: -5%;
	}
`

const IconMascot = styled.img`
	position: absolute;
	right: 20%;
	top: -30%;

	@media screen and (max-width: 1024px) {
		top: inherit;
		bottom: 38%;
		left: 15%;
	}

	@media screen and (max-width: 600px) {
		left: 0;
	}
`

const IconCamera = styled.img`
	position: absolute;
	transform: rotate(-30deg);
	right: -1px;
	top: 48%;

	@media screen and (max-width: 1024px) {
		top: inherit;
		bottom: 5%;
		right: 20%;
	}

	@media screen and (max-width: 600px) {
		bottom: -20%;
		right: 0;
	}
`