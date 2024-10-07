import MaxMolchanov from '../../../../image/molchanov-avatar.png'
import LogoSoftGamings from '../../../../image/logo-soft-gamings.png'

import GrishaAvatar from '../../../../image/grisha-avatar.png'
import SberLogo from '../../../../image/logo-sber.png'

import TimurAvatar from '../../../../image/timur-avatar.png'
import LogoSamokat from '../../../../image/logo-samokat.png'

import AlexanderAvatar from '../../../../image/alexander-avatar.png'
import LogoGas from '../../../../image/logo-gas.png'

export const programs = [
	{
		"id": 1,
		"time": "18:00 — 18:30",
		"title": "СБОР УЧАСТНИКОВ",
		"description": "<span>Встречаемся в креативном пространстве \"Лофт\". <a href='https://yandex.ru/maps/org/loft/4353360720/?ll=28.344192,57.810261&z=15' target='_blank'>Спортивная ул., 1Б.</a> Чтобы занять лучшие места стоит прийти пораньше.</span>",
		"speaker" : {}
	},
	{
		"id": 2,
		"time": "18:30 — 18:40",
		"title": "WELCOME",
		"description": "",
		"speaker" : {}
	},
	{
		"id": 3,
		"time": "18:40 — 19:05",
		"title": "Вход в профессию разработчика. Путь <s>самурая</s> Сеньора",
		"description": "Максим расскажет о том, как, по мнению сеньора, начать свой путь в качестве Web-разработчика. На что стоит обратить внимание в первые месяцы, а что лучше изучать уже более подготовленным, чтобы не упустить важные детали и не потерять время. Какие скилы важны в работе и как они влияют на грейд. Какие грейды приняты в индустрии, чем отличаются и как их достигать. Три схемы развития: web, backoffice и full-stack разработчик, чем они отличаются и какая может подойти именно вам. Можно ли объединить эти схемы в одну и стать очень востребованным специалистом. Какие ошибки обычно совершают новички и советы как их избежать.",
		"speaker" : {
			"avatar": MaxMolchanov,
			"company": LogoSoftGamings,
			"name": "Максим Молчанов",
			"description": "Руководитель отдела фронтенд разработки / SoftGamings"
		}
	},
	{
		"id": 4,
		"time": "19:05 — 19:30",
		"title": "Поэтапное построение RAG GigaChat системы на JS",
		"description": "Григорий расскажет о создании Gigachat со своими данными. Покажет самую простую версию системы в 20 строк кода. В рамках доклада пройдемся по внутренней работе системы и способам улучшения. Затронем работу векторных баз данных, моделей эмбендингов и способов взаимодействия с LLM.",
		"speaker" : {
			"avatar": GrishaAvatar,
			"company": SberLogo,
			"name": "Гаврилов Григорий",
			"description": "Руководитель направления разработки / Сбер"
		}
	},
	{
		"id": 5,
		"time": "19:30 — 19:55",
		"title": "Перерыв",
		"description": "Кофе-брейк",
		"speaker" : {}
	},
	{
		"id": 7,
		"time": "19:55 — 20:20",
		"title": "Отрисовка отзывчивых графиков на базе Echarts",
		"description": "Александр расскажет, как они с командой выбирали инструмент, чтобы избежать необходимости его замены в будущем при появлении дополнительных требований. Объяснит, почему они стали сторонниками Echarts. Углубится в детали и опишет его преимущества.",
		"speaker" : {
			"avatar": AlexanderAvatar,
			"company": LogoGas,
			"name": "Александр Крючков",
			"description": "Ведущий разработчик / Газпромнефть - Цифровые решения"
		}
	},
	{
		"id": 6,
		"time": "20:20 — 20:45",
		"title": "Постоянные путешествия и фуллтайм работа: как я сделал невозможное возможным",
		"description": "Тимур расскажет как провел год без работы, путешествуя и отдыхая, а иногда неделями глядя в одну точку на потолке. В своём докладе он поделится как длительный период безделья может повлиять на ваше эмоциональное состояние, креативность и вдохновение. Он расскажет о том, как отдых и свободное время могут оказать положительное воздействие на нашу жизнь и работу (а иногда могут оказать совершенно противоположный эффект).",
		"speaker" : {
			"avatar": TimurAvatar,
			"company": LogoSamokat,
			"name": "Тимур Гафиулин",
			"description": "Frontend техлид / ecom.tech "
		}
	},
	{
		"id": 8,
		"time": "20:45 — 20:50",
		"title": "Закрытие",
		"description": "",
		"speaker" : {}
	},
	{
		"id": 9,
		"time": "21:00",
		"title": "АФТЕРПАТИ",
		"description": "Продолжаем нетворкинг в ресто-баре \"Друзья\". <a href='https://yandex.ru/maps/-/CDXEyJYF' target='_blank'>Октябрьский проспект, 19</a>",
		"speaker" : {}
	}
]