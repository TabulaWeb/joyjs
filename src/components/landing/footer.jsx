import styled from '@emotion/styled'
import { IconLogo } from '../icons/icon-logo'
import { IconTelegram } from '../icons/icon-telegram'
import { IconEmail } from '../icons/icon-email'
import { telegram } from '../../consts/urls'

export const Footer = () => {
	return (
		<Main>
			<IconLogo 
				width={77}
				height={46}
			/>
			<Description>
				Давайте сделаем ещё что-нибудь классное вместе, пишите!
			</Description>

			<Links>
				<Link
					href={telegram['alexey-tabula']}
					name='link to telegram'
					aria-label='link to telegram'
					target='_blank'
					className='telegram'
				>
					<IconTelegram 
						width={25}
						height={25}
						color='#AFB2FF'
					/>
					<span>@webtabula</span>
				</Link>
				<Link
					href='mailto:tabulaweb@mail.ru'
					name='link to email'
					aria-label='link to email'
				>
					<IconEmail 
						width={25}
						height={25}
						color='#AFB2FF'
					/>
					<span>tabulaweb@mail.ru</span>
				</Link>
			</Links>
		</Main>
	)
}

const Main = styled.footer`
	display: flex;
	align-items: center;
	background-color: #212121;
	padding: 55px 48px;

	@media screen and (max-width: 991px) {
		flex-direction: column;
		padding: 50px 19px;
		justify-content: center;
		gap: 25px;
	}
`

const Description = styled.p`
	font-family: 'Unbounded-Light';
	font-size: 20px;
	margin-left: 73px;
	line-height: 30px;
	max-width: 700px;
	text-transform: uppercase;

	@media screen and (max-width: 991px) {
		margin-left: 0;
	}
`

const Links = styled.nav`
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 5px;

	@media screen and (max-width: 991px) {
		margin-left: 0;
	}
`

const Link = styled.a`
	display: flex;
	align-items: center;
	gap: 10px;
	font-family: 'Unbounded-Regular';
	font-size: 14px;
	cursor: pointer;
	text-decoration: none;
	color: #ffffff;
	cursor: url('src/assets/image/cursor-hover.png'), auto;

	& svg {
		width: 36px;
		height: 36px;
	}
`