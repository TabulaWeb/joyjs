import{j as t}from"./index-U1U2PQ9J.js";import{n}from"./emotion-styled.browser.esm-C13BSpeX.js";import{k as l}from"./emotion-react.browser.esm-C02DPjVc.js";import{I as h}from"./icon-telegram-BiWiUEmk.js";import{C as x}from"./cursor-hover-CmVStndg.js";const g="/assets/tabula-avatar-BUrxkadE.png",b="/assets/kirill-org-avatar-v1Fth_x-.png",v="/assets/anna-msc-org-avatar-_r_wIDbp.png",f="/assets/maximSber-avatar-DXotsWlZ.png",y="/assets/viacheslav-avatar-DdF-W_v-.png",u="/assets/anna-org-avatar-CravmMsJ.png",w="/assets/alexander-org-avatar-BEQQAWBM.png",k="/assets/flina-avatar-DeMZ8ddy.png",o="/assets/icon-sport-BaB-K5CC.svg",i="/assets/icon-book-DK-eAN2y.svg",I="/assets/icon-box-C5c55OaT.svg",C="/assets/icon-rock-DLR52rVf.svg",j="/assets/icon-vine-DEUdrzOu.svg",c="/assets/icon-map-CTNpyAw_.svg",B="/assets/icon-code-Dcr1G_sz.svg",D="/assets/icon-callendar-BJ2cInUp.svg",a="/assets/icon-balance-CghfR_Us.svg",r="/assets/icon-design-DfMZijbq.svg",z="/assets/icon-life-BxOPwkXU.svg",A="/assets/icon-anime-C3jpX3Z2.svg",F="/assets/icon-game-BpNOmMaD.svg",U="/assets/icon-rap-CaO1OtmW.svg",R="/assets/icon-audio-book-BcX2k_63.svg",M="/assets/icon-people-code-DZJ2nkiX.svg",_="/assets/icon-micro-CpF2kQvY.svg",$="/assets/icon-cup-ULbSDcqT.svg",O="/assets/icon-tennis-BW7dJI7B.svg",S="/assets/icon-photo-OGVTCaY8.svg",T="/assets/icon-reptilia-CBOVK_lH.svg",N="/assets/icon-istet-B2W6007c.svg",E="/assets/icon-camping-DM2EynDy.svg",J="/assets/icon-sweet-BHbYmtkq.svg",W=[{avatar:g,name:"Алексей Табула",link:"https://t.me/webtabula",description:"Frontend dev",role:"Создатель JoyJS",hobby:[M,_,$,i,O]},{avatar:k,name:"Ирина Иванова",link:"https://t.me/iriflina13",description:"UX/UI Дизайнер",role:"",hobby:[o,S,T,a,N]},{avatar:b,name:"Кирилл Павлик",link:"https://t.me/shoom1337",description:"Frontend dev, Alfa",role:"",hobby:[]},{avatar:v,name:"Анна Ширяева",link:"https://t.me/it_wildlife",description:"Lead Frontend dev, SIBUR Digital",role:"",hobby:[B,D,a,r,z]},{avatar:f,name:"Максим Булавчиков",link:"https://t.me/maximjaks",description:"Frontend dev, Sber",role:"",hobby:[]},{avatar:y,name:"Вячеслав Завьялов",link:"https://t.me/idmxFrontend",description:"Frontend dev, Alfa",role:"",hobby:[A,F,U,R,c]},{avatar:u,name:"Анна Пахотина",link:"https://t.me/whataboutanna",description:"Frontend dev",role:"",hobby:[o,r,E,a,J]},{avatar:w,name:"Александр Кириллов",link:"https://t.me/Southpaw681",description:"Frontend dev, Гринатом",role:"",hobby:[i,I,C,j,c]}],ct=()=>t.jsxs(X,{className:"container",children:[t.jsx(H,{children:"Организаторы"}),t.jsx(K,{children:W.map((e,d)=>t.jsxs(L,{children:[t.jsxs(P,{children:[t.jsx(V,{src:e.avatar,width:230,height:230,alt:"avatar",loading:"lazy",decoding:"async",role:"presentation"}),t.jsx(Z,{href:e.link,name:"link to telegram","aria-label":"link to telegram",target:"_blank",children:t.jsx(h,{width:25,height:25,color:"#AFB2FF"})}),t.jsx(Y,{className:"hobbys",children:e.hobby.map((m,p)=>t.jsx(tt,{className:"hobby",children:t.jsx(nt,{src:m,loading:"lazy"})},p))})]}),t.jsx(q,{children:e.name}),t.jsx(G,{children:e.description}),t.jsx(Q,{children:e.role})]},d))})]}),s=l`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`,X=n.section`
	margin-bottom: 250px;

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`,H=n.h2`
	font-family: 'Unbounded-Regular';
	font-size: 80px;
	margin-bottom: 100px;

	@media screen and (max-width: 1024px) {
		font-size: 50px;
	}

	@media screen and (max-width: 600px) {
		font-size: 30px;
		margin-bottom: 75px;
	}
`,K=n.div`
	display: grid;
	justify-content: center;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 50px;

	@media screen and (max-width: 1150px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media screen and (max-width: 840px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 600px) {
		grid-template-columns: 1fr 1fr;
	}
`,L=n.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`,P=n.div`
	position: relative;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	margin-bottom: 25px;

	&:hover {
		& .hobbys {
			opacity: 1;

			& .hobby:nth-child(1) {
				animation: ${s} 1s ease;
				& svg {
					animation: ${s} 600ms ease;
				}
			}

			& .hobby:nth-child(2) {
				animation: ${s} 1s ease;
				& svg {
					animation: ${s} 600ms ease 600ms;
				}
			}

			& .hobby:nth-child(3) {
				animation: ${s} 1s ease;
				& svg {
					animation: ${s} 600ms ease 1200ms;
				}
			}

			& .hobby:nth-child(4) {
				animation: ${s} 1s ease;
				& svg {
					animation: ${s} 600ms ease 1800ms;
				}
			}

			& .hobby:nth-child(5) {
				animation: ${s} 1s ease;
				& svg {
					animation: ${s} 600ms ease 2400ms;
				}
			}
		}


	}

	@media screen and (max-width: 1440px) {
		width: 230px;
		height: 230px;
	}

	@media screen and (max-width: 600px) {
		max-width: 230px;
		max-height: 230px;
		width: 100%;
		height: 100%;
	}
`,V=n.img` 
	width: 300px;
	height: 300px;
	object-fit: cover;
	border-radius: 50%;

	@media screen and (max-width: 1440px) {
		width: 230px;
		height: 230px;
	}

	@media screen and (max-width: 600px) {
		width: 100%;
		height: 100%;
	}
`,Z=n.a`
	position: absolute;
	cursor: pointer;
	bottom: 10px;
	right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 65px;
	height: 65px;
	border-radius: 50%;
	z-index: 2;
	background-color: #4B4547;
	text-decoration: none;
	transition: 300ms;
	cursor: url(${x}), auto;

	& svg {
		width: 45px;
		height: 45px;
	}

	@media screen and (max-width: 1440px) {
		width: 50px;
		height: 50px;

		& svg {
		width: 35px;
		height: 35px;
	}
	}

	&:hover {
		transition: 300ms;
		background-color: #2C2C2C;

		& svg path {
			transition: 300ms;
			fill: #9496d3;
		}
	}
`,q=n.p`
	font-size: 20px;
	margin-bottom: 25px;
	font-family: 'Unbounded-Regular';

	@media screen and (max-width: 1440px) {
		font-size: 20px;
	}

	@media screen and (max-width: 600px) {
		font-size: 14px;
	}
`,G=n.p`
	font-size: 15px;
	margin-bottom: 5px;
	font-family: 'Unbounded-Regular';

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		font-size: 11px;
	}
`,Q=n.p`
	font-size: 15px;
	color: #AECD41;
	font-family: 'Unbounded-Regular';

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 600px) {
		font-size: 11px;
	}
`,Y=n.div`
	background-color: #0808087f;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;

	opacity: 0;
`,tt=n.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	& svg {
		position: absolute;
		opacity: 0;
	}
`,nt=n.img``;export{ct as default};
