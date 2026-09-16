import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { TextField, MenuItem, Stack } from "@mui/material";

function AddInspectionDialog({ open, handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
        <Button
          onClick={handleClose}
          className="pull-right btn-circle"
          title="Close"
        >
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
            />

            <TextField
              label="Machine ID"
              fullWidth
              {...register("machine_id")}
            />

            <TextField
              label="Defect Type"
              fullWidth
              {...register("defect_type")}
            />

            <TextField
              select
              label="Severity"
              defaultValue=""
              fullWidth
              {...register("severity")}
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
