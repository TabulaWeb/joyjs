import { styled } from '@linaria/react'
import { IconTelegram } from '../icons/icon-telegram'
import { IconArrow } from '../icons/icon-arrow'
import { telegram } from '../../consts/urls'

export default function InfoContact () {
	return <Main className='container'>
		<Description>
			Знакомство со спикерами и больше инфы о митапе
			публикуем в TG. Подписывайся, чтобы не пропустить
		</Description>

		<Links>
			<Link 
				href={telegram.chennal}
				className='telegram'
				name='link to telegram'
				aria-label='link to telegram'
				target='_blank'
			>
				<IconTelegram 
					width={80}
					height={80}
					color='#AFB2FF'
				/>
			</Link>
			<Link
				href={telegram.chennal}
				name='link to telegram'
				aria-label='link to telegram'
				target='_blank'
			>
				<IconArrow
					width={80}
					height={80}
					color='#080808'
				/>
			</Link>
		</Links>
	</Main>
}

const Main = styled.section`
	display: flex;
	flex-direction: column;
	max-width: 550px;
	width: 100%;
	gap: 25px;
	margin-left: auto;
	margin-right: 12%;
	margin-bottom: 250px;

	@media screen and (max-width: 1024px) {
		margin-right: 0;
		max-width: 495px;
	}

	@media screen and (max-width: 600px) {
		gap: 15px;
		margin-left: 0;
		max-width: 360px;
		margin-right: auto;
		margin-bottom: 200px;
	}
`

const Description = styled.p`
	font-family: var(--font-unbounded-light);
	font-size: 15px;
	color: '#FAFAFA';

	@media screen and (max-width: 600px) {
		font-size: 14px;
	}
`

const Links = styled.nav`
	display: flex;
`

const Link = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 150px;
	height: 150px;
	background-color: #AFB2FF;
	border-radius: 50%;
	text-decoration: none;
	transition: 300ms;

	&:hover {
		transition: 300ms;
    background-color: #9496D3;
	}

	&.telegram {
		background-color: #4B4547;
		& svg {
			width: 100px;
			height: 100px;
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

	& svg {
		width: 60px;
		height: 60px;
	}

	@media screen and (max-width: 600px) {
		width: 100px;
		height: 100px;

		&.telegram {
			& svg {
				width: 70px;
				height: 70px;
			}
		}

		& svg {
			width: 40px;
			height: 40px;
		}
	}
`