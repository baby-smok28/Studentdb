import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', (req, res) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ message: 'username requis' });

    const token = jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    res.status(200).json({ token });
});

export default router;
