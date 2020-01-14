const { User } = require('../models');

class SessionController {
  async store(req, res) {
    const { name, password } = req.body;

    const user = await User.findOne({ where: { name } });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    return res.json({
      user,
      token: user.generateToken()
    });
  }
}

module.exports = new SessionController();
