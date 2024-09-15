import { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import ImageLoft from '../../assets/image/loft.png'
import ImageSmile from '../../assets/image/smile.png'
import ImageCode from '../../assets/image/code.png'
import ImageMascot from '../../assets/image/mascot.png'
import ImageCamera from '../../assets/image/camera.png'

export const Home = ({ loading }) => {
	const [timer, setTimer] = useState(0)

	useEffect(() => {
		let interval
		if(timer < 2) {
			interval = setTimeout(() => {
				setTimer(prev => prev + 1)
			}, 1000)
		}

		return () => clearInterval(interval)
	}, [timer])

	return <Main className='container'>
		<Description>
			Велком на первый в Пскове Frontend Meetup!
			4 доклада от крутых спикеров, нетворкинг<br/>
			<span>и пиво</span>
		</Description>

		<Content>
			<IconLoft
				className={timer >= 2 && 'active'}
				src={ImageLoft}
				alt='loft logo'
			/>
			<IconSmile
				className={timer >= 1 && 'active'}
				src={ImageSmile}
				alt='smile'
			/>
			<IconCode 
				className={timer >= 2 && 'active'}
				src={ImageCode}
				alt='code'
			/>
			<IconMascot
				className={timer >= 1 && 'active'}
				src={ImageMascot}
				alt='mascot'
			/>
			<IconCamera 
				className={timer >= 2 && 'active'}
				src={ImageCamera}
				alt='camera'
			/>
			<Title><span>Joy</span> <span>.JS</span></Title>
		</Content>
	</Main>
}

const blob = keyframes`
	0% {
		opacity: 0;
		transform: scale3d(.3, .3, .3);
	}

	50% {
		opacity: 1;
	}
`

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
	width: 140px;
	top: 63%;
	left: 0;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${blob} 500ms ease-in-out;
		opacity: 1;
	}

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(90px, 9dvw, 140px);
	}

	@media screen and (max-width: 1024px) {
		top: 25%;
		rotate: -30deg;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(90px, 13dvw, 140px);
	}

	@media screen and (max-width: 600px) {
		top: -30%;
		left: inherit;
		right: -5%;
		rotate: 10deg;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(90px, 24dvw, 140px);
	}
`

const IconSmile = styled.img`
	position: absolute;
	width: 140px;
	left: 18.5%;
	top: -5px;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${blob} 500ms ease-in-out;
		opacity: 1;
	}
	

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(90px, 9dvw, 140px);
	}

	@media screen and (max-width: 1024px) {
		top: 5%;
		left: 43%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(90px, 13dvw, 140px);
	}

	@media screen and (max-width: 600px) {
		top: -27%;
		left: 0;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(90px, 24dvw, 140px);
	}
`

const IconCode = styled.img`
	width: 120px;
	position: absolute;
	rotate: 30deg;
	left: 41%;
	top: 28%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${blob} 500ms ease-in-out;
		opacity: 1;
	}

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(90px, 9dvw, 140px);
	}

	@media screen and (max-width: 1024px) {
		top: 15%;
		left: inherit;
		right: 10%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(90px, 13dvw, 140px);
	}

	@media screen and (max-width: 600px) {
		top: inherit;
		bottom: 5%;
		right: -5%;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(90px, 24dvw, 140px);
	}
`

const IconMascot = styled.img`
	position: absolute;
	width: 275px;
	right: 20%;
	top: -30%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${blob} 500ms ease-in-out;
		opacity: 1;
	}

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(200px, 20dvw, 275px);
	}

	@media screen and (max-width: 1024px) {
		top: inherit;
		bottom: 38%;
		left: 15%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(200px, 28dvw, 275px);
	}

	@media screen and (max-width: 600px) {
		left: 0;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(200px, 46dvw, 275px);
	}
`

const IconCamera = styled.img`
	position: absolute;
	width: 140px;
	rotate: -30deg;
	right: -1px;
	top: 48%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${blob} 500ms ease-in-out;
		opacity: 1;
	}
	

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(90px, 9dvw, 140px);
	}

	@media screen and (max-width: 1024px) {
		top: inherit;
		bottom: 5%;
		right: 20%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(90px, 13dvw, 140px);
	}

	@media screen and (max-width: 600px) {
		bottom: -20%;
		right: 0;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(90px, 24dvw, 140px);
	}
`