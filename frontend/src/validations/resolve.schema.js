const resolveSchema = z.object({
    resolution_note: z
        .string()
        .trim()
        .min(5, "Resolution remarks are required minimum 5 character")
        .max(500),
});