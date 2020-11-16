import Vue from 'vue/dist/vue.esm'

if (document.getElementById('calculator') !== null) {
	new Vue({
		el: '#calculator',
		data: {
			moving: false,
			activePlan: {active: true, accounts: 100, price: '$0.60',current: true},
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
