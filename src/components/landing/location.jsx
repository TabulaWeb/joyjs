import styled from '@emotion/styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tooltip } from 'react-tooltip';

import { IconAttention } from '../icons/icon-attention';
import { IconVk } from '../icons/icon-vk'
import SlideLoft from '../../assets/image/slide-loft.jpg'
import SlideBar from '../../assets/image/slide-bar.png'
import CursorHover from '../../assets/image/cursor-hover.png'

const Location = () => {
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
								href='https://vk.com/loft.pskov'
								name='link to vk'
								aria-label='link to vk'
								target='_blank'
							>
								<IconVk />
							</Link>
						</AreaLinks>
					</AreaTime>
					<AreaDescription>
						<AreaTitle>Креативное пространство «Лофт»</AreaTitle>
						<AreaAddress>
							Зал: Арт-пространство <br />
							Адрес: <a href='https://yandex.ru/maps/org/loft/4353360720/?ll=28.344192,57.810261&z=15' target='_blank'>Спортивная ул., 1б</a>
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
						<TooltipContainer id="tooltip-achor">
							<TooltipIcon />
						</TooltipContainer>
						<StyleTooltip
							anchorSelect="#tooltip-achor"
							content='Бар может измениться, 
							если количество желающих
							превысит ожидания'
							place='bottom'
						/>
					</AreaTime>
					<AreaDescription>
						<AreaTitle>Рестобар Друзья</AreaTitle>
						<AreaAddress>
							Адрес: <a href='https://yandex.ru/maps/org/restobar_druzya/234373157458/?ll=28.342081,57.836867&z=16' target='_blank'>Сиреневый бульвар, 1а</a>
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

	@media screen and (max-width: 1440px) {
		font-size: 70px;
	}

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
	gap: 25px;

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
	gap: 15px;
	margin: 25px 0;

	@media screen and (max-width: 780px) {
		gap: 10px;
		justify-content: space-between;
	}

	@media screen and (max-width: 600px) {
		gap: 15px;
		justify-content: flex-start;
	}
`

const Step = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #4B4547;
	font-size: 15px;
	width: 60px;
	height: 60px;
	min-height: 60px;
	min-width: 60px;
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

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}
`

const Time = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60px;
	font-size: 15px;
	/* padding: 0 30px; */
	width: 212px;
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

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}
`

const AreaDescription = styled.div``

const AreaTitle = styled.p`
	font-family: 'Unbounded-Light';
	font-size: 25px;
	margin-bottom: 25px;

	@media screen and (max-width: 1440px) {
		font-size: 20px;
	}
`

const AreaAddress = styled.p`
	font-size: 15px;
	font-family: 'Unbounded-Regular';
	
	& a {
		color: #AFB2FF;
		text-decoration: none;
		cursor: url(${CursorHover}), auto;
	}

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}
`

const AreaLinks = styled.nav`
	margin-left: 20px;

	@media screen and (max-width: 780px) {
		margin-left: 0;
	}
`

const Link = styled.a`
	text-decoration: none;
	cursor: url(${CursorHover}), auto;
`

const Slide = styled(SwiperSlide)`
	height: 450px;

	@media screen and (max-width: 1440px) {
		height: 340px;
	}

	@media screen and (max-width: 1024px) {
		height: 240px;
	}

	@media screen and (max-width: 600px) {
		height: 188px;
	}
`

const ImageLoft = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 20px;
	object-position: bottom;
`

const ImageBar = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 20px;
`

const TooltipContainer = styled.span`
	margin-left: 20px;
	cursor: url(${CursorHover}), auto;

	@media screen and (max-width: 780px) {
		margin-left: 0;
	}
`

const TooltipIcon = styled(IconAttention)`
`

const StyleTooltip = styled(Tooltip)`
	max-width: 225px!important;
	font-family: 'Unbounded-Regular';
	font-size: 11px!important;
	color: #ffffff!important;
	padding: 15px!important;
	background-color: #212121!important;
	border-radius: 12px!important;
	opacity: 1!important;
	text-align: center;

	& div {
		width: 12px!important;
		height: 12px!important;
	}
`

export default Location