import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { TextField, MenuItem, Stack } from "@mui/material";
import { inspectionSchema } from "../validations/inspection.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { createInspection } from "../api/inspection.api";
import toast from "react-hot-toast";
import { DEFECT_TYPES, SEVERITIES } from "../utils/inspection.constants";

function AddInspectionDialog({ open, handleClose, onSuccess }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(inspectionSchema),
    defaultValues: {
      inspection_date: "",
      machine_id: "",
      defect_type: "",
      severity: "",
      remarks: "",
    },
  });
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      const inspection = await createInspection(data);
      console.log(inspection);
      toast.success("Inspection created successfully");

      onSuccess();
      reset();
      handleClose();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Add Inspection
        <Button onClick={handleClose} className="pull-right btn" title="Close">
          X
        </Button>
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Inspection Date"
              type="date"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              {...register("inspection_date")}
              fullWidth
              focused
              error={!!errors.inspection_date}
              helperText={errors.inspection_date?.message}
            />

            <TextField
              label="Machine ID"
              fullWidth
              {...register("machine_id")}
              error={!!errors.machine_id}
              helperText={errors.machine_id?.message}
            />

            <TextField
              select
              label="Defect Type"
              defaultValue=""
              fullWidth
              {...register("defect_type")}
              error={!!errors.defect_type}
              helperText={errors.defect_type?.message}
            >
              {DEFECT_TYPES.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              label="Severity"
              defaultValue=""
              fullWidth
              {...register("severity")}
              error={!!errors.severity}
              helperText={errors.severity?.message}
            >
              {SEVERITIES.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Remarks"
              multiline
              rows={3}
              {...register("remarks")}
              fullWidth
              error={!!errors.remarks}
              helperText={errors.remarks?.message}
            />

            <Button type="submit" variant="contained" disabled={submitting}>
              {submitting ? "Saving..." : "Save"}
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddInspectionDialog;
