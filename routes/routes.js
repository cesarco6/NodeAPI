import  express  from "express";
import { creaProd, deleProd, getaProds, geteProd, updaProd } from "../controllers/ProductController.js";

const router = express.Router()

router.get('/', getaProds)
router.get('/:id', geteProd)
router.post('/', creaProd)
router.put('/:id', updaProd)
router.delete('/:id', deleProd)

export default router
