import AlexanderChernov from '../../../../image/chernov-avatar.png'
import LogoAlfa from '../../../../image/logo-alfa.png'

import GrishaAvatar from '../../../../image/grisha-avatar.png'
import SberLogo from '../../../../image/logo-sber.png'

import CelkinAvatar from '../../../../image/celkin-avatar.png'
import TbankLogo from '../../../../image/tbank-logo.png'

import SerafimaAvatar from '../../../../image/serafima-avatar.png'
import SelfLogo from '../../../../image/self-logo.png'

import GoshaAvatar from '../../../../image/gosha-avatar.png'
import SiburLogo from '../../../../image/sibur-logo.png'

export const programs = [
	{
		"id": 1,
		"time": "13:30 — 14:00",
		"title": "СБОР УЧАСТНИКОВ",
		"description": "<span>Встречаемся в креативном пространстве \"Лофт\". <a href='https://yandex.ru/maps/org/loft/4353360720/?ll=28.344192,57.810261&z=15' target='_blank'>Спортивная ул., 1Б.</a> Чтобы занять лучшие места стоит прийти пораньше.</span>",
		"speaker" : {}
	},
	{
		"id": 2,
		"time": "14:00 — 14:10",
		"title": "WELCOME",
		"description": "",
		"speaker" : {}
	},
	{
		"id": 3,
		"time": "14:10 — 14:40",
		"title": "Вам не нужен сложный фронтенд",
		"description": "Узнаете, как малому бизнесу и начинающим разработчикам запускать продукты, без огромных команд. Разберём реальные кейсы, бесплатные инструменты и готовые решения. Поговорим о том, как быстро запускать MVP и фокусироваться на действительно полезных навыках, избегая “вечного обучения” и выгорания.",
		"speaker" : {
			"avatar": AlexanderChernov,
			"company": LogoAlfa,
			"name": "Чернов Александр",
			"description": "Frondend разработчик / Альфа-Банк"
		}
	},
	{
		"id": 4,
		"time": "14:45 — 15:15",
		"title": "Мой опыт с мини-приложениями ВКонтакте и Telegram",
		"description": `
		Расскажу о моем двух летнем опыте создания мини-приложений во ВКонтакте и Телеграме.
- Сколько аудитории можно привлечь в приложения.
- Можно ли вообще заработать на них?
- Объясню, почему мини-приложения крутой старт для новичков в IT.
- Поведаю о проблемах, комиссиям и ограничениях.
`,
		"speaker" : {
			"avatar": GrishaAvatar,
			"company": SberLogo,
			"name": "Гаврилов Григорий",
			"description": "Руководитель направления разработки / Сбер"
		}
	},
	{
		"id": 5,
		"time": "15:20 — 15:50",
		"title": "Перерыв",
		"description": "Кофе-брейк",
		"speaker" : {}
	},
	{
		"id": 6,
		"time": "15:50 — 16:20",
		"title": "Доклад о погружении в разработку по TBD",
		"description": "Расскажу как я почти пришел к TBD, пытаясь решить проблемы, возникающие в процессе разработки. Потом посмотрим что нужно для перехода на примере «что будет если мы просто начнем любые правки вливать в мастер»",
		"speaker" : {
			"avatar": CelkinAvatar,
			"company": TbankLogo,
			"name": "Целикин Максим",
			"description": "Frondend разработчик / Т-Банк"
		}
	},
	{
		"id": 7,
		"time": "16:25 — 16:55",
		"title": "Путь от джуна до сеньора - путь самурая",
		"description": "Поговорим с вами о пути развития от первых профессиональных успехов до реального мастерства. Обсудим практические лайфхаки по ускорению процесса получения опыта.",
		"speaker" : {
			"avatar": GoshaAvatar,
			"company": SiburLogo,
			"name": "Георгий Журавлёв",
			"description": "Ex-Цифровой Сибур"
		}
	},
	{
		"id": 9,
		"time": "17:00 — 17:40",
		"title": "Что делать, если вас бесят разработчики",
		"description": "Таким вопросом задаются многие менеджеры. Как и аналогичным вопросом про менеджеров — многие разработчики. Но всем нам нужно находить общий язык, чтобы продуктивно совместно работать. Серафима расскажет, как подобрать ключи к самым острым конфликтам между менеджерами и разработчиками.",
		"speaker" : {
			"avatar": SerafimaAvatar,
			"company": SelfLogo,
			"name": "<a href='https://t.me/Serafima_Chekulaeva' target='_blank'>Серафима Чекулаева</a>",
			"description": "CEO / <a href='https://t.me/self_community_it' target='_blank'>self.</a> — айти-сообщества про карьеру; Карьерный ментор для айтишников; Руководитель продукта; ex-VK Музыка, Тинькофф, Яндекс"
		}
	},
	{
		"id": 10,
		"time": "17:45 — 17:55",
		"title": "Завершение",
		"description": "Заключительное слово организаторов JoyJS",
		"speaker" : {}
	},
	{
		"id": 11,
		"time": "18:25",
		"title": "сидр на фесте ЛЕШУГА",
		"description": "По желанию, после докладов дружно пойдем на фестестиваль яблок, урожая и традиционных напитков, чтобы продолжить знакомства и общение со стаканчиком освежаещего.<a href='https://yandex.ru/maps/-/CHdmRB8c' target='_blank'>Парк Куопио (Финский парк)</a>",
		"speaker" : {}
	}
]