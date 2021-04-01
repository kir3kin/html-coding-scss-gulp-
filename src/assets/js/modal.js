const modalWindows = {
	body: document.body,
	modalBtn: document.querySelectorAll('[data-modal]'),
	modalClose: document.querySelectorAll('.modal__close'),
	modalWrapp: document.querySelectorAll('.modal'),

	modalContentProp: {
		translateY: -50,//px
		opacity: 0,
		closeTime: 300,//ms
		timingFunc: 'linear'
	},

	initModalContentAnimation(modalContent) {
		modalContent.style.transform = `translateY(${this.modalContentProp.translateY}px)`
		modalContent.style.opacity = this.modalContentProp.opacity

		if (!modalContent.style.transition)
			modalContent.style.transition = `transform ${this.modalContentProp.closeTime}ms ${this.modalContentProp.timingFunc}, opacity ${this.modalContentProp.closeTime}ms ${this.modalContentProp.timingFunc}`
	},

	closeModal(currentModal) {
		// currentModal.querySelector('.modal__content').removeAttribute('style')
		this.initModalContentAnimation(currentModal.querySelector('.modal__content'))
		setTimeout(() => {
			currentModal.classList.remove('show')
			this.body.classList.remove('no-scroll')
		}, this.modalContentProp.closeTime)
	},

	init() {
		this.modalBtn.forEach(item => {
			item.addEventListener('click', e => {
				let modal = document.getElementById(e.currentTarget.getAttribute('data-modal'))
				let modalContent = modal.querySelector('.modal__content')
				this.initModalContentAnimation(modalContent)

				modal.classList.add('show')
				this.body.classList.add('no-scroll')
				modalContent.addEventListener('click', e => e.stopPropagation())

				setTimeout(() => {
					modalContent.style.transform = 'none'
					modalContent.style.opacity = 1
				}, 0)
			})
		})

		this.modalClose.forEach(item => {
			item.addEventListener('click', e => {
				this.closeModal(e.currentTarget.closest('.modal'))
			})
		})

		this.modalWrapp.forEach(item => {
			item.addEventListener('click', e => {
				this.closeModal(e.currentTarget)
			})
		})
	}
}

modalWindows.init();


// const modalBtn = document.querySelectorAll('[data-modal]')
// const body = document.body
// const modalClose = document.querySelectorAll('.modal__close')
// const modalWrapp = document.querySelectorAll('.modal')

// modalBtn.forEach(item => {
// 	item.addEventListener('click', e => {
// 		let modal = document.getElementById(e.currentTarget.getAttribute('data-modal'))
// 		let modalContent = modal.querySelector('.modal__content')

// 		modalContent.addEventListener('click', e => e.stopPropagation())
// 		modal.classList.add('show')
// 		body.classList.add('no-scroll')

// 		setTimeout(() => {
// 			modalContent.style.transform = 'none'
// 			modalContent.style.opacity = 1
// 		}, 0)
// 	})
// })

// modalClose.forEach(item => {
// 	item.addEventListener('click', e => {
// 		closeModal(e.currentTarget.closest('.modal'))
// 	})
// })

// modalWrapp.forEach(item => {
// 	item.addEventListener('click', e => {
// 		closeModal(e.currentTarget)
// 	})
// })

// function closeModal(currentModal) {
// 	currentModal.querySelector('.modal__content').removeAttribute('style')
// 	setTimeout(() => {
// 		currentModal.classList.remove('show')
// 		body.classList.remove('no-scroll')
// 	}, 300)
// }


