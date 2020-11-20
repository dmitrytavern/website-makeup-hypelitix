const path = require('path')
const express = require('express')
const app = express()
const port = 3001

app.use(express.static('dist'))

app.get('/', (req, res) => {
	res.sendFile(path.resolve('dist/index.html') )
})

app.get('/contacts.html', (req, res) => {
	res.sendFile(path.resolve('dist/contacts.html') )
})

app.get('/prices.html', (req, res) => {
	res.sendFile(path.resolve('dist/prices.html') )
})


app.get('/about_en.html', (req, res) => {
	res.sendFile(path.resolve('dist/about_en.html') )
})
app.get('/about_ru.html', (req, res) => {
	res.sendFile(path.resolve('dist/about_ru.html'))
})

app.get('/api-documentation_en.html', (req, res) => {
	res.sendFile(path.resolve('dist/api-documentation_en.html') )
})
app.get('/api-documentation_ru.html', (req, res) => {
	res.sendFile(path.resolve('dist/api-documentation_ru.html'))
})

app.get('/cookie-policy_en.html', (req, res) => {
	res.sendFile(path.resolve('dist/cookie-policy_en.html') )
})
app.get('/cookie-policy_ru.html', (req, res) => {
	res.sendFile(path.resolve('dist/cookie-policy_ru.html'))
})

app.get('/privacy-policy_en.html', (req, res) => {
	res.sendFile(path.resolve('dist/privacy-policy_en.html') )
})
app.get('/privacy-policy_ru.html', (req, res) => {
	res.sendFile(path.resolve('dist/privacy-policy_ru.html'))
})

app.get('/public-offer-agreement_en.html', (req, res) => {
	res.sendFile(path.resolve('dist/public-offer-agreement_en.html') )
})
app.get('/public-offer-agreement_ru.html', (req, res) => {
	res.sendFile(path.resolve('dist/public-offer-agreement_ru.html'))
})

app.get('/terms-of-service_en.html', (req, res) => {
	res.sendFile(path.resolve('dist/terms-of-service_en.html') )
})
app.get('/terms-of-service_ru.html', (req, res) => {
	res.sendFile(path.resolve('dist/terms-of-service_ru.html'))
})


app.get('/lang/index.json', (req, res) => {
	res.sendFile(path.resolve('dist/lang/index.json') )
})
app.get('/lang/en.json', (req, res) => {
	res.sendFile(path.resolve('dist/lang/en.json') )
})
app.get('/lang/ru.json', (req, res) => {
	res.sendFile(path.resolve('dist/lang/ru.json') )
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})