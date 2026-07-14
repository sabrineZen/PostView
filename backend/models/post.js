import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
const Post=sequelize.define('Post',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    contenu:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    image:{
        type:DataTypes.STRING,

    },
    utilisateurId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },


})

export default Post;