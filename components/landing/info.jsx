'use client'
import { styled } from '@linaria/react'
import Image from 'next/image'
import ImgSticker from '../../image/sticker.png'
import ImgPin from '../../image/pin.png'
import ImgPinActive from '../../image/pin-active.png'
import ReactFastMarquee from "react-fast-marquee";
export default function Info () {
	return <Main>
		<Marquee>
			<span>Интервью со спикерами</span>
		</Marquee>

		<Sticker>
			<Content>
				<ImageSticker
					src={ImgSticker}
					width={275}
					height={281}
					alt='sticker'
					loading='lazy'
					decoding='async'
					role='img'
				/>

				<ActivePin
					src={ImgPinActive}
					alt='pin'
					loading='lazy'
					decoding='async'
					role='img'
				/>
				<Pin
					src={ImgPin}
					alt='pin'
					loading='lazy'
					decoding='async'
					role='img'
				/>
			</Content>
		</Sticker>
	</Main>
}

const Main = styled.section`
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 150px;
`

const Marquee = styled(ReactFastMarquee)`
	font-family: var(--font-unbounded-extraLight);
	font-size: 7vw;
	gap: 200px;
`

const Sticker = styled.div`
	position: absolute;
	z-index: 1;
	right: 6%;
	margin-top: 20px;
`

const Content = styled.div`
	position: relative;
`

const ImageSticker = styled(Image)`
	height: auto;

	@media screen and (max-width: 1440px) {
		width: 250px;
	}

	@media screen and (max-width: 600px) {
		width: 170px;
	}
`

const ActivePin = styled(Image)`
	position: absolute;
	top: 10px;
	right: 17px;

	@media screen and (max-width: 600px) {
		top: -15px;
    right: -5px;
	}
`

const Pin = styled(Image)`
	position: absolute;
	top: -28px;
	right: 50px;

	@media screen and (max-width: 600px) {
		top: -38px;
		right: 18px;
		
	}
`