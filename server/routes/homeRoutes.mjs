import { Router } from "express";
import { prisma } from "../lib/prisma.mjs";

const router = Router();

/**
 * @swagger
 * definitions:
 *    User:
 *      type: object
 *      required:
 *        - id
 *        - title
 *        - createdAt
 *      properties:
 *        id:
 *           type: integer
 *           description: The ID of the user
 *           example: 1
 *        title:
 *           type: string
 *           description: Title of the user
 *           example: John
 *        createdAt:
 *           type: date
 *           description: Uses the date of when entry was created
 *           example: 2024-07-15T16:00:30.706Z
 */

/**
 * @swagger
 * /user:
 *  get:
 *      tags: [Users]
 *      summary: Fetches users form database
 *      description: Fetches all users from a database
 *      responses:
 *        200:
 *          description: Returns a successful response
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                items:
 *                  $ref: "#/definitions/User"
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
