const { z } = require("zod");

const createInspectionSchema = z.object({
    inspection_date: z.string().date("A valid inspection date (YYYY-MM-DD) is required"),

    machine_id: z.string()
        .trim()
        .min(1, "Machine ID is required")
        .max(100),

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

const resolveInspectionSchema = z.object({
    resolution_note: z
        .string()
        .trim()
        .min(5, "Resolution note must be at least 5 characters.")
        .max(500, "Resolution note be greater than 500 characters.")
});

module.exports = {
    createInspectionSchema, resolveInspectionSchema
};