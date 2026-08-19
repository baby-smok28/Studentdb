import { Request, Response, NextFunction } from 'express';
import * as service from '../service/EtudiantService.js';

const wrap = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
    (req: Request, res: Response, next: NextFunction) => fn(req, res, next).catch(next);

export const getAll = wrap(async (req, res) => {
    res.json(await service.listerEtudiants());
});

export const getOne = wrap(async (req, res) => {
    const etudiant = await service.obtenirEtudiant(Number(req.params.id));
    if (!etudiant) return res.status(404).json({ message: 'Non trouvé' });
    res.json(etudiant);
});

export const create = wrap(async (req, res) => {
    const nouveau = await service.creerEtudiant(req.body);
    res.status(201).json(nouveau);
});

export const update = wrap(async (req, res) => {
    const updated = await service.modifierEtudiant(Number(req.params.id), req.body);
    if (!updated) return res.status(404).json({ message: 'Non trouvé' });
    res.json(updated);
});

export const remove = wrap(async (req, res) => {
    const ok = await service.supprimerEtudiant(Number(req.params.id));
    if (!ok) return res.status(404).json({ message: 'Non trouvé' });
    res.status(204).send();
});

export const stats = wrap(async (req, res) => {
    res.json(await service.obtenirStatistiques());
});
