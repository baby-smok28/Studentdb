require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const etudiantRoutes = require('./routes/etudiant.routes');
const authRoutes = require('./routes/auth.routes');
const errorHandler = require('./middlewares/error.middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', authRoutes);
app.use('/', etudiantRoutes);
app.use(errorHandler);

sequelize.authenticate()
    .then(() => {
        console.log('Connexion BDD réussie');
        return sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log('Serveur démarré sur http://localhost:' + PORT);
        });
    })
    .catch((err) => {
        console.error('Erreur BDD:', err);
    });
