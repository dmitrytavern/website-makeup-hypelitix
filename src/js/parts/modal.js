$('.modal').on('show.bs.modal', function () {
	$('.modal-custom-backdrop').addClass('is-open')
})

$('.modal').on('hide.bs.modal', function () {
	$('.modal-custom-backdrop').removeClass('is-open')
})

$('.modal-custom-backdrop').on('click', function () {
	$('.modal').modal('toggle')
})

function activateError(name) {
	$(`#modal-access form input[name="${name}"]`).addClass('is-error')
}

$('#modal-access form').submit(function (e) {
	e.preventDefault()

	const data = $('#modal-access form ').serializeArray()

	let error = false
	for (let { name, value } of data) {
		switch (name) {
			case 'name':
				if (value === '') {
					activateError('name')
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
		$.ajax({
			url: 'https://test.greatpix.studio/callback',
			method: 'POST',
			dataType: 'JSON',
			data: {
				name: data[0].value,
				email: data[1].value
			},
			success: function () {
				console.log('Data success send!')
			}
		})

		$('#modal-access .modal__tab').removeClass('is-active')
		$('#modal-access .modal__tab[data-name="success"]').addClass('is-active')
	}
})
