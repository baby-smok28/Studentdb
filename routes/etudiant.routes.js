const router = require('express').Router();
const c = require('../controllers/etudiant.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/etudiants/stats', auth, c.stats);
router.get('/etudiants', auth, c.getAll);
router.get('/etudiants/:id', auth, c.getOne);
router.post('/etudiants', auth, c.create);
router.put('/etudiants/:id', auth, c.update);
router.delete('/etudiants/:id', auth, c.remove);

module.exports = router;
