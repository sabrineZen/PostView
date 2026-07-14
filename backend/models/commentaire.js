import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
const Commentaire=sequelize.define('Commenetaire',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    contenu:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    scoreIA:{
        type:DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0,


    },
    estToxique:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    },
      utilisateurId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});
export default Commentaire;




