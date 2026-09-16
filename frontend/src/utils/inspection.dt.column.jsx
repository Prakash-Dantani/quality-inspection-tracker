import { Button, Chip } from "@mui/material";
import dayjs from "dayjs";

export const inpectionDTColumns = [
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

    renderCell: (params) => (
      <Button
        variant="contained"
        size="small"
        disabled={params.row.status === "Resolved"}
        onClick={() => handleResolve(params.row)}
      >
        Resolve
      </Button>
    ),
  },
];
