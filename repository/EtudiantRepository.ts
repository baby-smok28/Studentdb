import Etudiant from '../models/EtudiantModel.js';
import { EtudiantAttributes } from '../models/EtudiantModel.js';

export const findAll = () => Etudiant.findAll();

export const findById = (id: number) => Etudiant.findByPk(id);

export const create = (data: Omit<EtudiantAttributes, 'id'>) => Etudiant.create(data);

export const update = async (id: number, data: Partial<Omit<EtudiantAttributes, 'id'>>) => {
    const etudiant = await Etudiant.findByPk(id);
    if (!etudiant) return null;
    await etudiant.update(data);
    return etudiant;
};

export const remove = async (id: number) => {
    const etudiant = await Etudiant.findByPk(id);
    if (!etudiant) return false;
    await etudiant.destroy();
    return true;
};
