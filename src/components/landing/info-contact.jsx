import styled from '@emotion/styled'
import { IconTelegram } from '../icons/icon-telegram'
import { IconArrow } from '../icons/icon-arrow'

export const InfoContact = () => {
	return <Main className='container'>
		<Description>
			Знакомство со спикерами и больше инфы о митапе
			публикуем в TG. Подписывайся, чтобы не пропустить
		</Description>

		<Links>
			<Link 
				href='/'
				className='telegram'
				name='link to telegram'
				aria-label='link to telegram'
			>
				<IconTelegram 
					width={80}
					height={80}
					color='#AFB2FF'
				/>
			</Link>
			<Link
				href='/'
				name='link to telegram'
				aria-label='link to telegram'
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
	gap: 32px;
	margin-left: auto;
	margin-right: 12%;
	margin-bottom: 250px;

	@media screen and (max-width: 1024px) {
		margin-right: 0;
		max-width: 495px;
	}

	@media screen and (max-width: 600px) {
		margin-left: 0;
		max-width: 360px;
		margin-right: auto;
	}
`

const Description = styled.p`
	font-family: 'Unbounded-Regular';
	font-size: 15px;
	color: '#FAFAFA';
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
	cursor: pointer;
	text-decoration: none;

	&.telegram {
		background-color: #4B4547;
	}

	@media screen and (max-width: 600px) {
		width: 100px;
		height: 100px;
	}
`