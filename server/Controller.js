module.exports = {
    addHouse: async (req, res) => {
        const { property_name, address, city, state, zip } = req.body
        let db = req.app.get('db')
        let house = await db.add_house([property_name, address, city, state, zip])
        res.status(201).send(house)
    },
    getAll: (req, res) => {
        let db = req.app.get('db')
        db.get_houses().then( house =>{
            res.status(200).send(house)
        })
    }
}