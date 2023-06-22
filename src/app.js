//--- Requires ---//
import express from "express" ;
import mainRoutes from "./routes/mainRoutes.js" ;




//--- Variables Internas ---//

const app = express() ;
const PORT = process.env.PORT || 3000 ;
const iniciarServidor = () =>{
    try {
        console.log(`Servidor iniciado correctamente en el servidor ${PORT}`)
    } catch (err) {
        console.error(`No se pudo iniciar el servidor por el siguiente motivo : ${res.json.err}`)
    }
}





app.use( mainRoutes )



app.listen( PORT , iniciarServidor ) ; 