const Etudiant = require('../models/etudiant.model');
exports.findAll = () => Etudiant.findAll();
exports.findById = (id) => Etudiant.findByPk(id);
exports.create = (data) => Etudiant.create(data);
exports.update = async (id, data) => {
    const etudiant = await Etudiant.findByPk(id);
    if (!etudiant) return null;
    return etudiant.update(data);
};
exports.remove = async (id) => {
    const etudiant = await Etudiant.findByPk(id);
    if (!etudiant) return false;
    await etudiant.destroy();
    return true;
};