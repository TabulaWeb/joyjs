import { styled } from '@linaria/react'
import { IconEye } from '../icons/icon-eye'
import { IconTelegram } from '../icons/icon-telegram'
import { timepad, telegram } from '../../consts/urls'

export default function IdeaDescription () {
	return <Main className='container'>
		<Description>
			На нашем митапе тебя ждёт программа с четырьмя докладами от экспертов.<br/>
			В перерывах между выступлениями будет отличная возможность пообщаться, обменяться<br/> идеями и завести новые знакомства.
		</Description>

		<Description className='subDescription'>
			Мы уверены, что каждый найдет что-то для себя и уйдет с ценными инсайтами<br/>
			и позитивными эмоциями. Независимо от грейда, ждем с нетерпением на Joy.JS!
		</Description>

		<Actions>
			<Button
				href={timepad}
				target='_blank'
				name='link to register'
				aria-label='link to telegram'
				isFilled
			>
				<IconEye color='#0F1215' />
				<span>Посетить встречу</span>
			</Button>
			<Button
				href={telegram.chennal}
				name='link to telegram'
				target='_blank'
				aria-label='link to telegram'
			>
				<IconTelegram 
					color='#AFB2FF'
				/>
				<span>Движухи и анонсы</span>
			</Button>
		</Actions>
	</Main>
}

const Main = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 250px;

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`

const Description = styled.p`
	font-family: var(--font-unbounded-regular);
	font-size: 15px;
	text-align: center;
	margin-bottom: 25px;
	line-height: 22px;

	&.subDescription {
		margin-bottom: 75px;
	}

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 840px) {
		br {
			display: none;
		}
	}

	@media screen and (max-width: 600px) {
		text-align: left;
		&.subDescription {
			margin-bottom: 50px;
		}
	}
`

const Actions = styled.div`
	display: flex;
	gap: 25px;

	@media screen and (max-width: 600px) {
		width: 100%;
		flex-direction: column;
		gap: 15px;
	}
`

const Button = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 7.5px;
	height: 60px;
	padding: 0 30px;
	border-radius: 100px;
	border: none;
	font-weight: 500;
	font-size: 15px;
	font-family: var(--font-unbounded-medium);
	background-color: ${({ isFilled }) => isFilled ? '#AFB2FF' : '#212121'};
	color: ${({ isFilled }) => isFilled ? '#212121' : '#AFB2FF'};
	cursor: pointer;
	text-decoration: none;
	transition: 300ms;

	border: ${({ isFilled }) => isFilled ? '' : '1px solid #AFB2FF'};
	
	&:hover {
		transition: 300ms;
		border-color: #9496D3;
		background-color: ${({ isFilled }) => isFilled ? '#9496D3' : ''};
		border: ${({ isFilled }) => isFilled ? '' : '1px solid #9496D3'};
		& svg path {
			fill:  ${({ isFilled }) => isFilled ? '#080808' : '#9496D3'};
		}

		& span {
			color: ${({ isFilled }) => isFilled ? '#080808' : '#9496D3'};
		}
	}

	@media screen and (max-width: 1440px) {
		font-size: 14px;
		padding: 0 25px;

		& svg {
			width: 30px;
			height: 30px;
		}
	}

	@media screen and (max-width: 600px) {
		height: 54px;
	}
`