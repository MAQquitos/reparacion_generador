import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import contactRoutes from './src/routes/contact.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(join(__dirname)));

// Routes
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => res.send('API funcionando 🚀'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
