const router = require('express').Router();
const etudiantController = require('../controllers/etudiant.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/etudiants/stats', auth, etudiantController.stats);
router.get('/etudiants', auth, etudiantController.getAll);
router.get('/etudiants/:id', auth, etudiantController.getOne);
router.post('/etudiants', auth, etudiantController.create);
router.put('/etudiants/:id', auth, etudiantController.update);
router.delete('/etudiants/:id', auth, etudiantController.remove);

module.exports = router;
