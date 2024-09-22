import { styled } from '@linaria/react'
import { IconTelegram } from '../icons/icon-telegram'
import { telegram } from '../../consts/urls'

export default async function Questions () {
	return <Main
		className='container'
		id='support'
	>
		<Title>Есть вопросики?</Title>
		<Description>Не стесняйся! Спрашивай</Description>

		<Button
			href={telegram['alexey-tabula']}
			name='link to telegram'
			aria-label='link to telegram'
			target='_blank'
		>
			<IconTelegram 
				width={36}
				height={36}
				color='#080808'
			/>
			<span>Поддержка</span>
		</Button>
	</Main>
}

const Main = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 250px;

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`

const Title = styled.h2`
	text-align: center;
	margin-bottom: 75px;
	font-size: 80px;
	font-family: var(--font-unbounded-regular);

	@media screen and (max-width: 1024px) {
		font-size: 50px;
	}

	@media screen and (max-width: 600px) {
		font-size: 30px;
		margin-bottom: 50px;
	}
`

const Description = styled.p`
	font-size: 15px;
	font-family: var(--font-unbounded-regular);
	margin-bottom: 25px;
	text-align: center;

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}
`

const Button = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	height: 60px;
	padding: 0 30px;
	margin: 0 auto;
	border-radius: 100px;
	background-color: #AFB2FF;
	border: none;
	cursor: pointer;
	color: #AFB2FF;
	background: #212121;
	font-family: var(--font-unbounded-medium);
	font-size: 15px;
	text-decoration: none;
	transition: 300ms;
	border: 1px solid #AFB2FF;

	& svg path {
		fill: #AFB2FF;
	}

	&:hover {
		transition: 300ms;
		border-color: #9496D3;

		& svg path {
			fill: #9496D3;
		}

		& span {
			color:  #9496D3;
		}
	}

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}
`