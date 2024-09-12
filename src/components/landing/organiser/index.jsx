import styled from '@emotion/styled'
import organisersJson from './api/organisers.json'
import { IconTelegram } from '../../icons/icon-telegram'

export const Organiser = () => {
	const { organisers } = organisersJson

	return <Main className='container'>
		<Title>Организаторы</Title>

		<Content>
			{organisers.map((organiser, index) => (
				<People key={index}>
					<AvatarContainer>
						<Avatar 
							src={ organiser.avatar }
							alt='avatar'
						/>
						<Link
							href='/'
							name='link to telegram'
							aria-label='link to telegram'
						>
							<IconTelegram 
								width={35}
								height={35}
								color='#AFB2FF'
							/>
						</Link>
					</AvatarContainer>
					
					<Name>{ organiser.name }</Name>
					<Description>{ organiser.description }</Description>
					<Role>{ organiser.role }</Role>
				</People>
			))}
		</Content>
	</Main>
}

const Main = styled.section`
	margin-bottom: 250px;
`

const Title = styled.h2`
	font-size: 80px;
	margin-bottom: 100px;
`

const Content = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 50px;
`

const People = styled.div`
	text-align: center;
`

const AvatarContainer = styled.div`
	position: relative;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	margin-bottom: 35px;
`

const Avatar = styled.img` 
	width: 300px;
	height: 300px;
	object-fit: cover;
`

const Link = styled.a`
	position: absolute;
	cursor: pointer;
	bottom: 10px;
	right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 65px;
	height: 65px;
	border-radius: 50%;
	background-color: #4B4547;
	text-decoration: none;
`

const Name = styled.p`
	font-size: 20px;
	margin-bottom: 25px;
	font-family: 'Unbounded-Regular';
`

const Description = styled.p`
	font-size: 16px;
	margin-bottom: 15px;
	font-family: 'Unbounded-Regular';
`

const Role = styled.p`
	font-size: 16px;
	color: #AECD41;
	font-family: 'Unbounded-Regular';
`