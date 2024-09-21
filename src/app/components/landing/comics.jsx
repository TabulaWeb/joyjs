'use client'
import { useRef } from "react";
import Image from 'next/image';
import { styled } from '@linaria/react'
import { timepad } from '../../consts/urls'
import { IconEye } from '../icons/icon-eye'
import OneComics from '../../../assets/image/one-comics.png'
import TwoComics from '../../../assets/image/two-comics.png'
import ThreeComics from '../../../assets/image/three-comics.png'

const Comics = () => {
	const boundingRef = useRef(null);
	return <Main className='container'>
		<Images>
			<div className="flex flex-col [perspective:800px]">
				<div
					style={{
						transform: 'rotateX(var(--x-rotation)) rotateY(var(--y-rotation)) scale(1)',
					}}
					onMouseLeave={(ev) => {
						boundingRef.current = null
						ev.currentTarget.style.setProperty("--x-rotation", `${0}deg`);
						ev.currentTarget.style.setProperty("--y-rotation", `${0}deg`);
						ev.currentTarget.style.setProperty("--x", `${0 * 100}%`);
						ev.currentTarget.style.setProperty("--y", `${0 * 100}%`);
					}}
					onMouseEnter={(ev) => {
						boundingRef.current = ev.currentTarget.getBoundingClientRect();
					}}
					onMouseMove={(ev) => {
						if (!boundingRef.current) return;
						const x = ev.clientX - boundingRef.current.left;
						const y = ev.clientY - boundingRef.current.top;
						const xPercentage = x / boundingRef.current.width;
						const yPercentage = y / boundingRef.current.height;
						const xRotation = (xPercentage - 0.5) * 25;
						const yRotation = (0.5 - yPercentage) * 25;

						ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
						ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
						ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
						ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
					}}
					className="group relative grid w-[260px] grid-rows-[200px_120px_40px] rounded-md bg-[#FFFEEC] p-4 text-[#01A977] transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1)]"
				>
          <div className="ml-auto w-12">
						<ImageSlide
							width={565}
							height={565}
							role='img'
							src={OneComics} 
							alt='вторая картинка комикса' 
							loading='lazy'
						/>
          </div>
        <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
				</div>
			</div>

			<div className="flex flex-col [perspective:800px]">
				<div
					style={{
						transform: 'rotateX(var(--x-rotation)) rotateY(var(--y-rotation)) scale(1)',
					}}
					onMouseLeave={(ev) => {
						boundingRef.current = null
						ev.currentTarget.style.setProperty("--x-rotation", `${0}deg`);
						ev.currentTarget.style.setProperty("--y-rotation", `${0}deg`);
						ev.currentTarget.style.setProperty("--x", `${0 * 100}%`);
						ev.currentTarget.style.setProperty("--y", `${0 * 100}%`);
					}}
					onMouseEnter={(ev) => {
						boundingRef.current = ev.currentTarget.getBoundingClientRect();
					}}
					onMouseMove={(ev) => {
						if (!boundingRef.current) return;
						const x = ev.clientX - boundingRef.current.left;
						const y = ev.clientY - boundingRef.current.top;
						const xPercentage = x / boundingRef.current.width;
						const yPercentage = y / boundingRef.current.height;
						const xRotation = (xPercentage - 0.5) * 25;
						const yRotation = (0.5 - yPercentage) * 25;

						ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
						ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
						ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
						ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
					}}
					className="group relative grid w-[260px] grid-rows-[200px_120px_40px] rounded-md bg-[#FFFEEC] p-4 text-[#01A977] transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1)]"
				>
          <div className="ml-auto w-12">
						<ImageSlide 
							width={565}
							height={565}
							role='img'
							src={TwoComics} 
							alt='вторая картинка комикса' 
							loading='lazy'
						/>
          </div>
        <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
				</div>
			</div>
			
			<div className="flex flex-col [perspective:800px]">
				<div
					style={{
						transform: 'rotateX(var(--x-rotation)) rotateY(var(--y-rotation)) scale(1)',
					}}
					onMouseLeave={(ev) => {
						boundingRef.current = null
						ev.currentTarget.style.setProperty("--x-rotation", `${0}deg`);
						ev.currentTarget.style.setProperty("--y-rotation", `${0}deg`);
						ev.currentTarget.style.setProperty("--x", `${0 * 100}%`);
						ev.currentTarget.style.setProperty("--y", `${0 * 100}%`);
					}}
					onMouseEnter={(ev) => {
						boundingRef.current = ev.currentTarget.getBoundingClientRect();
					}}
					onMouseMove={(ev) => {
						if (!boundingRef.current) return;
						const x = ev.clientX - boundingRef.current.left;
						const y = ev.clientY - boundingRef.current.top;
						const xPercentage = x / boundingRef.current.width;
						const yPercentage = y / boundingRef.current.height;
						const xRotation = (xPercentage - 0.5) * 25;
						const yRotation = (0.5 - yPercentage) * 25;

						ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
						ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
						ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
						ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
					}}
					className="group relative grid w-[260px] grid-rows-[200px_120px_40px] rounded-md bg-[#FFFEEC] p-4 text-[#01A977] transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1)]"
				>
          <div className="ml-auto w-12">
						<ImageSlide 
							width={565}
							height={565}
							role='img'
							src={ThreeComics} 
							alt='третья картинка комикса' 
							loading='lazy'
						/>
          </div>
        <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
				</div>
			</div>
		</Images>
		
		<Button
				href={timepad}
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

const ImageSlide = styled(Image)`
	width: 100%;
	height: auto;
`

const Button = styled.a`
	height: 110px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: var(--font-unbounded-medium);
	color: #080808;
	font-size: 25px;
	gap: 10px;
	padding: 0 10px;
	max-width: 750px;
	width: 100%;
	background-color: #AFB2FF;
	border-radius: 100px;
	border: none;
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

	@media screen and (max-width: 1440px) {
		font-size: 20px;
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

export default Comics