import Vue from 'vue/dist/vue.esm'

new Vue({
	el: '#calculator',
	data: {
		moving: false,
		positionStartMovingX: 0,
		positionStartMovingY: 0,
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
			let val = 0

			if (window.innerWidth > 568) {
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
			this.plans.map(function (plan, index) {
				if (index <= indexPlan) plan.active = true
				if (index > indexPlan) plan.active = false
			})
		},

		toPlan(indexPlan) {
			if (!this.moving) return
			console.log('Hover', indexPlan)
			this.changePlan(indexPlan)
		},

		nextPlan() {
			console.log('Next Plan')
			let length = this.activePlans

			if (length < 0 || length >= 16) return

			this.plans[this.activePlans].active = true
		},

		prevPlan() {
			console.log('Prev Plan')
			let length = this.activePlans

			if (length <= 1 || length > 16) return

			this.plans[length - 1].active = false
		},

		roundMouseDown(e) {
			console.log('Down', e)
			this.moving = true
			this.positionStartMovingX = e.pageX
			this.positionStartMovingY = e.pageY
		},
	},
	mounted() {
		window.addEventListener('mousemove', (e) => {
			if (!this.moving) return
			const positionX = e.pageX
			const positionY = e.pageY

			// const movingX = positionX - this.positionStartMovingX
			// const movingY = positionY - this.positionStartMovingY
			//
			// if (movingX > 0) {
			// 	// Prev plan
			// 	const count = Math.floor(movingX / 50)
			// 	for (let i = 0; count > i; i++) {
			// 		this.positionStartMovingX += 50
			// 		this.nextPlan()
			// 	}
			// } else {
			// 	// Next plan
			// 	const count = Math.floor(Math.abs(movingX) / 50)
			// 	for (let i = 0; count > i; i++) {
			// 		this.positionStartMovingX -= 50
			// 		this.prevPlan()
			// 	}
			// }

			console.log('Move', this.moving)
		})

		window.addEventListener('mouseup', () => {
			this.moving = false
		})
	}
})
