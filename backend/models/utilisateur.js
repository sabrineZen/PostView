import { DataTypes} from 'sequelize';
import sequelize from '../config/database.js';
const Utilisateur=sequelize.define('Utilisateur',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom:{
        type: DataTypes.STRING,
        allowNull:false
    },
    prenom:{
        type: DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        unique:true,
        allowNull:false


    },
    motDePasse:{
        type: DataTypes.STRING,
        allowNull:false
    },
    photoProfil:{
        type: DataTypes.STRING
    },
    bio:{
        type: DataTypes.TEXT
    },
  
})
export default Utilisateur;