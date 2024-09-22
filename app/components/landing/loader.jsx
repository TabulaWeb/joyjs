import { styled } from '@linaria/react'
import ImageSmile from '../../image/smile.png'

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

const IconSmile = styled.img`
	@keyframes blob {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	width: 200px;
	height: 200px;
	animation: blob 1s ease;
`


