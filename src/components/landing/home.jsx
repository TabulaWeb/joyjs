import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import CursorHover from '../../assets/image/cursor-hover.png'
import ImageLoft from '../../assets/image/loft.png'
import ImageSmile from '../../assets/image/smile.png'
import ImageCode from '../../assets/image/code.png'
import ImageMascot from '../../assets/image/mascot.png'
import ImageCamera from '../../assets/image/camera.png'

const Home = () => {
	const [timer, setTimer] = useState(0)

	useEffect(() => {
		let interval

		if(timer < 5) {
			interval = setTimeout(() => {
				setTimer(prev => prev + 1)
			}, 100)
		}

		return () => clearInterval(interval)
	}, [timer])

	return <Main className='container'>
		<Description>
			Велком на первый в Пскове Frontend Meetup!
			4 доклада от крутых спикеров, нетворкинг<br/>
			<span className='beer-container'>и пиво <span className="beer"></span></span>
		</Description>

		<Content>
			<IconLoft
				className={timer >= 3 && 'active'}
				src={ImageLoft}
				alt='loft logo'
				loading='lazy'
				decoding='async'
				role='presentation'
				width={140}
				height={140}
			/>
			<IconSmile
				className={timer >= 1 && 'active'}
				src={ImageSmile}
				alt='smile'
				loading='lazy'
				decoding='async'
				role='presentation'
				width={140}
				height={140}
			/>
			<IconCode 
				className={timer >= 5 && 'active'}
				src={ImageCode}
				alt='code'
				loading='lazy'
				decoding='async'
				role='presentation'
				width={140}
				height={140}
			/>
			<IconMascot
				className={timer >= 2 && 'active'}
				src={ImageMascot}
				alt='mascot'
				loading='lazy'
				decoding='async'
				role='presentation'
				width={240}
				height={141}
			/>
			<IconCamera 
				className={timer >= 4 && 'active'}
				src={ImageCamera}
				alt='camera'
				loading='lazy'
				decoding='async'
				role='presentation'
				width={140}
				height={140}
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

const cheersBefore = keyframes`
	0% {
		transform: rotateZ(0) translateX(20px);
	}
	30% {
		transform: rotateZ(0) translateX(0);
	}
	50% {
		transform: rotateZ(-15deg) translateX(-10px);
	}
	70% {
		transform: rotateZ(0) translateX(0);
	}
	100% {
		transform: rotateZ(0) translateX(20px);
	}
`

const cheersAfter = keyframes`
	0% {
		transform: rotateZ(0) rotateY(180deg) translateX(20px);
	}
	30% {
		transform: rotateZ(0) rotateY(180deg) translateX(0);
	}
	50% {
		transform: rotateZ(15deg) rotateY(180deg) translateX(-10px);
	}
	70% {
		transform: rotateZ(0) rotateY(180deg) translateX(0);
	}
	100% {
		transform: rotateZ(0) rotateY(180deg) translateX(20px);
	}
`


const Description = styled.h2`
	font-family: 'Unbounded-Light';
	font-weight: 400;
	max-width: 390px;
	line-height: 22px;
	margin-bottom: 50px;
	font-size: 14px;;

	& span {
		position: relative;
		opacity: 0.5;
		& .beer {
			opacity: 1;
		}
	}

	& .beer-container:hover {
		cursor: url(${CursorHover}), auto;
		& .beer {
			opacity: 1;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			position: absolute;
			left: 10px;
			top: 40px;
			&:before,
			&:after {
				content: "🍺";
				font-size: 50px;
			}
			&:before {
				animation: ${cheersAfter} 3s ease infinite;
			}
			&:after {
				animation: ${cheersBefore} 3s ease infinite;
			}
		}
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
	margin-bottom: 179px;

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
	height: auto;
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
	height: auto;
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
	height: auto;
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
	width: 240px;
	height: auto;
	right: 22%;
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
	height: auto;
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
export default Home