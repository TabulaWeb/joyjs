import styled from '@emotion/styled'
import { IconNetwork } from '../icons/icon-network'
import { IconStar } from '../icons/icon-star'
import { IconLaptop } from '../icons/icon-laptop'
import { IconCursor } from '../icons/icon-cursor'
import Sketch from '../../assets/image/sketch.png'

export const Idea = () => {
	return <Main className='container'>
		<Keywords className='left'>
			<Keyword>Митап</Keyword>
			<Keyword>Знания</Keyword>
			<Keyword>Доклады</Keyword>
			<Keyword>
				<IconContainer className='cursor'>
					<IconCursor />
				</IconContainer>
				Презентации
			</Keyword>
		</Keywords>

		<Keywords className='right'>
			<Keyword>
				<IconContainer className='networker'>
					<IconNetwork />
				</IconContainer>
				Нетворкинг
			</Keyword>
			<Keyword>
				<IconContainer className='star'>
					<IconStar />
				</IconContainer>	
				Опыт
			</Keyword>
			<Keyword>Спикеры</Keyword>
			<Keyword>
				<IconContainer className='laptop'>
					<IconLaptop />
				</IconContainer>
				IT
			</Keyword>
		</Keywords>

		<MascotImage
			src={Sketch}
			alt='mascot'
		/>
	</Main>
}

const Main = styled.section`
	position: relative;
	display: flex;
	justify-content: space-between;
	margin-bottom: 150px;
`

const Keywords = styled.div`
	display: flex;
	flex-direction: column;
	gap: 60px;
	font-size: 7vw;

	&.left {
		text-align: left;
	}

	&.right {
		text-align: right;
		margin-left: -100%;

		& p {
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}

	@media screen and (min-width: 1400px) {
		font-size: 100px;
	}
`

const Keyword = styled.p`
	font-family: 'Unbounded-ExtraLight';
	position: relative;
`

const IconContainer = styled.span`

	width: 165px;
	height: 165px;

	&.cursor {
		position: absolute;
		left: 12%;
		top: 65%;
	}
	
	&.networker {
		position: absolute;
		right: calc(100% + 10px);
	}
	
	&.star {
		position: absolute;
		right: 43%;
	}

	&.laptop {
		position: absolute;
		right: 17%;
	}
`

const MascotImage = styled.img`
	position: absolute;
	left:0;
  right:0;
	margin: 0 auto;
	bottom: -65px;
	width: 600px;

	@media screen and (max-width: 1400px) {
		width: 500px;
	}
`