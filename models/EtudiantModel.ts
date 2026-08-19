import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/Database.js';

export interface EtudiantAttributes {
    id?: number;
    nom: string;
    email: string;
}

const Etudiant = sequelize.define<Model<EtudiantAttributes>>('Etudiant', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'etudiants',
    timestamps: true,
});

export default Etudiant;
