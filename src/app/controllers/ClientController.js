const { Client } = require('../models');

class ClientController {
  async create(req, res) {
    try {
      const clientBody = req.body;
      const client = await Client.create(clientBody);
      return res.json({ client });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}

module.exports = new ClientController();
