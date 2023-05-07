const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())

const uri = process.env.ATLAS_URI
const url = "mongodb+srv://rrohamsaad:HDHTwFgvqbk1YJqB@cluster0.rbqjvso.mongodb.net/Bank_Users?retryWrites=true"

// { useNewUrlParser: true, UseCreateIndex: true }
mongoose.connect(url, { useNewUrlParser: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log('Database Connection has been established successfully')
})

const userRouter = require('./Routes/Auth')
const bankRouter = require('./Routes/SBL_Bank')
app.use('/auth', userRouter)
app.use('/bank', bankRouter)


app.get('/', (req, res) => {
    res.send("hello world NoteBook")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})