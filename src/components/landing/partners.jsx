import styled from '@emotion/styled'
import LogoCoffee from '../../assets/image/coffee-logo.png'
import LogoLoft from '../../assets/image/loft-logo.png'

import { IconTelegram } from '../icons/icon-telegram'
import { IconEmail } from '../icons/icon-email'

export const Partners = () => {
	return <Main>
		<Container className='container'>
			<h2>Партнеры</h2>
		</Container>
		<Container className='container'>
			<Logos>
				<Logo
					className='loft'
					alt='loft'
					src={LogoLoft} 
				/>
				<Logo 
					className='coffee-studion'
					alt='coffee-studion'
					src={LogoCoffee} 
				/>
			</Logos>

			<Links>
				<span>Контакты для связи</span>
				<ContainerLink>
					<Link
						href='/'
						className='telegram'
						name='link to telegram'
						aria-label='link to telegram'
					>
						<IconTelegram 
							width={110}
							height={110}
							color='#AFB2FF'
						/>
					</Link>
					<Link
						href='/'
						name='link to email'
						aria-label='link to email'
					>
						<IconEmail />
					</Link>
				</ContainerLink>
			</Links>
		</Container>
	</Main>
}

const Main = styled.div`
	margin-bottom: 170px;
	padding: 70px 50px;
	background-color: #212121;
`

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`

const Logos = styled.div`
	display: flex;
	align-items: center;
	gap: 150px;
`

const Logo = styled.img`
	width: 100%;
	height: 100%;
	object-fit: contain;

	&.coffee-studion {
		max-width: 380px;
	}

	&.loft {
		width: 200px;
		height: 200px;
	}
`

const Links = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 32px;

	& span {
		font-size: 25px;
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

	&.telegram {
		background-color: #4B4547;
	}
`