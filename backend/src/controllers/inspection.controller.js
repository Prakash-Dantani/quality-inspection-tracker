const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");
const { createInspectionService } = require("../services/inspection.service")

const createInspection = asyncHandler(async (req, res, next) => {

    const inspection = await createInspectionService(req.body);
    res.status(201).json(new ApiResponse({
        success: true,
        message: "Inspection created successfully",
        data: inspection
    })
    );

})

module.exports = {
    createInspection,
};