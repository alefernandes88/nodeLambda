import { Router } from "express";
import company from "./company.route";
import person from "./person.route";

const router = Router();

router.use('/consumer/company', company);
router.use('/consumer/person', person);

export default router;