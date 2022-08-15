import express from "express";

import { TourController } from "./tourController";

export const TourRouter = express.Router()

const tourController = new TourController()

TourRouter.post('/agendamento', tourController.criarPasseio)
TourRouter.put('/editarPet/:id', tourController.editarPasseio)
TourRouter.get('/localizarPet/:status', tourController.localizarPasseio)