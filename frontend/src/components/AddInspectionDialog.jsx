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

function AddInspectionDialog({ open, handleClose }) {
  const {
    register,
    handleSubmit,
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
  const onSubmit = (data) => {
    console.log(data);
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
              label="Defect Type"
              fullWidth
              {...register("defect_type")}
              error={!!errors.defect_type}
              helperText={errors.defect_type?.message}
            />

            <TextField
              select
              label="Severity"
              defaultValue=""
              fullWidth
              {...register("severity")}
              error={!!errors.severity}
              helperText={errors.severity?.message}
            >
              <MenuItem value="Critical">Critical</MenuItem>
              <MenuItem value="Major">Major</MenuItem>
              <MenuItem value="Minor">Minor</MenuItem>
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
            <Button type="submit" variant="contained">
              Save
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
