"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sessionController_1 = require("../controller/sessionController");
const router = (0, express_1.Router)();
router.route("/create-school-session").post(sessionController_1.createSchoolSession);
router
    .route("/create-new-school-session/:schoolID")
    .post(sessionController_1.createNewSchoolSession);
router.route("/view-school-session/:schoolID").get(sessionController_1.viewSchoolSession);
router.route("/update-students").patch(sessionController_1.studentsPerSession);
router.route("/edit-school-term").patch(sessionController_1.termPerSession);
exports.default = router;
