import { Router } from "express";

const router = Router();

/**
 * @swagger
 * /:
 *  get:
 *    tags: [Home]
 *    summary: Home route to API
 *    description: Only shows was at home
 *    responses:
 *      200:
 *        description: Returns a successful response
 *        content:
 *          application/json
 */
router.route("/").get((req, res) => {
  res.status(200).json({ message: "This is the home route", status: 200 });
});

export default router;
