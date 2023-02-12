import { Request, Response, Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
const router = Router();

/**
 * http://localhost:3002/auth/register [post]
 */
router.post("/register",registerCtrl );
router.post("/login",loginCtrl );


export { router };
