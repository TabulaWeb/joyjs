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
`

const Content = styled.div`
	position: relative;
	margin-bottom: 293px;
`

const Title = styled.h1`
	font-family: 'YapariTrial-SemiBold';
	font-size: 15.7vw;

	@media screen and (min-width: 1400px) {
		font-size: 223px;
	}
`

const IconLoft = styled.img`
	position: absolute;
	top: 63%;
	left: 0;
`

const IconSmile = styled.img`
	position: absolute;
	left: 18.5%;
	top: -5px;
`

const IconCode = styled.img`
	width: 120px;
	position: absolute;
	transform: rotate(30deg);
	left: 41%;
	top: 28%;
`

const IconMascot = styled.img`
position: absolute;
	right: 20%;
	top: -30%;
`

const IconCamera = styled.img`
	position: absolute;
	transform: rotate(-30deg);
	right: -1px;
	top: 48%;
`