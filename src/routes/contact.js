import express from 'express';
import { saveContact } from '../utils/storage.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { nombre, email, telefono, tipo_generador, mensaje } = req.body;
  
  try {
    const result = await saveContact({
      nombre,
      email,
      telefono,
      tipo_generador,
      mensaje
    });
    
    res.json({ 
      success: true, 
      message: 'Datos guardados correctamente',
      id: result.id 
    });
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al guardar los datos' 
    });
  }
});

export default router;