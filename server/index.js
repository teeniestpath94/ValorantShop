const express = require('express')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT || 5000

// Middleware JSON data
app.use(express.json())

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})