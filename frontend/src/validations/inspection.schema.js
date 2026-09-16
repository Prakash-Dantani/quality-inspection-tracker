import { z } from "zod";
import { SEVERITIES, DEFECT_TYPES } from "../utils/inspection.constants";

export const inspectionSchema = z.object({
    inspection_date: z.string().date().min(1, "Inspection date is required"),

    machine_id: z
        .string()
        .min(1, "Machine ID is required")
        .max(20, "Maximum 20 characters"),

    defect_type: z.enum(DEFECT_TYPES, {
        message: "Severity is required",
    }),

    severity: z.enum(SEVERITIES, {
        message: "Severity is required",
    }),

    remarks: z
        .string()
        .max(500),
});