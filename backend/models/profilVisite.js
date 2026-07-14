import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const profilVisite=sequelize.define('profilVisite',{

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    visiteurId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    profilVisiteId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
},

)
export default profilVisite;