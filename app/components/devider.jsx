import { styled } from '@linaria/react'
import { IconMicro } from './icons/icon-micro'

export default async function Devider () {
	return <Main 
		href='#program'
		name='link to program'
		aria-label='Read more about programm'
	>
		<LinkText>Программа</LinkText>
		<IconMicro />
	</Main>
}

const Main = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	gap: 10px;
	height: 65px;
	border-top: 1px solid #4b4547;
	border-bottom: 1px solid #4b4547;
	margin-bottom: 250px;
	text-decoration: none;

	@media screen and (max-width: 1440px) {
		height: 60px;

		& svg {
			width: 20px;
			height: 20px;
		}
	}

	@media screen and (max-width: 1024px) {
		margin-bottom: 200px;
		margin-bottom: 100px;
	}
`

const LinkText = styled.span`
	font-family: var(--font-unbounded-regular);
	font-size: 15px;
	color: #ffffff;
	font-weight: 300;

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}
`