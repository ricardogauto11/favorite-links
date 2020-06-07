const express = require('express')
const morgan = require('morgan')
const path = require('path')

// Initializations
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Global variables
app.use((req, res, next) => {
    next()
})

// Routes
app.use(require('./routes/routes'))
app.use(require('./routes/auth'))
app.use(require('./routes/links'))

// Public
app.use(express.static(path.join(__dirname, 'public')))

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'))
})