import styled from '@emotion/styled'
import ImgSticker from '../../assets/image/sticker.png'
import ImgPin from '../../assets/image/pin.png'
import ImgPinActive from '../../assets/image/pin-active.png'
import ReactFastMarquee from "react-fast-marquee";

export const Info = () => {
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
					role='presentation'
				/>

				<ActivePin
					src={ImgPinActive}
					alt='pin'
					loading='lazy'
					decoding='async'
					role='presentation'
				/>
				<Pin
					src={ImgPin}
					alt='pin'
					loading='lazy'
					decoding='async'
					role='presentation'
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
	font-family: 'Unbounded-ExtraLight';
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

const ImageSticker = styled.img`
	height: auto;

	@media screen and (max-width: 1440px) {
		width: 250px;
	}

	@media screen and (max-width: 600px) {
		width: 170px;
	}
`

const ActivePin = styled.img`
	position: absolute;
	top: 10px;
	right: 17px;
`

const Pin = styled.img`
	position: absolute;
	top: -28px;
	right: 50px;
`