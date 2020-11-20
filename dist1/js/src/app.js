$(document).ready(function () {
	document.body.classList.add('is-loaded')
})

// Send email
function sendEmail(payload) {
	$.ajax({
		url: '/callback',
		method: 'POST',
		dataType: 'JSON',
		data: {
			name: payload.name,
			email: payload.email
		}
	})
		.done(payload.callbackSuccess)
		.fail(payload.callbackFail)
}


// Multilang
const defaultLanguages = 'en'
const languages = {'en': 'English', 'ru': 'Русский'}

function initDropdownLanguages() {
	for (let language in languages) {
		if (language !== i18next.language) {
			addDropdownLanguage(language, languages[language])
		}
	}

	changeDropdownLanguage(i18next.language)
}

function addDropdownLanguage(lang, langFull) {
	$('.dropdown-lang .dropdown-menu').append('<a class="dropdown-item" data-lng="'+lang+'" hreflang="'+lang+'" href="#">\n' +
		'                                    <svg class="dropdown-lang__ico">\n' +
		'                                        <use xlink:href="/img/icons/sprite.svg#lang-'+lang+'"></use>\n' +
		'                                    </svg>\n' +
		'                                    <span>'+langFull+'</span>\n' +
		'                                </a>')
}

function changeDropdownLanguage(lang) {
	$('.dropdown-lang .dropdown-front svg use').attr('xlink:href', '/img/icons/sprite.svg#lang-'+lang)
}

function translatePage(err, t) {
	$('[data-i18n]').each(function (index, item) {
		const name = item.getAttribute('data-i18n')
		item.innerHTML = t(name)
	})

	$('[data-i18n-placeholder]').each(function (index, item) {
		const name = item.getAttribute('data-i18n-placeholder')
		item.placeholder = t(name)
	})
}

i18next.init({
	lng: localStorage.getItem('lang') || defaultLanguages,
	debug: false,
	resources: {
		ru: {
			translation: {
				"nav-about": "О нас",
				"nav-prices": "Цены",
				"nav-contacts": "Контакты",
				"nav-login": "Войти",

				"nav-api": "API Документация",
				"nav-terms": "Условия использования",
				"nav-privacy-policy": "Политика конфиденциальности",
				"nav-offer": "Публичная оферта",
				"nav-cookie": "Политика Файлов Cookie",
				"footer-link": "Связаться с нами",
				"footer-copyright": "Все права сохранены.",

				"chat-text": "Мы онлайн!",

				"home-intro-title": "Автоматический анализ <br/> данных Instagram",
				"home-intro-description": "Общедоступные данные профиля Instagram и отслеживание метаданных сообщений и историй в профилях с целью их фильтрации по хэштегам и упоминаниям.",

				"btn-get-access": "Получить доступ",

				"home-services-title": "Почему вам нужен Hypelitix",
				"home-services-service-1": "Найдите блогеров и влиятельных лиц, которые охватят вашу целевую аудиторию.",
				"home-services-service-2": "Выясните, какие блогеры принесут результат, а какие не принесут продаж или подписчиков.",
				"home-services-service-3": "Не тратьте деньги на завышенные аккаунты блогеров с фальшивыми подписчиками.",
				"home-services-service-4": "Анализируйте качество и рост подписчиков в Instagram.",

				"home-demonstration-title": "Как это работает",
				"home-demonstration-1-title": "Добавьте Инстаграм аккаунты",
				"home-demonstration-1-desc": "Загрузите список аккаунтов через административную панель или через соответствующий метод API.",
				"home-demonstration-list-1": "Загрузка с помощью .xls",
				"home-demonstration-list-2": "Поддержка метода API",
				"home-demonstration-2-title": "Отслеживайте Сторис и Посты пользователей.",
				"home-demonstration-2-desc": "Отслеживайте метаданные сообщений профиля и историй, чтобы фильтровать их по хэштегам и упоминаниям.",
				"home-demonstration-list-3": "Нативные уведомления с помощью Webhocks",
				"home-demonstration-list-4": "Кешировнаие данных на протяжении 14 дней",

				"home-demonstration-3-title": "Получите результат!",
				"home-demonstration-3-desc": "Получите кешированные медиафайлы на панели управления или через API.",
				"home-demonstration-list-5": "Фильтр по дате, хэштегам и т.д.",
				"home-demonstration-list-6": "Загрузите медиафайлы с помощью панели управления",

				"home-statistic-1-title": "Кешированных историй",
				"home-statistic-2-title": "Отслеживаемых профилей",
				"home-statistic-3-title": "Кешированных постов",
				"home-statistic-time": "Каждый час",

				"home-tariff-plan-title": "Рассчитайте свой собственный тариф",
				"home-tariff-plan-desc": "Гибкая биллинговая система. Индивидуальный подход к клиентам. Мы готовы работать с задачами клиентов и адаптировать под них свои услуги.",
				"home-tariff-plan-btn": "Автоматизировать Аналитику",

				"home-pluses-title": "Почему мы",
				"home-pluses-1": "Уникальный на рынке сервис для скачивания и кеширования историй, включая весь медиаконтент.",
				"home-pluses-2-1": "Поддержка",
				"home-pluses-2-2": "для OCR с изображений.",
				"home-pluses-3": "Индивидуальный подход к клиентам. Мы готовы работать с задачами клиентов и адаптировать под них свои услуги.",

				"home-tariff-plan-price": "(за 1 акк. в месяц)",
				"home-tariff-plan-up": "до",
				"home-tariff-plan-accounts": "аккаунтов",

				"modal-title": "Получить доступ",
				"input-name": "Имя",
				"input-name-error": "Неверное Имя",
				"input-email": "Email",
				"input-email-error": "Неверный Email адрес",
				"input-name-placeholder": "Ваше Имя",
				"input-email-placeholder": "Ваш Email",
				"btn-send": "Отправить",
				"modal-success-title": "Запрос был отправлен!",
				"modal-success-desc-1": "Спасибо за интерес к нашей компании",
				"modal-success-desc-2": "Наш менеджер свяжется с вами очень скоро!",
				"modal-btn": "На главную",

				"contacts-title": "Наши Контакты",
				"table-col-account": "Кол-во аккаунтов (до)",
				"table-col-discount": "Скидка %",
				"table-col-sync": "Стоимость синхронизации",
				"table-col-price": "Стоимость обслуживания (одного акк. в месяц - 60 синх.)",

				"prices-desc": "Hypelitix создан командой разработчиков, в основном занимающихся продвижением в социальных сетях и аналитикой. Это платный веб-сервис, который предоставляет общедоступные данные профилей Instagram в автоматическом и обобщенном виде, что упрощает анализ данных для своих клиентов.",
				"prices-warning": "Индивидуальные ценовые предложения при заказе от 50 000 аккаунтов",
				"prices-modal-desc": "Hypelitix создан командой разработчиков, в основном занимающихся продвижением в социальных сетях и аналитикой.",

				"phone": "Телефон:",
				"contacts-form-title": "Есть вопросы? Спросите нас!",
				"contacts-form-message": "Сообщение успешно отправлено!",
				"contacts-form-name": "Имя",
				"contacts-desc": "Загрузите список аккаунтов через административную панель или через соответствующий метод API.",

				"about-desc-1": "Hypelitix was created by a developer team mainly working on social networks promotion and analytics. It's a paid web-service which provides publicly available Instagram profiles data in an automated and generalized way making it easier to analyze data for it's clients. Specifically, at the moment the service allows it's clients to obtain Instagram profile public data and to track profile posts' and stories' metadata in order to filter them by hashtags and mentions.",
				"about-desc-2": "Our clients are digital marketing agencies who run advertising campaigns on Instagram using Instagram bloggers for publishing ads. In order to efficiently manage and run the campaigns, our clients need to track their bloggers' Instagram profiles to analyse bloggers \"bio\", posts' and stories' metadata and to make sure that links, \"mentions\" or hashtags which represent a particular brand are presented on the published media content or in the blogger's \"bio\".",
				"about-desc-3": "To get access to Hypelitix features user requires Tokens - internal virtual currency. Tokens can be bought separately and are designed to use only within the Hypelitix service.",
			}
		},
		en: {
			translation: {
				"nav-about": "About Us",
				"nav-prices": "Prices",
				"nav-contacts": "Contact Us",
				"nav-login": "Log In",

				"nav-api": "API Docs",
				"nav-terms": "Terms of Service",
				"nav-privacy-policy": "Privacy Policy",
				"nav-offer": "Public Offer Agreement",
				"nav-cookie": "Cookie Policy",

				"footer-link": "Get in Touch",

				"footer-copyright": "All rights reserved.",

				"chat-text": "We are Online!",

				"home-intro-title": "Automated analize<br/>Instagram Data",
				"home-intro-description": "Instagram profile public data and to track profile posts' and stories' metadata in order to filter them by hashtags and mentions.",
				"btn-get-access": "Get Access",

				"home-services-title": "Why you need Hypelitix",
				"home-services-service-1": "Find bloggers and influencers who will reach your target audience.",
				"home-services-service-2": "Find out which bloggers will yield results and who will not bring sales or subscribers.",
				"home-services-service-3": "Don’t waste your budget on inflated blogger accounts with fake followers.",
				"home-services-service-4": "Analyse the quality and growth of instagram followers",


				"home-demonstration-title": "How It works",

				"home-demonstration-1-title": "Add Instagram Accounts",
				"home-demonstration-1-desc": "Upload the list of accounts using the administrative panel or via the corresponding API method.",
				"home-demonstration-list-1": "Upload by using .xls",
				"home-demonstration-list-2": "Support API method",


				"home-demonstration-2-title": "Track User’s Stories, Posts.",
				"home-demonstration-2-desc": "Track profile posts' and stories' metadata in order to filter them by hashtags and mentions.",
				"home-demonstration-list-3": "Instant notification via Webhocks",
				"home-demonstration-list-4": "Caching data for 14 days",

				"home-demonstration-3-title": "Get your Result!",
				"home-demonstration-3-desc": "Obtain cached media in the dashboard or via API.",
				"home-demonstration-list-5": "Filter by date, hashtags etc.",
				"home-demonstration-list-6": "Download media using dashboard",

				"home-statistic-1-title": "Cached Stories",
				"home-statistic-2-title": "Tracked Profiles",
				"home-statistic-3-title": "Cached Posts",
				"home-statistic-time": "Every hour",

				"home-tariff-plan-title": "Calculate Your Own Tariff Plan",
				"home-tariff-plan-desc": "Flexible Billing System. Individual approach to clients. We are ready to work with clients' tasks and adapt our services to them.",
				"home-tariff-plan-btn": "Automate your Analytics",

				"home-pluses-title": "Why choose us",
				"home-pluses-1": "A unique service on the market for downloading and caching stories, including all media content.",
				"home-pluses-2-1": "Ready support for",
				"home-pluses-2-2": "for OCR from images.",
				"home-pluses-3": "Individual approach to clients. We are ready to work with clients' tasks and adapt our services to them.",

				"home-tariff-plan-price": "(for 1 acc per month)",
				"home-tariff-plan-up": "up to",
				"home-tariff-plan-accounts": "accounts",

				"modal-title": "Access Request",
				"input-name": "Name",
				"input-name-error": "Wrong name",
				"input-email": "Email",
				"input-email-error": "Wrong Email address",
				"input-name-placeholder": "Your Full Name",
				"input-email-placeholder": "Your Email",
				"btn-send": "Send",
				"modal-success-title": "Request has been Sent!",
				"modal-success-desc-1": "Thank you for interesting our company.",
				"modal-success-desc-2": "Our manager will contact you soon!",
				"modal-btn": "Back Home",


				"contacts-title": "Our Contacts",
				"table-col-account": "Number of accounts (up to)",
				"table-col-discount": "Discount %",
				"table-col-sync": "Synchronization cost",
				"table-col-price": "Service cost <br/> (one acc. Per month - 60 sync.)",

				"prices-desc": "Hypelitix was created by a developer team mainly working on social networks promotion and analytics. It's a paid web-service which provides publicly available Instagram profiles data in an automated andgeneralized way making it easier to analyze data for it's clients. Specifically.",
				"prices-warning": "Individual price offers for orders over 50,000 accounts",
				"prices-modal-desc": "Hypelitix was created by a developer team mainly working on social networks promotion and analytics.",

				"phone": "Phone",
				"contacts-form-title": "Have Question? Ask us!",
				"contacts-form-message": "Message has been sent!",
				"contacts-form-name": "Full Name",
				"contacts-desc": "Upload the list of accounts using the administrative panel or via the corresponding API method.",

				"about-desc-1": "Hypelitix was created by a developer team mainly working on social networks promotion and analytics. It's a paid web-service which provides publicly available Instagram profiles data in an automated and generalized way making it easier to analyze data for it's clients. Specifically, at the moment the service allows it's clients to obtain Instagram profile public data and to track profile posts' and stories' metadata in order to filter them by hashtags and mentions.",
				"about-desc-2": "Our clients are digital marketing agencies who run advertising campaigns on Instagram using Instagram bloggers for publishing ads. In order to efficiently manage and run the campaigns, our clients need to track their bloggers' Instagram profiles to analyse bloggers \"bio\", posts' and stories' metadata and to make sure that links, \"mentions\" or hashtags which represent a particular brand are presented on the published media content or in the blogger's \"bio\".",
				"about-desc-3": "To get access to Hypelitix features user requires Tokens - internal virtual currency. Tokens can be bought separately and are designed to use only within the Hypelitix service.",
			}
		},
	},
}, function (err, t) {
	initDropdownLanguages()
	translatePage(err, t)
})

$('body').on('click', '.dropdown-lang .dropdown-menu a', function (e) {
	e.preventDefault()
	const lng = $(this).attr('data-lng')

	addDropdownLanguage(i18next.language, languages[i18next.language])
	changeDropdownLanguage(lng)
	localStorage.setItem('lang', lng)
	i18next.changeLanguage(lng, translatePage)

	$(this).remove()
})


//  Header

const $header         = $('header')
const $headerMenuBtn  = $('#header-menu-btn')
const $menu           = $('.menu')

function scrollPage() {
	if (window.pageYOffset > 0) {
		$header.addClass('is-scroll')
	} else {
		$header.removeClass('is-scroll')
	}

	setTimeout(function () {
		if (window.innerWidth < 992) $menu.css('padding-top', $header.outerHeight(true))
	}, 300)
}

function toggleHeaderMenu() {
	$headerMenuBtn.toggleClass('is-active')
	$header.toggleClass('is-menu-open')
	$menu.toggleClass('is-open')
	document.body.classList.toggle('menu-opened')
}

$($headerMenuBtn).on('click', toggleHeaderMenu)

$(window).on('resize', scrollPage)
$(window).on('scroll', scrollPage)
scrollPage()


// Modal

$('.modal').on('show.bs.modal', function () {
	$('.modal-custom-backdrop').addClass('is-open')
})

$('.modal').on('hide.bs.modal', function () {
	$('.modal-custom-backdrop').removeClass('is-open')
})

$('.modal-custom-backdrop').on('click', function () {
	$('.modal').modal('toggle')
})


// Work with forms

$('form input').on('focus', function () {
	$(this).removeClass('is-error')
})

function activateError(el, name) {
	$(`${el} input[name="${name}"]`).addClass('is-error')
}

function checkFormData(el, data) {
	let error = false
	for (let { name, value } of data) {
		if (value === '') {
			error = true
			activateError(el, name)
		}
	}

	return error
}

function normalizeFormData(data) {
	let obj = {}
	for (let { name, value } of data) {
		obj[name] = value
	}

	return obj
}

// Form in modal
$('#modal-access-form').submit(function (e) {
	e.preventDefault()
	const data = $('#modal-access form').serializeArray()

	if (!checkFormData('#modal-access', data)) {
		const normData = normalizeFormData(data)

		sendEmail({
			name: normData.name,
			email: normData.email,
			callbackSuccess: function () {
				$('#modal-access .modal__tab').removeClass('is-active')
				$('#modal-access .modal__tab[data-name="success"]').addClass('is-active')
			},
			callbackFail: function (res) {
				const $errorText = $('#modal-access-form .form-error-text')
				$errorText[0].innerHTML = res.message || 'Has Error'
				$errorText.addClass('is-active')

				setTimeout(function () {
					$('#modal-access-form .form-error-text').removeClass('is-active')
				}, 3000)
			}
		})
	}
})

// Form on contact page
$('#contacts-form').submit(function (e) {
	e.preventDefault()
	const data = $('#contacts-form').serializeArray()

	if (!checkFormData('#contacts-form', data)) {
		const normData = normalizeFormData(data)

		sendEmail({
			name: normData.name,
			email: normData.email,
			callbackSuccess: function () {
				$('.form-question__success-message').addClass('is-active')
			},
			callbackFail: function (res) {
				const $errorText = $('#contacts-form .form-error-text')
				$errorText[0].innerHTML = res.message || 'Has Error'
				$errorText.addClass('is-active')

				setTimeout(function () {
					$('#contacts-form .form-error-text').removeClass('is-active')
				}, 3000)
			}
		})
	}
})


// Home prices
import Vue from 'vue/dist/vue.esm'

if (document.getElementById('calculator') !== null) {
	new Vue({
		el: '#calculator',
		data: {
			moving: false,
			activePlan: {},
			plans: [
				{active: true, accounts: 100, price: '$0.60', current: true},
				{active: false, accounts: 500, price: '$0.58', current: false},
				{active: false, accounts: 1000, price: '$0.57', current: false},
				{active: false, accounts: 2000, price: '$0.55', current: false},
				{active: false, accounts: 4000, price: '$0.54', current: false},
				{active: false, accounts: 6000, price: '$0.52', current: false},
				{active: false, accounts: 8000, price: '$0.49', current: false},
				{active: false, accounts: 10000, price: '$0.49', current: false},
				{active: false, accounts: 15000, price: '$0.47', current: false},
				{active: false, accounts: 20000, price: '$0.46', current: false},
				{active: false, accounts: 25000, price: '$0.44', current: false},
				{active: false, accounts: 30000, price: '$0.42', current: false},
				{active: false, accounts: 35000, price: '$0.41', current: false},
				{active: false, accounts: 40000, price: '$0.38', current: false},
				{active: false, accounts: 45000, price: '$0.38', current: false},
				{active: false, accounts: 50000, price: '$0.36', current: false},
			],
		},
		computed: {
			activePlans() {
				return this.plans.filter(x => x.active).length
			},

			roundStyle() {
				let val = 90 + (22.5 * (this.activePlans - 1))

				return {
					'transform': `rotate(${val}deg) translateY(-50%)`
				}
			},

			circleStyleDesktop() {
				// 6.25% = 22.5deg
				let percent = 100 * ((this.activePlans - 1) * 22.5) / 360
				let val = Math.floor(1382 - (1382 * percent) / 100) + (this.activePlans - 1) * 0.69

				return {
					'stroke-dashoffset': val
				}
			},

			circleStyleMobile() {
				// 6.25% = 22.5deg
				let percent = 100 * ((this.activePlans - 1) * 22.5) / 360
				let val = Math.floor(941 - (941 * percent) / 100)

				return {
					'stroke-dashoffset': val
				}
			},
		},
		methods: {
			changePlan(indexPlan) {
				this.plans.map((plan, index) => {
					if (index <= indexPlan) plan.active = true
					if (+index === +indexPlan) {
						plan.current = true
						this.activePlan = plan
					} else {
						plan.current = false
					}
					if (index > indexPlan) plan.active = false
				})
			},

			toPlan(indexPlan) {
				if (!this.moving) return
				this.changePlan(indexPlan)
			},

			roundMouseDown() {
				this.moving = true
			},

			roundTouchDown(e) {
				this.moving = true
			}
		},
		mounted() {
			this.changePlan(0)

			window.addEventListener('mouseup', () => {
				this.moving = false
			})

			window.addEventListener('touchmove', (e) => {
				if (!this.moving) return

				const target = document.elementFromPoint(
					e.changedTouches[0].clientX,
					e.changedTouches[0].clientY
				)

				if (!target) return

				const plan = target.getAttribute('data-plan')

				if (plan) this.toPlan(plan)
			})

			window.addEventListener('touchend', (e) => {
				this.moving = false
			})
		}
	})
}
