import { styled } from '@linaria/react'
import ReactFastMarquee from "react-fast-marquee";
import { IconSmileOutline } from '../icons/icon-smile-outline';
import { telegram } from '../../consts/urls'

const Community = () => {
	return <>
		<Marquee>
			<span>Сообщество Joy.JS</span>
			<IconSmileOutline />
			<span>Сообщество Joy.JS</span>
			<IconSmileOutline />
			<span>Сообщество Joy.JS</span>
			<IconSmileOutline />
			<span>Сообщество Joy.JS</span>
			<IconSmileOutline />
			<span>Сообщество Joy.JS</span>
			<IconSmileOutline />
			<span>Сообщество Joy.JS</span>
			<IconSmileOutline />
			<span>Сообщество Joy.JS</span>
			<IconSmileOutline />
			<span>Сообщество Joy.JS</span>
			<IconSmileOutline />
		</Marquee>
		<Main className='container' id='community'>
			<Description>
				Идея "Joy.JS" заключается в развитии IT-культуры в регионах.<br/>
				Для формирования сообщества был выбран Псков, так как это родной<br/>
				город создателя Joy.JS <a href={telegram['alexey-tabula']}>Алексея Табула</a>.
			</Description>
			<Description className='subDescription'>
				Наше сообщество — это про обсуждение актуальных тем, обмен знаний<br/>
				и опыта, нетворкинг, IT-вечеринки и прочие форматы движа.<br/>
				А так как сообщество только зарождается, ты можешь повлиять<br/>
				на его будущее и развитие. 
			</Description>
		</Main>
	</>
	
}

const Main = styled.section`
	margin-bottom: 250px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`

const Marquee = styled(ReactFastMarquee)`
	display: flex;
	gap: 100px;
	font-family: var(--font-unbounded-extraLight);
	font-size: 7vw;
	margin-bottom: 75px;

	& .rfm-initial-child-container {
		gap: 100px;
	}

	@media screen and (max-width: 600px) {
		gap: 50px;
	}
`

const Description = styled.p`
	margin-bottom: 25px;
	max-width: 900px;
	font-size: 15px;
	line-height: 22px;
	font-family: var(--font-unbounded-regular);

	& a {
		color: #AFB2FF;
		text-decoration: none;
	}

	&.subDescription {
		margin-bottom: 0px;
	}

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 680px) {
		br {
			display: none;
		}
	}

	@media screen and (max-width: 600px) {
		font-size: 14px;
		text-align: start;
	}
`

export default Community