const { User } = require('../models');

class UserController {
  async create(req, res) {
    try {
      const { name, password } = req.body;
      const user = await User.create({
        name,
        password
      });

      return res.json({ user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Can't create User." });
    }
  }

  async findAll(req, res) {
    try {
      const usersList = await User.findAll();

      return res.json({ usersList });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Can't find all Users." });
    }
  }
}

module.exports = new UserController();
