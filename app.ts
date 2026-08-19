import 'dotenv/config';
import express from 'express';
import sequelize from './config/Database.js';
import etudiantRoutes from './routes/EtudiantRoutes.js';
import authRoutes from './routes/AuthRoutes.js';
import errorHandler from './middlewares/ErrorMiddleware.js';

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
