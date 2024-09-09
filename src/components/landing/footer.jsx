import styled from '@emotion/styled'
import { IconLogo } from '../icons/icon-logo'
import { IconTelegram } from '../icons/icon-telegram'
import { IconEmail } from '../icons/icon-email'

export const Footer = () => {
	return (
		<Main>
			<IconLogo />
			<Description>
				Давайте сделаем ещё что-нибудь классное вместе, пишите!
			</Description>

			<Links>
				<Link
					href='/'
					name='link to telegram'
					aria-label='link to telegram'
				>
					<IconTelegram 
						width={36}
						height={36}
						color='#AFB2FF'
					/>
					<span>Контакты для связи</span>
				</Link>
				<Link
					href='/'
					name='link to email'
					aria-label='link to email'
				>
					<IconEmail 
						width={36}
						height={36}
						color='#AFB2FF'
					/>
					<span>Контакты для связи</span>
				</Link>
			</Links>
		</Main>
	)
}

const Main = styled.footer`
	display: flex;
	align-items: center;
	background-color: #212121;
	padding: 60px;
`

const Description = styled.p`
	font-family: 'Unbounded-Light';
	font-size: 25px;
	margin-left: 100px;
	max-width: 532px;
`

const Links = styled.nav`
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 5px;
`

const Link = styled.a`
	display: flex;
	align-items: center;
	gap: 10px;
	font-family: 'Unbounded-Regular';
	font-size: 15px;
	cursor: pointer;
`