'use client'

import Image from 'next/image'
import { styled } from '@linaria/react'
import ImageSmile from '../image/smile.png'

export default function Loading() {
	return (
		<Main>
			<Smile 
				src={ImageSmile}
				priority={true}
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
	width: 100%;
	height: 100dvh;
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
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