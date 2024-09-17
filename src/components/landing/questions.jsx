import styled from '@emotion/styled'
import { IconTelegram } from '../icons/icon-telegram'
import { telegram } from '../../consts/urls'
import CursorHover from '../../assets/image/cursor-hover.png'

export const Questions = () => {
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
	margin-bottom: 25px;
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
	color: #AFB2FF;
	background: #212121;
	font-family: 'Unbounded-Medium';
	font-size: 15px;
	text-decoration: none;
	transition: 300ms;
	border: 1px solid #AFB2FF;
	cursor: url(${CursorHover}), auto;

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
`