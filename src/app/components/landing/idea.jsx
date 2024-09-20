'use client'
import { styled } from '@linaria/react'
import Image from 'next/image'
import { IconNetwork } from '../icons/icon-network'
import { IconStar } from '../icons/icon-star'
import { IconLaptop } from '../icons/icon-laptop'
import { IconCursor } from '../icons/icon-cursor'
import Sketch from '../../../assets/image/sketch.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Idea = () => {

	useEffect(() => {
		Aos.init()
	}, [])

	return <Main className='container' id='about'>
		<Keywords className='left' data-aos='fade-up' data-aos-delay="200">
			<Keyword>Митап</Keyword>
			<Keyword>Знания</Keyword>
			<Keyword>Доклады</Keyword>
			<Keyword>
				<IconContainer className='cursor'>
					<IconCursor />
				</IconContainer>
				Презентации
			</Keyword>
		</Keywords>

		<Keywords className='right' data-aos='fade-up' data-aos-delay="200">
			<Keyword>
				<IconContainer className='networker'>
					<IconNetwork />
				</IconContainer>
				Нетворкинг
			</Keyword>
			<Keyword>
				<IconContainer className='star'>
					<IconStar />
				</IconContainer>	
				Опыт
			</Keyword>
			<Keyword>Спикеры</Keyword>
			<Keyword>
				<IconContainer className='laptop'>
					<IconLaptop />
				</IconContainer>
				IT
			</Keyword>
		</Keywords>

		<MascotImage
			data-aos='fade-up'
			data-aos-delay="400"
			src={Sketch}
			alt='mascot'
			loading='lazy'
			decoding='async'
			role='presentation'
			width={600}
			height={600}
		/>
	</Main>
}

const Main = styled.section`
	position: relative;
	display: flex;
	justify-content: space-between;
	margin-bottom: 110px;

	@media screen and (max-width: 1024px) {
		margin-bottom: 100px;
	}

	@media screen and (max-width: 600px) {
		margin-bottom: 100px;
	}
`

const Keywords = styled.div`
	display: flex;
	flex-direction: column;
	gap: 60px;
	font-size: 7vw;

	&.left {
		text-align: left;
	}

	&.right {
		text-align: right;
		margin-left: -100%;

		& p {
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}

	@media screen and (min-width: 1400px) {
		font-size: 100px;
	}

	@media screen and (max-width: 1024px) {
		font-size: 6vw;
		gap: 44px;
	}

	@media screen and (max-width: 600px) {
		gap: 17px;
	}
`

const Keyword = styled.p`
	font-family: 'Unbounded-ExtraLight';
	position: relative;
`

const IconContainer = styled.span`

	width: 165px;
	height: 165px;

	&.cursor {
		position: absolute;
		left: 12%;
		top: 65%;
	}
	
	&.networker {
		position: absolute;
		right: calc(100% + 10px);
	}
	
	&.star {
		position: absolute;
		right: 43%;
	}

	&.laptop {
		position: absolute;
		right: 17%;
	}

	@media screen and (max-width: 1024px) {
		width: 85px;
		height: 85px;

		& svg {
			width: 85px;
			height: 85px;
		}
	}

	@media screen and (max-width: 600px) {
		width: 35px;
		height: 35px;

		& svg {
			width: 35px;
			height: 35px;
		}
	}
`

const MascotImage = styled(Image)`
	position: absolute;
	left:0;
  right:0;
	margin: 0 auto;
	bottom: -65px;
	width: 600px;
	height: auto;

	@media screen and (max-width: 1440px) {
		width: clamp(450px, 44vw, 590px);
	}

	@media screen and (max-width: 1024px) {
		width: clamp(325px, 41vw, 450px);
	}

	@media screen and (max-width: 600px) {
		bottom: -35px;
		width: clamp(180px, 45vw, 250px);
	}
`

export default Idea