import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.status(200).json({
    message: "Welcome to the home page",
    status: "success",
    statusCode: 200,
    data: "This is the home page no data to be fetched",
  });
});

export default router;
