function activateError(name) {
	$(`#contacts-form input[name="${name}"]`).addClass('is-error')
}

$('#contacts-form').submit(function (e) {
	e.preventDefault()

	const data = $('#contacts-form').serializeArray()

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
		console.log('Data send')
	}
})