import { styled } from '@linaria/react'
import Link from 'next/link'

export default function NotFound () {
	return <Main>
		<h1>Такой страницы нет</h1>
		<Link href='/'>вернуться назад</Link>
	</Main>
}

const Main = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100dvh;
	align-items: center;
	flex-direction: column;
	gap: 10px;


	& h1 {
		font-family: var(--font-unbounded-light);
	}

	& a {
		color: #AFB2FF;
		text-decoration: none;
	}
`