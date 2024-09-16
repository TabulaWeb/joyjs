import styled from '@emotion/styled'
import { IconEye } from '../icons/icon-eye'
import OneComics from '../../assets/image/one-comics.png'
import TwoComics from '../../assets/image/two-comics.png'
import ThreeComics from '../../assets/image/three-comics.png'

export const Comics = () => {
	return <Main className='container'>
		<Images>
			<Image src={OneComics} alt='первая картинка комикса' loading='lazy'/>
			<Image src={TwoComics} alt='вторая картинка комикса' loading='lazy'/>
			<Image src={ThreeComics} alt='третья картинка комикса' loading='lazy'/>
		</Images>
		
		<Button
				href='/'
				name='link to register'
				aria-label='Go to register page'
			>
				<IconEye 
					width={44}
					height={44}
					color='#080808'
				/>
				<span>Посетить встречу</span>
		</Button>
	</Main>
}

const Main = styled.section`
	margin-bottom: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 75px;

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`

const Images = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;

	@media screen and (max-width: 1024px) {
		grid-template-columns: 415px 415px 415px;
		overflow-x: auto;
		width: 100%;
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`

const Image = styled.img`
	width: 100%;
`

const Button = styled.a`
	height: 110px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Unbounded-Medium';
	color: #080808;
	font-size: 25px;
	gap: 10px;
	padding: 0 10px;
	max-width: 865px;
	width: 100%;
	background-color: #AFB2FF;
	border-radius: 100px;
	border: none;
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
		height: 80px;
		width: -webkit-fill-available;
		font-size: 17px;

		& svg {
			width: 35px;
			height: 35px;
		}
	}
`