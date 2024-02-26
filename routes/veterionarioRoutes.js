import express from 'express';
import { perfil, registrar, confirmar, autenticar, olvidePassword ,comprobrarToken,nuevoPassword,actualizarPerfil, actualizarPassword} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';
const router = express.Router();

// área publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobrarToken).post(nuevoPassword);

// Area privada
router.get('/perfil', checkAuth,perfil);
router.put('/perfil/:id', checkAuth,actualizarPerfil);
router.put('/actualizar-password',checkAuth,actualizarPassword);

export default router;