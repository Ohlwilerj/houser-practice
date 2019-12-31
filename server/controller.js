module.exports = {
  getHouses: async (req, res) => {
    const db = req.app.get("db");
    const allHouses = await db.get_all_houses;
    res.status(200).send(allHouses);
  },

  deleteHouse: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const allHouse = await db.delete_house([id]);
    res.status(200).send(allHouses);
  },

  addHouse: async (req, res) => {
    const db = req.app.get("db");
    const {
      name,
      address,
      city,
      state,
      zip,
      img,
      monthlyMortgage,
      monthlyRent
    } = req.body;
    const addHouse = await db.add_house([
      name,
      address,
      city,
      state,
      zip,
      img,
      monthlyMortgage,
      monthlyRent
    ]);
    if (addHouse) {
      res.status(200).send("House added");
    } else {
      res.status(500).send("Something went wrong");
    }
  }
};
