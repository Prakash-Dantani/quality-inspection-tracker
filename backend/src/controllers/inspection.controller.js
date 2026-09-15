const ApiResponse = require("../../utils/ApiResponse");
const asyncHandler = require("../../utils/asyncHandler");
const { createInspectionService, getAllInspectionsService, resolveInspectionsService } = require("../services/inspection.service")

const createInspection = asyncHandler(async (req, res, next) => {

    const inspection = await createInspectionService(req.body);
    res.status(201).json(new ApiResponse({
        success: true,
        message: "Inspection created successfully",
        data: inspection
    })
    );

});

const getAllInspections = asyncHandler(async (req, res) => {

    const inspections = await getAllInspectionsService(req.query);

    return res.status(200).json(
        new ApiResponse(
            200,
            "Inspections fetched successfully",
            inspections
        )
    );

});

const resolveInspection = asyncHandler(async (req, res) => {
    const inspection = await resolveInspectionsService({
        id: req.params.id,
        resolution_note: req.body.resolution_note
    }
    );

    return res.status(200).json(
        new ApiResponse(
            200,
            "Inspection resolved successfully",
            inspection
        )
    );
}
)



module.exports = {
    createInspection, getAllInspections, resolveInspection
};