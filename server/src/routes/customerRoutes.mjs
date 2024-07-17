import { Router } from "express";
import { prisma } from "../lib/prisma.mjs";

const router = Router();

// customer model
/**
 * @swagger
 * definitions:
 *      Customer:
 *          type: object
 *          required:
 *              - name
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The ID is auto generated
 *                  example: 1
 *              name:
 *                  type: string
 *                  description: Name of the customer
 *                  example: John
 *              createdAt:
 *                  type: date
 *                  description: The createdAt is auto generated based on current date
 *                  example: 2024-07-15T16:00:30.706Z
 */

/**
 * @swagger
 * /customer:
 *  get:
 *      tags: [Customers]
 *      summary: Fetches customers from a database
 *      responses:
 *          200:
 *              description: Returns a successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: "#/definitions/Customer"
 */
router.route("/").get(async (req, res) => {
  const data = await prisma.customer.findMany({});

  res.status(200).json({
    message: "You have successfully fetched customers data",
    status: "success",
    statusCode: 200,
    data,
  });
});

export default router;
