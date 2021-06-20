function lazyVideo() {
	const video = document.querySelectorAll('[data-video=youtube]')

	video && video.forEach(el => {
		const iFrame = el.querySelector('iframe')
		iFrame && iFrame.setAttribute('src', 'https://www.youtube.com/embed/stFOy0Noahg')
	})
}

document.addEventListener("DOMContentLoaded", lazyVideo);