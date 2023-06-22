import express from "express" ;
import mainControllers from "../controllers/mainControllers.js";
const router = express.Router() ;



 /*Ruta Parametrizada  3*/
router.get("/productos/:idProductos/comentarios/:idComentarios?" , mainControllers.practica)

/*Ruta parametrizada 2 */
router.get( "/comentarios/:id/calificacion" ,  mainControllers.calificacion  );

/*Ruta parametrizada */
router.get( "/comentarios/:id" ,  mainControllers.comentariosId  );

/*Ruta para los comentarios */
router.get( "/comentarios" ,  mainControllers.comentarios  );

/*Ruta parametrizada*/ 
router.get("/:id" , mainControllers.parametro ) ;

router.get( "/" , mainControllers.inicio ) ;




export default router ;