import { Request, Response, Router } from "express";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).json();
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

export default router;