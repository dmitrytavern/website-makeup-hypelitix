const $header         = $('header')
const $headerMenuBtn  = $('#header-menu-btn')
const $menu           = $('.menu')

function scrollPage() {
	const headerHeight = $header.outerHeight(true)

	if (window.innerWidth < 992) $menu.css('padding-top', headerHeight)
	if (window.pageYOffset > 0) {
		$header.addClass('is-scroll')
	} else {
		$header.removeClass('is-scroll')
	}
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
