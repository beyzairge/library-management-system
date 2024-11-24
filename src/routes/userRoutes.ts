import { Router, Request, Response, NextFunction } from "express"; 
import { User } from "../models/User"; 

const router = Router(); 

// List all users
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.findAll(); // Fetch all users from the database.
    res.json(users); // Send the list of users as a JSON response.
  } catch (error) {
    console.error("Error while listing users:", error); 
    next(error); 
  }
});

/*
  I commented out the "Add a new user" endpoint due to issues with TypeScript type declarations. Specifically, when custom request types (e.g. CreateUserRequest) were used as the type for the `req` parameter in this route, it caused compilation errors.

**Error Details:**
- TypeScript throws an error: "There is no overload matching this call."
- The issue is caused by a type mismatch between Express's `Request` type and our custom extended type.

**Solution Plan:**
- To resolve the issue, we need to make sure that the custom request types (e.g. `CreateUserRequest`) are properly extended from Express's `Request` type and properly cast to this file, but even though I did, the error persisted. I couldn't proceed with this solution due to time constraints.
- Alternatively, replace the custom type with the default `Request` type and I can do the validation manually.

For now, the endpoint returns a `501 Not Implemented` status with an explanation message.
*/

/* EXAMPLE CODE:
async (req: CreateUserRequest, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body; // Extract the "name" field from the request body.

      if (!name) {
        return res.status(400).json({ error: "Name is required" }); // Return 400 if the name is not provided.
      }

      const user = await User.create({ name }); // Create a new user in the database.
      res.status(201).json(user); // Return the created user with a 201 status code.
    } catch (error) {
      console.error("Error while adding a user:", error); // Log the error for debugging purposes.
      next(error); // Pass the error to the next middleware.
    }
  } */


    // Add a new user (Disabled due to type errors)
router.post(
  "/",
  (req, res) => {
    res
      .status(501)
      .send("Adding a new user is temporarily disabled due to unresolved type issues.");
  }
);


/*
  I commented out the "Get a specific user by ID" endpoint for the same reason as the "Add a new user" endpoint. Specifically, the use of a custom request type (e.g. GetUserByIdRequest) was causing TypeScript compilation errors.

**Error Details:**
- The type of the `req` parameter caused a type mismatch, resulting in the error "No overloads match this call."

**Solution Plan:**
- I can follow the solution plan described for the "Add a new user" endpoint.

For now, the endpoint returns a `501 Not Implemented` status with an explanation message.
*/

/* EXAMPLE CODE:
   async (req: GetUserByIdRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params; // Extract the "id" parameter from the URL.
      const user = await User.findByPk(id); // Find the user by primary key (ID).

      if (!user) {
        return res.status(404).json({ error: "User not found" }); // Return 404 if the user does not exist.
      }

      res.json(user); // Send the user details as a JSON response.
    } catch (error) {
      console.error("Error while retrieving a specific user:", error); // Log the error for debugging purposes.
      next(error); // Pass the error to the next middleware.
    }
  }  */

    
// Get a specific user by ID (Disabled due to type errors)
router.get(
  "/:id",
  (req, res) => {
    res
      .status(501)
      .send("Fetching a specific user is temporarily disabled due to unresolved type issues.");
  }
);

export default router; 
