import{r as d,j as t}from"./index-U1U2PQ9J.js";import{n as a}from"./emotion-styled.browser.esm-C13BSpeX.js";import{k as n}from"./emotion-react.browser.esm-C02DPjVc.js";import{C as p}from"./cursor-hover-CmVStndg.js";import{I as r}from"./code-M3B8L8xr.js";const x="/assets/loft-DAn4ShdQ.png",c="/assets/smile-BuxZSJCN.png",h="/assets/mascot-kIyEEa_p.png",l="/assets/camera-D-LCG-if.png",Y=()=>{const[i,s]=d.useState(0);return d.useEffect(()=>{let o;return i<5&&(o=setTimeout(()=>{s(m=>m+1)},100)),()=>clearInterval(o)},[i]),t.jsxs(w,{className:"container",children:[t.jsxs(v,{children:["Велком на первый в Пскове Frontend Meetup! 4 доклада от крутых спикеров, нетворкинг",t.jsx("br",{}),t.jsxs("span",{className:"beer-container",children:["и пиво ",t.jsx("span",{className:"beer"})]})]}),t.jsxs(y,{children:[t.jsx(b,{className:i>=3&&"active",src:x,alt:"loft logo",loading:"lazy",decoding:"async",role:"presentation",width:140,height:140}),t.jsx(j,{className:i>=1&&"active",src:c,alt:"smile",loading:"lazy",decoding:"async",role:"presentation",width:140,height:140}),t.jsx(I,{className:i>=5&&"active",src:r,alt:"code",loading:"lazy",decoding:"async",role:"presentation",width:140,height:140}),t.jsx(z,{className:i>=2&&"active",src:h,alt:"mascot",loading:"lazy",decoding:"async",role:"presentation",width:240,height:141}),t.jsx(Z,{className:i>=4&&"active",src:l,alt:"camera",loading:"lazy",decoding:"async",role:"presentation",width:140,height:140}),t.jsxs(u,{children:[t.jsx("span",{children:"Joy"})," ",t.jsx("span",{children:".JS"})]})]})]})},e=n`
	0% {
		opacity: 0;
		transform: scale3d(.3, .3, .3);
	}

	50% {
		opacity: 1;
	}
`,w=a.section``,g=n`
	0% {
		transform: rotateZ(0) translateX(20px);
	}
	30% {
		transform: rotateZ(0) translateX(0);
	}
	50% {
		transform: rotateZ(-15deg) translateX(-10px);
	}
	70% {
		transform: rotateZ(0) translateX(0);
	}
	100% {
		transform: rotateZ(0) translateX(20px);
	}
`,f=n`
	0% {
		transform: rotateZ(0) rotateY(180deg) translateX(20px);
	}
	30% {
		transform: rotateZ(0) rotateY(180deg) translateX(0);
	}
	50% {
		transform: rotateZ(15deg) rotateY(180deg) translateX(-10px);
	}
	70% {
		transform: rotateZ(0) rotateY(180deg) translateX(0);
	}
	100% {
		transform: rotateZ(0) rotateY(180deg) translateX(20px);
	}
`,v=a.h2`
	font-family: 'Unbounded-Light';
	font-weight: 400;
	max-width: 390px;
	line-height: 22px;
	margin-bottom: 50px;
	font-size: 14px;;

	& span {
		position: relative;
		opacity: 0.5;
		& .beer {
			opacity: 1;
		}
	}

	& .beer-container:hover {
		cursor: url(${p}), auto;
		& .beer {
			opacity: 1;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			position: absolute;
			left: 10px;
			top: 40px;
			&:before,
			&:after {
				content: "🍺";
				font-size: 50px;
			}
			&:before {
				animation: ${f} 3s ease infinite;
			}
			&:after {
				animation: ${g} 3s ease infinite;
			}
		}
	}

	@media screen and (max-width: 1024px) {
		max-width: 400px;
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		margin-bottom: 117px;
	}
`,y=a.div`
	position: relative;
	margin-bottom: 179px;

	@media screen and (max-width: 600px) {
		margin-bottom: 140px;
	}
`,u=a.h1`
	font-family: 'YapariTrial-SemiBold';
	font-size: 15.7vw;

	@media screen and (min-width: 1400px) {
		font-size: 223px;
	}

	@media screen and (max-width: 1024px) {
		display: block;
		margin: 0 auto;
		width: min-content;
		font-size: 27vw;
		text-align: left;
	}

	@media screen and (max-width: 600px) {
		width: auto;
		font-size: 30vw;
	}
`,b=a.img`
	position: absolute;
	width: 140px;
	height: auto;
	top: 63%;
	left: 0;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${e} 500ms ease-in-out;
		opacity: 1;
	}

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(90px, 9dvw, 140px);
	}

	@media screen and (max-width: 1024px) {
		top: 25%;
		rotate: -30deg;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(90px, 13dvw, 140px);
	}

	@media screen and (max-width: 600px) {
		top: -30%;
		left: inherit;
		right: -5%;
		rotate: 10deg;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(90px, 24dvw, 140px);
	}
`,j=a.img`
	position: absolute;
	width: 140px;
	height: auto;
	left: 18.5%;
	top: -5px;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${e} 500ms ease-in-out;
		opacity: 1;
	}
	

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(90px, 9dvw, 140px);
	}

	@media screen and (max-width: 1024px) {
		top: 5%;
		left: 43%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(90px, 13dvw, 140px);
	}

	@media screen and (max-width: 600px) {
		top: -27%;
		left: 0;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(90px, 24dvw, 140px);
	}
`,I=a.img`
	width: 120px;
	height: auto;
	position: absolute;
	rotate: 30deg;
	left: 41%;
	top: 28%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${e} 500ms ease-in-out;
		opacity: 1;
	}

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(90px, 9dvw, 140px);
	}

	@media screen and (max-width: 1024px) {
		top: 15%;
		left: inherit;
		right: 10%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(90px, 13dvw, 140px);
	}

	@media screen and (max-width: 600px) {
		top: inherit;
		bottom: 5%;
		right: -5%;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(90px, 24dvw, 140px);
	}
`,z=a.img`
	position: absolute;
	width: 240px;
	height: auto;
	right: 22%;
	top: -30%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${e} 500ms ease-in-out;
		opacity: 1;
	}

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(200px, 20dvw, 275px);
	}

	@media screen and (max-width: 1024px) {
		top: inherit;
		bottom: 38%;
		left: 15%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(200px, 28dvw, 275px);
	}

	@media screen and (max-width: 600px) {
		left: 0;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(200px, 46dvw, 275px);
	}
`,Z=a.img`
	position: absolute;
	width: 140px;
	height: auto;
	rotate: -30deg;
	right: -1px;
	top: 48%;
	opacity: 0;

	&.active {
		transition: 500ms;
		animation: ${e} 500ms ease-in-out;
		opacity: 1;
	}
	

	@media (min-width: 1025px) and (max-width: 1400px) {
		width: clamp(90px, 9dvw, 140px);
	}

	@media screen and (max-width: 1024px) {
		top: inherit;
		bottom: 5%;
		right: 20%;
	}

	@media (min-width: 601px) and (max-width: 1024px) {
		width: clamp(90px, 13dvw, 140px);
	}

	@media screen and (max-width: 600px) {
		bottom: -20%;
		right: 0;
	}

	@media (min-width: 300px) and (max-width: 600px) {
		width: clamp(90px, 24dvw, 140px);
	}
`;export{Y as default};
