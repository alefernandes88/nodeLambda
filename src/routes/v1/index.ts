import { Router } from "express";
import consumer from "./consumer.route";

const router = Router();

router.use('/consumer', consumer);

export default router;