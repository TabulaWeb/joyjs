import styled from '@emotion/styled'
import ReactFastMarquee from "react-fast-marquee";
import { IconSmileOutline } from '../icons/icon-smile-outline';
import { telegram } from '../../consts/urls'
import CursorHover from '../../assets/image/cursor-hover.png'

export const Community = () => {
	return <>
		<Marquee>
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
`

const Marquee = styled(ReactFastMarquee)`
	display: flex;
	gap: 100px;
	font-family: 'Unbounded-ExtraLight';
	font-size: 7vw;
	margin-bottom: 75px;

	& .rfm-initial-child-container {
		gap: 100px;
	}
`

const Description = styled.p`
	margin-bottom: 35px;
	max-width: 900px;
	font-size: 15px;
	line-height: 22px;
	font-family: 'Unbounded-Regular';

	& a {
		cursor: url(${CursorHover}), auto;
		color: #AFB2FF;
		text-decoration: none;
	}

	&.subDescription {
		margin-bottom: 0px;
	}
`
