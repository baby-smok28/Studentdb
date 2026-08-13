const repo = require('../repositories/etudiant.repository');
const { validerEtudiant, validerEmail } = require('./validation.service');
const { statistiques } = require('./stats.service');
exports.creerEtudiant = async (data) => {
    const erreur = validerEtudiant(data);
    if (erreur) throw { status: 400, message: erreur };
    if (!validerEmail(data.email)) throw { status: 400, message: 'Email invalide' };
    return repo.create(data);
};
exports.listerEtudiants = () => repo.findAll();
exports.obtenirEtudiant = (id) => repo.findById(id);
exports.modifierEtudiant = async (id, data) => {
    if (data.email && !validerEmail(data.email)) {
    throw { status: 400, message: 'Email invalide' };
}
};
return repo.update(id, data);
exports.supprimerEtudiant = (id) => repo.remove(id);
exports.obtenirStatistiques = async () => {
    const etudiants = await repo.findAll();
    return statistiques(etudiants);
};