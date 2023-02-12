import { Router } from 'express';
import { getItems } from '../controllers/order';
import { checkJwt } from '../middleware/session';
/**
 * esta ruta solo puede acceder las personas que tienen session activa
 * que tengan un jwt valida

*/
const router=Router()
router.get('/',checkJwt,getItems)
export{router}