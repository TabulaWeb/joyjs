'use client'

import Image from 'next/image'
import { styled } from '@linaria/react'
import ImageSmile from './image/smile.png'

export default function Loading() {
	return (
		<Main>
			<Smile 
				src={ImageSmile}
				alt='smile'
				role='img'
				width={200}
				height={200}
			/>
		</Main>
	)
}

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100dvh;
	height: 100dvh;
`

const Smile = styled(Image)`
	@keyframes blob {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	animation: blob 1s ease;
`