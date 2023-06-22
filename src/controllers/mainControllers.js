const mainControllers = {

    inicio:(req,res)=>{
        res.send("Servidor funcionando")
    },

    parametro:(req,res)=>{
        res.json( {id_ : req.params.id } )
    },

    comentarios:(req,res)=>{
        res.send(`Seccion de comentarios`)
    },

    comentariosId:(req,res)=>{
        const id = req.params.id
        res.send(`Estas ubicado en la pagina del comentario  ${id}`)
    },

    calificacion: (req ,res )=>{
        const id = req.params.id ;
        res.send(`La calificacion del producto ${id} es positiva`)
    },

    practica: (req,res)=>{
        let idProductos = req.params.idProductos
        let idComentarios = req.params.idComentarios 

        if( idComentarios == "undefined"){
            res.send(`Estas mirando el listado de los comentarios del producto ${idProductos}`)
        }
        else{
            res.send(`Estas parado en el producto ${idProductos} y solicitaste el comentario numero ${idComentarios}`)
        }
    }

        

  }


export default mainControllers;