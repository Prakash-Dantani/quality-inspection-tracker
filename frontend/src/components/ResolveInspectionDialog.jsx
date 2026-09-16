import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { resolveInspection } from "../api/inspection.api";

const resolveSchema = z.object({
  resolution_note: z.string().trim().min(5, "Resolution remarks are required"),
});

function ResolveInspectionDialog({
  open,
  handleClose,
  inspectionId,
  onSuccess,
}) {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resolveSchema),
    defaultValues: {
      resolution_note: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);

      await resolveInspection(inspectionId, data);

      toast.success("Inspection resolved successfully");

      onSuccess();

      reset();

      handleClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to resolve inspection",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Resolve Inspection</DialogTitle>

        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Resolution Remarks"
              multiline
              rows={4}
              fullWidth
              {...register("resolution_note")}
              error={!!errors.resolution_note}
              helperText={errors.resolution_note?.message}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          <Button type="submit" variant="contained" disabled={submitting}>
            {submitting ? "Resolving..." : "Resolve"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default ResolveInspectionDialog;
