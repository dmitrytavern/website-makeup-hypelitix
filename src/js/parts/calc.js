import Vue from 'vue/dist/vue.esm'

new Vue({
	el: '#calculator',
	data: {
		moving: false,
		positionStartMovingX: 0,
		positionStartMovingY: 0,
		activePlan: {active: true, accounts: 500, price: '$0.58'},
		plans: [
			{active: true, accounts: 100, price: '$0.60'},
			{active: true, accounts: 500, price: '$0.58'},
			{active: false, accounts: 1000, price: '$0.57'},
			{active: false, accounts: 2000, price: '$0.55'},
			{active: false, accounts: 4000, price: '$0.54'},
			{active: false, accounts: 6000, price: '$0.52'},
			{active: false, accounts: 8000, price: '$0.49'},
			{active: false, accounts: 10000, price: '$0.49'},
			{active: false, accounts: 15000, price: '$0.47'},
			{active: false, accounts: 20000, price: '$0.46'},
			{active: false, accounts: 25000, price: '$0.44'},
			{active: false, accounts: 30000, price: '$0.42'},
			{active: false, accounts: 35000, price: '$0.41'},
			{active: false, accounts: 40000, price: '$0.38'},
			{active: false, accounts: 45000, price: '$0.38'},
			{active: false, accounts: 50000, price: '$0.36'},
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
		circleStyle() {
			// 6.25% = 22.5deg
			let percent = 100 * ((this.activePlans - 1) * 22.5) / 360
			let val = 0

			if (window.innerWidth > 567) {
				val = Math.floor(1382 - (1382 * percent) / 100) + (this.activePlans - 1) * 0.69
			} else {
				val = Math.floor(941 - (941 * percent) / 100)
			}

			return {
				'stroke-dashoffset': val
			}
		},
	},
	methods: {
		changePlan(indexPlan) {
			this.plans.map((plan, index) => {
				if (index <= indexPlan) plan.active = true
				if (index === indexPlan) this.activePlan = plan
				if (index > indexPlan) plan.active = false
			})
		},

		toPlan(indexPlan) {
			if (!this.moving) return
			console.log('Hover', indexPlan)
			this.changePlan(indexPlan)
		},

		roundMouseDown(e) {
			console.log('Down', e)
			this.moving = true
			this.positionStartMovingX = e.pageX
			this.positionStartMovingY = e.pageY
		},
	},
	mounted() {
		window.addEventListener('mouseup', () => {
			this.moving = false
		})
	}
})
