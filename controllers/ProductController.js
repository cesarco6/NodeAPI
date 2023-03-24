//Importamos el modelo correspondiente ProductModel
import ProductModel from "../models/ProductModel.js";

//** Métodos para el CRUD  **//

//Mostrar todos los registros
export const getaProds = async (req, res) => {
    try {
        const products = await ProductModel.findAll()
        res.json(products)
    } catch (error) {
        console.log(error.message)
        //res.json( {message: error.message} )
    }
}

//Mostrar 1 registro
export const geteProd = async (req, res) => {
    try {
        const product = await ProductModel.findAll({
            where: { id: req.params.id }
        })
        res.json(product)
    } catch (error) {
        console.log(error.message)
        //res.json( {message: error.message} )
    }
}

//Crear 1 registro
export const creaProd = async (req, res) => {
    try {
       await ProductModel.create(req.body)
       res.json({ "message": "Registro creado correctamente" })
    } catch (error) {
        console.log(error.message)
        //res.json( {message: error.message} )
    }
}

//Actualizar 1 registro
export const updaProd = async (req, res) => {
    try {
        await ProductModel.update(req.body, {
            where: { id:req.params.id }
        })
        res.json({ "message": "Registro creado correctamente" })
    } catch (error) {
        console.log(error.message)
        //res.json( {message: error.message} )
    }
}

//Eliminar 1 registro
export const deleProd = async (req, res) => {
    try {
       await ProductModel.destroy({
            where: { id:req.params.id } 
        })
        res.json({ "message": "Registro borrado correctamente" })
    } catch (error) {
        console.log(error.message)
        //res.json( {message: error.message} )
    }
}