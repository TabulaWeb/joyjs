'use client'
import { styled } from '@linaria/react'
import Image from 'next/image'
import ImageSmile from '@/image/smile.png'

export default function Loading () {
	return (
		<Main>
			<ImageSmileStyle
				src={ImageSmile}
				width={200}
				height={200}
				priority={true}
				alt='smile'
			/>
		</Main>
	)
}

const Main = styled.div`
	height: 100dvh;
	width: 100%;
	background-color: #080808;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 10;
	top: 0;
	left: 0;
`

const ImageSmileStyle = styled(Image)`
	@keyframes blob {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

	animation: blob 2s;
`