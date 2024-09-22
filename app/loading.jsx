import { styled } from '@linaria/react'

export default function Loading() {
	return (
		<Main>ЗАГРУЗКА....</Main>
	)
}

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100dvh;
	height: 100dvh;
`