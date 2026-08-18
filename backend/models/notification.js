import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Notification = sequelize.define("Notification", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "like",
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
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
  emetteurId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  lu: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default Notification;
