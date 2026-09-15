const { z } = require("zod");

const createInspectionSchema = z.object({
    inspection_date: z.string().min(1, "Inspection date is required"),

    machine_id: z.string()
        .trim()
        .min(1, "Machine ID is required"),

    defect_type: z.enum([
        "Weave Defect",
        "Shade Variation",
        "Hole/Tear",
        "Count Deviation",
        "Other"
    ]),

    severity: z.enum([
        "Critical",
        "Major",
        "Minor"
    ]),

    remarks: z.string().optional()
});

module.exports = {
    createInspectionSchema
};