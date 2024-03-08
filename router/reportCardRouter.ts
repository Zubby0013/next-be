import { Router } from "express";
import { createStudentreportCard } from "../controller/reportCard";

const router: Router = Router();

router
    .route("/create-report-card/:schoolID/:staffID/:studentID")
    .post(createStudentreportCard);

export default router