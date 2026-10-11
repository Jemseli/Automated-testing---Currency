import { Router } from "express";
import { convertAmount } from "../controllers/currencyController";

const router = Router();

router.post('/amount', convertAmount);

export default router;