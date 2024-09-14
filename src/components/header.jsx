import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { IconBurger } from './icons/icon-burger'
import { IconCross } from './icons/icon-cross'
import { IconLogo } from './icons/icon-logo'
import { IconEye } from './icons/icon-eye'
import { timepad } from '../consts/urls'
import { IconTelegram } from './icons/icon-telegram'
import { IconEmail } from './icons/icon-email'
import ImageCode from '../assets/image/code.png'

export const Header = () => {
	const [isActive, setIsActive] = useState(false)
	const [isMoreZero, setIsMoreZero] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const getScrollHeight = () => {
			if(window.pageYOffset > 1945) {
				setIsActive(true)
			} else {
				setIsActive(false)
			}

			if(window.pageYOffset > 54) {
				setIsMoreZero(true)
			} else {
				setIsMoreZero(false)
			}
		}

		window.addEventListener('scroll', getScrollHeight, { passive: true })
	
		return () => window.removeEventListener('scroll', getScrollHeight)
	}, [])

	useEffect(() => {
		if(isOpen) {
			window.document.querySelector('body').classList.add('hidden')
		} else {
			window.document.querySelector('body').classList.remove('hidden')
		}
	}, [isOpen])

	return <Main>
		<Content>
			<OpenBurder
				name='burger'
				aria-label="open burger menu"
				onClick={() => setIsOpen(prev => !prev)}
			>
				{isOpen 
					? <IconCross />
					: <IconBurger />
				}
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
		<Menu className={isOpen ? 'active' : ''}>
			<MenuContent>
				<ListNav>
					<IconCode 
						src={ImageCode}
						alt='code'
					/>
					<Link
						href='#about'
						name='link to about'
						aria-label='Read more about'
						onClick={() => setIsOpen(prev => !prev)}
					>О митапе</Link>
					<Link
						href='#program'
						name='link to program'
						aria-label='Read more programm'
						onClick={() => setIsOpen(prev => !prev)}
					>Программа</Link>
					<Link
						href='#location'
						name='link to location'
						aria-label='Read more location'
					>Места встречи</Link>
					<Link
						href='#organisatiors'
						name='link to organisatiors'
						aria-label='Read more organisatiors'
					>Организаторы</Link>
					<Link
						href='#community'
						name='link to community'
						aria-label='Read more community'
						onClick={() => setIsOpen(prev => !prev)}
					>Сообщество</Link>
					<Link
						href='#partners'
						name='link to partners'
						aria-label='Read more partners'
						onClick={() => setIsOpen(prev => !prev)}
					>Партнеры</Link>
					<Link
						href='#support'
						name='link to support'
						aria-label='Read more support'
						onClick={() => setIsOpen(prev => !prev)}
					>Поддержка</Link>
				</ListNav>
				
				<Message>
					Давайте сделаем ещё что-нибудь классное вместе, пишите!
				</Message>

				<Contacts>
					<Contact>
						<IconTelegram
							color='#AFB2FF'
							width={25}
							height={25}
						/>
						<span>@webtabula</span>
					</Contact>
					<Contact>
						<IconEmail
							color='#AFB2FF'
							width={25}
							height={25}
						/>
						<span>tabulaweb@mail.ru</span>
					</Contact>
				</Contacts>
			</MenuContent>
		</Menu>
		<GradientBlur isMoreZero={isMoreZero}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</GradientBlur>
	</Main>
}

const Main = styled.header`
	padding: 0 20px;
	margin: 0 auto;
	margin-bottom: 100px;
	position: sticky;
	top: 0;
	z-index: 8;
	padding-top: 25px;
	padding-bottom: 25px;
	border-bottom-left-radius: 60px;
	border-bottom-right-radius: 60px;
`

const Content = styled.div`
	position: relative;
	display: flex;
	z-index: 7;
	align-items: center;
	padding: 15px 15px 15px 25px;
	border-radius: 100px;
	background-color: #2C2C2C;
`

const GradientBlur = styled.div`
	position: absolute;
	top: ${({ isMoreZero }) => isMoreZero ? '-20px' : '0px'};
	right: 0;
	left: 0;
  z-index: 5;
  height: 100%;
  pointer-events: none;

	& > div,
	&::before,
	&::after {
		position: absolute;
		inset: 0;
	}

	&::before {
		content: "";
		z-index: 1;
		backdrop-filter: blur(64px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 1) 12.5%,
			rgba(0, 0, 0, 1) 25%,
			rgba(0, 0, 0, 0) 37.5%
		);
	}

	& > div:nth-of-type(1) {
		z-index: 2;
		backdrop-filter: blur(32px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 12.5%,
			rgba(0, 0, 0, 1) 25%,
			rgba(0, 0, 0, 1) 37.5%,
			rgba(0, 0, 0, 0) 50%
		);
	}

  & > div:nth-of-type(2) {
		z-index: 2;
		backdrop-filter: blur(32px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 12.5%,
			rgba(0, 0, 0, 1) 25%,
			rgba(0, 0, 0, 1) 37.5%,
			rgba(0, 0, 0, 0) 50%
		);
	}

	& > div:nth-of-type(3) {
		z-index: 3;
		backdrop-filter: blur(16px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 25%,
			rgba(0, 0, 0, 1) 37.5%,
			rgba(0, 0, 0, 1) 50%,
			rgba(0, 0, 0, 0) 62.5%
		);
	}

	& > div:nth-of-type(4) {
		z-index: 4;
		backdrop-filter: blur(8px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 37.5%,
			rgba(0, 0, 0, 1) 50%,
			rgba(0, 0, 0, 1) 62.5%,
			rgba(0, 0, 0, 0) 75%
		);
	}

	& > div:nth-of-type(5) {
		z-index: 5;
		backdrop-filter: blur(4px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 50%,
			rgba(0, 0, 0, 1) 62.5%,
			rgba(0, 0, 0, 1) 75%,
			rgba(0, 0, 0, 0) 87.5%
		);
	}

	& > div:nth-of-type(6) {
		z-index: 6;
		backdrop-filter: blur(2px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 62.5%,
			rgba(0, 0, 0, 1) 75%,
			rgba(0, 0, 0, 1) 87.5%,
			rgba(0, 0, 0, 0) 100%
		);
	}

	& > div:nth-of-type(7) {
		z-index: 7;
		backdrop-filter: blur(1px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 75%,
			rgba(0, 0, 0, 1) 87.5%,
			rgba(0, 0, 0, 1) 100%
		);
	}

	&::after {
		content: "";
		z-index: 8;
		backdrop-filter: blur(0.5px);
		mask: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 87.5%,
			rgba(0, 0, 0, 1) 100%
		);
	}

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

const Menu = styled.div`
	position: absolute;
	top: 25px;
	left: 0;
	right: 0;
	height: 0vh;
	z-index: 6;
	padding: 0 20px;
	margin: 0 auto;
	transition: height 300ms;

	&.active {
		transition: height 300ms;
		height: calc(100vh - 100px);
	}
`

const MenuContent = styled.div`
	border-radius: 45px;
	background-color: #2C2C2C;
	height: 100%;
	overflow: hidden;
`

const ListNav = styled.nav`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 25px;
	padding-top: 12vh;
	margin-bottom: 12vh;
	margin-top: 92px;
	max-width: 300px;
	margin-left: auto;
	margin-right: auto;
`

const Link = styled.a`
	font-family: 'Unbounded-Regular';
	font-size: 30px;
	cursor: pointer;
	text-decoration: none;
	color: #ffffff;
`

const Message = styled.p`
	display: block;
	font-family: 'YapariTrial-Regular';
	font-size: 18px;
	text-align: left;
	max-width: 350px;
	margin: 0 auto;
	margin-bottom: 25px;
`

const Contacts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	max-width: 350px;
	margin: 0 auto;
`

const Contact = styled.a`
	font-family: 'Unbounded-Regular';
	font-size: 14px;
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	text-decoration: none;
`

const IconCode = styled.img`
	top: 8vh;
	left: -140px;
	width: 120px;
	position: absolute;
	transform: rotate(30deg);
`