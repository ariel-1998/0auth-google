import { Router } from "express";
import { users } from "../DB/users";
import { protectRoute } from "../middleware/portectRoute";

export const protectedRoutes = Router();

protectedRoutes.use(protectRoute);

protectedRoutes.get("/users", (req, res) => {
  const allUsers = users.filter((user) => user.id === (req.user as any).id);
  res.json(allUsers);
});
