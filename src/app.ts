import express from "express"; 
import { sequelize } from "./database"; 
import userRoutes from "./routes/userRoutes"; 
import bookRoutes from "./routes/bookRoutes"; 

const app = express(); 


app.use(express.json());

// Route to handle user-related requests.
app.use("/users", userRoutes); // Example: GET /users, POST /users

// Route to handle book-related requests.
app.use("/books", bookRoutes); // Example: GET /books, POST /books

// Synchronize the Sequelize models with the database.
// This ensures all defined models are correctly mapped to the database.
sequelize.sync().then(() => {
  console.log("Database synchronized successfully."); 
});

// Define the port number for the server to listen on.
const PORT = 3000; // You can change the port number as needed.

// Start the server and listen on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); // Log server URL for quick access.
});
