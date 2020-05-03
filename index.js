const express = require('express')
const helmet = require('helmet')
const router = require('./projectRouter')

const server = express()
const port = process.env.PORT || 7777

server.use(helmet())
server.use(express.json())
server.use('/', router)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "An error was detected.",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})