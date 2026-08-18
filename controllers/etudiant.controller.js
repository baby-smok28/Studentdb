const service = require('../services/etudiant.service');

exports.getAll = async (req, res, next) => {
    try {
        res.status(200).json(await service.listerEtudiants());
    } catch (err) {
        next(err);
    }
};

exports.getOne = async (req, res, next) => {
    try {
        const etudiant = await service.obtenirEtudiant(Number(req.params.id));
        if (!etudiant) return res.status(404).json({ message: 'Non trouvé' });
        res.status(200).json(etudiant);
    } catch (err) {
        next(err);
    }
};

exports.create = async (req, res, next) => {
    try {
        const nouveau = await service.creerEtudiant(req.body);
        res.status(201).json(nouveau);
    } catch (err) {
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        const updated = await service.modifierEtudiant(Number(req.params.id), req.body);
        if (!updated) return res.status(404).json({ message: 'Non trouvé' });
        res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

exports.remove = async (req, res, next) => {
    try {
        const ok = await service.supprimerEtudiant(Number(req.params.id));
        if (!ok) return res.status(404).json({ message: 'Non trouvé' });
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};

exports.stats = async (req, res, next) => {
    try {
        res.status(200).json(await service.obtenirStatistiques());
    } catch (err) {
        next(err);
    }
};
