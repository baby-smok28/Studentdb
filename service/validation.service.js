function validerEtudiant(data) {
    if (!data.nom || data.nom.trim() === '') return 'Le nom est requis';
    if (!data.email) return "L'email est requis";
    return null;
}

function validerEmail(email) {
    return email.includes('@') && email.includes('.');
}

module.exports = { validerEtudiant, validerEmail };
