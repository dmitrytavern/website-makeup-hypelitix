$('.modal').on('show.bs.modal', function () {
	$('.modal-custom-backdrop').addClass('is-open')
})

$('.modal').on('hide.bs.modal', function () {
	$('.modal-custom-backdrop').removeClass('is-open')
})


function activateError(name) {
	$(`#modal-access form input[name="${name}"]`).addClass('is-error')
}

$('#modal-access form input').on('focus', function () {
	$(this).removeClass('is-error')
})

$('#modal-access form').submit(function (e) {
	e.preventDefault()

	const data = $('#modal-access form ').serializeArray()

	let error = false
	for (let { name, value } of data) {
		switch (name) {
			case 'fullname':
				if (value === '') {
					activateError('fullname')
					error = true
				}
				break;
			case 'email':
				if (value === '') {
					activateError('email')
					error = true
				}
				break;
		}
	}

	if (!error) {
		// Send data

		$('#modal-access .modal__tab').removeClass('is-active')
		$('#modal-access .modal__tab[data-name="success"]').addClass('is-active')
	}
})
