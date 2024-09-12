import styled from '@emotion/styled'
import { IconMicro } from './icons/icon-micro'

export const Devider = () => {
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
	border-top: 1px solid #909090;
	border-bottom: 1px solid #909090;
	cursor: pointer;
	margin-bottom: 150px;
	text-decoration: none;
`

const LinkText = styled.span`
	font-family: 'Unbounded-Medium';
	color: #ffffff;
	font-weight: 300;
`