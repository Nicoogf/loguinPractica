import express from "express" ;
import mainControllers from "../controllers/mainControllers.js";
const router = express.Router() ;


router.get( "/" , mainControllers.inicio ) ;
router.get

export default router ;