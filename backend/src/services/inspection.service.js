const ApiError = require("../utils/ApiError");
const { createInspectionRepository, findAllRepository, resolveInspectionRepository, findByIdRepository, dashboardRepository } = require("../repositories/inspection.repository");

const createInspectionService = async (inspectionData) => {
    return await createInspectionRepository(inspectionData)
}

const getAllInspectionsService = async (filters) => {
    return await findAllRepository(filters);
};

const resolveInspectionsService = async (requestObject) => {
    const { id, resolution_note } = requestObject;
    console.log(id, resolution_note);
    const inspection = await findByIdRepository(id);

    if (!inspection) {
        throw new ApiError(404, "Inspection not found");
    }

    if (inspection.status === "Resolved") {
        throw new ApiError(409, "Inspection is already resolved");
    }

    return await resolveInspectionRepository(requestObject);
};

const dashboardService = async () => {
    return await dashboardRepository();

}

module.exports = {
    createInspectionService, getAllInspectionsService, resolveInspectionsService, dashboardService
};