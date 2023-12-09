
const { request, response } = require('express');
const Proyecto = require('../models/proyecto');
const Cliente = require('../models/cliente')
const TipoProyecto = require('../models/tipoProyecto')
/**
 * crear
 */
const createProyecto = async (req = request, res = response) => {
    try{
         const { cliente, tipoProyecto, ...resto } = req.body;
         console.log(req.body)
         const tipoProyectoBD = await TipoProyecto.findOne({
            _id: tipoProyecto._id
        });
        if(!tipoProyectoBD){
            return res.status(400).json({
                msj: 'No existe tipo Proyecto'
            })
        }
        const clienteBD = await Cliente.findOne({
            _id: cliente._id
        });
        if(!clienteBD){
            return res.status(400).json({
                msj: 'No existe cliente'
            })
        }
        // TODO: VALIDAR los demas modelos
         const proyecto = new Proyecto(req.body);
         await proyecto.save();
         return res.status(201).json(proyecto);
     }catch(e){
         return res.status(500).json({
             msj: e
         });
     }
 }
 
/**
 * Consultar todos
 */
const getProyectos = async (req, res = response) => {
    try{
        const proyectosBD = await Proyecto.find()
        .populate({
            path: 'cliente'
        })
        .populate({
            path: 'tipoProyecto'
        })
        // TODO: Colocar resto de populate
        return res.json(proyectosBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}

/**
 * Consultar por ID
 */
 const getProyectoByID = async (req = request, res = response) => {
   /* try{
        const { id } = req.params;
        const query = { _id: id};
        const inventarioBD = await Inventario.findOne(query).populate({
            path: 'usuario',
            match: { estado: true }
        });
        // TODO: personalizar error de no encontrado
        res.json(inventarioBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }*/
}

// actualizar por ID
const updateInventario = async (req = request, res = response) => {
   /* try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
    
        const inventarioBD = await Inventario.findOne({ _id: id});
       // TODO: VALIDAR QUE EXISTEN Y ESTAN ACTIVOS: ESTADO, USUARIO, MARCA, ...
       if(!inventarioBD){
        return res.status(400).json({
            msj: 'No existe este inventario'
        });
       } 
        const inventario = await Inventario.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(inventario);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }*/
}


module.exports = { 
    createProyecto,
    getProyectos
}