import styled from '@emotion/styled'
import { IconBurger } from './icons/icon-burger'
import { IconLogo } from './icons/icon-logo'
import { IconEye } from './icons/icon-eye'

export const Header = () => {
	return <Main>
		<Content>
			<OpenBurder
				name='burger'
				aria-label="open burger menu"
			>
				<IconBurger />
			</OpenBurder>
			<IconLogo />
			<Register
				href='/'
				name='link to register'
				aria-label='Go to register page'
			>
				<IconEye />
				<TextButton>Посетить встречу</TextButton>
			</Register>
		</Content>
	</Main>
}

const Main = styled.header`
	padding: 0 20px;
	margin: 0 auto;
	margin-bottom: 100px;
`

const Content = styled.div`
	display: flex;
	align-items: center;
	padding: 15px 15px 15px 25px;
	border-radius: 100px;
	background-color: #212121;
`

const OpenBurder = styled.button`
	border: none;
	outline: none;
	background: none;
	cursor: pointer;
	width: 60px;
	height: 60px;
	margin-right: 40px;
`

const Register = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0 10px;
	padding: 0 20px;
	height: 60px;
	margin-left: auto;
	border: 1px solid #AFB2FF;
	border-radius: 100px;
	cursor: pointer;
	text-decoration: none;
`

const TextButton = styled.span`
	font-family: 'Unbounded-Medium';
	color: #AFB2FF;
	font-weight: 500;
	font-size: 16px;
`