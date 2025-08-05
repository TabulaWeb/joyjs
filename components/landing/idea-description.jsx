import { styled } from '@linaria/react'
import { IconKey } from '../icons/icon-key'
import { IconEye } from '../icons/icon-eye'
import { IconTelegram } from '../icons/icon-telegram'
import { timepad, telegram } from '../../consts/urls'

export default function IdeaDescription () {
	return <Main className='container'>
		<KeyIdeas>
			<KeyIdea>
				<KeyIdeaTitle>
					<IconKey />
					Знания и опыт 
					от лучших
				</KeyIdeaTitle>
				<KeyIdeaDescription>
					Мы ответственно подходим к поиску спикеров и приглашаем экспертов, чьи доклады нам самим интересно слушать
				</KeyIdeaDescription>
			</KeyIdea>
			<KeyIdea>
				<KeyIdeaTitle>
					<IconKey />
					Здесь не только фронтенд
				</KeyIdeaTitle>
				<KeyIdeaDescription>
				Наши митапы для разрабов, 
но будут полезны менеджерам 
и дизайнерам. Мы не только про технологии, но и про процессы, рост и командную работу
				</KeyIdeaDescription>
			</KeyIdea>
			<KeyIdea>
				<KeyIdeaTitle>
					<IconKey />
					Уютная и ламповая атмосфера
				</KeyIdeaTitle>
				<KeyIdeaDescription>
					Не оставим вас голодными, 
				в перерыв между докладами будем угощать закусками
				</KeyIdeaDescription>
			</KeyIdea>
			<KeyIdea>
				<KeyIdeaTitle>
					<IconKey />
					Псков + онлайн
				</KeyIdeaTitle>
				<KeyIdeaDescription>
					Для тех кто не сможет приехать в Псков, залетайте к нам 
					на трансляцию. Ссылка появится в  TG:  <a href='https://t.me/joyjs_conf' target='_blank'>joyjs_conf</a>
				</KeyIdeaDescription>
			</KeyIdea>
		</KeyIdeas>

		<Description>
			Как провести последний месяц лета с пользой? Присоединиться к Joy.JS #2! Здесь не будет скучных и душных лекций — только живые, актуальные кейсы, основанные на реальном опыте спикеров.
		</Description>

		<Description>
			Вас ждут 5 докладов на разные темы из мира разработки — интересно будет не только фронтендерам, но и всем, кто увлекается digital-сферой.
		</Description>

		<Description>
			<DescriptionTitle>В перерывах:</DescriptionTitle>
			Возможность пообщаться, обменяться идеями, завести полезные знакомства и рассказать о себе
		</Description>

		<Description>
			<DescriptionTitle>После докладов:</DescriptionTitle>
			Вместе отправимся на фестиваль «Сидр» и классно завершим день
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

export const KeyIdeas = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 35px;
	margin-bottom: 75px;

	@media screen and (max-width: 1024px) { 
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 600px) { 
		grid-template-columns: 1fr;
	}
`

export const KeyIdea = styled.div`
	padding: 25px 15px;
	border-radius: 40px;
	background: #21212199;
`

export const KeyIdeaTitle = styled.p`
	display: flex;
	align-items: center;
	gap: 15px;
	margin-bottom: 20px;

	font-size: 14px;
	text-transform: uppercase;
	font-family: var(--font-unbounded-medium);
`

export const KeyIdeaDescription = styled.p`
	font-size: 14px;
	font-family: var(--font-unbounded-medium);

	& a {
		text-decoration: none;
		color: #AFB2FF;
	}
`

const Description = styled.span`
	display: flex;
	flex-direction: column;
	gap: 12px;
	font-family: var(--font-unbounded-medium);
	font-size: 14px;
	text-align: center;
	margin-bottom: 20px;
	max-width: 740px;

	&:nth-last-child(2) {
		margin-bottom: 0;
	}
`

const DescriptionTitle = styled.span`
	color: #FAFAFA99;
	margin-top: 15px;
`

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