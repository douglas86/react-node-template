import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "This is the home route", status: 200 });
});

export default router;
