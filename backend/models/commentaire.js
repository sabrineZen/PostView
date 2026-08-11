import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Commentaire = sequelize.define("Commentaire", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  contenu: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  scoreIA: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  estToxique: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  utilisateurId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Utilisateurs",
      key: "id",
    },
    onDelete: "CASCADE",
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Posts",
      key: "id",
    },
    onDelete: "CASCADE",
  },
});

export default Commentaire;



