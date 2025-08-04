import { styled } from '@linaria/react'
import { IconEye } from '../icons/icon-eye'
import { IconTelegram } from '../icons/icon-telegram'
import { timepad, telegram } from '../../consts/urls'

export default function IdeaDescription () {
	return <Main className='container'>
		<Description>
			<DescrTitle>— Знания и опыт от лучших —</DescrTitle>
			<DescrText>
				Мы ответственно подходим к поиску спикеров и приглашаем экспертов, чьи доклады нам самим интересно слушать
			</DescrText>
		</Description>

		<Description>
			<DescrTitle>— Здесь не только фронтенд —</DescrTitle>
			<DescrText>
				Наши митапы для разработчиков, но будут полезны менеджерам и дизайнерам. Мы не только про технологии, но и про процессы, рост и командную работу
			</DescrText>
		</Description>

		<Description>
			<DescrTitle>— Уютная и ламповая атмосфера —</DescrTitle>
			<DescrText>
				В перерывах между выступлениями будет отличная возможность пообщаться, обменяться идеями и завести новые знакомства
			</DescrText>
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

const Description = styled.span`
	font-family: var(--font-unbounded-light);
	font-size: 14px;
	text-align: center;
	margin-bottom: 50px;
	word-wrap: balance;
	max-width: 865px;

	&:nth-last-child(2) {
		margin-bottom: 0;
	}
`

const DescrTitle = styled.p`
	text-transform: uppercase;
	margin-bottom: 16px;
`

const DescrText = styled.p``

const Actions = styled.div`
	margin-top: 75px;
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
		background-color: ${({ isFilled }) => isFilled ? '#9496D3' : '#212121'};
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