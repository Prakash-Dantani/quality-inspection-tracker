import { z } from "zod";

export const inspectionSchema = z.object({
    inspection_date: z.string().date().min(1, "Inspection date is required"),

    machine_id: z
        .string()
        .min(1, "Machine ID is required")
        .max(20, "Maximum 20 characters"),

    defect_type: z
        .string()
        .min(1, "Defect Type is required")
        .max(100),

    severity: z.enum(["Critical", "Major", "Minor"], {
        message: "Severity is required",
    }),

    remarks: z
        .string()
        .max(500),
});