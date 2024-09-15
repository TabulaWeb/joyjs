import styled from '@emotion/styled'
import { IconEye } from '../../icons/icon-eye'
import programsJson from './api/programs.json'
import { timepad } from '../../../consts/urls'
import imageParty from '../../../assets/image/drink.png'

export const Program = () => {
	const { programs } = programsJson

	return <Main className='container' id='program'>
		<SecTitle>Программа</SecTitle>
		{programs.map((program) => (
			<ProgramItem key={program.id}>
				<Time>
					<span>{program.time}</span>
					{console.log(program)}
					{program.time === '21:00' && <ImageParty src={imageParty} />}
				</Time>
				<Content>
					<Title hasMargin={program.description}>{ program.title }</Title>
					{program.description && 
						<Description hasMargin={program.speaker.name}>
							{ program.description }
						</Description>
					}
					{program.speaker.name && <Speaker>
						<Avatar> 
							<Image 
								alt='avatar'
								src={program.speaker.avatar}
							/>
							<Logo
								isDark={program.speaker.name === 'Тимур Гафиулин'}
								alt='logo'
								src={program.speaker.company}
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
	gap: 15px;
	margin-bottom: 250px;

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`

const SecTitle = styled.h2`
	font-size: 80px;
	font-family: 'Unbounded-Regular';
	margin-bottom: 85px;

	@media screen and (max-width: 1024px) {
		font-size: 50px;
	}

	@media screen and (max-width: 600px) {
		font-size: 30px;
		margin-bottom: 75px;
	}
`

const ProgramItem = styled.div`
	background-color: #21212199;
	position: relative;
	gap: 70px;
	border-radius: 50px;
	padding: 50px;
	display: flex;
	justify-content: space-between;
	--b: 1px;
  --s: 50px;
  --c1: #CCEE55;
  --c2: #080808;

	&:nth-last-child(2) {
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

	@media screen and (max-width: 600px) {
		padding: 35px 20px;
		flex-direction: column;
		gap: 35px;
	}
`

const Time = styled.div`
	display: flex;
	font-family: 'YapariTrial-Medium';
	justify-content: center;
	align-items: center;
	position: relative;
	align-self: self-start;
	padding: 0 25px;
	height: 60px;
	width: 237px;
	border-radius: 100px;
	border: 1px solid #4B4547;
	background-color: #212121;

	& span {
		padding-top: 6px;
	}

	@media screen and (max-width: 600px) {
		background: none;
		height: auto;
		width: 100%;
		justify-content: flex-start;
		padding: 0;
		border: 0;
	}
`

const ImageParty = styled.img`
	position: absolute;
	right: -70px;


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
	font-family: 'Unbounded-Light';
	margin-bottom: ${({ hasMargin }) => hasMargin ? 35 : 0}px;
	font-size: 25px;
`

const Description = styled.p`
	margin-bottom: ${({ hasMargin }) => hasMargin ? 25 : 0}px;
	font-weight: 300;
	line-height: 20.8px;
	font-size: 15;
	font-family: 'Unbounded-Regular';

	@media screen and (max-width: 600px) {
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

const Image = styled.img`
	width: 95px;
	height: 95px;
	border-radius: 20px;
	object-fit: cover;
`

const Logo = styled.img`
	position: absolute;
	width: 30px;
	height: 30px;
	bottom: -5px;
	right: -5px;
	border-radius: 8px;
	background: ${({ isDark }) => isDark ? '#1e1e1e' : '#ffffff'};
`

const More = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`

const Name = styled.p`
	font-family: 'Unbounded-Regular';
	font-size: 15px;
`

const SubInfo = styled.p`
	font-family: 'Unbounded-Medium';
	font-size: 15px;
`

const Button = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	max-width: 865px;
	width: 100%;
	color: #080808;
	height: 110px;
	border-radius: 100px;
	font-size: 25px;
	font-family: 'Unbounded-Medium';
	margin: 0 auto;
	margin-top: 60px;
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

	@media screen and (max-width: 600px) {
		margin-top: 50px;
		height: 80px;
	}
`