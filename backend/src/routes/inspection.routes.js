const { createInspectionSchema } = require("../../validations/inspection.schema");
const { createInspection } = require("../controllers/inspection.controller");


const express = require('express');
const validate = require("../middleware/validate.middleware");

const inspectionRouter = express.Router();

inspectionRouter.post('/', validate(createInspectionSchema), createInspection);

module.exports = inspectionRouter;