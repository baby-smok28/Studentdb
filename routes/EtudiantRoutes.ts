import { Router } from 'express';
import * as c from '../controllers/EtudiantController.js';
import auth from '../middlewares/AuthMiddleware.js';

const router = Router();

router.get('/etudiants/stats', auth, c.stats);
router.get('/etudiants', auth, c.getAll);
router.get('/etudiants/:id', auth, c.getOne);
router.post('/etudiants', auth, c.create);
router.put('/etudiants/:id', auth, c.update);
router.delete('/etudiants/:id', auth, c.remove);

export default router;
