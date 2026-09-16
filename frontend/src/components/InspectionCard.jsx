import dayjs from "dayjs";

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button,
  Divider,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { GridExpandMoreIcon } from "@mui/x-data-grid";

function InspectionCard({ inspection, onResolve }) {
  const severityColor = {
    Critical: "error",
    Major: "warning",
    Minor: "info",
  };

  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 3,
      }}
      elevation={3}
    >
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          Inspection Date
        </Typography>

        <Typography variant="h6" gutterBottom>
          {dayjs(inspection.inspection_date).format("DD MMM YYYY")}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1}>
          <Typography>
            <strong>Machine :</strong> {inspection.machine_id}
          </Typography>

          <Typography>
            <strong>Defect :</strong> {inspection.defect_type}
          </Typography>

          <Typography>
            <strong>Remarks :</strong> {inspection.remarks}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} mt={2}>
          <Chip
            label={inspection.severity}
            color={severityColor[inspection.severity]}
          />

          <Chip
            label={inspection.status}
            color={inspection.status === "Resolved" ? "success" : "warning"}
          />
        </Stack>

        <Divider sx={{ my: 2 }} />

        {inspection.status === "Open" ? (
          <Button
            fullWidth
            variant="contained"
            onClick={() => onResolve(inspection.id)}
          >
            Resolve Inspection
          </Button>
        ) : (
          <Accordion>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
              <Typography>Resolution Note</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{inspection.resolution_note}</Typography>
            </AccordionDetails>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
}

export default InspectionCard;
