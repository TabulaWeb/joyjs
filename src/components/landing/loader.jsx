import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import ImageSmile from '../../assets/image/smile.png'

export const Loader = () => {
	return <Main>
		<IconSmile 
			src={ImageSmile}
			alt='smile'
			loading='lazy'
		/>
	</Main>
}

const Main = styled.div`
	width: 100dvw;
	height: 100dvh;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 1;
	background-color: #080808;
	transition: 300ms;
`

const blob = keyframes`
	0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
`

const IconSmile = styled.img`
	width: 200px;
	height: 200px;
	animation: ${blob} 1s ease;
`


