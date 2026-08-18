exports.validerEtudiant = (data) => {
    if (!data.nom || data.nom.trim() === '') return 'Le nom est requis';
    if (!data.email) return "L'email est requis";
    return null;
};
exports.validerEmail = (email) => {
    return email.includes('@') && email.includes('.');
};
