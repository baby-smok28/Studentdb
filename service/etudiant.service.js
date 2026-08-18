const repo = require('../repository/etudiant.repository');
const { validerEtudiant, validerEmail } = require('./validation.service');
const { statistiques } = require('./stats.service');

async function creerEtudiant(data) {
    const erreur = validerEtudiant(data);
    if (erreur) throw { status: 400, message: erreur };
    if (!validerEmail(data.email)) throw { status: 400, message: 'Email invalide' };
    return await repo.create(data);
}

async function listerEtudiants() {
    return await repo.findAll();
}

async function obtenirEtudiant(id) {
    return await repo.findById(id);
}

async function modifierEtudiant(id, data) {
    if (data.email && !validerEmail(data.email)) {
        throw { status: 400, message: 'Email invalide' };
    }
    return await repo.update(id, data);
}

async function supprimerEtudiant(id) {
    return await repo.remove(id);
}

async function obtenirStatistiques() {
    const etudiants = await repo.findAll();
    return statistiques(etudiants);
}

module.exports = {
    creerEtudiant,
    listerEtudiants,
    obtenirEtudiant,
    modifierEtudiant,
    supprimerEtudiant,
    obtenirStatistiques,
};
