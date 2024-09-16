import styled from '@emotion/styled'
import { IconEye } from '../icons/icon-eye'
import { IconTelegram } from '../icons/icon-telegram'
import { timepad, telegram } from '../../consts/urls'

export const IdeaDescription = () => {
	return <Main className='container'>
		<Description>
			На нашем митапе тебя ждёт программа с четырьмя докладами от экспертов,
			В перерывах между выступлениями будет отличная возможность пообщаться, обменяться
			идеями и завести новые знакомства. 
		</Description>

		<Description className='subDescription'>
			Мы уверены, что каждый найдет что-то для себя и уйдет с ценными инсайтами
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
	font-family: 'Unbounded-Regular';
	font-size: 15px;
	max-width: 865px;
	text-align: center;
	margin-bottom: 25px;

	&.subDescription {
		margin-bottom: 75px;
	}

	@media screen and (max-width: 600px) {
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
	padding: 0 20px;
	border-radius: 100px;
	border: none;
	font-weight: 500;
	font-size: 15px;
	font-family: 'Unbounded-Medium';
	background-color: ${({ isFilled }) => isFilled ? '#AFB2FF' : '#212121'};
	color: ${({ isFilled }) => isFilled ? '#212121' : '#AFB2FF'};
	cursor: pointer;
	text-decoration: none;
	transition: 300ms;

	&:hover {
		transition: 300ms;
		border-color: #9496D3;
		background-color: ${({ isFilled }) => isFilled ? '#9496D3' : ''};

		& svg path {
			fill:  ${({ isFilled }) => isFilled ? '#080808' : '#9496D3'};
		}

		& span {
			color: ${({ isFilled }) => isFilled ? '#080808' : '#9496D3'};
		}
	}
`