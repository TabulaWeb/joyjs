'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { styled } from '@linaria/react'
import ImageLoft from '../../image/loft.png'
import ImageSmile from '../../image/smile.png'
import ImageMascotWine from '../../image/mascot-wine.png'
import ImageCode from '../../image/code.png'

import ImageMascot from '../../image/mascot.png'
import ImageCamera from '../../image/camera.png'

export default function FirstSection() {
	const [timer, setTimer] = useState(0)

	useEffect(() => {
		let interval

		if(timer < 6) {
			interval = setTimeout(() => {
				setTimer(prev => prev + 1)
			}, 100)
		}

		return () => clearInterval(interval)
	}, [timer])

	return <Main className='container'>
		<Description>
		<p>16 августа на JOY.JS#2!</p>

		крутая насыщенная программа из 5 докладов,<br/>
		нетворкинг в приятной обстановке LOFT,<br/>
		и чудесный вечер на фестивале <span className='beer-container'>«Сидр»<span className="beer"></span></span><br/>	
		</Description>

		<Content>
			<IconLoft
				className={timer >= 3 && 'active'}
				src={ImageLoft}
				alt='loft logo'
				loading='lazy'
				decoding='async'
				role='img'
				width={140}
				height={140}
			/>
			<IconSmile
				className={timer >= 1 && 'active'}
				src={ImageSmile}
				alt='smile'
				loading='lazy'
				decoding='async'
				role='img'
				width={140}
				height={140}
			/>
			<IconCode
				className={timer >= 6 && 'active'}
				src={ImageCode}
				alt='code'
				loading='lazy'
				decoding='async'
				role='img'
				width={52}
				height={52}
			/>
			<IconMaskotWine 
				className={timer >= 5 && 'active'}
				src={ImageMascotWine}
				alt='mascot wine'
				loading='lazy'
				decoding='async'
				role='img'
				width={140}
				height={140}
			/>
			<IconMascot
				className={timer >= 2 && 'active'}
				src={ImageMascot}
				alt='mascot'
				loading='lazy'
				decoding='async'
				role='img'
				width={240}
				height={141}
			/>
			<IconCamera 
				className={timer >= 4 && 'active'}
				src={ImageCamera}
				alt='camera'
				loading='lazy'
				decoding='async'
				role='img'
				width={140}
				height={140}
			/>
			<Title><span>Joy</span> <span>.JS</span></Title>
		</Content>
	</Main>
}

const Main = styled.section``


const Description = styled.h2`
	@keyframes cheersBefore{
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
	}

	@keyframes cheersAfter{
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
	}

	font-family: var(--font-unbounded-light);
	font-weight: 400;
	max-width: 440px;
	width: 100%;
	line-height: 22px;
	margin-bottom: 50px;
	font-size: 14px;

	& p {
		margin-bottom: 16px;
		font-size: 14px;
	}

	& span {
		position: relative;
		opacity: 0.5;
		& .beer {
			opacity: 1;
		}
	}

	& .beer-container:hover {
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
				animation: cheersAfter 3s ease infinite;
			}
			&:after {
				animation: cheersBefore 3s ease infinite;
			}
		}
	}

	@media screen and (max-width: 1024px) {
		max-width: 440px;
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		margin-bottom: 117px;
		text-wrap: balance;
    max-width: 440px;
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
	font-family: var(--font-yaparitrial-semibold);
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

const IconLoft = styled(Image)`
	@keyframes blob {
		0% {
			opacity: 0;
			transform: scale3d(.3, .3, .3);
		}

		50% {
			opacity: 1;
		}
	}

	position: absolute;
	width: 140px;
	height: auto;
	top: 63%;
	left: 0;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: blob 500ms ease-in-out;
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

const IconSmile = styled(Image)`
	@keyframes blob {
		0% {
			opacity: 0;
			transform: scale3d(.3, .3, .3);
		}

		50% {
			opacity: 1;
		}
	}

	position: absolute;
	width: 140px;
	height: auto;
	left: 18.5%;
	top: -5px;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: blob 500ms ease-in-out;
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

const IconMaskotWine = styled(Image)`
	@keyframes blob {
		0% {
			opacity: 0;
			transform: scale3d(.3, .3, .3);
		}

		50% {
			opacity: 1;
		}
	}

	width: 140px;
	height: auto;
	position: absolute;
	left: 41%;
	top: 35%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: blob 500ms ease-in-out;
		opacity: 1;
	}

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(100px, 10.5dvw, 140px);
	}

	@media screen and (max-width: 1024px) {
		top: 19%;
		left: inherit;
		right: 6%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(110px, 16.5dvw, 160px);
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

const IconCode = styled(Image)`
	@keyframes blob {
		0% {
			opacity: 0;
			transform: scale3d(.3, .3, .3);
		}

		50% {
			opacity: 1;
		}
	}

	width: 52px;
	height: auto;
	position: absolute;
	left: 37%;
	top: 33%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: blob 500ms ease-in-out;
		opacity: 1;
	}

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(42px, 10.5dvw, 52px);
	}

	@media screen and (max-width: 1024px) {
		top: 15%;
		left: inherit;
		right: 22%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(55px, 8dvw, 75px);
	}

	@media screen and (max-width: 600px) {
		top: inherit;
		bottom: 40%;
		right: 20%;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(55px, 12dvw, 75px);
	}
`

const IconMascot = styled(Image)`
	@keyframes blob {
		0% {
			opacity: 0;
			transform: scale3d(.3, .3, .3);
		}

		50% {
			opacity: 1;
		}
	}

	position: absolute;
	width: 240px;
	height: auto;
	right: 22%;
	top: -30%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: blob 500ms ease-in-out;
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

const IconCamera = styled(Image)`
	@keyframes blob {
		0% {
			opacity: 0;
			transform: scale3d(.3, .3, .3);
		}

		50% {
			opacity: 1;
		}
	}

	position: absolute;
	width: 140px;
	height: auto;
	rotate: -30deg;
	right: -1px;
	top: 48%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: blob 500ms ease-in-out;
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