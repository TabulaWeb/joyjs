import styled from '@emotion/styled'
import { IconTelegram } from '../icons/icon-telegram'

export const Questions = () => {
	return <Main
		className='container'
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
`

const Title = styled.h2`
	text-align: center;
	margin-bottom: 100px;
	font-size: 80px;
	font-family: 'Unbounded-Regular';
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
	padding: 0 30px;
	margin: 0 auto;
	border-radius: 100px;
	background-color: #AFB2FF;
	border: none;
	cursor: pointer;
	color: #080808;
	font-family: 'Unbounded-Medium';
	font-size: 15px;
`