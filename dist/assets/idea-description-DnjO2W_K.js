import{j as n}from"./index-U1U2PQ9J.js";import{n as t}from"./emotion-styled.browser.esm-C13BSpeX.js";import{I as o}from"./icon-eye-DWTV8nJL.js";import{I as a}from"./icon-telegram-BiWiUEmk.js";import{a as s,t as d}from"./urls-DVd1hOb_.js";import{C as l}from"./cursor-hover-CmVStndg.js";const u=()=>n.jsxs(x,{className:"container",children:[n.jsxs(i,{children:["На нашем митапе тебя ждёт программа с четырьмя докладами от экспертов.",n.jsx("br",{}),"В перерывах между выступлениями будет отличная возможность пообщаться, обменяться",n.jsx("br",{})," идеями и завести новые знакомства."]}),n.jsxs(i,{className:"subDescription",children:["Мы уверены, что каждый найдет что-то для себя и уйдет с ценными инсайтами",n.jsx("br",{}),"и позитивными эмоциями. Независимо от грейда, ждем с нетерпением на Joy.JS!"]}),n.jsxs(p,{children:[n.jsxs(r,{href:s,target:"_blank",name:"link to register","aria-label":"link to telegram",isFilled:!0,children:[n.jsx(o,{color:"#0F1215"}),n.jsx("span",{children:"Посетить встречу"})]}),n.jsxs(r,{href:d.chennal,name:"link to telegram",target:"_blank","aria-label":"link to telegram",children:[n.jsx(a,{color:"#AFB2FF"}),n.jsx("span",{children:"Движухи и анонсы"})]})]})]}),x=t.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 250px;

	@media screen and (max-width: 600px) {
		margin-bottom: 200px;
	}
`,i=t.p`
	font-family: 'Unbounded-Regular';
	font-size: 15px;
	text-align: center;
	margin-bottom: 25px;
	line-height: 22px;

	&.subDescription {
		margin-bottom: 75px;
	}

	@media screen and (max-width: 1440px) {
		font-size: 14px;
	}

	@media screen and (max-width: 840px) {
		br {
			display: none;
		}
	}

	@media screen and (max-width: 600px) {
		text-align: left;
		&.subDescription {
			margin-bottom: 50px;
		}
	}
`,p=t.div`
	display: flex;
	gap: 25px;

	@media screen and (max-width: 600px) {
		width: 100%;
		flex-direction: column;
		gap: 15px;
	}
`,r=t.a`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 7.5px;
	height: 60px;
	padding: 0 30px;
	border-radius: 100px;
	border: none;
	font-weight: 500;
	font-size: 15px;
	font-family: 'Unbounded-Medium';
	background-color: ${({isFilled:e})=>e?"#AFB2FF":"#212121"};
	color: ${({isFilled:e})=>e?"#212121":"#AFB2FF"};
	cursor: pointer;
	text-decoration: none;
	transition: 300ms;

	border: ${({isFilled:e})=>e?"":"1px solid #AFB2FF"};
	cursor: url(${l}), auto;
	
	&:hover {
		transition: 300ms;
		border-color: #9496D3;
		background-color: ${({isFilled:e})=>e?"#9496D3":""};
		border: ${({isFilled:e})=>e?"":"1px solid #9496D3"};
		& svg path {
			fill:  ${({isFilled:e})=>e?"#080808":"#9496D3"};
		}

		& span {
			color: ${({isFilled:e})=>e?"#080808":"#9496D3"};
		}
	}

	@media screen and (max-width: 1440px) {
		font-size: 14px;
		padding: 0 25px;

		& svg {
			width: 30px;
			height: 30px;
		}
	}

	@media screen and (max-width: 600px) {
		height: 54px;
	}
`;export{u as default};
