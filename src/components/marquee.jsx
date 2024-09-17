import styled from '@emotion/styled'
import ReactFastMarquee from "react-fast-marquee";

import { IconSmile } from './icons/icon-smile';
import { telegram } from '../consts/urls';
import CursorHover from '../assets/image/cursor-hover.png'

export const Marquee = () => {
	return <Main pauseOnHover>
		<MarqueeItem>
			<p>{'/  !  /'}</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>Что?:  Frontend Meetup в Пскове</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>{'<  /  >'}</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>Когда?:  10  октября</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>{'/  !  /'}</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>Где?:  Креативное пространство «Лофт» </p>
		</MarqueeItem>
		<MarqueeItem>
			<p>
				<IconSmile />
				Движухи и анонсы в TG: <a href={telegram.chennal} target='_blank' name='link to channel'
			aria-label='Read more channel'>JOYJS_CONF</a>
			</p>
		</MarqueeItem>

		<MarqueeItem>
			<p>{'/  !  /'}</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>Что?:  Frontend Meetup в Пскове</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>{'<  /  >'}</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>Когда?:  10  октября</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>{'/  !  /'}</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>Где?:  Креативное пространство «Лофт» </p>
		</MarqueeItem>
		<MarqueeItem>
			<p>
				<IconSmile />
				Движухи и анонсы в TG: <a href={telegram.chennal} target='_blank' name='link to channel'
			aria-label='Read more channel'>JOYJS_CONF</a>
			</p>
		</MarqueeItem>

		<MarqueeItem>
			<p>{'/  !  /'}</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>Что?:  Frontend Meetup в Пскове</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>{'<  /  >'}</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>Когда?:  10  октября</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>{'/  !  /'}</p>
		</MarqueeItem>
		<MarqueeItem>
			<p>Где?:  Креативное пространство «Лофт» </p>
		</MarqueeItem>
		<MarqueeItem>
			<p>
				<IconSmile />
				Движухи и анонсы в TG: <a href={telegram.chennal} target='_blank' name='link to channel'
			aria-label='Read more channel'>JOYJS_CONF</a>
			</p>
		</MarqueeItem>
	</Main>
}

const Main = styled(ReactFastMarquee)`
	height: 45px;
	gap: 0 50px;
	background-color: #212121;
	font-family: 'Unbounded-Light';
	background-color: #212121;
	font-size: 15px;

	& .rfm-marquee {
		gap: 50px;

		& .rfm-initial-child-container {
			gap: 50px;

			& .rfm-child p {
				display: flex;
				align-items: center;;
				gap: 10px;
				white-space:pre;

				& a {
					margin-top: 3px;
					color: #CCEE55;
					font-family: 'YapariTrial-Medium';
					text-decoration: none;
					cursor: url(${CursorHover}), auto;
				}
			}
		}
	}

	@media screen and (max-width: 1440px) {
		
	}
`

const MarqueeItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`