import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { IconVk } from '../icons/icon-vk'
import SlideLoft from '../../assets/image/slide-loft.png'
import SlideBar from '../../assets/image/slide-bar.png'

export const Location = () => {
	return <Main>
		<Content className='container' id='location'>
			<Title>Места встречи</Title>

			<Areas>
				<Area>
					<Swiper>
						<Slide>
							<ImageLoft
								src={SlideLoft}
								alt='loft'
								loading='lazy'
							/>
						</Slide>
					</Swiper>
					<AreaTime>
						<Step>1</Step>
						<Time>18:30 — 21:30</Time>
						<AreaLinks>
							<Link
								href='/'
								name='link to vk'
								aria-label='link to vk'
							>
								<IconVk />
							</Link>
						</AreaLinks>
					</AreaTime>
					<AreaDescription>
						<AreaTitle>Креативное пространство «Лофт»</AreaTitle>
						<AreaAddress>
							Зал: Арт-пространство <br />
							Адрес: Спортивная ул., 1б
						</AreaAddress>
					</AreaDescription>
				</Area>

				<Area>
					<Swiper>
						<Slide>
							<ImageBar
								src={SlideBar}
								alt='bar'
								loading='lazy'
							/>
						</Slide>
					</Swiper>
					<AreaTime>
						<Step className='dashed'>2</Step>
						<Time className='dashed'>22:00 — 01:00</Time>
					</AreaTime>
					<AreaDescription>
						<AreaTitle>Рестобар Друзья</AreaTitle>
						<AreaAddress>
							Адрес: Сиреневый бульвар, 1а
						</AreaAddress>
					</AreaDescription>
				</Area>
			</Areas>
		</Content>
	</Main>
}

const Main = styled.section`
	margin-bottom: 250px;

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`

const Content = styled.div``

const Title = styled.h2`
	font-family: 'Unbounded-Regular';
	font-size: 80px;
	margin-bottom: 100px;

	@media screen and (max-width: 1024px) {
		font-size: 50px;
	}

	@media screen and (max-width: 600px) {
		font-size: 30px;
		margin-bottom: 75px;
	}
`

const Areas = styled.div`
	display: flex;
	gap: 35px;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		gap: 50px;
	}
`

const Area = styled.div`
	width: 48.5%;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`

const AreaTime = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin: 35px 0;
`

const Step = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #4B4547;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	font-family: 'YapariTrial-Medium';

	&.dashed {
		position: relative;
		--b: 1px;
		--s: 40px;
		--c1: #4B4547;
		--c2: #080808;
		border: none;

		&::before {
			content:"";
			position: absolute;
			border-radius: 50px;
			inset: 0;
			padding: var(--b);
			background: 
				repeating-conic-gradient(var(--c1) 0 25%,var(--c2) 0 50%) 
				0 0/var(--s) var(--s) round;
			-webkit-mask: linear-gradient(#000 0 0) content-box,
				linear-gradient(#000 0 0);
			-webkit-mask-composite: xor;
							mask-composite: exclude;
			pointer-events: none;
		}
	}
`

const Time = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	padding: 0 20px;
	border-radius: 100px;
	background-color: #212121;
	border: 1px solid #4B4547;
	font-family: 'YapariTrial-Medium';

	&.dashed {
		position: relative;
		--b: 1px;
		--s: 30px;
		--c1: #4B4547;
		--c2: #080808;
		border: none;

		&::before {
			content:"";
			position: absolute;
			inset: 0;
			padding: var(--b);
			border-radius: 100px;
			background: 
				repeating-conic-gradient(var(--c1) 0 25%,var(--c2) 0 50%) 
				0 0/var(--s) var(--s) round;
			-webkit-mask: linear-gradient(#000 0 0) content-box,
				linear-gradient(#000 0 0);
			-webkit-mask-composite: xor;
							mask-composite: exclude;
			pointer-events: none;
		}
	}
`

const AreaDescription = styled.div``

const AreaTitle = styled.p`
	font-family: 'Unbounded-Light';
	font-size: 25px;
	margin-bottom: 35px;
`

const AreaAddress = styled.p`
	font-size: 15px;
	font-family: 'Unbounded-Regular';
`

const AreaLinks = styled.nav``

const Link = styled.a`
	cursor: pointer;
	text-decoration: none;
`

const Slide = styled(SwiperSlide)`
	height: 450px;
`

const ImageLoft = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 20px;
`

const ImageBar = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 20px;
`