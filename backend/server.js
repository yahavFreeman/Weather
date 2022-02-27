const express = require('express')
const cors = require('cors')


const app=express()
const http = require('http').createServer(app)


const corsOptions = {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true
}
app.use(cors(corsOptions))

const cityRoutes=require('./api/city/city.routes')

app.use('/api/city',cityRoutes)

http.listen(3030, () => {
    console.log('Server is running on port: 3030')
})