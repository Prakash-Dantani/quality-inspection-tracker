import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Alert,
  CircularProgress,
  TableContainer,
} from "@mui/material";
import { Box } from "@mui/system";

import useInspection from "../hooks/useInspection";

function InspectionTable() {
  const { inspections, loading, error } = useInspection();
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">Failed to load Inspection table.</Alert>;
  }
  return (
    // <Paper sx={{ mt: 4 }}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Date</strong>
            </TableCell>
            <TableCell>
              <strong>Machine ID</strong>
            </TableCell>
            <TableCell>
              <strong>Defect Type</strong>
            </TableCell>
            <TableCell>
              <strong>Severity</strong>
            </TableCell>
            <TableCell>
              <strong>Status</strong>
            </TableCell>
            <TableCell>
              <strong>Remarks</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Action</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {inspections.map((inspection) => (
            <TableRow key={inspection.id}>
              <TableCell>{inspection.inspection_date}</TableCell>

              <TableCell>{inspection.machine_id}</TableCell>

              <TableCell>{inspection.defect_type}</TableCell>

              <TableCell>{inspection.severity}</TableCell>

              <TableCell>{inspection.status}</TableCell>

              <TableCell>{inspection.remarks}</TableCell>

              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* </Paper> */}
    </TableContainer>
  );
}

export default InspectionTable;
