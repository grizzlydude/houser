require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const PORT = SERVER_PORT || 4000
const massive = require('massive')
const ctrl = require('./Controller')

app.use(express.json())

// END POINTS
app.get('/api/houses', ctrl.getAll)
app.post('/api/addHouse', ctrl.addHouse)

massive(CONNECTION_STRING).then( db =>{
    app.set('db', db);
    app.listen(PORT, () => console.log(`RETURN OF THE PORT ${PORT}`))
}).catch(err => console.log(err))
