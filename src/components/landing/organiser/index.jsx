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
							src={organiser.avatar}
							width={230}
							height={230}
							alt='avatar'
							loading='lazy'
							decoding='async'
							role='presentation'
						/>
						<Link
							href={organiser.link}
							name='link to telegram'
							aria-label='link to telegram'
							target='_blank'
						>
							<IconTelegram 
								width={25}
								height={25}
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

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`

const Title = styled.h2`
	font-family: 'Unbounded-Regular';
	font-size: 80px;
	margin-bottom: 100px;

	@media screen and (max-width: 1024px) {
		font-size: 50px;
	}

	@media screen and (max-width: 600px) {
		font-size: 30px;
		margin-bottom: 75px;
	}
`

const Content = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 50px;

	@media screen and (max-width: 1150px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media screen and (max-width: 840px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`

const People = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const AvatarContainer = styled.div`
	position: relative;
	width: 230px;
	height: 230px;
	border-radius: 50%;
	margin-bottom: 35px;
`

const Avatar = styled.img` 
	width: 230px;
	height: 230px;
	object-fit: cover;
	border-radius: 50%;
`

const Link = styled.a`
	position: absolute;
	cursor: pointer;
	bottom: 10px;
	right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #4B4547;
	text-decoration: none;
	transition: 300ms;

	&:hover {
		transition: 300ms;
		background-color: #2C2C2C;

		& svg path {
			transition: 300ms;
			fill: #9496d3;
		}
	}
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