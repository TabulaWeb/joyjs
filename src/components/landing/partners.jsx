import styled from '@emotion/styled'
import LogoCoffee from '../../assets/image/coffee-logo.png'
import LogoLoft from '../../assets/image/loft-logo.png'

import { IconTelegram } from '../icons/icon-telegram'
import { IconEmail } from '../icons/icon-email'
import { telegram } from '../../consts/urls'
import CursorHover from '../../assets/image/cursor-hover.png'

export const Partners = () => {
	return <Main>
		<Container className='container' id='partners'>
			<Title>Партнеры</Title>
			<Content>
				<Logos>
					<Logo
						className='loft'
						alt='loft'
						src={LogoLoft}
						loading='lazy'
					/>
					<Logo 
						className='coffee-studion'
						alt='coffee-studion'
						src={LogoCoffee}
						loading='lazy'
					/>
				</Logos>

				<Links>
					<span>Контакты для связи</span>
					<ContainerLink>
						<Link
							href={telegram.chennal}
							className='telegram'
							name='link to telegram'
							aria-label='link to telegram'
							target='_blank'
						>
							<IconTelegram 
								width={70}
								height={70}
								color='#AFB2FF'
							/>
						</Link>
						<Link
							href='mailto:tabulaweb@mail.ru'
							name='link to email'
							aria-label='link to email'
						>
							<IconEmail 
								width={70}
								height={70}
							/>
						</Link>
					</ContainerLink>
				</Links>
			</Content>
		</Container>
	</Main>
}

const Main = styled.section`
border-radius: 80px;
	margin-bottom: 250px;
	padding: 125px 35px;
	background-color: #212121;

	@media screen and (max-width: 1024px) {
		padding: 100px 35px;
	}

	@media screen and (max-width: 600px) {
		padding: 75px 15px;
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 70px;
`

const Title = styled.div`
	font-family: 'Unbounded-Regular';
	font-size: 80px;

	@media screen and (max-width: 1024px) {
		font-size: 50px;
	}

	@media screen and (max-width: 600px) {
		font-size: 30px;
	}
`

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 70px;
	flex-wrap: wrap;
`

const Logos = styled.div`
	display: flex;
	align-items: center;
	gap: 100px;


	@media screen and (max-width: 600px) {
		gap: 70px;
		flex-wrap: wrap;
	}
`

const Logo = styled.img`
	width: 100%;
	object-fit: contain;

	&.coffee-studion {
		max-width: 302px;
	}

	&.loft {
		width: 150px;
		height: 150px;
	}
`

const Links = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 32px;

	& span {
		font-size: 20px;
		text-transform: uppercase;
		font-family: 'Unbounded-Light';
	}
`

const ContainerLink = styled.div`
	display: flex;
`

const Link = styled.a`
	width: 200px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #AFB2FF;
	border-radius: 50%;
	cursor: pointer;
	text-decoration: none;
	transition: 300ms;
	cursor: url(${CursorHover}), auto;

	& svg {
		width: 100px;
		height: 100px;
	}

	&:hover {
		transition: 300ms;
    background-color: #9496D3;
	}

	&.telegram {
		background-color: #4B4547;

		& svg {
		width: 140px;
		height: 140px;
	}

		&:hover {
			transition: 300ms;
			background-color: #2C2C2C;

			& svg path {
				transition: 300ms;
				fill: #9496d3;
			}
		}
	}
`