export const validerEtudiant = (data: { nom?: string; email?: string }) => {
    if (!data.nom || data.nom.trim() === '') return 'Le nom est requis';
    if (!data.email) return "L'email est requis";
    return null;
};

export const validerEmail = (email: string) => {
    if (!email.includes('@')) return false;
    const [local, domaine] = email.split('@');
    return local.length > 0 && domaine.includes('.');
};
