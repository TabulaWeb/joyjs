import styled from '@emotion/styled'
import ReactFastMarquee from "react-fast-marquee";
import { IconSmileOutline } from '../icons/icon-smile-outline';

export const Community = () => {
	return <>
		<Marquee>
			<span>Сообщество Joy.JS</span>
			<IconSmileOutline />
			<span>Сообщество Joy.JS</span>
		</Marquee>
		<Main className='container'>
			<Description>
				Идея "Joy.JS" заключается в развитии IT-культуры в регионах.
				Для формирования сообщества был выбран Псков, так как это родной
				город создателя Joy.JS Алексея Табула.
			</Description>
			<Description className='subDescription'>
				Наше сообщество — это про обсуждение актуальных тем, обмен знаний 
				и опыта, нетворкинг, IT-вечеринки и прочие форматы движа. 
				А так как сообщество только зарождается, ты можешь повлиять 
				на его будущее и развитие. 
			</Description>

			
		</Main>
	</>
	
}

const Main = styled.section`
	margin-bottom: 154px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Marquee = styled(ReactFastMarquee)`
	font-family: 'Unbounded-ExtraLight';
	font-size: 7vw;
	margin-bottom: 100px;

	& .rfm-initial-child-container {
		gap: 100px;
	}
`

const Description = styled.p`
	margin-bottom: 35px;
	max-width: 775px;
	font-size: 20px;
	font-family: 'Unbounded-Regular';

	&.subDescription {
		margin-bottom: 50px;
	}
`
