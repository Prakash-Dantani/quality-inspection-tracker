const { createInspectionRepository } = require("../repositories/inspection.repository");

const createInspectionService = async (inspectionData) => {
    return await createInspectionRepository(inspectionData)
}

module.exports = {
    createInspectionService,
};