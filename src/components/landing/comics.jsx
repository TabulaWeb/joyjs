import styled from '@emotion/styled'
import { IconEye } from '../icons/icon-eye'
import OneComics from '../../assets/image/one-comics.png'
import TwoComics from '../../assets/image/two-comics.png'
import ThreeComics from '../../assets/image/three-comics.png'

export const Comics = () => {
	return <Main className='container'>
		<Images>
			<Image src={OneComics}/>
			<Image src={TwoComics}/>
			<Image src={ThreeComics}/>
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
`

const Images = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
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
`