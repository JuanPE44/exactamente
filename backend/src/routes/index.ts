import { Router } from "express";

const router = Router();

router.get("/status", (req, res) => {
  res.json({ message: "ok" });
});

export default router;
