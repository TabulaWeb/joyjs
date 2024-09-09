import styled from '@emotion/styled'
import ReactFastMarquee from "react-fast-marquee";

import { IconSmile } from './icons/icon-smile';

export const Marquee = () => {
	return <Main>
		<p>{'/!/'}</p>
		<p>Что?: Frontend Meetup в Пскове</p>
		<p>{'</>'}</p>
		<p>Когда?: 10  октября</p>
		<p>{'/!/'}</p>
		<p>Где?: Креативное пространство «Лофт» </p>
		<p>{'</>'}</p>
		<p>
			<IconSmile />
			Движухи и анонсы в TG joyjs_conf
		</p>
	</Main>
}

const Main = styled(ReactFastMarquee)`
	padding: 10px 0;
	margin-bottom: 25px;
	gap: 0 50px;
	background-color: #212121;
	font-family: 'Unbounded-Light';

	& .rfm-marquee {
		gap: 50px;

		& .rfm-initial-child-container {
			gap: 50px;

			& .rfm-child p {
				display: flex;
				align-items: center;
				gap: 8px;
			}
		}
	}
`