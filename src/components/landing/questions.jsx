import styled from '@emotion/styled'
import { IconTelegram } from '../icons/icon-telegram'

export const Questions = () => {
	return <Main
		className='container'
		id='support'
	>
		<Title>Есть вопросики?</Title>
		<Description>Не стесняйся! Спрашивай всё, что тебя интересует</Description>

		<Button
			href='/'
			name='link to telegram'
			aria-label='link to telegram'
		>
			<IconTelegram 
				width={36}
				height={36}
				color='#080808'
			/>
			<span>Задать вопрос</span>
		</Button>
	</Main>
}

const Main = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 250px;
`

const Title = styled.h2`
	text-align: center;
	margin-bottom: 100px;
	font-size: 80px;
	font-family: 'Unbounded-Regular';

	@media screen and (max-width: 1024px) {
		font-size: 50px;
	}

	@media screen and (max-width: 600px) {
		font-size: 30px;
	}
`

const Description = styled.p`
	font-size: 15px;
	font-family: 'Unbounded-Regular';
	margin-bottom: 50px;
	text-align: center;
`

const Button = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	height: 60px;
	padding: 0 20px;
	margin: 0 auto;
	border-radius: 100px;
	background-color: #AFB2FF;
	border: none;
	cursor: pointer;
	color: #080808;
	font-family: 'Unbounded-Medium';
	font-size: 15px;
	text-decoration: none;
	transition: 300ms;

	&:hover {
		transition: 300ms;
		border-color: #9496D3;
		background-color: #9496D3;

		& svg path {
			fill: #080808;
		}

		& span {
			color:  #080808;
		}
	}
`