import { DataTypes } from "sequelize";
import { sequelize } from "../database";

export const User = sequelize.define("User", {  // Define the "User" model, which represents users in the database.
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
