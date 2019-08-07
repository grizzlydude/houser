module.exports = {
    addHouse: async (req, res) => {
        const { property_name, the_address, city, the_state, zip, image, morgage, rent } = req.body
        let db = req.app.get('db')
        let house = await db.add_house([property_name, the_address, city, the_state, zip, image, morgage, rent])
        res.status(201).send(house)
    },
    getAll: async (req, res) => {
        let db = req.app.get('db')
        let house = await db.get_houses()
        res.status(200).send(house)
    },
    removeHouse: async (req, res) => {
        const { id } = req.params
        console.log('id: ', id)
        let db = req.app.get('db')
        let house = await db.houser.destroy({ id })
        console.log(house)
        res.status(200).send(house)
    }
}
