'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { styled } from '@linaria/react'
import { IconBurger } from './icons/icon-burger'
import { IconCross } from './icons/icon-cross'
import { IconLogo } from './icons/icon-logo'
import { IconEye } from './icons/icon-eye'
import { timepad } from '../consts/urls'
import { IconTelegram } from './icons/icon-telegram'
import { IconEmail } from './icons/icon-email'
import ImageCode from '../image/code.png'
import Sketch from '../image/sketch.png'
import { telegram } from '../consts/urls'

export default function Header () {
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
		<Content className={isOpen ? 'active' : ''}>
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
			<IconLogo className='logo' />

			<NavListDesctop>
				<LinkDesctop
					href='#about'
					name='link to about'
					aria-label='Read more about'
				>
					О митапе
				</LinkDesctop>

				<LinkDesctop
					href='#program'
					name='link to program'
					aria-label='Read more programm'
				>
					Программа
				</LinkDesctop>

				<LinkDesctop
					href='#location'
					name='link to location'
					aria-label='Read more location'
				>
					Места встречи
				</LinkDesctop>

				<LinkDesctop
					href='#support'
					name='link to support'
					aria-label='Read more support'
				>
					Поддержка
				</LinkDesctop>
			</NavListDesctop>

			<Register
				isActive={isActive}
				href={timepad}
				target='_blank'
				name='link to register'
				aria-label='Go to register page'
			>
				<IconEye />
				<TextButton>
					<span className='text-button-desctop'>Посетить встречу</span>
					<span className='text-button-mobile'>Посетить</span>
				</TextButton>
			</Register>
		</Content>
		<Menu className={isOpen ? 'active' : ''} data-more-zero={isMoreZero}>
			<MenuContent className={isOpen ? 'active' : ''}>
				<ListNav>
					<IconCode 
						src={ImageCode}
						role='img'
						alt='code'
						loading='lazy'
						width={140}
						height={140}
					/>
					<MascotImage
						src={Sketch}
						role='img'
						alt='mascot'
						loading='lazy'
						width={240}
						height={250}
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
						onClick={() => setIsOpen(prev => !prev)}
					>Места встречи</Link>
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
					<Contact
						href={telegram['alexey-tabula']}
						target='_blank'
					>
						<IconTelegram
							color='#AFB2FF'
							width={25}
							height={25}
						/>
						<span>@webtabula</span>
					</Contact>
					<Contact
						href='mailto:tabulaweb@mail.ru'
					>
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
	padding: 25px 20px;
	margin: 0 auto;
	margin-bottom: 75px;
	position: sticky;
	top: 0;
	z-index: 8;
	border-bottom-left-radius: 60px;
	border-bottom-right-radius: 60px;

	@media screen and (max-width: 600px) {
		margin-bottom: 50px;
		padding: 25px 10px;
		padding-bottom: 0;
	}
`

const Content = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	z-index: 7;
	align-items: center;
	padding: 20px 15px 20px 35px;
	border-radius: 100px 100px 100px 100px;
	background-color: #2C2C2C;

	&.active {
		border-radius: 46px 46px 0 0;
	}

	& .logo {
		width: 77px;
	}

	@media screen and (max-width: 1440px) {
		padding: 15px 15px 15px 35px;

		&.active {
			border-radius: 20px 20px 0 0;
		}

		& .logo {
			width: 66px;
		}
	}

	@media screen and (max-width: 1024px) {
		justify-content: flex-start;
	}

	@media screen and (max-width: 600px) {
		padding: 10px 10px 10px 20px;

		& .logo {
			width: 41px;
			height: 25px;
		}
	}
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
	width: 60px;
	height: 60px;
	margin-right: 40px;

	& svg {
		width: 50px;
		height: 50px;
	}
	display: none;

	@media screen and (max-width: 1440px) {
		margin-right: 35px;

		width: 40px;
		height: 40px;

		& svg {
			width: 40px;
			height: 40px;
		}
	}

	@media screen and (max-width: 1024px) {
		display: block;
	}

	@media screen and (max-width: 600px) {
		margin-right: 20px;
		width: 30px;
		height: 30px;

		& svg {
			width: 30px;
			height: 30px;
		}
	}
`

const Register = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0 10px;
	padding: 0 30px;
	height: 60px;
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

	& .text-button-mobile {
		display: none;
	}

	@media screen and (max-width: 1440px) {
		height: 55px;
		padding: 0 25px;

		& svg {
			width: 30px;
			height: 30px;
		}
	}

	@media screen and (max-width: 1024px) {
		margin-left: auto;
	}

	@media screen and (max-width: 600px) {
		height: 40px;
		font-size: 14px;
		padding: 0 20px;

		& .text-button-desctop {
			display: none;
		}

		& .text-button-mobile {
			display: block;
		}

		& svg {
			width: 30px;
			height: 30px;
		}
	}
`

const TextButton = styled.span`
	font-family: var(--font-unbounded-medium);
	font-size: 15px;

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}
`

const Menu = styled.div`
	position: absolute;
	top: 25px;
	left: 0;
	right: 0;
	height: 92px;
	z-index: 6;
	padding: 0 20px;
	margin: 0 auto;
	transition: height 300ms;

	&.active {
		margin-top: 100px;
		transition: height 300ms;
		height: calc(100dvh - 210px);

		&[data-more-zero='true'] {
			height: calc(100dvh - 140px);
		}
	}

	@media screen and (max-width: 1440px) {
		height: 85px;

		&.active {
			height: calc(100dvh - 190px);
			margin-top: 85px;
		}
	}

	@media screen and (max-width: 600px) {
		height: 60px;
		padding: 0 10px;

		&.active {
			height: calc(100dvh - 150px);
			margin-top: 60px;

			&[data-more-zero='true'] {
				height: calc(100dvh - 110px);
			}
		}
	}
`

const MenuContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 46px;
	background-color: #2C2C2C;
	height: 100%;
	overflow: hidden;

	&.active {
		overflow: auto;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	@media screen and (max-width: 600px) {
		justify-content: flex-start;
		align-items: flex-start;
		border-radius: 20px;
	}
`

const ListNav = styled.nav`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 25px;
	max-width: 300px;
	margin-bottom: 10vh;

	@media screen and (max-width: 600px) {
		margin-left: 0;
		align-items: self-start;
		padding-left: 25px;
		max-width: none;
		margin-bottom: auto;
		margin-top: 10dvh;
	}
`

const Link = styled.a`
	font-family: var(--font-unbounded-light);
	font-size: 30px;
	cursor: pointer;
	text-decoration: none;
	color: #ffffff;

	@media screen and (max-width: 600px) {
		font-size: 25px;
	}
`

const Message = styled.p`
	display: block;
	font-family: var(--font-unbounded-light);
	font-size: 20px;
	text-align: left;
	max-width: 350px;
	margin: 0 auto;
	margin-bottom: 25px;
	text-transform: uppercase;

	@media screen and (max-width: 1440px) {
		font-size: 18px;
	}

	@media screen and (max-width: 600px) {
		margin-left: 0;
		align-items: self-start;
		font-size: 14px;
		padding-left: 25px;
	}
`

const Contacts = styled.div`
	max-width: 300px;
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: flex-start;
	gap: 10px;
	max-width: 350px;
	margin: 0 auto;

	@media screen and (max-width: 600px) {
		margin-left: 0;
		align-items: self-start;
		padding-left: 25px;
		margin-bottom: 40px;
	}
`

const Contact = styled.a`
	font-family: var(--font-unbounded-light);
	font-size: 14px;
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	text-decoration: none;
	color: #ffffff;
`

const IconCode = styled(Image)`
	top: -45px;
	left: -170px;
	position: absolute;
	transform: rotate(30deg);

	@media screen and (max-width: 600px) {
		display: none;
	}
`

const MascotImage = styled(Image)`
	position: absolute;
	bottom: -130px;
	right: -100%;

	@media screen and (max-width: 600px) {
		display: none;
	}
`

const NavListDesctop = styled.nav`
	display: flex;
	align-items: center;
	flex-direction: row;
	gap: 75px;

	@media screen and (max-width: 1440px) {
		gap: 25px;
	}

	@media screen and (max-width: 1024px) {
		display: none;
	}
`

const LinkDesctop =	styled.a`
	font-family: var(--font-unbounded-medium);
	font-size: 15px;
	cursor: pointer;
	text-decoration: none;
	color: #ffffff;

	&:hover {
		color: #AFB2FF;
	}

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}
`