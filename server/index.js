require('dotenv').config()
const express = require('express')
const app = express()
// const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const PORT = SERVER_PORT || 4000
const massive = require('massive')
const ctrl = require('./Controller')

app.use(express.json())

massive(CONNECTION_STRING).then( db =>{
    app.set('db', db);
    app.listen(PORT, () => console.log(`RETURN OF THE PORT ${PORT}`))
}).catch(err => console.log(err))

// END POINTS
app.get('/api/house', ctrl.getAll)
app.post('/api/house', ctrl.addHouse)
app.delete('/api/house/:id', ctrl.removeHouse)

