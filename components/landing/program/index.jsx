'use client'
import { styled } from '@linaria/react'
import Image from 'next/image'
import { IconEye } from '../../icons/icon-eye'
import { timepad } from '../../../consts/urls'
import imageParty from '../../../image/drink.png'
import { programs } from './api/programs'

export default function Program() {
	return <Main className='container' id='program'>
		<SecTitle>Программа</SecTitle>
		{programs.map((program) => (
			<ProgramItem key={program.id} className={program.time === '21:00' ? 'after-party' : ''}>
				<Time className={program.time === '21:00' ? 'dashed' : ''}>
					<span>{program.time}</span>
					{program.time === '21:00' && <ImagePartyMaskot 
						src={imageParty} 
						alt='Автепати' 
						width={140}
						height={140}
						loading='lazy'
						decoding='async'
						role='img'
					/>}
				</Time>
				<Content>
					<Title hasMargin={program.description}>
					<span dangerouslySetInnerHTML={{__html: program.title }}></span>
						
					</Title>
					{program.description && 
						<Description hasMargin={program.speaker.name}>
							<span dangerouslySetInnerHTML={{__html: program.description}}></span>
						</Description>
					}
					{program.speaker.name && <Speaker>
						<Avatar> 
							<ImageAvatar 
								alt='avatar'
								src={program.speaker.avatar}
								width={95}
								height={95}
								loading='lazy'
								decoding='async'
								role='img'
							/>
							<Logo
								alt='logo'
								src={program.speaker.company}
								width={30}
								height={30}
								loading='lazy'
								decoding='async'
								role='img'
							/>
						</Avatar>
						<More>
							<Name>{program.speaker.name}</Name>
							<SubInfo>{program.speaker.description}</SubInfo>
						</More>
					</Speaker>}
				</Content>
			</ProgramItem>
		))}

		<Button
			href={timepad}
			target='_blank'
			name='link to register'
			aria-label='link to register'
		>
			<IconEye 
				color='#080808'
				width={44}
				height={44}
			/>
			<span>Посетить встречу</span>
		</Button>
	</Main>
}

const Main = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 250px;

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`

const SecTitle = styled.h2`
	font-size: 80px;
	font-family: var(--font-unbounded-light);
	margin-bottom: 90px;

	@media screen and (max-width: 1440px) {
		font-size: 70px;
	}

	@media screen and (max-width: 1024px) {
		font-size: 50px;
	}

	@media screen and (max-width: 600px) {
		font-size: 30px;
		margin-bottom: 65px;
	}
`

const ProgramItem = styled.div`
	background-color: #21212199;
	position: relative;
	gap: 20px;
	border-radius: 50px;
	padding: 50px;
	display: flex;
	justify-content: space-between;
	--b: 1px;
  --s: 50px;
  --c1: #CCEE55;
  --c2: #080808;

	&.after-party {
		&::before {
			content:"";
			position: absolute;
			border-radius: 50px;
			inset: 0;
			padding: var(--b);
			background: repeating-conic-gradient(var(--c1) 0 25%,var(--c2) 0 50%) 0 0/var(--s) var(--s) round;
			-webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
			-webkit-mask-composite: xor;
			mask-composite: exclude;
			pointer-events: none;
		}
	}

	@media screen and (max-width: 600px) {
		padding: 35px 20px;
		flex-direction: column;
		gap: 25px;

		
	}
`

const Time = styled.div`
	display: flex;
	font-size: 15px;
	position: relative;
	font-family: var(--font-yaparitrial-medium);
	justify-content: center;
	align-items: center;
	position: relative;
	align-self: self-start;
	/* padding: 0 30px; */
	min-width: 222px;
	height: 60px;
	border-radius: 100px;
	border: 1px solid #4B4547;
	background-color: #212121;

	& span {
		padding-top: 6px;
	}

	&.dashed {
		max-width: 215px;
		position: relative;
		--b: 1px;
		--s: 40px;
		--c1: #4B4547;
		--c2: #080808;
		border: none;
		justify-content: flex-start;
		padding-left: 30px;

		&::before {
			content:"";
			position: absolute;
			border-radius: 50px;
			inset: 0;
			padding: var(--b);
			background: 
				repeating-conic-gradient(var(--c1) 0 25%,var(--c2) 0 50%) 
				0 0/var(--s) var(--s) round;
			-webkit-mask: linear-gradient(#000 0 0) content-box,
				linear-gradient(#000 0 0);
			-webkit-mask-composite: xor;
							mask-composite: exclude;
			pointer-events: none;
		}
	}

	@media screen and (max-width: 1440px) {
		min-width: 212px;
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		font-size: 14px;
		background: none;
		height: auto;
		width: 100%;
		justify-content: flex-start;
		padding: 0;
		border: 0;

		&.dashed {
			max-width: none;
			&::before {
				opacity: 0;
			}
		}
	}
`

const ImagePartyMaskot = styled(Image)`
	position: absolute;
	right: -30px;


	@media screen and (max-width: 600px) {
		right: 0;
	}
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 70%;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`

const Title = styled.p`
	text-transform: uppercase;
	font-family: var(--font-unbounded-light);
	margin-bottom: ${({ hasMargin }) => hasMargin ? 25 : 0}px;
	font-size: 25px;

	@media screen and (max-width: 1440px) {
		font-size: 20px;
	}

	@media screen and (max-width: 600px) {
		font-size: 17px;
		margin-bottom: ${({ hasMargin }) => hasMargin ? 20 : 0}px;
	}
`

const Description = styled.p`
	margin-bottom: ${({ hasMargin }) => hasMargin ? 25 : 0}px;
	font-weight: 300;
	line-height: 22px;
	font-size: 15px;
	font-family: var(--font-unbounded-light);

	& a {
		color: #AFB2FF;
		text-decoration: none;
	}

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		font-size: 14px;
		margin-bottom: ${({ hasMargin }) => hasMargin ? 35 : 0}px;
	}
`

const Speaker = styled.div`
	display: flex;
	align-items: center;
	gap: 25px;
`

const Avatar = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 95px;
	height: 95px;
`

const ImageAvatar = styled(Image)`
	width: 95px;
	height: 95px;
	border-radius: 20px;
	object-fit: cover;
`

const Logo = styled(Image)`
	position: absolute;
	width: 30px;
	height: 30px;
	bottom: -5px;
	right: -5px;
	border-radius: 8px;
`

const More = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const Name = styled.p`
	font-family: var(--font-unbounded-medium);
	font-size: 15px;

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 600px)  {
		font-size: 14px;
	}
`

const SubInfo = styled.p`
	font-family: var(--font-unbounded-light);
	font-size: 15px;

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 600px)  {
		font-size: 14px;
	}
`

const Button = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	max-width: 750px;
	width: 100%;
	color: #080808;
	height: 110px;
	border-radius: 100px;
	font-size: 25px;
	font-family: var(--font-unbounded-medium);
	margin: 0 auto;
	margin-top: 65px;
	border: none;
	background-color: #AFB2FF;
	cursor: pointer;
	text-decoration: none;
	transition: 300ms;

	&:hover {
		transition: 300ms;
		border-color: #9496D3;
		background-color: #9496D3;

		& svg path {
			fill: #080808;
		}

		& span {
			color:  #080808;
		}
	}

	@media screen and (max-width: 1440px) {
		font-size: 20px;
	}

	@media screen and (max-width: 600px) {
		margin-top: 40px;
		height: 80px;
		font-size: 17px;

		& svg {
			width: 35px;
			height: 35px;
		}
	}
`