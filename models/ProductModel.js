//importamos la coneccion con la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const ProductModel = db.define('products', {
    descrip:    { type: DataTypes.STRING },
    stock:      { type: DataTypes.INTEGER },
    avail:      { type: DataTypes.BOOLEAN },
    price:      { type: DataTypes.DOUBLE },   
}, {
    timestamps: false
})

export default ProductModel