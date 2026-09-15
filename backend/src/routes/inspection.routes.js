const { createInspectionSchema, resolveInspectionSchema } = require("../../validations/inspection.schema");
const { createInspection, getAllInspections, resolveInspection } = require("../controllers/inspection.controller");


const express = require('express');
const validate = require("../middleware/validate.middleware");

const inspectionRouter = express.Router();

inspectionRouter.post('/', validate(createInspectionSchema), createInspection);
inspectionRouter.get("/", getAllInspections);
inspectionRouter.patch("/:id/resolve", validate(resolveInspectionSchema), resolveInspection);

module.exports = inspectionRouter;