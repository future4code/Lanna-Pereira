import app from "./data/app"
import { TourRouter } from "./controller/TourRouter"


app.use('/tour/', TourRouter)