'use client'
import { styled } from '@linaria/react'
import Image from 'next/image'
import { organisers } from './api/organisers'
import { IconTelegram } from '../../icons/icon-telegram'

const Organiser = () => {
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
							alt={organiser.name}
							loading='lazy'
							decoding='async'
							role='img'
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

						<Hobbys className='hobbys'>
							{organiser.hobby.map((hobby, index) => (
								<Hobby key={index} className='hobby'>
									<ImageHobby src={hobby} loading='lazy' alt='hobby' />
								</Hobby>	
							))}
						</Hobbys>
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
	font-family: var(--font-unbounded-light);
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
		grid-template-columns: 1fr 1fr;
	}
`

const People = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const AvatarContainer = styled.div`
	@keyframes hobbyAnimation{
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	position: relative;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	margin-bottom: 25px;

	&:hover {
		& .hobbys {
			opacity: 1;

			& .hobby:nth-child(1) {
				animation: hobbyAnimation 1s ease;
				& img {
					animation: hobbyAnimation 600ms ease;
				}
			}

			& .hobby:nth-child(2) {
				animation: hobbyAnimation 1s ease;
				& img {
					animation: hobbyAnimation 600ms ease 600ms;
				}
			}

			& .hobby:nth-child(3) {
				animation: hobbyAnimation 1s ease;
				& img {
					animation: hobbyAnimation 600ms ease 1200ms;
				}
			}

			& .hobby:nth-child(4) {
				animation: hobbyAnimation 1s ease;
				& img {
					animation: hobbyAnimation 600ms ease 1800ms;
				}
			}

			& .hobby:nth-child(5) {
				animation: hobbyAnimation 1s ease;
				& img {
					animation: hobbyAnimation 600ms ease 2400ms;
				}
			}
		}


	}

	@media screen and (max-width: 1440px) {
		width: 230px;
		height: 230px;
	}

	@media screen and (max-width: 600px) {
		max-width: 230px;
		max-height: 230px;
		width: 100%;
		height: 100%;
	}
`

const Avatar = styled(Image)`
	width: 300px;
	height: 300px;
	object-fit: cover;
	border-radius: 50%;

	@media screen and (max-width: 1440px) {
		width: 230px;
		height: 230px;
	}

	@media screen and (max-width: 600px) {
		width: 100%;
		height: 100%;
	}
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
	z-index: 2;
	background-color: #4B4547;
	text-decoration: none;
	transition: 300ms;

	& svg {
		width: 45px;
		height: 45px;
	}

	@media screen and (max-width: 1440px) {
		width: 50px;
		height: 50px;

		& svg {
		width: 35px;
		height: 35px;
	}
	}

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
	font-family: var(--font-unbounded-light);

	@media screen and (max-width: 1440px) {
		font-size: 20px;
	}

	@media screen and (max-width: 600px) {
		font-size: 14px;
	}
`

const Description = styled.p`
	font-size: 15px;
	margin-bottom: 5px;
	font-family: var(--font-unbounded-light);

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		font-size: 11px;
	}
`

const Role = styled.p`
	font-size: 15px;
	color: #AECD41;
	font-family: var(--font-unbounded-light);

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		font-size: 11px;
	}
`

const Hobbys = styled.div`
	background-color: #0808087f;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	opacity: 0;
`

const Hobby = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	& img {
		position: absolute;
		opacity: 0;
	}
`

const ImageHobby = styled(Image)``

export default Organiser