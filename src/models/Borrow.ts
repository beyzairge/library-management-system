import { DataTypes } from "sequelize";
import { sequelize } from "../database";
import { User } from "./User";
import { Book } from "./Book";

export const Borrow = sequelize.define("Borrow", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  borrowDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,  // By default, the current timestamp is used.
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: true,   // This field can be null if the book has not yet been returned.
  },
});

// Relationships
Borrow.belongsTo(User, { foreignKey: "userId" });  // Define a relationship where each borrow record belongs to a specific user.
Borrow.belongsTo(Book, { foreignKey: "bookId" });  // Define a relationship where each borrow record belongs to a specific book.

User.hasMany(Borrow, { foreignKey: "userId" });   // A user can have many borrow records (a user can borrow multiple books).
Book.hasMany(Borrow, { foreignKey: "bookId" });   // A book can have many borrow records (a book can be borrowed multiple times).
