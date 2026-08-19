import * as repo from '../repository/EtudiantRepository.js';
import { validerEtudiant, validerEmail } from './ValidationService.js';

export const creerEtudiant = async (data: { nom: string; email: string }) => {
    const erreur = validerEtudiant(data);
    if (erreur) throw { status: 400, message: erreur };
    if (!validerEmail(data.email)) throw { status: 400, message: 'Email invalide' };
    return repo.create(data);
};

export const listerEtudiants = () => repo.findAll();

export const obtenirEtudiant = (id: number) => repo.findById(id);

export const modifierEtudiant = async (id: number, data: { nom?: string; email?: string }) => {
    if (data.email && !validerEmail(data.email)) {
        throw { status: 400, message: 'Email invalide' };
    }
    return repo.update(id, data);
};

export const supprimerEtudiant = (id: number) => repo.remove(id);

export const obtenirStatistiques = async () => {
    const etudiants = await repo.findAll();
    return { total: etudiants.length };
};
