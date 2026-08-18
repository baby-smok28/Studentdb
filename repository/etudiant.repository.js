const Etudiant = require('../models/etudiant.model');

async function findAll() {
    return await Etudiant.findAll();
}

async function findById(id) {
    return await Etudiant.findByPk(id);
}

async function create(data) {
    return await Etudiant.create(data);
}

async function update(id, data) {
    const etudiant = await Etudiant.findByPk(id);
    if (!etudiant) return null;
    await etudiant.update(data);
    return etudiant;
}

async function remove(id) {
    const etudiant = await Etudiant.findByPk(id);
    if (!etudiant) return false;
    await etudiant.destroy();
    return true;
}

module.exports = { findAll, findById, create, update, remove };
