import { Router } from "express";
import { Book } from "../models/Book";

const router = Router();

// Route to list all books
router.get("/", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// Route to add a new book
router.post("/", async (req, res) => {
  const { name } = req.body;
  const book = await Book.create({ name });
  res.status(201).json(book);  // Respond with the newly created book and a 201 status code.
});

export default router; 
