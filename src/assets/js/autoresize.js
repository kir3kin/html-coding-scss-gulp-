const textArea = document.querySelectorAll('[data-autoresize]')

textArea.forEach(item => {
	let originalHeight = item.offsetHeight
	item.addEventListener('input', e => {
		let $this = e.target

		$this.style.height = `${originalHeight}px`
		$this.style.height = `${$this.scrollHeight}px`
	})
})