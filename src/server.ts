require('dotenv').config()
import app from './app'
const connectDB = require('./config/db')

const PORT = process.env.PORT || 8000

connectDB().then(()=>{
    app.listen(PORT, ()=> {
        console.log(`Server is running on port: ${PORT}`)
    })
})