import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { IconBurger } from './icons/icon-burger'
import { IconLogo } from './icons/icon-logo'
import { IconEye } from './icons/icon-eye'
import { timepad } from '../consts/urls'

export const Header = () => {
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		const getScrollHeight = () => {
			if(window.pageYOffset > 1945) {
				setIsActive(true)
			} else {
				setIsActive(false)
			}
		}

		window.addEventListener('scroll', getScrollHeight, { passive: true })
	
		return () => window.removeEventListener('scroll', getScrollHeight)
	}, [])

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
				isActive={isActive}
				href={timepad}
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
	position: sticky;
	top: 0;
	padding-top: 25px;
	padding-bottom: 25px;
	backdrop-filter: blur(10px);
	border-bottom-left-radius: 60px;
	border-bottom-right-radius: 60px;
	z-index: 2;
	background-color: #08080850;
`

const Content = styled.div`
	display: flex;
	align-items: center;
	padding: 15px 15px 15px 25px;
	border-radius: 100px;
	background-color: #2C2C2C;
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
	transition: 300ms;
	background-color: ${({ isActive }) => isActive ? '#AFB2FF' : ''};
	color:${({ isActive }) => isActive ? '#212121' : '#AFB2FF'};

	& svg path {
		fill:${({ isActive }) => isActive ? '#212121' : '#AFB2FF'};
	}

	&:hover {
		transition: 300ms;
		border-color: #9496D3;
		background-color: ${({ isActive }) => isActive ? '#9496D3' : ''};

		& svg path {
			fill:  ${({ isActive }) => isActive ? '#080808' : '#9496D3'};
		}

		& span {
			color: ${({ isActive }) => isActive ? '#080808' : '#9496D3'};
		}
	}
`

const TextButton = styled.span`
	font-family: 'Unbounded-Medium';
	font-weight: 500;
	font-size: 16px;
`