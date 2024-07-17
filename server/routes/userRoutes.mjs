import { Router } from "express";
import { prisma } from "../lib/prisma.mjs";

const router = Router();

// user model
/**
 * @swagger
 * definitions:
 *    User:
 *      type: object
 *      required:
 *        - title
 *      properties:
 *        id:
 *           type: integer
 *           description: The ID is auto generated
 *           example: 1
 *        title:
 *           type: string
 *           description: Title of the user
 *           example: John
 *        createdAt:
 *           type: date
 *           description: The createdAt is auto generated based on current date
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
router.route("/").get(async (req, res) => {
  const data = await prisma.user.findMany({});

  res.status(200).json({
    message: "You have successfully fetched users data",
    status: "success",
    statusCode: 200,
    data,
  });
});

export default router;
