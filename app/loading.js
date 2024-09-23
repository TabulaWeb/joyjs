'use client'
import Image from 'next/image'
import ImageSmile from '@/image/smile.png'

export default function Loading () {
	return (
		<div>
			<Image
				src={ImageSmile}
				width={200}
				height={200}
				priority={true}
				alt='smile'
			/>
		</div>
	)
}