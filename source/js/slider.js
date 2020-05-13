
import { Swiper, Pagination } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

	Swiper.use([Pagination]);

	new Swiper('.slider .container .slider__wrapperSwiper .slider__swiper-container', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination_phone',
			type: 'bullets'
		}
	})
})