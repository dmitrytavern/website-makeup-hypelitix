$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
})

$(document).ready(function () {
	document.body.classList.add('is-loaded')
})

require('./parts/header')
require('./parts/input')
require('./parts/modal')
require('./parts/form-question')
require('./parts/calc')
