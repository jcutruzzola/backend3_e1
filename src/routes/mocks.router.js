import { Router } from "express";
const router = Router();

import mocksController from "../controllers/mocks.controller.js";

//Endpoint para obtener mascotas simuladas
router.get("/mockingpets", mocksController.getMockingPets);
router.get("/mockingusers", mocksController.getMockingUsers);

export default router;