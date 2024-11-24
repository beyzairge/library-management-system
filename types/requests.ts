import { Request } from "express"; 

// Custom request type for creating a user.
export interface CreateUserRequest extends Request {
  body: {
    name: string; 
  };
}

// Custom request type for fetching a user by ID.
export interface GetUserByIdRequest extends Request {
  params: {
    id: string; 
  };
}
