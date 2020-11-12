const path = require('path')
const express = require('express')
const app = express()
const port = 3001

app.use(express.static('dist'))

app.get('/', (req, res) => {
	res.sendFile(path.resolve('dist/index.html') )
})
app.get('/about.html', (req, res) => {
	res.sendFile(path.resolve('dist/about.html') )
})
app.get('/contacts.html', (req, res) => {
	res.sendFile(path.resolve('dist/contacts.html') )
})
app.get('/prices.html', (req, res) => {
	res.sendFile(path.resolve('dist/prices.html') )
})
app.get('/inner.html', (req, res) => {
	res.sendFile(path.resolve('dist/inner.html'))
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})