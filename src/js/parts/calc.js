import Vue from 'vue/dist/vue.esm'

new Vue({
	el: '#calculator',
	data: {
		plans: [
			{active: true},
			{active: true},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
			{active: false},
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
			let val = Math.floor(1382 - (1382 * percent) / 100) + (this.activePlans - 1) * 0.69
			console.log(val)
			return {
				'stroke-dashoffset': val
			}
		}
	},
	methods: {
		changePlan(indexPlan) {
			this.plans.map(function (plan, index) {
				if (index <= indexPlan) plan.active = true
				if (index > indexPlan) plan.active = false
			})
		},
	}
})
