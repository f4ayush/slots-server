import express from "express";
const router = express.Router();

import { getSlots, setSlot } from "../controller/slots.controller.js";

router.get("/getSlots", getSlots);
router.post("/setSlot", setSlot);
export default router;