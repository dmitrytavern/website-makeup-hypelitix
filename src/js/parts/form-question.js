function activateError(name) {
	$(`#contacts-form input[name="${name}"]`).addClass('is-error')
}

$('#contacts-form').submit(function (e) {
	e.preventDefault()

	const data = $('#contacts-form').serializeArray()

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

		$('.form-question__success-message').addClass('is-active')
	}
})