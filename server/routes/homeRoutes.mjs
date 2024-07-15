import { Router } from "express";
import { prisma } from "../lib/prisma.mjs";

const router = Router();

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
