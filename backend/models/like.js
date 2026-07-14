import {DataTypes}from 'sequelize';
import sequelize from '../config/database.js';

const Like=sequelize.define('Like',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    utilisateurId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    postId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

})
export default Like;