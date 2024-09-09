import styled from '@emotion/styled'
import { IconEye } from '../../icons/icon-eye'

import programsJson from './api/programs.json'

export const Program = () => {
	const { programs } = programsJson

	return <Main className='container' id='program'>
		<SecTitle>Программа</SecTitle>
		{programs.map((program) => (
			<ProgramItem key={program.id}>
				<Time>
					<span>{program.time}</span>
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
							/>
							<Logo 
								alt='logo'
							/>
						</Avatar>
						<More>
							<Name></Name>
							<SubInfo></SubInfo>
						</More>
					</Speaker>}
				</Content>
			</ProgramItem>
		))}

		<Button
			href='/'
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
`

const SecTitle = styled.h2`
	font-size: 80px;
	font-family: 'Unbounded-Regular';
	margin-bottom: 85px;
`

const ProgramItem = styled.div`
	background-color: #21212199;
	border-radius: 50px;
	padding: 50px;
	display: flex;
	justify-content: space-between;
`

const Time = styled.div`
	display: flex;
	font-family: 'YapariTrial-Medium';
	justify-content: center;
	align-items: center;
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
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 70%;
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
`

const Logo = styled.img`
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
`