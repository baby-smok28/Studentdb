const service = require('../service/etudiant.service');

async function getAll(req, res, next) {
    try {
        const etudiants = await service.listerEtudiants();
        res.status(200).json(etudiants);
    } catch (err) {
        next(err);
    }
}

async function getOne(req, res, next) {
    try {
        const etudiant = await service.obtenirEtudiant(Number(req.params.id));
        if (!etudiant) return res.status(404).json({ message: 'Non trouvé' });
        res.status(200).json(etudiant);
    } catch (err) {
        next(err);
    }
}

async function create(req, res, next) {
    try {
        const nouveau = await service.creerEtudiant(req.body);
        res.status(201).json(nouveau);
    } catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    try {
        const etudiant = await service.modifierEtudiant(Number(req.params.id), req.body);
        if (!etudiant) return res.status(404).json({ message: 'Non trouvé' });
        res.status(200).json(etudiant);
    } catch (err) {
        next(err);
    }
}

async function remove(req, res, next) {
    try {
        const ok = await service.supprimerEtudiant(Number(req.params.id));
        if (!ok) return res.status(404).json({ message: 'Non trouvé' });
        res.status(204).send();
    } catch (err) {
        next(err);
    }
}

async function stats(req, res, next) {
    try {
        const result = await service.obtenirStatistiques();
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
}

module.exports = { getAll, getOne, create, update, remove, stats };
