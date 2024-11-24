import { DataTypes } from "sequelize";
import { sequelize } from "../database";

export const Book = sequelize.define("Book", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,  // This column automatically increments its value for each new record.
    primaryKey: true,  // This column is set as the primary key for the table.
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,  // This column cannot be null, meaning a name must be provided for each book record.
  },
  score: {
    type: DataTypes.FLOAT,
    defaultValue: -1,  // By default, the score is set to -1, representing an unrated book.
  },
});
