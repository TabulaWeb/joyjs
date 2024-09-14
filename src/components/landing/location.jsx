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
							/>
						</Slide>
					</Swiper>
					<AreaTime>
						<Step>2</Step>
						<Time>22:00 — 01:00</Time>
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
`

const Content = styled.div``

const Title = styled.h2`
	font-family: 'Unbounded-Regular';
	font-size: 80px;
	margin-bottom: 100px;
`

const Areas = styled.div`
	display: flex;
	gap: 35px;
`

const Area = styled.div`
	width: 48.5%;
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
	width: 60px;
	height: 60px;
	border: 1px solid #FFFFFF80;
	border-radius: 50%;
	font-family: 'YapariTrial-Medium';
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