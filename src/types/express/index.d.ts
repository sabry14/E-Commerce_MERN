import { IUser } from "../../models/userModel"; // adjust import path to your user type

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // or `any` if you don’t have a strong type yet
    }
  }
}
