import{j as t}from"./index-U1U2PQ9J.js";import{n as e}from"./emotion-styled.browser.esm-C13BSpeX.js";import{I as s}from"./icon-telegram-BiWiUEmk.js";import{t as i}from"./urls-DVd1hOb_.js";import{C as l}from"./cursor-hover-CmVStndg.js";const m=({width:n=80,height:a=80,color:o="#080808"})=>t.jsx("svg",{width:n,height:a,viewBox:"0 0 80 80",fill:"none",children:t.jsx("path",{d:"M21.4841 5.219C20.0154 5.85963 19.5466 7.844 20.5779 9.07838C21.406 10.0628 19.9529 10.0003 44.2497 10.0003H66.4841L35.8279 40.6565C8.406 68.1096 5.17162 71.3909 5.07787 71.9065C4.906 72.8596 5.12475 73.594 5.76537 74.2346C6.406 74.8753 7.14037 75.094 8.0935 74.9221C8.60912 74.8284 11.8904 71.594 39.3279 44.1721L69.9997 13.5159L70.031 35.969C70.0779 58.3596 70.0779 58.4221 70.406 58.844C71.0154 59.6721 71.5154 59.9221 72.4997 59.9221C73.4841 59.9221 73.9841 59.6721 74.5935 58.844L74.9216 58.4221V32.5003V6.57838L74.5935 6.1565C74.4216 5.92213 74.0779 5.57838 73.8435 5.4065C73.4216 5.07838 73.406 5.07838 47.6872 5.04713C26.531 5.01588 21.8748 5.04713 21.4841 5.219Z",fill:o})}),w=()=>t.jsxs(x,{className:"container",children:[t.jsx(h,{children:"Знакомство со спикерами и больше инфы о митапе публикуем в TG. Подписывайся, чтобы не пропустить"}),t.jsxs(d,{children:[t.jsx(r,{href:i.chennal,className:"telegram",name:"link to telegram","aria-label":"link to telegram",target:"_blank",children:t.jsx(s,{width:80,height:80,color:"#AFB2FF"})}),t.jsx(r,{href:i.chennal,name:"link to telegram","aria-label":"link to telegram",target:"_blank",children:t.jsx(m,{width:80,height:80,color:"#080808"})})]})]}),x=e.section`
	display: flex;
	flex-direction: column;
	max-width: 550px;
	width: 100%;
	gap: 25px;
	margin-left: auto;
	margin-right: 12%;
	margin-bottom: 250px;

	@media screen and (max-width: 1024px) {
		margin-right: 0;
		max-width: 495px;
	}

	@media screen and (max-width: 600px) {
		gap: 15px;
		margin-left: 0;
		max-width: 360px;
		margin-right: auto;
		margin-bottom: 200px;
	}
`,h=e.p`
	font-family: 'Unbounded-Regular';
	font-size: 15px;
	color: '#FAFAFA';

	@media screen and (max-width: 600px) {
		font-size: 14px;
	}
`,d=e.nav`
	display: flex;
`,r=e.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 150px;
	height: 150px;
	background-color: #AFB2FF;
	border-radius: 50%;
	text-decoration: none;
	transition: 300ms;
	cursor: url(${l}), auto;

	&:hover {
		transition: 300ms;
    background-color: #9496D3;
	}

	&.telegram {
		background-color: #4B4547;
		& svg {
			width: 100px;
			height: 100px;
		}

		&:hover {
			transition: 300ms;
			background-color: #2C2C2C;

			& svg path {
				transition: 300ms;
				fill: #9496d3;
			}
		}
	}

	& svg {
		width: 60px;
		height: 60px;
	}

	@media screen and (max-width: 600px) {
		width: 100px;
		height: 100px;

		&.telegram {
			& svg {
				width: 70px;
				height: 70px;
			}
		}

		& svg {
			width: 40px;
			height: 40px;
		}
	}
`;export{w as default};
