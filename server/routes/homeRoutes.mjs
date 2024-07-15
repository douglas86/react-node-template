import { Router } from "express";
import { prisma } from "../lib/prisma.mjs";

const router = Router();

/**
 * @swagger
 * /user:
 *  get:
 *      tags: [Users]
 *      summary: Fetches users form database
 *      description: Fetches all users from database
 *      responses:
 *        200:
 *          description: Returns a mysteries string.
 */
router.get("/", async (req, res) => {
  const data = await prisma.user.findMany({});

  console.log("data", data);

  res.status(200).json({
    message: "Welcome to the home page",
    status: "success",
    statusCode: 200,
    data,
  });
});

export default router;
