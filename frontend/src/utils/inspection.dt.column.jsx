import {
  Box,
  Button,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

import dayjs from "dayjs";

export const getInspectionDTColumns = (onResolve) => [
  {
    field: "inspection_date",
    headerName: "Date",
    flex: 1,
    headerName: "Inspection Date",
    flex: 1,
    valueFormatter: (value) => dayjs(value).format("DD MMM YYYY"),
  },
  {
    field: "machine_id",
    headerName: "Machine",
    flex: 1,
  },
  {
    field: "defect_type",
    headerName: "Defect",
    flex: 1,
  },
  {
    field: "severity",
    headerName: "Severity",
    flex: 1,
    renderCell: (params) => {
      const colorMap = {
        Critical: "error",
        Major: "warning",
        Minor: "info",
      };

      return (
        <Chip
          label={params.value}
          color={colorMap[params.value]}
          size="small"
        />
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <Chip
        label={params.value}
        color={params.value === "Resolved" ? "success" : "warning"}
        size="small"
      />
    ),
  },
  {
    field: "remarks",
    headerName: "Remarks",
    flex: 2,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    filterable: false,
    flex: 1,

    renderCell: (params) => {
      if (params.row.status === "Resolved") {
        return (
          <Tooltip
            arrow
            placement="left"
            enterDelay={300}
            title={
              <Box sx={{ maxWidth: 280, p: 0.5 }}>
                <Typography
                  variant="body2"
                  sx={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {params.row.resolution_note || "No remarks available"}
                </Typography>
              </Box>
            }
          >
            <IconButton color="success" size="small">
              <VisibilityIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        );
      }

      return (
        <Button
          variant="contained"
          size="small"
          onClick={() => onResolve(params.row.id)}
        >
          Resolve
        </Button>
      );
    },
  },
];
