const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ message: 'username requis' });
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
});

module.exports = router;
