$(document).ready(function () {
	document.body.classList.add('is-loaded')
})

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

function activateError(name) {
	$(`#modal-access form input[name="${name}"]`).addClass('is-error')
}

function checkFormData(data) {
	let error = false
	for (let { name, value } of data) {
		if (value === '') {
			error = true
			activateError(name)
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

	if (!checkFormData(data)) {
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

	if (!checkFormData(data)) {
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
