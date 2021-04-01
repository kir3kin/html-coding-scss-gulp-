const burgerMenu = {
	burger: document.getElementById('sidebarToggle'),
	page: document.getElementById('page'),
	body: document.body,
	_musk: false,

	get mask() {
		if (!this._musk) this.createMask()
		return this._musk
	},
	createMask() {
		let mask = document.createElement('div')
		mask.classList.add('page__musk')
		mask.addEventListener('click', () => this.closeSidebar())
		this._musk = mask
	},
	showSidebar() {
		this.body.classList.add('show-sidebar')
		this.page.appendChild(this.mask)
	},
	closeSidebar() {
		this.body.classList.remove('show-sidebar')
		this.page.removeChild(this.mask)
	},
	init() {
		this.burger.addEventListener('click', () => {
			if (this.body.classList.contains('show-sidebar'))
				this.closeSidebar()
			else
				this.showSidebar()
		})
	}
}

burgerMenu.init()

// const burger = document.getElementById('sidebarToggle')
// const page = document.getElementById('page')
// const body = document.body

// burger.addEventListener('click', e => {
// 	const musk = createMask()
// 	musk.addEventListener('click', () => closeSidebar(body, page, musk))
// 	if (body.classList.contains('show-sidebar'))
// 		closeSidebar(body, page, musk)
// 	else
// 		showSidebar(body, page, musk)
// })

// function showSidebar(body, page, musk) {
// 	body.classList.add('show-sidebar')
// 	page.appendChild(musk)
// }

// function closeSidebar(body, page, musk) {
// 	body.classList.remove('show-sidebar')
// 	page.removeChild(musk)
// }

// function createMask() {
// 	let mask = document.createElement('div')
// 	mask.classList.add('page__musk')
// 	return mask
// }