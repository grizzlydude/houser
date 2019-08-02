
module.exports = {
    addHouse: async (req, res) => {
        const { property_name, the_address, city, the_state, zip } = req.body
        let db = req.app.get('db')
        let house = await db.add_house([property_name, the_address, city, the_state, zip])
        res.status(201).send(house)
    },
    getAll: async (req, res) => {
        let db = req.app.get('db')
        let house = await db.get_houses()
        // console.log(house)
        res.status(200).send(house)
    },
    removeHouse: (req, res) => {
        res.sendStatus(200)
    }
}
